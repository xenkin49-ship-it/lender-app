const loans = [
  { id: "fournos-thessaloniki", category: "business", sector: "local", company: "Φούρνος Θεσσαλονίκης", name: "Μαρία Παπαδοπούλου", initials: "ΜΠ", location: "Θεσσαλονίκη", title: "Δεύτερο αρτοποιείο στη γειτονιά", titleEn: "A second neighborhood bakery", description: "Επέκταση ενός αγαπημένου τοπικού φούρνου με νέο επαγγελματικό εξοπλισμό και δεύτερο κατάστημα.", descriptionEn: "An established local bakery expanding with professional equipment and a second location.", story: "Το αρτοποιείο εξυπηρετεί τη γειτονιά και θέλει να αυξήσει την παραγωγή του με νέο εξοπλισμό.", storyEn: "A neighborhood bakery plans to increase production with new equipment.", update: "Σχέδιο προμήθειας δεύτερου επαγγελματικού φούρνου.", updateEn: "Plan to purchase a second commercial oven.", impactScore: 74, impactMetric: "Στόχος: δημιουργία 2 τοπικών θέσεων εργασίας", amount: 25000, backingAssets: 18000, assetType: "Επαγγελματικός εξοπλισμός · δοκιμαστικά στοιχεία", funded: 8650, contributors: 5, rate: 7.4, term: 24, art: "art-bakery", mark: "Φ", label: "ΘΕΣΣΑΛΟΝΙΚΗ · ΤΡΟΦΙΜΑ", labelEn: "THESSALONIKI · FOOD", risk: { paymentMissRate: 2, freeCashFlow: 1700, historyMonths: 36, documentScore: 95, verified: true } },
  { id: "naxos-solar", category: "business", sector: "real-estate", company: "Ηλιόλουστα Δωμάτια Νάξου", name: "Νίκος Αντωνίου", initials: "ΝΑ", location: "Νάξος, Κυκλάδες", title: "Ηλιακή ενέργεια για μικρό ξενοδοχείο", titleEn: "Solar power for a boutique hotel", description: "Αναβάθμιση φωτοβολταϊκών και αποθήκευσης ενέργειας σε οικογενειακό κατάλυμα της Νάξου.", descriptionEn: "Upgrading solar panels and energy storage at a family-run Naxos hotel.", story: "Οικογενειακό κατάλυμα στη Νάξο εξετάζει ενεργειακή αναβάθμιση. Η χρηματοδότηση είναι επιχειρηματική υποχρέωση, όχι εγγύηση επί του ακινήτου.", storyEn: "A family-run Naxos hotel is considering an energy upgrade. This is business financing, not a claim of property collateral.", update: "Υπό εξέταση: τεχνικές προσφορές για φωτοβολταϊκό εξοπλισμό.", updateEn: "Under consideration: supplier quotes for solar equipment.", impactScore: 86, impactMetric: "Στόχος: μείωση κατανάλωσης ενέργειας κατά 30%", amount: 45000, backingAssets: 32000, assetType: "Εξοπλισμός / λοιπά δηλωμένα στοιχεία · δοκιμαστικά", funded: 17625, contributors: 11, rate: 8.1, term: 36, art: "art-farm", mark: "☼", label: "ΝΑΞΟΣ · ΦΙΛΟΞΕΝΙΑ", labelEn: "NAXOS · HOSPITALITY", risk: { paymentMissRate: 9, freeCashFlow: 2100, historyMonths: 24, documentScore: 75, verified: false } },
  { id: "athens-foodtech", category: "business", sector: "tech", company: "Καρπός", name: "Ελένη Γεωργίου", initials: "ΕΓ", location: "Αθήνα, Αττική", title: "Λιγότερη σπατάλη τροφίμων", titleEn: "Reducing food waste", description: "Ελληνική νεοφυής επιχείρηση τεχνολογίας τροφίμων που συνδέει παραγωγούς με τοπικά καταστήματα.", descriptionEn: "A Greek food-tech startup connecting producers with local shops.", story: "Η ομάδα αναπτύσσει λογισμικό που διευκολύνει τη συνεργασία μεταξύ τοπικών παραγωγών και καταστημάτων.", storyEn: "The team is building software to help local producers and shops work together.", update: "Ενδεικτικό ορόσημο: πιλοτική επέκταση της πλατφόρμας σε νέους συνεργάτες.", updateEn: "Illustrative milestone: pilot platform expansion to new partners.", impactScore: 78, impactMetric: "Στόχος: συνεργασία με 20 τοπικούς παραγωγούς", amount: 18000, backingAssets: 12000, assetType: "Εξοπλισμός / λοιπά δηλωμένα στοιχεία · δοκιμαστικά", funded: 7200, contributors: 6, rate: 8.6, term: 24, art: "art-market", mark: "Κ", label: "ΑΘΗΝΑ · ΤΕΧΝΟΛΟΓΙΑ ΤΡΟΦΙΜΩΝ", labelEn: "ATHENS · FOOD TECH", risk: { paymentMissRate: 14, freeCashFlow: 350, historyMonths: 12, documentScore: 55, verified: false } },
  { id: "crete-pack", category: "business", sector: "green", company: "Κρητικό Κέλυφος", name: "Ανδρέας Νικολάου", initials: "ΑΝ", location: "Ηράκλειο, Κρήτη", title: "Συσκευασία από αγροτικά υπολείμματα", titleEn: "Packaging made from farm by-products", description: "Νεοφυής επιχείρηση κυκλικής οικονομίας που μετατρέπει υπολείμματα ελαιοπαραγωγής σε συσκευασίες.", descriptionEn: "A circular-economy startup turning olive-farming by-products into packaging.", story: "Η επιχείρηση διερευνά τρόπους αξιοποίησης υπολειμμάτων ελαιοπαραγωγής για υλικά συσκευασίας.", storyEn: "The business is exploring how olive-farming by-products might be used for packaging materials.", update: "Ενδεικτικό ορόσημο: δοκιμές πρωτοτύπων συσκευασίας.", updateEn: "Illustrative milestone: packaging prototype tests.", impactScore: 82, impactMetric: "Στόχος: αξιοποίηση 12 τόνων αγροτικών υπολειμμάτων", amount: 35000, backingAssets: 24000, assetType: "Εξοπλισμός / λοιπά δηλωμένα στοιχεία · δοκιμαστικά", funded: 14700, contributors: 8, rate: 7.8, term: 36, art: "art-studio", mark: "Κ", label: "ΚΡΗΤΗ · ΚΥΚΛΙΚΗ ΟΙΚΟΝΟΜΙΑ", labelEn: "CRETE · CIRCULAR ECONOMY", risk: { paymentMissRate: 1, freeCashFlow: 1800, historyMonths: 18, documentScore: 82, verified: true } },
];

const equityRounds = [
  { id: "equity-fournos", sector: "local", name: "Μαρία Παπαδοπούλου", initials: "ΜΠ", location: "Θεσσαλονίκη", title: "Φούρνος Θεσσαλονίκης", titleEn: "Thessaloniki bakery", description: "Συμμετοχή στην επέκταση ενός τοπικού αρτοποιείου.", descriptionEn: "Equity participation in a local bakery expansion.", amount: 25000, funded: 8000, valuation: 210000, equityPercent: 8, impactScore: 74, impactMetric: "Στόχος: δημιουργία 2 τοπικών θέσεων εργασίας", art: "art-bakery", mark: "Φ", label: "ΘΕΣΣΑΛΟΝΙΚΗ · ΤΡΟΦΙΜΑ", labelEn: "THESSALONIKI · FOOD", risk: { paymentMissRate: 2, freeCashFlow: 1700, historyMonths: 36, documentScore: 95, verified: true } },
  { id: "equity-naxos", sector: "real-estate", name: "Νίκος Αντωνίου", initials: "ΝΑ", location: "Νάξος, Κυκλάδες", title: "Ηλιόλουστα Δωμάτια Νάξου", description: "Τοπική φιλοξενία με επένδυση σε καθαρή ενέργεια.", descriptionEn: "A local hospitality business investing in clean energy.", amount: 45000, funded: 18000, valuation: 390000, equityPercent: 10, impactScore: 86, impactMetric: "Στόχος: μείωση κατανάλωσης ενέργειας κατά 30%", art: "art-farm", mark: "☼", label: "ΝΑΞΟΣ · ΦΙΛΟΞΕΝΙΑ", labelEn: "NAXOS · HOSPITALITY", risk: { paymentMissRate: 9, freeCashFlow: 2100, historyMonths: 24, documentScore: 75, verified: false } },
  { id: "equity-karpos", sector: "tech", name: "Ελένη Γεωργίου", initials: "ΕΓ", location: "Αθήνα, Αττική", title: "Καρπός", titleEn: "Karpos", description: "Ελληνική νεοφυής επιχείρηση τεχνολογίας τροφίμων για λιγότερη σπατάλη.", descriptionEn: "A Greek food-tech startup working to reduce food waste.", amount: 18000, funded: 5400, valuation: 165000, equityPercent: 9, impactScore: 78, impactMetric: "Στόχος: συνεργασία με 20 τοπικούς παραγωγούς", art: "art-market", mark: "Κ", label: "ΑΘΗΝΑ · ΤΕΧΝΟΛΟΓΙΑ ΤΡΟΦΙΜΩΝ", labelEn: "ATHENS · FOOD TECH", risk: { paymentMissRate: 14, freeCashFlow: 350, historyMonths: 12, documentScore: 55, verified: false } },
  { id: "equity-crete", sector: "green", name: "Ανδρέας Νικολάου", initials: "ΑΝ", location: "Ηράκλειο, Κρήτη", title: "Κρητικό Κέλυφος", titleEn: "Cretan Shell", description: "Ελληνική κυκλική οικονομία με αξιοποίηση αγροτικών υπολειμμάτων.", descriptionEn: "A Greek circular-economy startup using agricultural by-products.", amount: 35000, funded: 12000, valuation: 300000, equityPercent: 10, impactScore: 82, impactMetric: "Στόχος: αξιοποίηση 12 τόνων αγροτικών υπολειμμάτων", art: "art-farm", mark: "Κ", label: "ΚΡΗΤΗ · ΚΥΚΛΙΚΗ ΟΙΚΟΝΟΜΙΑ", labelEn: "CRETE · CIRCULAR ECONOMY", risk: { paymentMissRate: 1, freeCashFlow: 1800, historyMonths: 18, documentScore: 82, verified: true } },
];

