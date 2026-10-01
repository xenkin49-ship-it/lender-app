import json
import tempfile
import threading
import unittest
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen
from http.server import ThreadingHTTPServer

from server import LenderHandler, StateStore


class LocalBackendTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp_dir = tempfile.TemporaryDirectory()
        cls.server = ThreadingHTTPServer(("127.0.0.1", 0), LenderHandler)
        cls.server.state_store = StateStore(Path(cls.temp_dir.name) / "test.sqlite3")
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base_url = f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=2)
        cls.temp_dir.cleanup()

    def request(self, path, method="GET", body=None, host=None):
        headers = {}
        data = None
        if body is not None:
            headers["Content-Type"] = "application/json"
            data = json.dumps(body).encode("utf-8")
        if host is not None:
            headers["Host"] = host
        request = Request(f"{self.base_url}{path}", data=data, headers=headers, method=method)
        try:
            with urlopen(request, timeout=3) as response:
                return response.status, json.loads(response.read())
        except HTTPError as error:
            return error.code, json.loads(error.read())

    def test_health_and_empty_state(self):
        status, health = self.request("/api/health")
        self.assertEqual(status, 200)
        self.assertEqual(health["mode"], "local-demo")

        status, result = self.request("/api/state")
        self.assertEqual(status, 200)
        self.assertEqual(result["revision"], 0)
        self.assertEqual(result["state"]["requests"], [])

    def test_state_persists_and_rejects_stale_revision(self):
        state = {
            "requests": [{"id": "demo-request"}],
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
        status, result = self.request("/api/state", method="PUT", body={"revision": 0, "state": state})
        self.assertEqual(status, 200)
        self.assertEqual(result["revision"], 1)

        status, result = self.request("/api/state")
        self.assertEqual(status, 200)
        self.assertEqual(result["state"], state)

        status, conflict = self.request("/api/state", method="PUT", body={"revision": 0, "state": state})
        self.assertEqual(status, 409)
        self.assertEqual(conflict["revision"], 1)

    def test_invalid_state_and_untrusted_host_are_rejected(self):
        status, _ = self.request("/api/state", method="PUT", body={"revision": 0, "state": {"admin": True}})
        self.assertEqual(status, 400)

        status, _ = self.request("/api/state", host="attacker.example")
        self.assertEqual(status, 403)


if __name__ == "__main__":
    unittest.main()
