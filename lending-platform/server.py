#!/usr/bin/env python3
"""Loopback-only API and static server for the Lender demo prototype."""

from __future__ import annotations

import json
import os
import sqlite3
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("LENDER_DB_PATH", ROOT / ".local-data" / "lender.sqlite3"))
MAX_BODY_BYTES = 1_000_000
MAX_COLLECTION_ITEMS = 500
EMPTY_STATE = {
    "requests": [],
    "offers": [],
    "transactions": [],
    "contributions": [],
    "investments": [],
    "equityInvestments": [],
    "loanFunding": [],
    "equityFunding": [],
    "positions": [],
    "secondaryListings": [],
}


class StateStore:
    def __init__(self, path: Path = DB_PATH) -> None:
        self.path = path
        self.path.parent.mkdir(parents=True, exist_ok=True, mode=0o700)
        self.path.parent.chmod(0o700)
        self._connect().close()
        self.path.chmod(0o600)

    def _connect(self) -> sqlite3.Connection:
        connection = sqlite3.connect(self.path, timeout=10)
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS demo_state (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                revision INTEGER NOT NULL,
                payload TEXT NOT NULL
            )
            """
        )
        connection.execute(
            "INSERT OR IGNORE INTO demo_state (id, revision, payload) VALUES (1, 0, ?)",
            (json.dumps(EMPTY_STATE),),
        )
        connection.commit()
        return connection

    def read(self) -> tuple[int, dict]:
        connection = self._connect()
        try:
            revision, payload = connection.execute(
                "SELECT revision, payload FROM demo_state WHERE id = 1"
            ).fetchone()
        finally:
            connection.close()
        return revision, json.loads(payload)

    def write(self, expected_revision: int, state: dict) -> int | None:
        encoded = json.dumps(state, ensure_ascii=False, separators=(",", ":"))
        connection = self._connect()
        try:
            cursor = connection.execute(
                "UPDATE demo_state SET revision = revision + 1, payload = ? "
                "WHERE id = 1 AND revision = ?",
                (encoded, expected_revision),
            )
            if cursor.rowcount != 1:
                return None
            revision = connection.execute(
                "SELECT revision FROM demo_state WHERE id = 1"
            ).fetchone()[0]
            connection.commit()
        finally:
            connection.close()
        return revision


def validate_state(state: object) -> bool:
    if not isinstance(state, dict):
        return False
    allowed_keys = {
        "requests",
        "offers",
        "transactions",
        "contributions",
        "investments",
        "equityInvestments",
        "loanFunding",
        "equityFunding",
        "positions",
        "secondaryListings",
    }
    if state.keys() - allowed_keys:
        return False
    return all(
        isinstance(value, list) and len(value) <= MAX_COLLECTION_ITEMS
        for value in state.values()
    )


class LenderHandler(SimpleHTTPRequestHandler):
    server_version = "LenderLocal/1.0"

    def __init__(self, *args, **kwargs) -> None:
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(body)

    def _local_request_allowed(self) -> bool:
        host = self.headers.get("Host", "")
        hostname = urlsplit(f"//{host}").hostname
        if hostname not in {"127.0.0.1", "localhost", "::1"}:
            return False
        origin = self.headers.get("Origin")
        if origin:
            parsed_origin = urlsplit(origin)
            if parsed_origin.scheme != "http" or parsed_origin.netloc != host:
                return False
        return True

    def _guard_local_request(self) -> bool:
        if self.client_address[0] not in {"127.0.0.1", "::1"}:
            self._send_json(403, {"error": "Το API λειτουργεί μόνο τοπικά."})
            return False
        if not self._local_request_allowed():
            self._send_json(403, {"error": "Μη αποδεκτή προέλευση αιτήματος."})
            return False
        return True

    def do_GET(self) -> None:
        if self.path == "/api/health":
            if self._guard_local_request():
                self._send_json(200, {"status": "ok", "storage": "sqlite", "mode": "local-demo"})
            return
        if self.path == "/api/state":
            if not self._guard_local_request():
                return
            revision, state = self.server.state_store.read()
            self._send_json(200, {"revision": revision, "state": state})
            return
        if self.path.startswith("/api/"):
            self._send_json(404, {"error": "Το API endpoint δεν βρέθηκε."})
            return
        super().do_GET()

    def do_PUT(self) -> None:
        if self.path != "/api/state":
            self._send_json(404, {"error": "Το API endpoint δεν βρέθηκε."})
            return
        if not self._guard_local_request():
            return
        try:
            content_length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            self._send_json(400, {"error": "Μη έγκυρο μέγεθος αιτήματος."})
            return
        if content_length <= 0 or content_length > MAX_BODY_BYTES:
            self._send_json(413, {"error": "Το αίτημα είναι κενό ή υπερβαίνει το επιτρεπόμενο μέγεθος."})
            return
        try:
            body = self.rfile.read(content_length)
            document = json.loads(body)
        except (json.JSONDecodeError, UnicodeDecodeError):
            self._send_json(400, {"error": "Το σώμα του αιτήματος δεν είναι έγκυρο JSON."})
            return
        if not isinstance(document, dict):
            self._send_json(400, {"error": "Αναμενόταν αντικείμενο JSON."})
            return
        revision = document.get("revision")
        state = document.get("state")
        if type(revision) is not int or revision < 0 or not validate_state(state):
            self._send_json(400, {"error": "Η δομή της κατάστασης δεν είναι έγκυρη."})
            return
        next_revision = self.server.state_store.write(revision, state)
        if next_revision is None:
            current_revision, _ = self.server.state_store.read()
            self._send_json(409, {"error": "Η κατάσταση άλλαξε σε άλλη καρτέλα.", "revision": current_revision})
            return
        self._send_json(200, {"revision": next_revision})

    def log_message(self, format: str, *args) -> None:
        print(f"{self.address_string()} - {format % args}")


def main() -> None:
    host = os.environ.get("LENDER_HOST", "127.0.0.1")
    if host not in {"127.0.0.1", "::1", "localhost"}:
        raise SystemExit("Το demo backend δέχεται μόνο loopback host. Δεν είναι έτοιμο για δημόσια ανάπτυξη.")
    store = StateStore()
    server = ThreadingHTTPServer((host, int(os.environ.get("PORT", "8001"))), LenderHandler)
    server.state_store = store
    print(f"Lender demo: http://{host}:{server.server_port} (SQLite: {store.path})")
    print("Τοπικό πρωτότυπο μόνο — δεν εκθέτεις αυτόν τον server στο διαδίκτυο.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nΟ τοπικός server τερματίστηκε.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