const investments = new Map();
const contributions = new Map();
const equityInvestments = new Map();
const userRequests = [];
const offers = [];
const transactions = [];
let backendRevision = 0;
let backendReady = false;
let persistenceQueue = Promise.resolve();
let autoInvestRules = [];
try {
  const savedRules = JSON.parse(localStorage.getItem("lender-auto-invest-rules") || "[]");
  if (Array.isArray(savedRules)) {
    autoInvestRules = savedRules.filter((rule) =>
      rule && ["real-estate", "green", "local", "tech"].includes(rule.sector)
      && Number.isFinite(rule.minRate) && rule.minRate >= 1 && rule.minRate <= 35
      && Number.isFinite(rule.amount) && rule.amount >= 20 && rule.amount <= 5000)
      .map((rule) => ({ ...rule, appliedLoanIds: Array.isArray(rule.appliedLoanIds) ? rule.appliedLoanIds : [] }));
  }
} catch (error) {
  console.error("Δεν ήταν δυνατή η ανάγνωση των τοπικά αποθηκευμένων κανόνων επένδυσης.", error);
}
const positions = [{
  id: "demo-position-naxos",
  loanId: "naxos-solar",
  ownerId: "demo-investor-anna",
  ownerName: "Άννα Κ. · δοκιμαστικό",
  amount: 1800,
  rate: 8.1,
}];
const secondaryListings = [{
  id: "demo-sale-naxos",
  positionId: "demo-position-naxos",
  sellerId: "demo-investor-anna",
  sellerName: "Άννα Κ. · δοκιμαστικό",
  amount: 1200,
  pricePercent: 96,
  status: "open",
}];
const PLATFORM_FEE_RATE = 0.02;
const MIN_ASSET_COVERAGE = 0.6;
const pageNames = {
  overview: { el: "Επισκόπηση", en: "Overview" },
  investments: { el: "Νεοφυείς επιχειρήσεις", en: "Startups" },
  "business-loans": { el: "Χρηματοδότηση νεοφυών επιχειρήσεων", en: "Startup funding" },
  requests: { el: "Χαρτοφυλάκιο", en: "Portfolio" },
  "secondary-market": { el: "Αγορά δανείων", en: "Loan market" },
  legal: { el: "Νομικά & κίνδυνοι", en: "Legal & risk" },
  tax: { el: "Φορολογικά στοιχεία", en: "Tax statement" },
  "borrower-home": { el: "Χώρος επιχείρησης", en: "Business workspace" },
  "borrower-requests": { el: "Τα αιτήματά μου", en: "My requests" },
};
let currentRole = "lend";
const language = "el";
let selectedSector = "all";
let activeStory = null;
const translations = {
  roleLend: ["Θέλω να επενδύσω", "I want to invest"],
  roleLendHint: ["Στήριξη ελληνικών επιχειρήσεων", "Back Greek businesses"],
  roleBorrow: ["Εκπροσωπώ νεοφυή επιχείρηση", "I represent a startup"],
  roleBorrowHint: ["Ζήτησε χρηματοδότηση", "Request business funding"],
  lenderWorkspace: ["ΧΩΡΟΣ ΕΠΕΝΔΥΤΗ", "INVESTOR WORKSPACE"],
  overview: ["Επισκόπηση", "Overview"],
  startups: ["Νεοφυείς επιχειρήσεις", "Startups"],
  startupLoans: ["Χρηματοδότηση νεοφυών επιχειρήσεων", "Startup funding"],
  portfolio: ["Το χαρτοφυλάκιό μου", "My portfolio"],
  taxStatements: ["Φορολογικά στοιχεία", "Tax statements"],
  legalRisk: ["Νομικά & κίνδυνοι", "Legal & risk"],
  businessHome: ["Χώρος επιχείρησης", "Business workspace"],
  myRequests: ["Τα αιτήματά μου", "My requests"],
  helpHeadline: ["Η ανάπτυξη είναι καλύτερη μαζί.", "Growth is better together."],
  helpText: ["Χρηματοδότηση με διαφάνεια και ανθρώπινη προσέγγιση.", "Transparent, people-first funding."],
  greekSupport: ["Υποστήριξη στα Ελληνικά", "Support in English"],
  demoAccount: ["Δοκιμαστικός λογαριασμός", "Demo account"],
  workspace: ["Χώρος εργασίας", "Workspace"],
  demoEnvironment: ["Δοκιμαστικό περιβάλλον", "Demo environment"],
  dateToday: ["ΕΛΛΑΔΑ · ΧΡΗΜΑΤΟΔΟΤΗΣΗ ΝΕΟΦΥΩΝ ΕΠΙΧΕΙΡΗΣΕΩΝ", "GREECE · STARTUP FUNDING"],
  overviewTitle: ["Καλημέρα, επενδυτή <span aria-hidden=\"true\">✳</span>", "Good morning, investor <span aria-hidden=\"true\">✳</span>"],
  overviewSubtitle: ["Στήριξε ελληνικές νεοφυείς επιχειρήσεις με διαφανείς όρους.", "Back Greek startups with transparent terms."],
  lenderContext: ["Επενδυτής · Ανακάλυψε ελληνικές επιχειρήσεις", "Investor · Discover Greek businesses"],
  returnsEarned: ["ΑΠΟΔΟΣΕΙΣ", "RETURNS EARNED"],
  illustrativeReturns: ["ενδεικτικές αποδόσεις φέτος", "illustrative returns this year"],
  activeDeals: ["ΕΝΕΡΓΑ ΕΡΓΑ", "ACTIVE STARTUPS"],
  activeCaption: ["Σε ελληνικές επιχειρήσεις", "Across Greek businesses"],
  diversified: ["Διαφοροποιημένο χαρτοφυλάκιο", "Diversified portfolio"],
  totalInvested: ["ΣΥΝΟΛΙΚΗ ΕΠΕΝΔΥΣΗ", "TOTAL INVESTED"],
  portfolioCaption: ["Στο δοκιμαστικό χαρτοφυλάκιό σου", "Across your demo portfolio"],
  p2bOnly: ["Χρηματοδότηση ελληνικών επιχειρήσεων", "Funding Greek businesses"],
  curated: ["ΕΠΙΛΕΓΜΕΝΕΣ ΕΠΙΧΕΙΡΗΣΕΙΣ", "FEATURED STARTUPS"],
  findOpportunity: ["Βρες την επόμενη ευκαιρία", "Find your next opportunity"],
  exploreProjects: ["Δες επιχειρήσεις", "Explore businesses"],
  yourPortfolio: ["ΤΟ ΧΑΡΤΟΦΥΛΑΚΙΟ ΣΟΥ", "YOUR PORTFOLIO"],
  recentActivity: ["Πρόσφατη δραστηριότητα", "Recent activity"],
  viewPortfolio: ["Προβολή χαρτοφυλακίου", "View portfolio"],
  quote: ["Όταν κάποιος πιστεύει στην επιχείρησή σου, μπορεί να αλλάξει τα πάντα.", "When someone believes in your business, it can change everything."],
  startupFounder: ["Ιδρύτρια νεοφυούς επιχείρησης", "Startup founder"],
  demoDisclaimer: ["Το Lender είναι δοκιμαστικό πρωτότυπο. Τα στοιχεία είναι ενδεικτικά και δεν αποτελούν πραγματική προσφορά.", "Lender is a demo prototype. Figures are illustrative and are not real offers."],
  localProjects: ["ΕΠΙΧΕΙΡΗΣΕΙΣ ΣΤΗΝ ΕΛΛΑΔΑ", "BUSINESSES IN GREECE"],
  startupTitle: ["Στήριξε μια ελληνική νεοφυή επιχείρηση.", "Back a Greek startup."],
  startupSubtitle: ["Δες πού πηγαίνει η χρηματοδότησή σου και τι προσφέρει κάθε έργο.", "See where your money goes and what each project offers."],
  p2b: ["Χρηματοδότηση από ιδιώτες προς επιχειρήσεις.", "P2B only: individuals funding businesses."],
  equityCaveat: ["Η συμμετοχή σε μετοχικό κεφάλαιο έχει κίνδυνο απώλειας, αραίωσης και έλλειψης ρευστότητας. Οι δοκιμαστικές προσφορές δεν εκδίδουν μετοχές.", "Equity can be lost, diluted, and illiquid. Demo offers do not issue shares."],
  equityDisclaimer: ["Ενδεικτικά έργα. Τα ποσοστά δεν αποτελούν πραγματική προσφορά κινητών αξιών.", "Illustrative projects. Percentages are not real securities offers."],
  fundAStartup: ["ΧΡΗΜΑΤΟΔΟΤΗΣΕ ΜΙΑ ΕΠΙΧΕΙΡΗΣΗ", "FUND A BUSINESS"],
  businessLoanTitle: ["Αιτήματα χρηματοδότησης νεοφυών επιχειρήσεων.", "Startup funding requests."],
  loanSubtitle: ["Για ελληνικές επιχειρήσεις που αναζητούν €10.000–€50.000.", "For Greek businesses seeking €10,000–€50,000."],
  riskCaveatStrong: ["Η εκτίμηση κινδύνου είναι ενδεικτική — όχι απόφαση πίστωσης.", "Risk estimate is illustrative—not a credit decision."],
  riskCaveat: ["Δες τα δεδομένα και τους περιορισμούς κάθε έργου πριν αξιολογήσεις μια προσφορά.", "Review each project's data and limitations before considering an offer."],
  greekTax: ["ΕΛΛΗΝΙΚΗ ΦΟΡΟΛΟΓΙΚΗ ΣΥΝΟΨΗ", "GREEK TAX SUMMARY"],
  taxTitle: ["Ετήσια κατάσταση συναλλαγών.", "Annual transaction statement."],
  taxSubtitle: ["Κατέβασε προσχέδιο για έλεγχο από λογιστή.", "Download a draft for your accountant to review."],
  downloadDraft: ["Λήψη προσχεδίου CSV <span aria-hidden=\"true\">↓</span>", "Download draft CSV <span aria-hidden=\"true\">↓</span>"],
  taxNotFiled: ["Δεν είναι δήλωση Taxisnet και δεν υποβάλλεται αυτόματα.", "Not a Taxisnet tax return and not automatically filed."],
  taxDisclaimer: ["Το CSV είναι βοηθητική σύνοψη, όχι φορολογικό παραστατικό. Χρειάζεται έλεγχος από Έλληνα λογιστή και επιβεβαίωση κανόνων ανά προϊόν και φορολογικό έτος.", "The CSV is a working summary, not a tax document. A Greek accountant must review it and confirm rules for each product and tax year."],
  stampDuty: ["ΤΕΛΗ / ΨΗΦΙΑΚΟ ΤΕΛΟΣ ΣΥΝΑΛΛΑΓΗΣ", "DUTIES / DIGITAL TRANSACTION LEVY"],
  stampPending: ["Δεν υπολογίζεται ακόμη", "Not calculated yet"],
  stampExplain: ["Δεν εφαρμόζουμε αυτόματα χαρτόσημο ή άλλο τέλος χωρίς επικυρωμένη νομική και φορολογική ταξινόμηση.", "No stamp duty or levy is applied automatically without a validated legal and tax classification."],
  statementStatus: ["ΚΑΤΑΣΤΑΣΗ ΚΑΤΑΣΤΑΣΗΣ", "STATEMENT STATUS"],
  draftStatus: ["Προσχέδιο · προς έλεγχο", "Draft · review required"],
  statementExplain: ["Περιλαμβάνει τις δοκιμαστικές συνεισφορές που είναι αποθηκευμένες σε αυτή τη συσκευή.", "Includes simulated contributions saved on this device."],
  taxRows: ["ΣΥΝΟΨΗ ΣΥΝΑΛΛΑΓΩΝ", "TRANSACTION SUMMARY"],
  annualActivity: ["Ετήσια δραστηριότητα", "Annual activity"],
  taxYear: ["Φορολογικό έτος", "Tax year"],
  requestEyebrow: ["ΑΙΤΗΜΑ ΧΡΗΜΑΤΟΔΟΤΗΣΗΣ ΝΕΟΦΥΟΥΣ ΕΠΙΧΕΙΡΗΣΗΣ", "STARTUP FUNDING REQUEST"],
  requestTitle: ["Πες μας για την επιχείρησή σου.", "Tell us about your business."],
  requestIntro: ["Δοκιμαστικό αίτημα ελληνικής επιχείρησης €10.000–€50.000.", "Demo request for a Greek business seeking €10,000–€50,000."],
  contactName: ["Όνομα υπευθύνου", "Contact person"],
  startupName: ["Επωνυμία επιχείρησης", "Startup / business name"],
  fundingPurpose: ["Σκοπός χρηματοδότησης", "Funding purpose"],
  fundingTarget: ["Ποσό (€10.000–€50.000)", "Amount (€10,000–€50,000)"],
  repaymentTerm: ["Διάρκεια αποπληρωμής", "Repayment term"],
  requestedRate: ["Επιτόκιο που ζητάς", "Requested interest rate"],
  cancel: ["Ακύρωση", "Cancel"],
  createDemoRequest: ["Δημιουργία δοκιμαστικού αιτήματος <span aria-hidden=\"true\">→</span>", "Create demo request <span aria-hidden=\"true\">→</span>"],
  requestDemoWarning: ["Δοκιμαστικό αίτημα — δεν είναι πραγματική αίτηση δανείου.", "Demo request—not a real loan application."],
  supportEyebrow: ["ΕΞΥΠΗΡΕΤΗΣΗ ΠΕΛΑΤΩΝ", "CUSTOMER SUPPORT"],
  supportTitle: ["Πώς μπορούμε να βοηθήσουμε;", "How can we help?"],
  supportDemo: ["Ελληνική υποστήριξη πρωτοτύπου · αυτοεξυπηρέτηση demo, όχι ζωντανή εξυπηρέτηση.", "Prototype support · demo self-service, not live customer support."],
  supportQ1: ["Μπορώ να καλύψω μόνο μέρος ενός αιτήματος;", "Can I fund only part of a request?"],
  supportA1: ["Ναι. Κάθε επενδυτής μπορεί να συνεισφέρει μέρος του στόχου. Η ένδειξη προόδου δείχνει πόσο απομένει.", "Yes. Each investor can contribute a portion. The progress indicator shows how much is left."],
  supportQ2: ["Υποβάλλεται η φορολογική κατάσταση στο Taxisnet;", "Is the statement filed to Taxisnet?"],
  supportA2: ["Όχι. Παράγεται μόνο δοκιμαστικό αρχείο CSV για έλεγχο από λογιστή. Δεν υπάρχει σύνδεση ή υποβολή στο Taxisnet.", "No. It creates a draft CSV for an accountant; there is no Taxisnet connection or filing."],
  supportQ3: ["Υπολογίζονται αυτόματα χαρτόσημο ή τέλη;", "Are stamp duty or other levies calculated automatically?"],
  supportA3: ["Όχι ακόμη. Απαιτείται επιβεβαίωση από Έλληνα φοροτεχνικό για τη νομική μορφή, το είδος συναλλαγής και τους ισχύοντες κανόνες.", "Not yet. A Greek tax professional must confirm the legal entity, transaction type, and applicable rules."],
  searchBusinesses: ["Αναζήτηση ελληνικών επιχειρήσεων", "Search Greek businesses"],
  searchProjects: ["Αναζήτηση επιχείρησης ή έργου", "Search startups or projects"],
  borrowerPageTitle: ["Χρηματοδότηση με τους δικούς σου όρους.", "Funding on your terms."],
  borrowerPageIntro: ["Δημιούργησε αίτημα, αξιολόγησε προσφορές και προχώρησε με τη στήριξη της κοινότητας.", "Create a request, review offers, and move forward with community support."],
  borrowerNextStep: ["ΤΟ ΕΠΟΜΕΝΟ ΒΗΜΑ", "YOUR NEXT STEP"],
  borrowerPlanTitle: ["Κάνε μια καλή ιδέα χρηματοδοτήσιμο σχέδιο.", "Turn a good idea into a fundable plan."],
  borrowerPlanText: ["Όρισε ποσό, διάρκεια και επιτόκιο. Πολλοί επενδυτές μπορούν να καλύψουν διαφορετικά μέρη του αιτήματος.", "Set an amount, term, and APR. Multiple investors can fund separate portions of your request."],
  borrowerCreateRequest: ["Δημιουργία αιτήματος νεοφυούς επιχείρησης", "Create a startup request"],
  stepShareRequest: ["Παρουσίασε το αίτημά σου", "Share your request"],
  stepShareHint: ["Για ελληνική νεοφυή επιχείρηση ή επιχείρηση.", "For a Greek startup or business."],
  stepReviewOffers: ["Σύγκρινε προσφορές", "Compare offers"],
  stepReviewHint: ["Έλεγξε ποσό, επιτόκιο και διάρκεια.", "Review amount, APR, and term."],
  stepBuildFunding: ["Χτίσε τη χρηματοδότηση", "Build your funding"],
  stepBuildHint: ["Πολλοί μπορούν να συνεισφέρουν τμηματικά.", "Multiple people can contribute portions."],
  borrowerRequestsEyebrow: ["ΤΑ ΑΙΤΗΜΑΤΑ ΣΟΥ", "YOUR REQUESTS"],
  borrowerProgressTitle: ["Η πρόοδος με μια ματιά", "Progress at a glance"],
  borrowerViewRequests: ["Αιτήματα & προσφορές", "Requests & offers"],
  lenderPortfolioTitle: ["Το χαρτοφυλάκιό σου.", "Your portfolio."],
  lenderPortfolioIntro: ["Παρακολούθησε τις συνεισφορές και τις προσφορές σου.", "Track your contributions and offers."],
  yourContributions: ["ΟΙ ΣΥΝΕΙΣΦΟΡΕΣ ΣΟΥ", "YOUR CONTRIBUTIONS"],
  supportedBusinesses: ["Επιχειρήσεις που στηρίζεις", "Businesses you support"],
  ownedPositions: ["ΜΕΡΙΔΙΑ ΔΑΝΕΙΩΝ", "LOAN PORTIONS"],
  positionsTitle: ["Οι συμμετοχές σου", "Your positions"],
  yourOffers: ["ΟΙ ΠΡΟΣΦΟΡΕΣ ΣΟΥ", "YOUR OFFERS"],
  counterOffers: ["Προσφορές και αντιπροτάσεις", "Offers and counteroffers"],
  simulatedContributions: ["Οι συνεισφορές είναι δοκιμαστικές και δεν μεταφέρουν χρήματα ούτε δημιουργούν πραγματική σύμβαση.", "Contributions are simulated; they do not transfer money or create a real agreement."],
  borrowerWorkspaceTitle: ["Τα αιτήματα και οι προσφορές σου.", "Your requests and offers."],
  borrowerWorkspaceIntro: ["Παρακολούθησε συνεισφορές και απάντησε στους όρους επενδυτών.", "Track contributions and respond to investor terms."],
  newRequest: ["Νέο αίτημα", "New request"],
  fundingRequests: ["ΑΙΤΗΜΑΤΑ ΧΡΗΜΑΤΟΔΟΤΗΣΗΣ", "FUNDING REQUESTS"],
  yourRequests: ["Τα αιτήματά σου", "Your requests"],
  investorResponses: ["ΑΠΑΝΤΗΣΕΙΣ ΕΠΕΝΔΥΤΩΝ", "INVESTOR RESPONSES"],
  offersToReview: ["Προσφορές για αξιολόγηση", "Offers to review"],
  demoOfferDisclaimer: ["Οι προσφορές είναι δοκιμαστικές. Η αποδοχή δεν δημιουργεί δεσμευτική συμφωνία ούτε μεταφέρει χρήματα.", "Offers are simulated. Accepting does not create a binding agreement or transfer money."],
  sectorAll: ["Όλοι οι κλάδοι", "All sectors"],
  sectorRealEstate: ["Ακίνητα & τουρισμός", "Real estate & tourism"],
  sectorGreen: ["Πράσινη ενέργεια & γεωργία", "Green energy & agriculture"],
  sectorLocal: ["Τοπικό εμπόριο & καινοτομία", "Local food, retail & innovation"],
  sectorTech: ["Τεχνολογία & νεοφυείς επιχειρήσεις", "Tech & high-growth startups"],
  sectorIntro: ["Επίλεξε τους κλάδους που σε ενδιαφέρουν. Ο κλάδος από μόνος του δεν εγγυάται ασφάλεια ή απόδοση.", "Filter for sectors you care about. Sector alone does not guarantee safety or returns."],
  requestSector: ["Κλάδος επιχείρησης", "Business sector"],
  sectorRealEstateOption: ["Ακίνητα & τουρισμός", "Real estate & tourism"],
  sectorGreenOption: ["Πράσινη ενέργεια & γεωργία", "Green energy & agriculture"],
  sectorLocalOption: ["Τοπικό εμπόριο & καινοτομία", "Local food, retail & innovation"],
  sectorTechOption: ["Τεχνολογία & νεοφυείς επιχειρήσεις", "Tech & high-growth startups"],
  category: ["ΚΛΑΔΟΣ", "SECTOR"],
  illiquidDisclosure: ["Τα επιχειρηματικά δάνεια είναι μη ρευστά. Η δοκιμαστική αγορά δεν εγγυάται αγοραστή ή πρόωρη έξοδο.", "Business loans are illiquid. The simulated market does not guarantee a buyer or early exit."],
  projectStory: ["Ιστορία έργου", "Project story"],
  sampleStory: ["ΕΝΔΕΙΚΤΙΚΗ ΙΣΤΟΡΙΑ · ΔΟΚΙΜΑΣΤΙΚΟ ΠΕΡΙΕΧΟΜΕΝΟ", "ILLUSTRATIVE STORY · DEMO"],
  whyFunding: ["Γιατί αναζητείται χρηματοδότηση", "Why funding is sought"],
  projectUpdate: ["Ενημέρωση έργου", "Project update"],
  sampleUpdate: ["Ενδεικτική ενημέρωση · όχι πραγματικό νέο επιχείρησης.", "Illustrative update · not a real business update."],
  sampleContent: ["Το προφίλ αυτό χρησιμοποιεί συνθετικά στοιχεία για επίδειξη. Δεν έχει επαληθευτεί επιχείρηση, φωτογραφία, βίντεο, έγγραφο ή επίτευγμα.", "This profile uses synthetic demo content. No business, photo, video, document, or milestone has been verified."],
  doubleBottomLine: ["ΚΕΡΔΟΣ & ΤΟΠΙΚΟΣ ΑΝΤΙΚΤΥΠΟΣ", "PROFIT & LOCAL IMPACT"],
  doubleBottomTitle: ["Στήριξε επιχειρήσεις που δίνουν ζωή στην τοπική οικονομία.", "Back businesses that bring the local economy to life."],
  doubleBottomText: ["Δες τον σκοπό κάθε αιτήματος και τις διαθέσιμες πληροφορίες. Η κοινωνική αξία και η οικονομική απόδοση είναι διαφορετικά πράγματα· κανένα από τα δύο δεν είναι εγγυημένο.", "Explore each request's purpose and available information. Social impact and financial return are different—and neither is guaranteed."],
  illustrativeFigures: ["Τα ποσά και οι αποδόσεις είναι ενδεικτικά δοκιμαστικά στοιχεία — όχι πρόβλεψη, υπόσχεση ή προσφορά.", "Amounts and returns are illustrative demo figures—not a forecast, promise, or offer."],
  failureModesEyebrow: ["ΚΙΝΔΥΝΟΙ ΠΟΥ ΠΡΕΠΕΙ ΝΑ ΣΧΕΔΙΑΣΤΟΥΝ", "RISKS TO DESIGN FOR"],
  failureModesTitle: ["Τέσσερις τρόποι που μπορεί να αποτύχει η πλατφόρμα.", "Four ways the platform could fail."],
  adverseSelection: ["Επιλογή δυσμενών κινδύνων", "Adverse selection"],
  adverseSelectionText: ["Αιτούντες που απορρίφθηκαν αλλού μπορεί να έχουν αυξημένο πιστωτικό κίνδυνο. Χρειάζονται επαληθευμένα οικονομικά στοιχεία, σαφή κριτήρια, ανεξάρτητος έλεγχος και παρακολούθηση συγκεντρώσεων.", "Applicants rejected elsewhere may carry higher credit risk. Verified financials, transparent criteria, independent review, and concentration monitoring are essential."],
  recoveryRisk: ["Ανάκτηση οφειλών & αθέτηση", "Collections & default recovery"],
  recoveryRiskText: ["Η διαχείριση καθυστερήσεων, εξωδίκων, εταιρειών είσπραξης και δικαστικών ενεργειών κοστίζει χρόνο και χρήμα. Σε μοντέλο χαμηλής προμήθειας, μία δύσκολη ανάκτηση μπορεί να απορροφήσει τα έσοδα πολλών κανονικών δανείων. Χρειάζονται νόμιμος υπεύθυνος διαχείρισης, διαδικασία και προϋπολογισμός ανάκτησης πριν από την έναρξη.", "Handling arrears, legal notices, collection agencies, and court action costs time and money. In a low-fee model, one difficult recovery could consume fees from many performing loans. Define a lawful servicer, process, and recovery budget before launch."],
  liquidityRisk: ["Κλείδωμα κεφαλαίου", "Liquidity & locked capital"],
  liquidityRiskText: ["Οι επενδυτές μπορεί να μην μπορούν να πουλήσουν ή να αποσύρουν κεφάλαια πριν από την αποπληρωμή. Η ύπαρξη αγοραστή, η τιμή και η λειτουργία δευτερογενούς αγοράς δεν είναι εγγυημένες.", "Investors may be unable to sell or withdraw before repayment. A buyer, price, or functioning secondary market is not guaranteed."],
  regulatoryRisk: ["Αδειοδότηση & προστασία χρημάτων", "Authorization & safeguarding"],
  regulatoryRiskText: ["Ξένος συνεργάτης ή BaaS πάροχος δεν νομιμοποιεί αυτομάτως τη δραστηριότητα στην Ελλάδα. Απαιτούνται επιβεβαιωμένη αδειοδότηση, passporting όπου εφαρμόζεται, φύλαξη χρημάτων και σχέδιο συνέχειας. Διακοπή συνεργασίας ή δέσμευση λογαριασμών είναι σενάρια που πρέπει να καλύπτει το σχέδιο έκτακτης ανάγκης.", "A foreign partner or BaaS provider does not automatically authorize Greek activity. Confirm permissions, applicable passporting, safeguarding, and business continuity. Partner termination or account freezes are scenarios for the contingency plan."],
  noYieldPromise: ["Δεν υποσχόμαστε απόδοση 7–9% ή οποιαδήποτε άλλη απόδοση. Τα πραγματικά αποτελέσματα μπορεί να περιλαμβάνουν καθυστέρηση ή απώλεια κεφαλαίου.", "No 7–9% or other yield is promised. Actual outcomes can include late repayment or loss of capital."],
  creditRiskEyebrow: ["ΠΙΣΤΩΤΙΚΟΣ ΚΙΝΔΥΝΟΣ", "CREDIT RISK"],
  recoveryRiskEyebrow: ["ΛΕΙΤΟΥΡΓΙΚΟΣ ΚΙΝΔΥΝΟΣ", "OPERATIONAL RISK"],
  liquidityRiskEyebrow: ["ΚΙΝΔΥΝΟΣ ΡΕΥΣΤΟΤΗΤΑΣ", "LIQUIDITY RISK"],
  regulatoryRiskEyebrow: ["ΡΥΘΜΙΣΤΙΚΟΣ ΚΙΝΔΥΝΟΣ", "REGULATORY RISK"],
  secondaryNav: ["Αγορά δανείων", "Loan market"],
  secondaryEyebrow: ["ΔΕΥΤΕΡΟΓΕΝΗΣ ΑΓΟΡΑ · ΔΟΚΙΜΑΣΤΙΚΗ ΡΟΗ", "SECONDARY MARKET · DEMO"],
  secondaryTitle: ["Αγορά και πώληση μεριδίων δανείων.", "Buy and sell loan portions."],
  secondaryIntro: ["Δες διαθέσιμες αγγελίες ή βάλε προς πώληση μέρος της συμμετοχής σου.", "Browse listings or offer part of your own holding for sale."],
  secondaryRiskTitle: ["Η πώληση δεν είναι εγγυημένη.", "A sale is not guaranteed."],
  secondaryRiskText: ["Μπορεί να μην υπάρχει αγοραστής. Η τιμή μπορεί να είναι χαμηλότερη από το ανεξόφλητο κεφάλαιο. Το πρωτότυπο προσομοιώνει μεταβίβαση, όχι πραγματική συναλλαγή, χρηματοδότηση ή νομικά εκτελεστό δικαίωμα.", "There may be no buyer. The price can be below outstanding principal. This prototype simulates a transfer, not a real transaction, funding, or enforceable legal right."],
  secondaryDisclaimer: ["Οι τιμές είναι ενδεικτικές. Δεν εγγυώνται αγοραστή, ρευστότητα ή έξοδο· τα μερίδια δεν είναι εξασφαλισμένα.", "Prices are illustrative. No buyer, liquidity, or exit is guaranteed; positions are unsecured."],
  backingAssetsLabel: ["Δηλωμένα περιουσιακά στοιχεία για κάλυψη", "Declared assets available as backing"],
  backingAssetsHelp: ["Απαιτούνται δηλωμένα περιουσιακά στοιχεία αξίας τουλάχιστον 60% του αιτούμενου ποσού.", "Declared assets must be worth at least 60% of the requested amount."],
  backingAssetsCard: ["ΔΗΛΩΜΕΝΑ ΣΤΟΙΧΕΙΑ · ΔΟΚΙΜΑΣΤΙΚΟ", "DECLARED ASSETS · DEMO"],
  assetTypeLabel: ["Τύπος περιουσιακού στοιχείου", "Asset type"],
  insufficientAssets: ["Η αξία των δηλωμένων στοιχείων πρέπει να είναι τουλάχιστον 60% του αιτούμενου ποσού.", "Declared assets must be worth at least 60% of the requested amount."],
  backingDisclaimer: ["Τα δηλωμένα περιουσιακά στοιχεία δεν είναι αυτομάτως εξασφάλιση. Απαιτούνται αποτίμηση, επαλήθευση κυριότητας, νομική σύσταση/τελειοποίηση και έλεγχος εκτελεστότητας.", "Declared assets are not automatically collateral. Valuation, title verification, legal creation/perfection, and enforceability checks are required."],
  saleEyebrow: ["ΠΩΛΗΣΗ ΜΕΡΙΔΙΟΥ · ΔΟΚΙΜΑΣΤΙΚΗ ΡΟΗ", "SELL A LOAN PORTION · DEMO"],
  saleTitle: ["Βάλε μέρος του δανείου προς πώληση", "List a loan portion for sale"],
  saleAmount: ["Ποσό κεφαλαίου", "Principal amount"],
  salePrice: ["Τιμή ως ποσοστό κεφαλαίου", "Price as % of principal"],
  saleDisclaimer: ["Η αγγελία δεν εγγυάται αγοραστή ή πώληση. Η τιμή μπορεί να είναι χαμηλότερη από το κεφάλαιο.", "A listing does not guarantee a buyer or sale. Price may be below principal."],
  publishSale: ["Δημοσίευση αγγελίας", "Publish listing"],
  noPositions: ["Οι συμμετοχές σου θα εμφανιστούν εδώ μετά από δοκιμαστική χρηματοδότηση.", "Your positions will appear here after demo funding."],
  listForSale: ["Πώληση μέρους", "List portion for sale"],
  currentlyListed: ["Ήδη σε αγγελίες", "Currently listed"],
  availableToList: ["Διαθέσιμο για αγγελία", "Available to list"],
  openListingsTitle: ["Διαθέσιμα μερίδια", "Available portions"],
  noOpenListings: ["Δεν υπάρχουν τώρα διαθέσιμα μερίδια προς αγορά.", "There are no loan portions listed right now."],
  seller: ["Πωλητής", "Seller"],
  principal: ["Κεφάλαιο", "Principal"],
  askingPrice: ["Τιμή", "Asking price"],
  discount: ["έκπτωση", "discount"],
  premium: ["προσαύξηση", "premium"],
  buyDemo: ["Αγορά ως δοκιμαστικός επενδυτής", "Buy as demo investor"],
  saleListed: ["Η αγγελία δημοσιεύτηκε. Δεν υπάρχει εγγυημένος αγοραστής.", "Listing published. A buyer is not guaranteed."],
  saleBought: ["Η δοκιμαστική μεταβίβαση ολοκληρώθηκε.", "Demo transfer completed."],
  saleUnavailable: ["Το μερίδιο δεν είναι πλέον διαθέσιμο προς πώληση.", "This portion is no longer available for sale."],
  salePriceEstimate: ["Ενδεικτικό τίμημα", "Illustrative proceeds"],
  requestAmountPlaceholder: ["π.χ. εξοπλισμός, αποθέματα, ακίνητο", "e.g. equipment, inventory, property"],
  assetRequirement: ["Ελάχιστη δηλωμένη αξία", "Minimum declared asset value"],
  assetTypePlaceholder: ["π.χ. εξοπλισμός, αποθέματα, ακίνητο", "e.g. equipment, inventory, property"],
  currentDemoInvestor: ["Δοκιμαστικός επενδυτής", "Demo investor"],
  noAvailablePosition: ["Δεν υπάρχουν συμμετοχές διαθέσιμες για αγγελία.", "You have no positions available to list."],
  listingOwn: ["Η αγγελία σου", "Your listing"],
  cancelSale: ["Απόσυρση αγγελίας", "Cancel listing"],
  loanRequest: ["Αίτημα δανείου", "Loan request"],
  fundedPrincipal: ["Χρηματοδοτήθηκαν", "Funded"],
  parValue: ["στην ονομαστική αξία", "at par"],
  sampleSeller: ["Άννα Κ. · δοκιμαστικό", "Anna K. · demo"],
  assetCoverageRatio: ["κάλυψη επί του αιτήματος", "of request"],
};
const tr = (key) => translations[key]?.[language === "el" ? 0 : 1] ?? key;
const money = (value) => new Intl.NumberFormat(language === "el" ? "el-GR" : "en-IE", {
  style: "currency", currency: "EUR", maximumFractionDigits: 0,
}).format(value);
const localized = (item, field) => language === "en" ? (item[`${field}En`] ?? item[field]) : item[field];
const sectorLabels = {
  "real-estate": ["Ακίνητα & τουρισμός", "Real estate & tourism"],
  green: ["Πράσινη ενέργεια & γεωργία", "Green energy & agriculture"],
  local: ["Τοπικό εμπόριο & καινοτομία", "Local food, retail & innovation"],
  tech: ["Τεχνολογία & νεοφυείς επιχειρήσεις", "Tech & high-growth startups"],
};
const sectorLabel = (sector) => sectorLabels[sector]?.[language === "el" ? 0 : 1] ?? "";
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[character]));
const loanRemaining = (loan) => Math.max(loan.amount - loan.funded, 0);
const platformFee = (amount) => Math.round(amount * PLATFORM_FEE_RATE * 100) / 100;

function assessRisk(item) {
  const data = item.risk;
  const monthlyRate = item.rate / 1200;
  const payment = monthlyRate === 0
    ? item.amount / item.term
    : item.amount * monthlyRate / (1 - (1 + monthlyRate) ** -item.term);
  const coverage = payment > 0 ? data.freeCashFlow / payment : 0;
  const lateRisk = Math.min(100, data.paymentMissRate * 4);
  const coverageRisk = coverage >= 2 ? 0 : coverage >= 1.5 ? 20 : coverage >= 1 ? 50 : 100;
  const historyRisk = data.historyMonths >= 36 ? 0 : data.historyMonths >= 24 ? 20 : data.historyMonths >= 12 ? 50 : 100;
  const documentRisk = 100 - data.documentScore;
  const burden = item.amount / Math.max(data.freeCashFlow * item.term, 1);
  const burdenRisk = burden <= 0.5 ? 0 : burden <= 1 ? 35 : burden <= 2 ? 70 : 100;
  const score = Math.round(lateRisk * 0.3 + coverageRisk * 0.25 + historyRisk * 0.15 + documentRisk * 0.15 + burdenRisk * 0.15);
  const level = score < 35 ? "Safe" : score < 65 ? "Moderate" : "Risky";
  const confidence = data.verified && data.historyMonths >= 24 && data.documentScore >= 85
    ? "Μέτρια (δοκιμαστικά δεδομένα)"
    : "Χαμηλή (περιορισμένα ή μη επαληθευμένα δεδομένα)";
  return { score, level, confidence, payment, coverage, lateRisk, coverageRisk, historyRisk, documentRisk, burdenRisk };
}

function riskDetails(item) {
  const result = assessRisk(item);
  return `<details class="risk-details">
    <summary>Γιατί ${({ Safe: "χαμηλός", Moderate: "μέτριος", Risky: "υψηλός" })[result.level]} κίνδυνος; · ${result.confidence}</summary>
    <p>Ενδεικτική βαθμολογία κανόνων: ${result.score}/100. Υψηλότερη τιμή σημαίνει μεγαλύτερο ενδεικτικό κίνδυνο, όχι πιθανότητα αθέτησης.</p>
    <ul>
      <li>Ιστορικό πληρωμών (${item.risk.paymentMissRate}%): ${result.lateRisk}/100 · 30%</li>
      <li>Κάλυψη ταμειακής ροής (${result.coverage.toFixed(1)}×): ${result.coverageRisk}/100 · 25%</li>
      <li>Ιστορικό (${item.risk.historyMonths} μήνες): ${result.historyRisk}/100 · 15%</li>
      <li>Έλεγχος εγγράφων (${item.risk.documentScore}%): ${result.documentRisk}/100 · 15%</li>
      <li>Ποσό σε σχέση με ταμειακή ροή: ${result.burdenRisk}/100 · 15%</li>
    </ul>
    <small>Συνθετικά ενδεικτικά δεδομένα· δεν πρόκειται για τεχνητή νοημοσύνη, επαληθευμένα δεδομένα, πιστωτική συμβουλή ή εγγύηση αποπληρωμής. Δεν έχουν επικυρωθεί για πραγματικές αποφάσεις.</small>
  </details>`;
}

function projectMetrics(item, equity = false) {
  const financialValue = equity ? "Μη προβλέψιμη" : `${item.rate.toFixed(1)}%`;
  const financialNote = equity
    ? "Μετοχική συμμετοχή · χωρίς εγγυημένη απόδοση"
    : "Ενδεικτικό επιτόκιο ανά έτος · όχι εγγυημένη απόδοση";
  const impactValue = Number.isFinite(item.impactScore) ? `${item.impactScore}/100` : "Δεν έχει αξιολογηθεί";
  const impactText = item.impactMetric ?? "Δεν έχουν δοθεί ενδεικτικοί στόχοι αντίκτυπου.";
  return `<div class="project-metrics">
    <div class="financial-metric"><small>${equity ? "ΟΙΚΟΝΟΜΙΚΗ ΑΠΟΔΟΣΗ" : "ΕΝΔΕΙΚΤΙΚΟ ΕΤΗΣΙΟ ΕΠΙΤΟΚΙΟ"}</small><strong>${financialValue}</strong><span>${financialNote}</span></div>
    <div class="impact-metric"><small>ΕΝΔΕΙΚΤΙΚΟΣ ΔΕΙΚΤΗΣ ΑΝΤΙΚΤΥΠΟΥ</small><strong>${impactValue}</strong><span>${escapeHTML(impactText)}</span></div>
  </div>`;
}

function loanCard(loan, compact = false) {
  const remaining = loanRemaining(loan);
  const fundedPercent = loan.amount > 0 ? Math.min(100, Math.round((loan.funded / loan.amount) * 100)) : 0;
  const risk = assessRisk(loan);
  const isOwnRequest = loan.owner === "current-user";
  const contributorCount = (loan.contributors || 0) + (contributions.get(loan.id)?.length || 0);
  const riskLevel = ({ Safe: "Χαμηλός", Moderate: "Μέτριος", Risky: "Υψηλός" })[risk.level];
  return `<article class="opportunity-card">
    <div class="opportunity-art ${loan.art}"><span class="art-mark" aria-hidden="true">${escapeHTML(loan.mark)}</span><span class="art-label">${escapeHTML(localized(loan, "label"))}</span></div>
    <div class="opportunity-body">
      <span class="sector-badge">${escapeHTML(sectorLabel(loan.sector))}</span>
      <div class="borrower-row"><span class="borrower-avatar">${escapeHTML(loan.initials)}</span><span class="borrower-meta"><strong>${escapeHTML(loan.company ?? loan.name)}</strong><small>${escapeHTML(loan.location)}</small></span><span class="risk-pill risk-${risk.level.toLowerCase()}">${riskLevel} · ${risk.score}</span></div>
      ${riskDetails(loan)}
      <h3>${escapeHTML(localized(loan, "title"))}</h3><p class="opportunity-description">${escapeHTML(localized(loan, "description"))}</p>
      ${projectMetrics(loan)}
      <div class="loan-data"><span><small>ΑΙΤΟΥΜΕΝΟ</small><strong>${money(loan.amount)}</strong></span><span class="rate"><small>ΕΠΙΤΟΚΙΟ</small><strong>${loan.rate.toFixed(1)}%</strong></span><span><small>ΔΙΑΡΚΕΙΑ</small><strong>${loan.term} μήνες</strong></span></div>
      <div class="loan-net-note"><strong>Καθαρό ποσό επιχείρησης σε πλήρη κάλυψη</strong><span>${money(loan.amount - platformFee(loan.amount))} · μείον προμήθεια 2% (${money(platformFee(loan.amount))})</span></div>
      ${Number.isFinite(loan.backingAssets) ? `<div class="asset-backing-note"><strong>${tr("backingAssetsCard")}</strong><span>${money(loan.backingAssets)} · ${Math.round(loan.backingAssets / loan.amount * 100)}% ${tr("assetCoverageRatio")}</span><small>${escapeHTML(loan.assetType ?? "")}</small></div>` : ""}
      <div class="progress-row"><span>${money(loan.funded)} / ${money(loan.amount)} ${language === "el" ? "χρηματοδοτήθηκαν" : "funded"}</span><strong>${fundedPercent}%</strong></div>
      <div class="progress-track" role="progressbar" aria-label="Πρόοδος χρηματοδότησης" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${fundedPercent}"><span style="width:${fundedPercent}%"></span></div>
      <div class="community-funding"><span class="community-avatars" aria-hidden="true"><i>•</i><i>•</i><i>•</i></span><span>${contributorCount ? `${contributorCount} ${language === "el" ? "συνεισφορές" : "contributions"}` : (language === "el" ? "Γίνε ο πρώτος επενδυτής" : "Be the first to contribute")} · ${money(remaining)} ${language === "el" ? "απομένουν" : "to go"}</span></div>
      <button class="story-link" type="button" data-story="${escapeHTML(loan.id)}">${language === "el" ? "Δες την ιστορία του έργου" : "Explore the project story"} <span aria-hidden="true">↗</span></button>
      ${isOwnRequest ? `<span class="card-action own-request-label">${language === "el" ? "Το αίτημά σου" : "Your request"}</span>` : `<div class="card-actions">
        <button class="card-action" type="button" data-invest="${escapeHTML(loan.id)}" ${remaining === 0 ? "disabled" : ""}>${remaining === 0 ? (language === "el" ? "Καλύφθηκε" : "Fully funded") : compact ? (language === "el" ? "Επένδυσε" : "Invest") : (language === "el" ? "Επένδυσε με το ζητούμενο επιτόκιο" : "Invest at asking APR")} <span aria-hidden="true">→</span></button>
        <button class="card-action offer-action" type="button" data-offer="${escapeHTML(loan.id)}" ${remaining === 0 ? "disabled" : ""}>${language === "el" ? "Πρότεινε δικούς σου όρους" : "Make custom offer"} <span aria-hidden="true">↗</span></button>
      </div>`}
    </div>
  </article>`;
}

function equityCard(round) {
  const remaining = loanRemaining(round);
  const fundedPercent = Math.min(100, Math.round((round.funded / round.amount) * 100));
  const risk = assessRisk(round);
  const riskLevel = language === "el" ? ({ Safe: "Χαμηλός", Moderate: "Μέτριος", Risky: "Υψηλός" })[risk.level] : risk.level;
  return `<article class="opportunity-card equity-card">
    <div class="opportunity-art ${round.art}"><span class="art-mark" aria-hidden="true">${escapeHTML(round.mark)}</span><span class="art-label">${escapeHTML(localized(round, "label"))}</span></div>
    <div class="opportunity-body">
      <span class="sector-badge">${escapeHTML(sectorLabel(round.sector))}</span>
      <div class="borrower-row"><span class="borrower-avatar">${escapeHTML(round.initials)}</span><span class="borrower-meta"><strong>${escapeHTML(round.name)}</strong><small>${escapeHTML(round.location)}</small></span><span class="risk-pill risk-${risk.level.toLowerCase()}">${riskLevel} · ${risk.score}</span></div>
      ${riskDetails(round)}
      <h3>${escapeHTML(localized(round, "title"))}</h3><p class="opportunity-description">${escapeHTML(localized(round, "description"))}</p>
      ${projectMetrics(round, true)}
      <div class="loan-data"><span><small>ΣΤΟΧΟΣ ΓΥΡΟΥ</small><strong>${money(round.amount)}</strong></span><span><small>ΑΠΟΤΙΜΗΣΗ ΠΡΙΝ ΑΠΟ ΤΗΝ ΕΠΕΝΔΥΣΗ</small><strong>${money(round.valuation)}</strong></span><span class="rate"><small>ΠΟΣΟΣΤΟ ΓΥΡΟΥ</small><strong>${round.equityPercent}%</strong></span></div>
      <div class="ownership-note">Ενδεικτικά: ${money(1000)} ≈ ${(round.equityPercent * 1000 / round.amount).toFixed(3)}% πριν από αραίωση.</div>
      <div class="progress-row"><span>${money(round.funded)} δεσμεύτηκαν</span><strong>${fundedPercent}%</strong></div>
      <div class="progress-track" role="progressbar" aria-label="Πρόοδος χρηματοδότησης γύρου" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${fundedPercent}"><span style="width:${fundedPercent}%"></span></div>
      <button class="card-action" type="button" data-equity="${escapeHTML(round.id)}" ${remaining <= 0 ? "disabled" : ""}>${remaining <= 0 ? "Ο γύρος καλύφθηκε" : "Δες τη συμμετοχή"} <span aria-hidden="true">→</span></button>
    </div>
  </article>`;
}

function renderLoans() {
  document.querySelector("#overview-opportunities").innerHTML = loans.filter((loan) => loan.owner !== "current-user").slice(0, 4).map((loan) => loanCard(loan, true)).join("");
  const search = document.querySelector("#business-search").value.trim().toLocaleLowerCase(language === "el" ? "el-GR" : "en");
  const visible = loans.filter((loan) => loan.category === "business" && (selectedSector === "all" || loan.sector === selectedSector) && `${loan.company ?? ""} ${loan.name} ${loan.title} ${loan.titleEn ?? ""} ${loan.description} ${loan.descriptionEn ?? ""} ${loan.label} ${loan.labelEn ?? ""} ${sectorLabel(loan.sector)}`.toLocaleLowerCase(language === "el" ? "el-GR" : "en").includes(search));
  document.querySelector("#business-listings").innerHTML = visible.length ? visible.map((loan) => loanCard(loan)).join("") : `<p class="empty-results">${language === "el" ? "Δεν βρέθηκαν αιτήματα." : "No matching requests found."}</p>`;
}

function renderEquity() {
  const term = document.querySelector("#investment-search").value.trim().toLocaleLowerCase(language === "el" ? "el-GR" : "en");
  const visible = equityRounds.filter((round) => (selectedSector === "all" || round.sector === selectedSector) && `${round.name} ${round.title} ${round.titleEn ?? ""} ${round.description} ${round.descriptionEn ?? ""} ${round.label} ${round.labelEn ?? ""} ${sectorLabel(round.sector)}`.toLocaleLowerCase(language === "el" ? "el-GR" : "en").includes(term));
  document.querySelector("#investment-listings").innerHTML = visible.length ? visible.map(equityCard).join("") : `<p class="empty-results">${language === "el" ? "Δεν βρέθηκαν ευκαιρίες." : "No matching opportunities found."}</p>`;
}

function renderRequests() {
  renderLenderPortfolio();
  renderBorrowerRequests();
  renderSecondaryMarket();
  renderAutoInvestRules();
}

function renderLenderPortfolio() {
  const contributionList = document.querySelector("#lender-contributions");
  const fundedLoans = loans.filter((loan) => contributions.has(loan.id));
  contributionList.innerHTML = fundedLoans.length ? fundedLoans.map((loan) => {
    const mine = contributions.get(loan.id).reduce((sum, item) => sum + item.amount, 0);
    const fees = contributions.get(loan.id).reduce((sum, item) => sum + item.fee, 0);
    const communityCount = (loan.contributors || 0) + contributions.get(loan.id).length;
    return `<article class="request-item"><span class="request-symbol" aria-hidden="true">↗</span><span class="request-item-copy"><strong>${escapeHTML(loan.company ?? loan.title)}</strong><small>${language === "el" ? "Κεφάλαιο συνεισφοράς" : "Principal contributed"} ${money(mine)} · ${money(loan.funded)} / ${money(loan.amount)} · ${communityCount} ${language === "el" ? "συνεισφορές" : "contributions"}</small><small>Συνολική δοκιμαστική προμήθεια 2%: ${money(fees)} · συνολική χρέωση: ${money(mine + fees)}.</small></span><span class="request-item-status">${Math.round(loan.funded / loan.amount * 100)}% ${language === "el" ? "καλύφθηκε" : "funded"}</span></article>`;
  }).join("") : `<p class="empty-state">${language === "el" ? "Οι συνεισφορές σου θα εμφανιστούν εδώ. Επίλεξε ποσό έως το υπόλοιπο ενός αιτήματος." : "Your contributions will appear here. Choose any amount up to the remaining balance of a request."}</p>`;

  const positionList = document.querySelector("#lender-positions");
  const ownedPositions = positions.filter((position) => position.ownerId === "current-user" && position.amount > 0);
  positionList.innerHTML = ownedPositions.length ? ownedPositions.map((position) => {
    const loan = loans.find((item) => item.id === position.loanId);
    const listed = listedPositionAmount(position.id);
    const available = Math.max(position.amount - listed, 0);
    return `<article class="request-item position-item"><span class="request-symbol" aria-hidden="true">↗</span><span class="request-item-copy"><strong>${escapeHTML(loan?.company ?? loan?.title ?? position.loanId)}</strong><small>${tr("principal")}: ${money(position.amount)} · ${tr("currentlyListed")}: ${money(listed)} · ${tr("availableToList")}: ${money(available)}</small></span><span class="request-item-status">${position.rate.toFixed(1)}% ετησίως</span><button class="button button-light" type="button" data-list-position="${escapeHTML(position.id)}" ${available < 25 ? "disabled" : ""}>${tr("listForSale")}</button></article>`;
  }).join("") : `<p class="empty-state">${tr("noPositions")}</p>`;

  const offerList = document.querySelector("#lender-offers");
  const lenderOffers = offers.filter((offer) => offer.status !== "declined");
  offerList.innerHTML = lenderOffers.length ? lenderOffers.map((offer) => {
    const loan = loans.find((item) => item.id === offer.loanId);
    const amount = offer.counterAmount ?? offer.amount;
    const rate = offer.counterRate ?? offer.rate;
    const label = offer.status === "countered" ? "Αντιπρόταση επιχείρησης" : offer.status === "accepted" ? "Αποδεκτή · δοκιμαστική" : "Αναμονή επιχείρησης";
    const buttons = offer.status === "countered"
      ? `<div class="offer-item-actions"><button class="button button-dark" type="button" data-accept="${escapeHTML(offer.id)}">Αποδοχή αντιπρότασης · συνεισφορά ${money(amount)}</button><button class="button button-light" type="button" data-decline="${escapeHTML(offer.id)}">Απόρριψη</button></div>`
      : "";
    return `<article class="request-item offer-item"><span class="request-symbol" aria-hidden="true">↗</span><span class="request-item-copy"><strong>${escapeHTML(loan?.title ?? "Προσφορά χρηματοδότησης")}</strong><small>Η προσφορά σου ${money(offer.amount)} · προμήθεια 2% αν γίνει αποδεκτή: ${money(platformFee(offer.amount))} · ${offer.rate.toFixed(1)}% ετησίως · ${loan?.term ?? "—"} μήνες${offer.status === "countered" ? ` · Αντιπρόταση ${money(amount)} με ${rate.toFixed(1)}%` : ""}</small></span><span class="request-item-status">${label}</span>${buttons}</article>`;
  }).join("") : '<p class="empty-state">Οι προσφορές και οι αντιπροτάσεις θα εμφανιστούν εδώ.</p>';
}

function listedPositionAmount(positionId) {
  return secondaryListings
    .filter((listing) => listing.positionId === positionId && listing.status === "open")
    .reduce((sum, listing) => sum + listing.amount, 0);
}

function renderSecondaryMarket() {
  const market = document.querySelector("#secondary-listings");
  if (!market) return;
  const listings = secondaryListings.filter((listing) => listing.status === "open" && listing.amount > 0);
  market.innerHTML = listings.length ? listings.map((listing) => {
    const position = positions.find((item) => item.id === listing.positionId);
    const loan = loans.find((item) => item.id === position?.loanId);
    if (!position || !loan) return "";
    const sellerOwns = listing.sellerId === "current-user";
    const price = listing.amount * listing.pricePercent / 100;
    const priceLabel = listing.pricePercent < 100
      ? `${100 - listing.pricePercent}% ${tr("discount")}`
      : listing.pricePercent > 100
        ? `${listing.pricePercent - 100}% ${tr("premium")}`
        : tr("parValue");
    const action = sellerOwns
      ? `<button class="button button-light" type="button" data-cancel-sale="${escapeHTML(listing.id)}">${tr("cancelSale")}</button>`
      : `<button class="button button-dark" type="button" data-buy-listing="${escapeHTML(listing.id)}">${tr("buyDemo")}</button>`;
    return `<article class="request-item secondary-listing"><span class="request-symbol" aria-hidden="true">⇄</span><span class="request-item-copy"><strong>${escapeHTML(loan.company ?? loan.title)} · ${escapeHTML(localized(loan, "title"))}</strong><small>${tr("seller")}: ${sellerOwns ? tr("currentDemoInvestor") : tr("sampleSeller")} · ${tr("loanRequest")}: ${money(loan.amount)} · ${tr("fundedPrincipal")}: ${money(loan.funded)} · ${tr("principal")}: ${money(listing.amount)} · ${listing.pricePercent}% (${priceLabel}) · ${tr("askingPrice")}: ${money(price)}</small><small>${loan.rate.toFixed(1)}% ετησίως · ${loan.term} μήνες</small></span>${sellerOwns ? `<span class="request-item-status">${tr("listingOwn")}</span>` : ""}${action}</article>`;
  }).join("") : `<p class="empty-state">${tr("noOpenListings")}</p>`;
}

function renderAutoInvestRules() {
  const container = document.querySelector("#auto-invest-rules");
  if (!container) return;
  container.innerHTML = autoInvestRules.length ? autoInvestRules.map((rule, index) => {
    const sector = sectorLabel(rule.sector);
    return `<article class="auto-rule-item"><span><strong>${escapeHTML(sector)}</strong><small>Επιτόκιο από ${rule.minRate.toFixed(1)}% ετησίως · κεφάλαιο ${money(rule.amount)} + προμήθεια 2% (${money(platformFee(rule.amount))}) ανά έργο</small></span><button class="button button-light" type="button" data-simulate-rule="${index}">Εκτέλεση προσομοίωσης</button><button class="icon-button" type="button" data-remove-rule="${index}" aria-label="Διαγραφή κανόνα">×</button></article>`;
  }).join("") : `<p class="empty-state">Δεν έχεις ορίσει κανόνες αυτόματης επένδυσης.</p>`;
}

function persistAutoInvestRules() {
  try {
    localStorage.setItem("lender-auto-invest-rules", JSON.stringify(autoInvestRules));
    return true;
  } catch (error) {
    console.error("Δεν ήταν δυνατή η αποθήκευση των κανόνων επένδυσης σε αυτό το πρόγραμμα περιήγησης.", error);
    showToast("Δεν ήταν δυνατή η αποθήκευση. Οι κανόνες θα χαθούν αν κλείσεις αυτό το πρόγραμμα περιήγησης.");
    return false;
  }
}

function simulateAutoInvest(rule) {
  const appliedLoanIds = new Set(rule.appliedLoanIds);
  const eligible = loans.filter((loan) => loan.owner !== "current-user" && loan.category === "business" && loan.sector === rule.sector && loan.rate >= rule.minRate && loanRemaining(loan) >= 1 && !appliedLoanIds.has(loan.id));
  const applied = eligible.map((loan) => {
    const amount = Math.min(rule.amount, loanRemaining(loan));
    if (!contributeToLoan(loan, amount, loan.rate)) return 0;
    rule.appliedLoanIds.push(loan.id);
    investments.set(loan.id, (investments.get(loan.id) || 0) + amount);
    return amount;
  }).reduce((sum, amount) => sum + amount, 0);
  const saved = persistAutoInvestRules();
  updateBalance();
  syncAllViews();
  const projectLabel = eligible.length === 1 ? "έργο" : "έργα";
  showToast(!saved
    ? `Η προσομοίωση ολοκληρώθηκε${eligible.length ? ` με συνεισφορά ${money(applied)}` : ""}, αλλά οι κανόνες δεν αποθηκεύτηκαν.`
    : eligible.length
    ? `Προσομοιώθηκε συνεισφορά ${money(applied)} σε ${eligible.length} ${projectLabel}. Δεν μεταφέρθηκαν χρήματα.`
    : "Δεν υπάρχουν νέα επιλέξιμα έργα για τον κανόνα.");
}

function openSaleModal(positionId) {
  const position = positions.find((item) => item.id === positionId);
  if (!position || position.ownerId !== "current-user") return;
  const available = Math.max(position.amount - listedPositionAmount(position.id), 0);
  if (available < 25) return;
  const loan = loans.find((item) => item.id === position.loanId);
  document.querySelector("#sale-description").textContent = `${loan?.company ?? loan?.title ?? position.loanId} · ${tr("availableToList")}: ${money(available)}.`;
  const amountField = document.querySelector("#sale-amount");
  amountField.max = String(available);
  amountField.value = String(Math.min(available, Math.max(25, Math.floor(available / 25) * 25)));
  document.querySelector("#sale-form").dataset.positionId = position.id;
  updateSaleEstimate();
  document.querySelector("#sale-modal").showModal();
}

function updateSaleEstimate() {
  const amount = Number(document.querySelector("#sale-amount").value);
  const percent = Number(document.querySelector("#sale-price").value);
  const proceeds = Number.isFinite(amount) && Number.isFinite(percent) ? amount * percent / 100 : 0;
  document.querySelector("#sale-price-estimate").textContent = `${tr("salePriceEstimate")}: ${money(proceeds)}.`;
}

function borrowerRequestCard(request) {
  const loan = loans.find((item) => item.id === request.id);
  const funded = loan?.funded ?? 0;
  const amount = loan?.amount ?? request.amount;
  const contributors = (loan?.contributors || 0) + (contributions.get(request.id)?.length || 0);
  const percent = amount ? Math.min(100, Math.round(funded / amount * 100)) : 0;
  return `<article class="request-item borrower-request-card"><span class="request-symbol" aria-hidden="true">✳</span><span class="request-item-copy"><strong>${escapeHTML(request.company)}</strong><small>${escapeHTML(sectorLabel(request.sector))} · ${escapeHTML(request.purpose)} · Χρηματοδοτήθηκαν ${money(funded)} / ${money(amount)} · ${contributors} συνεισφορές · ${request.rate.toFixed(1)}% ετησίως</small><small>Σε πλήρη κάλυψη: προμήθεια επιχείρησης 2% ${money(platformFee(amount))} · καθαρό ποσό ${money(amount - platformFee(amount))}.</small><small>${tr("backingAssetsCard")}: ${money(request.backingAssets)} (${Math.round(request.backingAssets / amount * 100)}%) · ${escapeHTML(request.assetType)}</small><span class="progress-track"><span style="width:${percent}%"></span></span></span><span class="request-item-status">${percent >= 100 ? "Καλύφθηκε · δοκιμαστικό" : `${percent}% καλύφθηκε`}</span></article>`;
}

function renderBorrowerRequests() {
  const requestList = document.querySelector("#borrower-request-list");
  const homeList = document.querySelector("#borrower-home-list");
  const own = userRequests.map(borrowerRequestCard).join("");
  requestList.innerHTML = own || `<p class="empty-state">${language === "el" ? "Τα αιτήματα χρηματοδότησής σου θα εμφανιστούν εδώ." : "Your business funding requests will appear here."}</p>`;
  homeList.innerHTML = own || `<p class="empty-state">${language === "el" ? "Ξεκίνησε με ένα αίτημα χρηματοδότησης. Όρισε ποσό, επιτόκιο και διάρκεια." : "Start with a business funding request. Set the amount, APR, and repayment term."}</p>`;

  const offerList = document.querySelector("#borrower-offer-list");
  const incoming = offers;
  offerList.innerHTML = incoming.length ? incoming.map((offer) => {
    const loan = loans.find((item) => item.id === offer.loanId);
    const amount = offer.counterAmount ?? offer.amount;
    const rate = offer.counterRate ?? offer.rate;
    const label = offer.status === "sent" ? "Έλεγξε την προσφορά" : offer.status === "countered" ? "Αναμονή επενδυτή" : offer.status === "accepted" ? "Συμφωνήθηκε · δοκιμαστικό" : "Απορρίφθηκε · δοκιμαστικό";
    const buttons = offer.status === "sent"
      ? `<div class="offer-item-actions"><button class="button button-dark" type="button" data-accept="${escapeHTML(offer.id)}">Αποδοχή · ${money(offer.amount)} με ${offer.rate.toFixed(1)}%</button><button class="button button-light" type="button" data-counter="${escapeHTML(offer.id)}">Αντιπρόταση</button></div>`
      : "";
    return `<article class="request-item offer-item"><span class="request-symbol" aria-hidden="true">↙</span><span class="request-item-copy"><strong>${escapeHTML(loan?.title ?? "Προσφορά επενδυτή")}</strong><small>${money(amount)} με επιτόκιο ${rate.toFixed(1)}% ετησίως · ${loan?.term ?? "—"} μήνες</small></span><span class="request-item-status">${label}</span>${buttons}</article>`;
  }).join("") : `<p class="empty-state">${language === "el" ? "Οι προσφορές επενδυτών στα αιτήματά σου θα εμφανιστούν εδώ." : "Investor offers on your requests will appear here."}</p>`;
}

function contributeToLoan(loan, amount, rate) {
  if (!loan || !Number.isFinite(amount) || amount < 1 || amount > loanRemaining(loan)) return false;
  const fee = platformFee(amount);
  loan.funded += amount;
  contributions.set(loan.id, [...(contributions.get(loan.id) || []), { amount, rate, fee }]);
  positions.push({
    id: `position-${Date.now()}-${positions.length}`,
    loanId: loan.id,
    ownerId: "current-user",
    ownerName: tr("currentDemoInvestor"),
    amount,
    rate,
  });
  transactions.push({
    date: new Date().toISOString().slice(0, 10),
    project: loan.company ?? loan.title,
    type: "business-loan contribution",
    amount,
    fee,
    rate,
  });
  return true;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("visible"), 3000);
}

function switchView(view) {
  if (!document.querySelector(`#${view}-view`)) return;
  document.querySelectorAll(".page-view").forEach((section) => section.classList.toggle("hidden", section.id !== `${view}-view`));
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
    button.setAttribute("aria-current", button.dataset.view === view ? "page" : "false");
  });
  document.querySelector("#page-label").textContent = pageNames[view]?.[language] ?? view;
  if (view === "tax") renderTaxStatement();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setRole(role) {
  currentRole = role;
  const borrowing = role === "borrow";
  document.querySelector("#lender-nav").classList.toggle("hidden", borrowing);
  document.querySelector("#borrower-nav").classList.toggle("hidden", !borrowing);
  document.querySelector("#workspace-label").textContent = borrowing
    ? (language === "el" ? "ΧΩΡΟΣ ΕΠΙΧΕΙΡΗΣΗΣ" : "BUSINESS WORKSPACE")
    : tr("lenderWorkspace");
  document.querySelectorAll("[data-role]").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === role);
    button.setAttribute("aria-pressed", button.dataset.role === role ? "true" : "false");
  });
  switchView(borrowing ? "borrower-home" : "overview");
}

function updateBalance() {
  const total = 12450 + [...investments.values(), ...equityInvestments.values()].reduce((sum, value) => sum + value, 0);
  document.querySelector("#balance-total").textContent = money(total);
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.title = "Lender — Ελληνική χρηματοδότηση επιχειρήσεων";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.innerHTML = tr(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", tr(element.dataset.i18nPlaceholder));
    element.setAttribute("aria-label", tr(element.dataset.i18nPlaceholder));
  });
  document.querySelector("#support-button").setAttribute("aria-label", "Υποστήριξη στα Ελληνικά");
  const currentView = document.querySelector(".page-view:not(.hidden)")?.id.replace(/-view$/, "");
  if (currentView) document.querySelector("#page-label").textContent = pageNames[currentView]?.[language] ?? currentView;
  document.querySelector("#workspace-label").textContent = currentRole === "borrow"
    ? (language === "el" ? "ΧΩΡΟΣ ΕΠΙΧΕΙΡΗΣΗΣ" : "BUSINESS WORKSPACE")
    : tr("lenderWorkspace");
  document.querySelectorAll("[data-sector]").forEach((button) => {
    button.setAttribute("aria-label", button.textContent.trim());
    button.setAttribute("aria-pressed", button.dataset.sector === selectedSector ? "true" : "false");
    button.classList.toggle("active", button.dataset.sector === selectedSector);
  });
  renderLoans();
  renderEquity();
  renderRequests();
  renderTaxStatement();
  updateAssetRequirement();
  updateSaleEstimate();
}

function renderTaxStatement() {
  const summary = document.querySelector("#tax-statement-summary");
  if (!summary) return;
  const year = Number(document.querySelector("#tax-year").value);
  const entries = transactions.filter((transaction) => Number(transaction.date.slice(0, 4)) === year);
  const description = (transaction) => transaction.type === "equity contribution"
    ? "Συνεισφορά σε γύρο συμμετοχής"
    : "Συνεισφορά σε επιχειρηματικό δάνειο";
  summary.innerHTML = entries.length
    ? entries.map((transaction) => `<article class="request-item"><span class="request-symbol" aria-hidden="true">↗</span><span class="request-item-copy"><strong>${escapeHTML(transaction.project)}</strong><small>${transaction.date} · ${description(transaction)} · ${transaction.rate ? `${transaction.rate.toFixed(1)}% ετησίως · ` : ""}Τόκος που εισπράχθηκε: 0 € (δεν καταγράφονται αποπληρωμές στο δοκιμαστικό περιβάλλον)</small>${transaction.fee ? `<small>Προμήθεια επενδυτή 2% (δοκιμαστική): ${money(transaction.fee)}</small>` : ""}</span><span class="request-item-status">${money(transaction.amount)}</span></article>`).join("")
    : `<p class="empty-state">${language === "el" ? `Δεν έχουν καταγραφεί δοκιμαστικές συνεισφορές για το ${year}.` : `No simulated contributions recorded for ${year}.`}</p>`;
}

function csvCell(value) {
  let safe = String(value);
  if (/^[=+\-@\t\r]/.test(safe)) safe = `'${safe}`;
  return `"${safe.replaceAll('"', '""')}"`;
}

function exportTaxStatement() {
  const year = Number(document.querySelector("#tax-year").value);
  const entries = transactions.filter((transaction) => Number(transaction.date.slice(0, 4)) === year);
  const columns = [
    "tax_year", "transaction_date", "project", "transaction_type", "contribution_eur",
    "platform_fee_eur", "interest_received_eur", "offered_apr_percent", "tax_classification",
    "stamp_duty_or_levy", "review_status",
  ];
  const rows = entries.map((transaction) => [
    year,
    transaction.date,
    transaction.project,
    transaction.type,
    transaction.amount.toFixed(2),
    (transaction.fee ?? 0).toFixed(2),
    "0.00",
    transaction.rate ? transaction.rate.toFixed(2) : "",
    "Pending accountant and legal review",
    "Not calculated; product classification pending",
    "Demo draft only; not a tax return or Taxisnet filing",
  ].map(csvCell).join(","));
  const csv = `\uFEFF${columns.map(csvCell).join(",")}\r\n${rows.join("\r\n")}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `lender-demo-statement-${year}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(`Δημιουργήθηκε προσχέδιο CSV για το ${year} · προς έλεγχο λογιστή.`);
}

function syncAllViews() {
  renderLoans();
  renderEquity();
  renderRequests();
  renderTaxStatement();
  document.querySelector("#active-count").textContent = String(loans.length + equityRounds.length).padStart(2, "0");
  persistDemoState();
}

function setBackendStatus(message, state) {
  const status = document.querySelector("#backend-status");
  status.lastElementChild.textContent = message;
  status.dataset.state = state;
}

function pairList(map) {
  return [...map.entries()].map(([key, value]) => [key, value]);
}

function serializeDemoState() {
  return {
    requests: userRequests,
    offers,
    transactions,
    contributions: pairList(contributions),
    investments: pairList(investments),
    equityInvestments: pairList(equityInvestments),
    loanFunding: loans.map(({ id, funded }) => [id, funded]),
    equityFunding: equityRounds.map(({ id, funded }) => [id, funded]),
    positions,
    secondaryListings,
  };
}

function restoreDemoState(state) {
  userRequests.splice(0, userRequests.length, ...state.requests);
  offers.splice(0, offers.length, ...state.offers);
  transactions.splice(0, transactions.length, ...state.transactions);
  contributions.clear();
  state.contributions.forEach(([loanId, entries]) => contributions.set(loanId, entries));
  investments.clear();
  state.investments.forEach(([loanId, amount]) => investments.set(loanId, amount));
  equityInvestments.clear();
  state.equityInvestments.forEach(([roundId, amount]) => equityInvestments.set(roundId, amount));
  const savedLoanFunding = new Map(state.loanFunding);
  loans.forEach((loan) => {
    if (savedLoanFunding.has(loan.id)) loan.funded = savedLoanFunding.get(loan.id);
  });
  const savedEquityFunding = new Map(state.equityFunding);
  equityRounds.forEach((round) => {
    if (savedEquityFunding.has(round.id)) round.funded = savedEquityFunding.get(round.id);
  });
  positions.splice(0, positions.length, ...state.positions);
  secondaryListings.splice(0, secondaryListings.length, ...state.secondaryListings);
  loans.splice(0, loans.length, ...loans.filter((loan) => loan.owner !== "current-user"));
  state.requests.forEach((request) => loans.unshift({
    ...request,
    initials: request.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase(),
    location: "Ελλάδα",
    title: request.purpose,
    description: `Δοκιμαστικό αίτημα χρηματοδότησης της επιχείρησης ${request.company}.`,
    funded: savedLoanFunding.get(request.id) ?? 0,
    art: "art-studio",
    mark: request.name[0],
    label: `${request.company} · ΝΕΟΦΥΗΣ ΕΠΙΧΕΙΡΗΣΗ`,
    owner: "current-user",
    risk: { paymentMissRate: 12, freeCashFlow: 0, historyMonths: 0, documentScore: 0, verified: false },
  }));
}

function persistDemoState() {
  if (!backendReady) return;
  const state = serializeDemoState();
  setBackendStatus("Αποθήκευση…", "saving");
  persistenceQueue = persistenceQueue.then(async () => {
    const response = await fetch("/api/state", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ revision: backendRevision, state }),
    });
    if (response.status === 409) throw new Error("Η βάση άλλαξε σε άλλη καρτέλα. Κάνε ανανέωση πριν συνεχίσεις.");
    if (!response.ok) throw new Error(`Η αποθήκευση απέτυχε (${response.status}).`);
    const result = await response.json();
    backendRevision = result.revision;
    setBackendStatus("Αποθηκεύεται τοπικά", "ready");
  }).catch((error) => {
    backendReady = false;
    setBackendStatus("Δεν αποθηκεύτηκε", "error");
    console.error("Δεν ήταν δυνατή η αποθήκευση στην τοπική βάση.", error);
    showToast(`Η αλλαγή δεν αποθηκεύτηκε: ${error.message}`);
  });
}

async function initializeBackend() {
  try {
    const health = await fetch("/api/health", { cache: "no-store" });
    if (!health.ok) throw new Error("Ο τοπικός server δεν είναι διαθέσιμος.");
    const response = await fetch("/api/state", { cache: "no-store" });
    if (!response.ok) throw new Error("Δεν ήταν δυνατή η φόρτωση της τοπικής βάσης.");
    const stored = await response.json();
    backendRevision = stored.revision;
    restoreDemoState(stored.state);
    backendReady = true;
    setBackendStatus("Αποθηκεύεται τοπικά", "ready");
    syncAllViews();
  } catch (error) {
    backendReady = false;
    setBackendStatus("Μόνο προσωρινή λειτουργία", "error");
    console.error("Το Lender backend δεν είναι διαθέσιμο.", error);
    showToast("Η τοπική βάση δεν είναι διαθέσιμη. Οι αλλαγές δεν θα διατηρηθούν μετά την ανανέωση.");
  }
}

function openFundModal(loanId) {
  const loan = loans.find((item) => item.id === loanId);
  if (!loan || loan.owner === "current-user") return;
  const remaining = loanRemaining(loan);
  document.querySelector("#fund-title").textContent = `Στήριξε την επιχείρηση ${loan.company ?? loan.name}`;
  document.querySelector("#fund-description").textContent = `${localized(loan, "title")} · ${loan.rate.toFixed(1)}% ετησίως · ${loan.term} μήνες. Η συνεισφορά σου καλύπτει μέρος του στόχου· μπορούν να συμμετέχουν κι άλλοι.`;
  document.querySelector("#fund-limit").textContent = `Απομένουν ${money(remaining)}. Επίλεξε ποσό από 25 € έως το υπόλοιπο.`;
  const field = document.querySelector("#fund-amount");
  field.max = String(remaining);
  field.value = String(Math.min(100, remaining));
  field.setCustomValidity("");
  document.querySelector("#fund-form").dataset.loanId = loan.id;
  updateLenderFeeEstimate(field, "#fund-fee-breakdown");
  document.querySelector("#fund-modal").showModal();
}

function openOfferModal(loanId) {
  const loan = loans.find((item) => item.id === loanId);
  if (!loan || loan.owner === "current-user") return;
  document.querySelector("#offer-description").textContent = `${loan.company ?? loan.name} ζητά ${money(loan.amount)} με επιτόκιο ${loan.rate.toFixed(1)}% ετησίως για ${loan.term} μήνες. Πρότεινε δικό σου ποσό και επιτόκιο· αν γίνει αποδεκτό, προστίθεται προμήθεια επενδυτή 2%.`;
  const field = document.querySelector("#offer-amount");
  field.max = String(loanRemaining(loan));
  field.value = String(Math.min(loanRemaining(loan), 1000));
  document.querySelector("#offer-rate").value = loan.rate.toFixed(1);
  updateLenderFeeEstimate(field, "#offer-fee-breakdown");
  document.querySelector("#offer-limit").textContent = `Απομένουν έως ${money(loanRemaining(loan))}. Επιτρεπόμενο δοκιμαστικό επιτόκιο: 1–35%.`;
  document.querySelector("#offer-form").dataset.loanId = loan.id;
  document.querySelector("#offer-modal").showModal();
}

function updateLenderFeeEstimate(field, targetSelector) {
  const principal = Math.max(Number(field.value) || 0, 0);
  const fee = platformFee(principal);
  document.querySelector(targetSelector).textContent = `Προμήθεια επενδυτή 2%: ${money(fee)} · συνολική χρέωση αν γίνει αποδεκτό: ${money(principal + fee)}.`;
}

function updateBorrowerFeeEstimate() {
  const amount = Math.max(Number(document.querySelector("#request-amount").value) || 0, 0);
  const fee = platformFee(amount);
  document.querySelector("#borrower-fee-estimate").textContent = `Προμήθεια επιχείρησης 2%: ${money(fee)} · καθαρό ποσό μετά την πλήρη χρηματοδότηση: ${money(amount - fee)}.`;
}

function updateOwnershipEstimate() {
  const form = document.querySelector("#equity-form");
  const round = equityRounds.find((item) => item.id === form.dataset.roundId);
  if (!round) return;
  const amount = Number(form.elements.amount.value);
  const remaining = Math.max(round.amount - round.funded, 0);
  const ownership = amount > 0 && round.amount > 0 ? amount / round.amount * round.equityPercent : 0;
  const postMoney = round.valuation + round.amount;
  document.querySelector("#ownership-estimate").innerHTML = `<strong>${language === "el" ? "Ενδεικτική συμμετοχή στον γύρο" : "Estimated round ownership"}: ${ownership.toFixed(4)}%</strong><span>${language === "el" ? "Ενδεικτική αποτίμηση μετά την επένδυση" : "Illustrative post-money value"}: ~${money(postMoney)}.</span>`;
  document.querySelector("#equity-limit").textContent = language === "el"
    ? `Απομένουν ${money(remaining)} στον γύρο· το σύνολο του γύρου προσφέρει ${round.equityPercent}%.`
    : `${money(remaining)} remaining in the round; current round offers ${round.equityPercent}% in total.`;
}

function openEquityModal(roundId) {
  const round = equityRounds.find((item) => item.id === roundId);
  if (!round) return;
  const remaining = loanRemaining(round);
  document.querySelector("#equity-title").textContent = `Στήριξε την επιχείρηση ${round.title}`;
  document.querySelector("#equity-description").textContent = `${localized(round, "title")}. Η προσομοίωση παρουσιάζει συνολικό ποσοστό ${round.equityPercent}% για χρηματοδότηση ${money(round.amount)}.`;
  const field = document.querySelector("#equity-amount");
  field.max = String(remaining);
  field.value = String(Math.min(1000, remaining));
  document.querySelector("#equity-form").dataset.roundId = round.id;
  updateOwnershipEstimate();
  document.querySelector("#equity-modal").showModal();
}

function openCounterModal(offerId) {
  const offer = offers.find((item) => item.id === offerId);
  if (!offer || offer.status !== "sent") return;
  const loan = loans.find((item) => item.id === offer.loanId);
  if (!loan) return;
  document.querySelector("#counter-description").textContent = `${loan.company ?? loan.name} πρότεινε ${money(offer.amount)} με επιτόκιο ${offer.rate.toFixed(1)}%. Άλλαξε τους όρους για δοκιμαστική αντιπροσφορά.`;
  document.querySelector("#counter-amount").max = String(loanRemaining(loan));
  document.querySelector("#counter-amount").value = String(offer.amount);
  document.querySelector("#counter-rate").value = offer.rate.toFixed(1);
  document.querySelector("#counter-limit").textContent = `Επίλεξε ποσό έως ${money(loanRemaining(loan))} και επιτόκιο 1–35% ετησίως.`;
  document.querySelector("#counter-form").dataset.offerId = offer.id;
  document.querySelector("#counter-modal").showModal();
}

function updateAssetRequirement() {
  const amount = Number(document.querySelector("#request-amount").value);
  const assets = Number(document.querySelector("#request-assets").value);
  const minimum = Number.isFinite(amount) && amount > 0 ? amount * MIN_ASSET_COVERAGE : 0;
  const field = document.querySelector("#request-assets");
  field.min = String(minimum);
  field.setCustomValidity(assets > 0 && assets < minimum ? tr("insufficientAssets") : "");
  document.querySelector("#asset-requirement").textContent = `${tr("assetRequirement")}: ${money(minimum)} (${Math.round(MIN_ASSET_COVERAGE * 100)}% ${tr("assetCoverageRatio")}).`;
  updateBorrowerFeeEstimate();
}

document.querySelectorAll("[data-role]").forEach((button) => button.addEventListener("click", () => setRole(button.dataset.role)));
document.querySelectorAll(".nav-link").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll(".text-button[data-view]").forEach((button) => button.addEventListener("click", () => switchView(button.dataset.view)));
document.querySelectorAll("[data-open-request]").forEach((button) => button.addEventListener("click", () => {
  updateAssetRequirement();
  document.querySelector("#request-modal").showModal();
}));
document.querySelectorAll("[data-open-support]").forEach((button) => button.addEventListener("click", () => document.querySelector("#support-modal").showModal()));
document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((dialog) => dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
}));
document.querySelector("#fund-amount").addEventListener("input", (event) => updateLenderFeeEstimate(event.currentTarget, "#fund-fee-breakdown"));
document.querySelector("#offer-amount").addEventListener("input", (event) => updateLenderFeeEstimate(event.currentTarget, "#offer-fee-breakdown"));
document.querySelector("#request-amount").addEventListener("input", updateAssetRequirement);
document.querySelector("#business-search").addEventListener("input", renderLoans);
document.querySelector("#investment-search").addEventListener("input", renderEquity);
document.querySelector("#equity-amount").addEventListener("input", updateOwnershipEstimate);
document.querySelector("#request-amount").addEventListener("input", updateAssetRequirement);
document.querySelector("#request-assets").addEventListener("input", updateAssetRequirement);
document.querySelector("#sale-amount").addEventListener("input", updateSaleEstimate);
document.querySelector("#sale-price").addEventListener("input", updateSaleEstimate);
document.querySelectorAll("[data-sector]").forEach((button) => button.addEventListener("click", () => {
  selectedSector = button.dataset.sector;
  document.querySelectorAll("[data-sector]").forEach((filter) => {
    const active = filter.dataset.sector === selectedSector;
    filter.classList.toggle("active", active);
    filter.setAttribute("aria-pressed", active ? "true" : "false");
  });
  renderLoans();
  renderEquity();
}));

document.querySelector("#auto-invest-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const rule = {
    sector: String(form.elements.sector.value),
    minRate: Number(form.elements.minRate.value),
    amount: Number(form.elements.amount.value),
    appliedLoanIds: [],
  };
  if (!["real-estate", "green", "local", "tech"].includes(rule.sector) || !Number.isFinite(rule.minRate) || rule.minRate < 1 || rule.minRate > 35 || !Number.isFinite(rule.amount) || rule.amount < 20 || rule.amount > 5000) {
    form.reportValidity();
    return;
  }
  autoInvestRules.unshift(rule);
  const saved = persistAutoInvestRules();
  renderAutoInvestRules();
  form.reset();
  if (saved) showToast("Ο κανόνας αποθηκεύτηκε σε αυτή τη συσκευή. Οι επενδύσεις παραμένουν προσομοιωμένες.");
});

document.querySelector("#tax-year").addEventListener("change", renderTaxStatement);
document.querySelector("#export-tax-statement").addEventListener("click", exportTaxStatement);

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const runRule = target.closest("[data-simulate-rule]");
  if (runRule) {
    const rule = autoInvestRules[Number(runRule.dataset.simulateRule)];
    if (rule) simulateAutoInvest(rule);
  }
  const removeRule = target.closest("[data-remove-rule]");
  if (removeRule) {
    autoInvestRules.splice(Number(removeRule.dataset.removeRule), 1);
    persistAutoInvestRules();
    renderAutoInvestRules();
  }
  const listPosition = target.closest("[data-list-position]");
  if (listPosition) openSaleModal(listPosition.dataset.listPosition);
  const cancelListing = target.closest("[data-cancel-sale]");
  if (cancelListing) {
    const listing = secondaryListings.find((item) => item.id === cancelListing.dataset.cancelSale);
    if (!listing || listing.status !== "open" || listing.sellerId !== "current-user") return;
    listing.status = "cancelled";
    syncAllViews();
    showToast(language === "el" ? "Η αγγελία αποσύρθηκε." : "Listing cancelled.");
  }
  const buyListing = target.closest("[data-buy-listing]");
  if (buyListing) {
    const listing = secondaryListings.find((item) => item.id === buyListing.dataset.buyListing);
    const sourcePosition = positions.find((item) => item.id === listing?.positionId);
    if (!listing || listing.status !== "open" || !sourcePosition || listing.sellerId === "current-user" || sourcePosition.ownerId !== listing.sellerId || listing.amount <= 0 || listing.amount > sourcePosition.amount) {
      showToast(tr("saleUnavailable"));
      syncAllViews();
      return;
    }
    const transferredAmount = listing.amount;
    const loanId = sourcePosition.loanId;
    sourcePosition.amount -= transferredAmount;
    listing.amount = 0;
    listing.status = "sold";
    positions.push({
      id: `position-${Date.now()}-${positions.length}`,
      loanId,
      ownerId: "current-user",
      ownerName: tr("currentDemoInvestor"),
      amount: transferredAmount,
      rate: sourcePosition.rate,
    });
    syncAllViews();
    showToast(tr("saleBought"));
  }
  const invest = target.closest("[data-invest]");
  if (invest) openFundModal(invest.dataset.invest);
  const makeOffer = target.closest("[data-offer]");
  if (makeOffer) openOfferModal(makeOffer.dataset.offer);
  const equity = target.closest("[data-equity]");
  if (equity) openEquityModal(equity.dataset.equity);
  const story = target.closest("[data-story]");
  if (story) {
    activeStory = loans.find((item) => item.id === story.dataset.story) ?? null;
    if (activeStory) {
      document.querySelector("#story-title").textContent = activeStory.company;
      document.querySelector("#story-sector").textContent = sectorLabel(activeStory.sector);
      document.querySelector("#story-purpose").textContent = localized(activeStory, "story");
      document.querySelector("#story-update").textContent = localized(activeStory, "update");
      document.querySelector("#story-demo-note").textContent = tr("sampleContent");
      document.querySelector("#story-modal").showModal();
    }
  }
  const counter = target.closest("[data-counter]");
  if (counter && currentRole === "borrow") openCounterModal(counter.dataset.counter);
  const accept = target.closest("[data-accept]");
  if (accept) {
    const offer = offers.find((item) => item.id === accept.dataset.accept);
    if (!offer || (offer.status === "sent" && currentRole !== "borrow") || (offer.status === "countered" && currentRole !== "lend")) return;
    if (!["sent", "countered"].includes(offer.status)) return;
    const loan = loans.find((item) => item.id === offer.loanId);
    const amount = offer.status === "countered" ? offer.counterAmount : offer.amount;
    const rate = offer.status === "countered" ? offer.counterRate : offer.rate;
    if (!contributeToLoan(loan, amount, rate)) {
      showToast("Δεν απομένει επαρκές ποσό για αυτή την προσφορά.");
      syncAllViews();
      return;
    }
    offer.status = "accepted";
    offer.acceptedAmount = amount;
    offer.acceptedRate = rate;
    investments.set(loan.id, (investments.get(loan.id) || 0) + amount);
    updateBalance();
    syncAllViews();
    showToast(`Η προσφορά έγινε αποδεκτή. Η δοκιμαστική συνεισφορά ${money(amount)} προστέθηκε.`);
  }
  const decline = target.closest("[data-decline]");
  if (decline) {
    const offer = offers.find((item) => item.id === decline.dataset.decline);
    if (!offer || offer.status !== "countered" || currentRole !== "lend") return;
    offer.status = "declined";
    syncAllViews();
    showToast("Η αντιπρόταση απορρίφθηκε στη δοκιμαστική ροή.");
  }
});

document.querySelector("#fund-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const loan = loans.find((item) => item.id === form.dataset.loanId);
  const field = form.elements.amount;
  const amount = Number(field.value);
  if (!loan || !Number.isFinite(amount) || amount < 25 || amount > loanRemaining(loan)) {
    field.setCustomValidity(`Συμπλήρωσε ποσό από 25 € έως ${money(loan ? loanRemaining(loan) : 0)}.`);
    field.reportValidity();
    field.setCustomValidity("");
    return;
  }
  if (!contributeToLoan(loan, amount, loan.rate)) {
    showToast("Το διαθέσιμο υπόλοιπο άλλαξε. Συμπλήρωσε μικρότερο ποσό.");
    return;
  }
  investments.set(loan.id, (investments.get(loan.id) || 0) + amount);
  updateBalance();
  syncAllViews();
  document.querySelector("#fund-modal").close();
  showToast(`Η συνεισφορά ${money(amount)} προστέθηκε δοκιμαστικά. Άλλοι επενδυτές μπορούν να καλύψουν το υπόλοιπο.`);
});

document.querySelector("#equity-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const round = equityRounds.find((item) => item.id === form.dataset.roundId);
  const amount = Number(form.elements.amount.value);
  if (!round || !Number.isFinite(amount) || amount < 25 || amount > loanRemaining(round)) {
    form.reportValidity();
    return;
  }
  round.funded += amount;
  equityInvestments.set(round.id, (equityInvestments.get(round.id) || 0) + amount);
  transactions.push({
    date: new Date().toISOString().slice(0, 10),
    project: round.title,
    type: "equity contribution",
    amount,
    rate: 0,
  });
  const ownership = amount / round.amount * round.equityPercent;
  updateBalance();
  syncAllViews();
  document.querySelector("#equity-modal").close();
  showToast(`Δοκιμαστική επένδυση ${money(amount)} · ${ownership.toFixed(4)}% ενδεικτική συμμετοχή.`);
});

document.querySelector("#offer-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const loan = loans.find((item) => item.id === form.dataset.loanId);
  const amount = Number(form.elements.amount.value);
  const rate = Number(form.elements.rate.value);
  if (!loan || !Number.isFinite(amount) || !Number.isFinite(rate) || amount < 25 || amount > loanRemaining(loan) || rate < 1 || rate > 35) {
    form.reportValidity();
    return;
  }
  offers.unshift({ id: `offer-${Date.now()}`, loanId: loan.id, amount, rate, status: "sent" });
  syncAllViews();
  form.reset();
  document.querySelector("#offer-modal").close();
  switchView("requests");
  showToast(`Η προσφορά ${money(amount)} με επιτόκιο ${rate.toFixed(1)}% ετησίως στάλθηκε δοκιμαστικά.`);
});

document.querySelector("#counter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const offer = offers.find((item) => item.id === form.dataset.offerId);
  const loan = loans.find((item) => item.id === offer?.loanId);
  const amount = Number(form.elements.amount.value);
  const rate = Number(form.elements.rate.value);
  if (!offer || !loan || offer.status !== "sent" || !Number.isFinite(amount) || !Number.isFinite(rate) || amount < 25 || amount > loanRemaining(loan) || rate < 1 || rate > 35) {
    form.reportValidity();
    return;
  }
  offer.counterAmount = amount;
  offer.counterRate = rate;
  offer.status = "countered";
  syncAllViews();
  document.querySelector("#counter-modal").close();
  showToast("Η αντιπρόταση στάλθηκε δοκιμαστικά. Ο επενδυτής μπορεί να την αποδεχτεί ή να την απορρίψει.");
});

document.querySelector("#request-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const request = {
    id: `request-${Date.now()}`,
    name: String(data.get("name")).trim(),
    company: String(data.get("company")).trim(),
    sector: String(data.get("sector")),
    purpose: String(data.get("purpose")).trim(),
    amount: Number(data.get("amount")),
    backingAssets: Number(data.get("assets")),
    assetType: String(data.get("assetType")).trim(),
    rate: Number(data.get("rate")),
    term: Number(data.get("term")),
    category: "business",
  };
  if (!request.name || !request.company || !request.purpose || !request.assetType || !["real-estate", "green", "local", "tech"].includes(request.sector) || !Number.isFinite(request.amount) || request.amount < 10000 || request.amount > 50000 || !Number.isFinite(request.backingAssets) || request.backingAssets < request.amount * MIN_ASSET_COVERAGE || !Number.isFinite(request.rate) || request.rate < 1 || request.rate > 35) {
    updateAssetRequirement();
    form.reportValidity();
    return;
  }
  const initials = request.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();
  loans.unshift({
    ...request,
    initials,
    location: "Ελλάδα",
    title: request.purpose,
    description: `Δοκιμαστικό αίτημα χρηματοδότησης της επιχείρησης ${request.company}.`,
    funded: 0,
    art: "art-studio",
    mark: initials[0],
    label: `${request.company} · ΝΕΟΦΥΗΣ ΕΠΙΧΕΙΡΗΣΗ`,
    owner: "current-user",
    risk: { paymentMissRate: 12, freeCashFlow: 0, historyMonths: 0, documentScore: 0, verified: false },
  });
  userRequests.unshift(request);
  syncAllViews();
  form.reset();
  updateAssetRequirement();
  document.querySelector("#request-modal").close();
  setRole("borrow");
  switchView("borrower-requests");
  showToast("Το δοκιμαστικό αίτημα εμφανίζεται στον χώρο της επιχείρησης.");
});

document.querySelector("#sale-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const position = positions.find((item) => item.id === form.dataset.positionId);
  const amount = Number(form.elements.amount.value);
  const pricePercent = Number(form.elements.price.value);
  const available = position ? Math.max(position.amount - listedPositionAmount(position.id), 0) : 0;
  if (!position || position.ownerId !== "current-user" || !Number.isFinite(amount) || amount < 25 || amount % 25 !== 0 || amount > available || !Number.isFinite(pricePercent) || pricePercent < 50 || pricePercent > 120) {
    form.reportValidity();
    return;
  }
  secondaryListings.unshift({
    id: `secondary-${Date.now()}-${secondaryListings.length}`,
    positionId: position.id,
    sellerId: "current-user",
    sellerName: tr("currentDemoInvestor"),
    amount,
    pricePercent,
    status: "open",
  });
  syncAllViews();
  document.querySelector("#sale-modal").close();
  showToast(tr("saleListed"));
});

const taxYear = document.querySelector("#tax-year");
const thisYear = new Date().getFullYear();
taxYear.innerHTML = Array.from({ length: 6 }, (_, index) => thisYear - index)
  .map((year) => `<option value="${year}">${year}</option>`).join("");
syncAllViews();
applyLanguage();
setRole("lend");
initializeBackend();
