import type { LS } from "./i18n";

export const CAREER_IDS = [
  "frontend",
  "backend",
  "mobile",
  "dataeng",
  "datasci",
  "ml",
  "devops",
  "security",
  "qa",
  "embedded",
  "product",
  "research",
] as const;

export type CareerId = (typeof CAREER_IDS)[number];

export type Career = {
  id: CareerId;
  emoji: string;
  /** Χρώμα για μπάρες/κάρτες. Bar & card accent colour. */
  color: string;
  name: LS;
  tagline: LS;
  description: LS;
  dayToDay: LS;
  tech: string[];
  courses: LS[];
  projects: LS[];
  market: LS;
};

export const CAREERS: Career[] = [
  {
    id: "frontend",
    emoji: "🎨",
    color: "#e0568a",
    name: { el: "Frontend Engineer", en: "Frontend Engineer" },
    tagline: {
      el: "Φτιάχνεις αυτό που βλέπει και αγγίζει ο χρήστης.",
      en: "You build the part users actually see and touch.",
    },
    description: {
      el: "Μετατρέπεις σχέδια και ιδέες σε διεπαφές που δουλεύουν σε κάθε οθόνη. Ισορροπείς ανάμεσα στην αισθητική, την ταχύτητα και την προσβασιμότητα, και παίρνεις άμεση ανατροφοδότηση: αν κάτι είναι άσχημο ή αργό, φαίνεται αμέσως.",
      en: "You turn designs and ideas into interfaces that work on every screen. You balance aesthetics, speed and accessibility, and you get instant feedback: if something is ugly or slow, everyone sees it.",
    },
    dayToDay: {
      el: "Υλοποίηση components, code review, συνεννόηση με designer και backend, κυνήγι bugs σε browsers, μέτρηση επιδόσεων.",
      en: "Building components, code review, syncing with designers and backend, chasing browser bugs, measuring performance.",
    },
    tech: ["HTML/CSS", "JavaScript", "TypeScript", "React ή Vue", "Next.js", "Tailwind", "Vite", "Playwright", "Figma"],
    courses: [
      { el: "Προγραμματισμός Ιστού / Web Technologies", en: "Web Technologies" },
      { el: "Αλληλεπίδραση Ανθρώπου-Υπολογιστή (HCI)", en: "Human-Computer Interaction (HCI)" },
      { el: "Γραφικά Υπολογιστών (προαιρετικά)", en: "Computer Graphics (optional)" },
    ],
    projects: [
      { el: "Ένα dashboard με πραγματικά δεδομένα από δημόσιο API", en: "A dashboard fed by a real public API" },
      { el: "Clone γνωστού UI (Spotify/Airbnb) με έμφαση στο responsive", en: "Clone a known UI (Spotify/Airbnb) focusing on responsiveness" },
      { el: "Component library με documentation και tests", en: "A component library with docs and tests" },
    ],
    market: {
      el: "Πολλές θέσεις junior, έντονος ανταγωνισμός. Ξεχωρίζεις με portfolio που δείχνει προσβασιμότητα και επιδόσεις, όχι μόνο ωραία χρώματα.",
      en: "Plenty of junior roles, heavy competition. You stand out with a portfolio that shows accessibility and performance, not just nice colours.",
    },
  },
  {
    id: "backend",
    emoji: "⚙️",
    color: "#4f7ce0",
    name: { el: "Backend Engineer", en: "Backend Engineer" },
    tagline: {
      el: "Χτίζεις τη μηχανή πίσω από την εφαρμογή.",
      en: "You build the engine behind the application.",
    },
    description: {
      el: "Σχεδιάζεις APIs, μοντέλα δεδομένων και τη λογική που κρατάει το σύστημα σωστό όταν το χρησιμοποιούν χιλιάδες άνθρωποι ταυτόχρονα. Η δουλειά σου κρίνεται σε ορθότητα, ταχύτητα και στο τι γίνεται όταν κάτι πάει στραβά.",
      en: "You design APIs, data models and the logic that keeps a system correct when thousands of people hit it at once. Your work is judged on correctness, latency and what happens when things go wrong.",
    },
    dayToDay: {
      el: "Σχεδιασμός endpoints, queries σε βάσεις, caching, ουρές μηνυμάτων, logging, debugging production incidents.",
      en: "Designing endpoints, database queries, caching, message queues, logging, debugging production incidents.",
    },
    tech: ["Java/Kotlin, C#, Go, Python ή Node.js", "SQL (PostgreSQL)", "REST & gRPC", "Redis", "Kafka/RabbitMQ", "Docker", "OpenAPI"],
    courses: [
      { el: "Βάσεις Δεδομένων", en: "Databases" },
      { el: "Δομές Δεδομένων & Αλγόριθμοι", en: "Data Structures & Algorithms" },
      { el: "Κατανεμημένα Συστήματα", en: "Distributed Systems" },
      { el: "Λειτουργικά Συστήματα", en: "Operating Systems" },
    ],
    projects: [
      { el: "REST API με authentication, rate limiting και tests", en: "A REST API with auth, rate limiting and tests" },
      { el: "URL shortener ή booking system με σωστό σχεσιακό σχεδιασμό", en: "A URL shortener or booking system with a proper relational schema" },
      { el: "Load test που δείχνει πού σπάει το σύστημά σου", en: "A load test showing where your system breaks" },
    ],
    market: {
      el: "Η πιο σταθερή ζήτηση από όλες τις κατηγορίες, σε κάθε μέγεθος εταιρείας. Οι junior θέσεις είναι πολλές αλλά ζητούν στέρεες βάσεις σε SQL και δομές δεδομένων.",
      en: "The steadiest demand of all categories, at every company size. Junior roles are plentiful but expect solid SQL and data-structure fundamentals.",
    },
  },
  {
    id: "mobile",
    emoji: "📱",
    color: "#9b5de5",
    name: { el: "Mobile Developer", en: "Mobile Developer" },
    tagline: {
      el: "Γράφεις για τη συσκευή που έχουν όλοι στην τσέπη.",
      en: "You write for the device everyone carries.",
    },
    description: {
      el: "Φτιάχνεις εφαρμογές για iOS ή Android, με περιορισμούς που δεν έχει το web: μπαταρία, offline λειτουργία, άδειες, app stores. Το αποτέλεσμα είναι πολύ απτό — το κρατάς στο χέρι σου.",
      en: "You build iOS or Android apps under constraints the web doesn't have: battery, offline mode, permissions, app stores. The result is tangible — you hold it in your hand.",
    },
    dayToDay: {
      el: "UI σε native ή cross-platform framework, διαχείριση κατάστασης, συγχρονισμός με backend, δοκιμές σε συσκευές, υποβολές στα stores.",
      en: "Native or cross-platform UI, state management, syncing with a backend, on-device testing, store submissions.",
    },
    tech: ["Kotlin + Jetpack Compose", "Swift + SwiftUI", "React Native ή Flutter", "SQLite/Room", "Firebase", "REST/GraphQL clients"],
    courses: [
      { el: "Προγραμματισμός Κινητών Συσκευών", en: "Mobile Application Development" },
      { el: "Αλληλεπίδραση Ανθρώπου-Υπολογιστή (HCI)", en: "Human-Computer Interaction (HCI)" },
      { el: "Δίκτυα Υπολογιστών", en: "Computer Networks" },
    ],
    projects: [
      { el: "Εφαρμογή που δουλεύει και offline και συγχρονίζεται μετά", en: "An app that works offline and syncs afterwards" },
      { el: "Κάτι που χρησιμοποιεί αισθητήρες: βήματα, GPS, κάμερα", en: "Something using sensors: steps, GPS, camera" },
      { el: "Δημοσίευση μιας μικρής εφαρμογής σε πραγματικό store", en: "Ship one small app to a real store" },
    ],
    market: {
      el: "Λιγότερες αλλά πιο εξειδικευμένες θέσεις από το web. Μια δημοσιευμένη εφαρμογή στο store μετράει περισσότερο από δέκα ημιτελή repos.",
      en: "Fewer but more specialised roles than web. One published app counts more than ten half-finished repos.",
    },
  },
  {
    id: "dataeng",
    emoji: "🚰",
    color: "#00a6a6",
    name: { el: "Data Engineer", en: "Data Engineer" },
    tagline: {
      el: "Χτίζεις τους σωλήνες από όπου ρέουν τα δεδομένα.",
      en: "You build the pipes the data flows through.",
    },
    description: {
      el: "Μαζεύεις δεδομένα από δεκάδες πηγές, τα καθαρίζεις και τα παραδίδεις έγκαιρα και αξιόπιστα σε όποιον τα χρειάζεται. Χωρίς εσένα, οι data scientists δεν έχουν με τι να δουλέψουν.",
      en: "You pull data from dozens of sources, clean it, and deliver it reliably and on time to whoever needs it. Without you, the data scientists have nothing to work with.",
    },
    dayToDay: {
      el: "Σχεδιασμός pipelines, χρονοπρογραμματισμός εργασιών, μοντελοποίηση warehouse, έλεγχοι ποιότητας δεδομένων, κόστος αποθήκευσης.",
      en: "Designing pipelines, scheduling jobs, warehouse modelling, data-quality checks, storage cost.",
    },
    tech: ["SQL (προχωρημένο)", "Python", "Airflow ή Dagster", "dbt", "Spark", "Kafka", "Snowflake/BigQuery", "Docker"],
    courses: [
      { el: "Βάσεις Δεδομένων & Αποθήκες Δεδομένων", en: "Databases & Data Warehousing" },
      { el: "Κατανεμημένα Συστήματα / Big Data", en: "Distributed Systems / Big Data" },
      { el: "Λειτουργικά Συστήματα", en: "Operating Systems" },
    ],
    projects: [
      { el: "Pipeline που τραβάει δεδομένα κάθε μέρα και τα φορτώνει σε warehouse", en: "A pipeline that pulls data daily and loads a warehouse" },
      { el: "Μοντέλο αστεριού (star schema) πάνω σε ανοιχτά δεδομένα", en: "A star schema over an open dataset" },
      { el: "Data quality tests που χτυπάνε καμπανάκι όταν χαλάσει η πηγή", en: "Data-quality tests that alert when a source breaks" },
    ],
    market: {
      el: "Ζήτηση που μεγαλώνει σταθερά και λιγότερος ανταγωνισμός από το data science. Συχνά καλύτερη είσοδος στον χώρο των δεδομένων για έναν απόφοιτο.",
      en: "Steadily growing demand and less competition than data science. Often the easier entry point into data work for a graduate.",
    },
  },
  {
    id: "datasci",
    emoji: "📊",
    color: "#f4a261",
    name: { el: "Data Scientist / Analyst", en: "Data Scientist / Analyst" },
    tagline: {
      el: "Βγάζεις απαντήσεις και αποφάσεις από τα νούμερα.",
      en: "You turn numbers into answers and decisions.",
    },
    description: {
      el: "Ψάχνεις μοτίβα, τρέχεις πειράματα και μεταφράζεις στατιστική σε προτάσεις που καταλαβαίνει η διοίκηση. Το μισό της δουλειάς είναι ανάλυση, το άλλο μισό είναι να πείσεις κάποιον να δράσει.",
      en: "You look for patterns, run experiments and translate statistics into recommendations a business can act on. Half the job is analysis, the other half is convincing someone to act.",
    },
    dayToDay: {
      el: "Ερωτήματα SQL, notebooks, A/B tests, οπτικοποιήσεις, παρουσιάσεις σε μη τεχνικό κοινό.",
      en: "SQL queries, notebooks, A/B tests, visualisations, presenting to non-technical audiences.",
    },
    tech: ["SQL", "Python (pandas, scikit-learn)", "R (προαιρετικά)", "Jupyter", "Tableau/Power BI", "Στατιστική συμπερασματολογία"],
    courses: [
      { el: "Πιθανότητες & Στατιστική", en: "Probability & Statistics" },
      { el: "Μηχανική Μάθηση (εισαγωγικό)", en: "Machine Learning (intro)" },
      { el: "Βάσεις Δεδομένων", en: "Databases" },
      { el: "Οπτικοποίηση Δεδομένων", en: "Data Visualisation" },
    ],
    projects: [
      { el: "Ανάλυση ενός δημόσιου dataset με ξεκάθαρο συμπέρασμα, όχι απλώς γραφήματα", en: "An analysis of a public dataset with a clear conclusion, not just charts" },
      { el: "Σχεδιασμός και ανάλυση ενός A/B test από την αρχή", en: "Design and analyse an A/B test end to end" },
      { el: "Dashboard που θα χρησιμοποιούσε πραγματικά κάποιος", en: "A dashboard someone would actually use" },
    ],
    market: {
      el: "Πολύ δημοφιλής προορισμός, άρα πολύς ανταγωνισμός σε junior επίπεδο. Οι θέσεις «analyst» είναι πιο προσιτές από τις «scientist» για αρχή.",
      en: "A very popular destination, so junior competition is fierce. \"Analyst\" roles are more reachable than \"scientist\" ones at the start.",
    },
  },
  {
    id: "ml",
    emoji: "🤖",
    color: "#7048e8",
    name: { el: "ML / AI Engineer", en: "ML / AI Engineer" },
    tagline: {
      el: "Φτιάχνεις συστήματα που μαθαίνουν από δεδομένα.",
      en: "You build systems that learn from data.",
    },
    description: {
      el: "Εκπαιδεύεις, αξιολογείς και βάζεις σε παραγωγή μοντέλα — από recommendation systems μέχρι εφαρμογές πάνω σε γλωσσικά μοντέλα. Απαιτεί μαθηματικά, αλλά και μηχανική: ένα μοντέλο που δεν σερβίρεται σε κανέναν δεν αξίζει τίποτα.",
      en: "You train, evaluate and ship models — from recommenders to applications built on language models. It takes real maths, but also engineering: a model nobody can call is worth nothing.",
    },
    dayToDay: {
      el: "Προετοιμασία δεδομένων, εκπαίδευση και αξιολόγηση μοντέλων, βελτιστοποίηση, deployment, παρακολούθηση για drift.",
      en: "Data prep, training and evaluating models, optimisation, deployment, monitoring for drift.",
    },
    tech: ["Python", "PyTorch", "scikit-learn", "NumPy", "MLflow", "Vector DBs", "Docker + GPU", "Γραμμική Άλγεβρα"],
    courses: [
      { el: "Γραμμική Άλγεβρα & Λογισμός", en: "Linear Algebra & Calculus" },
      { el: "Πιθανότητες & Στατιστική", en: "Probability & Statistics" },
      { el: "Μηχανική Μάθηση / Βαθιά Μάθηση", en: "Machine Learning / Deep Learning" },
      { el: "Βελτιστοποίηση", en: "Optimisation" },
    ],
    projects: [
      { el: "Μοντέλο εκπαιδευμένο από το μηδέν, με τίμια αξιολόγηση και baseline", en: "A model trained from scratch, honestly evaluated against a baseline" },
      { el: "Εφαρμογή με LLM που κάνει κάτι χρήσιμο, όχι απλώς chat", en: "An LLM app that does something useful, not just chat" },
      { el: "Μοντέλο σε παραγωγή πίσω από API με monitoring", en: "A model in production behind an API with monitoring" },
    ],
    market: {
      el: "Υψηλοί μισθοί και τεράστιο ενδιαφέρον, αλλά λίγες πραγματικά junior θέσεις — πολλές ζητούν μεταπτυχιακό ή δυνατό portfolio.",
      en: "High salaries and huge interest, but few genuinely junior roles — many expect a master's or a strong portfolio.",
    },
  },
  {
    id: "devops",
    emoji: "☁️",
    color: "#2a9d8f",
    name: { el: "DevOps / Cloud Engineer", en: "DevOps / Cloud Engineer" },
    tagline: {
      el: "Κρατάς το σύστημα όρθιο και το deploy βαρετό.",
      en: "You keep the system up and deploys boring.",
    },
    description: {
      el: "Αυτοματοποιείς ό,τι γίνεται: builds, deployments, υποδομή, παρακολούθηση. Σκέφτεσαι σε αξιοπιστία και κόστος, και είσαι αυτός που σηκώνεται όταν χτυπήσει το alert στις 3 τα ξημερώματα.",
      en: "You automate everything you can: builds, deploys, infrastructure, monitoring. You think in reliability and cost, and you're the one who wakes up when the 3am alert fires.",
    },
    dayToDay: {
      el: "CI/CD pipelines, Infrastructure as Code, Kubernetes, dashboards και alerts, post-mortems μετά από incidents.",
      en: "CI/CD pipelines, Infrastructure as Code, Kubernetes, dashboards and alerts, post-mortems after incidents.",
    },
    tech: ["Linux", "Bash/Python", "Docker", "Kubernetes", "Terraform", "AWS ή Azure", "GitHub Actions", "Prometheus/Grafana"],
    courses: [
      { el: "Λειτουργικά Συστήματα", en: "Operating Systems" },
      { el: "Δίκτυα Υπολογιστών", en: "Computer Networks" },
      { el: "Κατανεμημένα Συστήματα", en: "Distributed Systems" },
    ],
    projects: [
      { el: "Ένα app που ανεβαίνει μόνο του με κάθε push (CI/CD από την αρχή)", en: "An app that ships itself on every push (CI/CD from scratch)" },
      { el: "Υποδομή γραμμένη ολόκληρη σε Terraform", en: "Infrastructure fully described in Terraform" },
      { el: "Home lab ή cluster με monitoring και alerts", en: "A home lab or cluster with monitoring and alerts" },
    ],
    market: {
      el: "Σταθερή ζήτηση, αλλά πολύ λίγες καθαρά junior θέσεις: οι περισσότεροι φτάνουν εδώ μετά από 1-2 χρόνια ως developers ή sysadmins.",
      en: "Steady demand but very few pure junior roles: most people arrive after 1-2 years as developers or sysadmins.",
    },
  },
  {
    id: "security",
    emoji: "🛡️",
    color: "#e63946",
    name: { el: "Cybersecurity Engineer", en: "Cybersecurity Engineer" },
    tagline: {
      el: "Σκέφτεσαι σαν επιτιθέμενος για να αμυνθείς σωστά.",
      en: "You think like an attacker so you can defend properly.",
    },
    description: {
      el: "Ψάχνεις αδυναμίες πριν τις βρει κάποιος άλλος, ή στήνεις την άμυνα και απαντάς σε περιστατικά. Απαιτεί βαθιά κατανόηση συστημάτων, υπομονή και ηθική πυξίδα.",
      en: "You look for weaknesses before someone else does, or you build the defence and respond to incidents. It takes deep systems understanding, patience and an ethical compass.",
    },
    dayToDay: {
      el: "Penetration tests, ανάλυση κώδικα, threat modeling, παρακολούθηση logs, απόκριση σε περιστατικά, αναφορές.",
      en: "Penetration tests, code review, threat modelling, log analysis, incident response, reports.",
    },
    tech: ["Linux & δίκτυα", "Burp Suite", "Wireshark", "Python", "Κρυπτογραφία", "OWASP Top 10", "SIEM", "Reverse engineering"],
    courses: [
      { el: "Ασφάλεια Υπολογιστών & Δικτύων", en: "Computer & Network Security" },
      { el: "Κρυπτογραφία", en: "Cryptography" },
      { el: "Λειτουργικά Συστήματα & Δίκτυα", en: "Operating Systems & Networks" },
    ],
    projects: [
      { el: "CTF competitions — είναι το πιο αναγνωρίσιμο portfolio του χώρου", en: "CTF competitions — the most recognised portfolio in this field" },
      { el: "Security audit σε δικό σου project, με γραπτή αναφορά", en: "A security audit of your own project, with a written report" },
      { el: "Home lab με ευάλωτα VMs (HackTheBox, TryHackMe)", en: "A home lab with vulnerable VMs (HackTheBox, TryHackMe)" },
    ],
    market: {
      el: "Μεγάλη ζήτηση και στην Ελλάδα, ιδίως σε τράπεζες, τηλεπικοινωνίες και συμβουλευτικές. Οι πιστοποιήσεις μετράνε εδώ περισσότερο από αλλού.",
      en: "Strong demand, especially in banking, telecom and consulting. Certifications matter more here than in most other paths.",
    },
  },
  {
    id: "qa",
    emoji: "🔍",
    color: "#606c38",
    name: { el: "QA / Test Automation Engineer", en: "QA / Test Automation Engineer" },
    tagline: {
      el: "Βρίσκεις τι σπάει πριν το βρει ο χρήστης.",
      en: "You find what breaks before the user does.",
    },
    description: {
      el: "Σχεδιάζεις πώς ελέγχεται ένα σύστημα και γράφεις τον κώδικα που το ελέγχει αυτόματα. Χρειάζεται προσοχή στη λεπτομέρεια και μια σκέψη «τι θα γινόταν αν...» που δεν την έχουν όλοι.",
      en: "You design how a system gets verified and write the code that verifies it automatically. It needs attention to detail and a \"what if...\" instinct not everyone has.",
    },
    dayToDay: {
      el: "Σχεδιασμός σεναρίων δοκιμών, αυτοματοποίηση, εξέταση bug reports, συνεργασία με developers, CI pipelines δοκιμών.",
      en: "Designing test scenarios, automation, triaging bug reports, working with developers, test CI pipelines.",
    },
    tech: ["Playwright ή Cypress", "Selenium", "JavaScript ή Python", "JUnit/pytest", "Postman", "k6 (load testing)", "CI/CD"],
    courses: [
      { el: "Τεχνολογία Λογισμικού (Software Engineering)", en: "Software Engineering" },
      { el: "Επαλήθευση & Έλεγχος Λογισμικού", en: "Software Verification & Testing" },
      { el: "Βάσεις Δεδομένων", en: "Databases" },
    ],
    projects: [
      { el: "Πλήρες test suite για μια δημόσια εφαρμογή, με CI", en: "A full test suite for a public app, wired into CI" },
      { el: "Αναφορά bug γραμμένη σωστά, με βήματα αναπαραγωγής", en: "A properly written bug report with reproduction steps" },
      { el: "Load test που εντοπίζει το σημείο κατάρρευσης", en: "A load test that finds the breaking point" },
    ],
    market: {
      el: "Από τις πιο προσιτές εισόδους στον κλάδο για απόφοιτο, με σαφή διαδρομή προς automation και μετά προς development ή SDET.",
      en: "One of the most accessible entry points for a graduate, with a clear path into automation and then development or SDET.",
    },
  },
  {
    id: "embedded",
    emoji: "🔌",
    color: "#8d6e63",
    name: { el: "Embedded / Systems Engineer", en: "Embedded / Systems Engineer" },
    tagline: {
      el: "Γράφεις κώδικα που κουνάει πράγματα στον φυσικό κόσμο.",
      en: "You write code that moves things in the physical world.",
    },
    description: {
      el: "Δουλεύεις κοντά στο υλικό: μικροελεγκτές, οδηγοί συσκευών, πυρήνες, firmware. Έχεις λίγη μνήμη, λίγη ενέργεια και καμία ανοχή σε σφάλματα — και ακριβώς αυτό το κάνει ενδιαφέρον.",
      en: "You work close to the metal: microcontrollers, device drivers, kernels, firmware. Little memory, little power and no tolerance for bugs — which is exactly what makes it interesting.",
    },
    dayToDay: {
      el: "C/C++, ανάγνωση datasheets, debugging με osciloscope ή JTAG, βελτιστοποίηση μνήμης, δοκιμές σε πραγματικό υλικό.",
      en: "C/C++, reading datasheets, debugging with a scope or JTAG, memory optimisation, testing on real hardware.",
    },
    tech: ["C", "C++", "Rust (embedded)", "RTOS", "ARM Cortex", "Raspberry Pi / STM32", "Linux kernel", "Πρωτόκολλα I2C/SPI/CAN"],
    courses: [
      { el: "Αρχιτεκτονική Υπολογιστών", en: "Computer Architecture" },
      { el: "Λειτουργικά Συστήματα", en: "Operating Systems" },
      { el: "Ψηφιακή Σχεδίαση / Μικροεπεξεργαστές", en: "Digital Design / Microprocessors" },
      { el: "Συστήματα Πραγματικού Χρόνου", en: "Real-Time Systems" },
    ],
    projects: [
      { el: "Συσκευή IoT που μετράει κάτι και το στέλνει στο δίκτυο", en: "An IoT device that measures something and reports it" },
      { el: "Οδηγός συσκευής ή μια απλή υλοποίηση scheduler", en: "A device driver or a simple scheduler implementation" },
      { el: "Ρομποτάκι ή drone με έλεγχο σε πραγματικό χρόνο", en: "A small robot or drone with real-time control" },
    ],
    market: {
      el: "Λιγότερες θέσεις αλλά και πολύ λιγότεροι υποψήφιοι. Δυνατή στην Ελλάδα σε αμυντική βιομηχανία, ενέργεια, αυτοκίνηση και ναυτιλία.",
      en: "Fewer roles but far fewer candidates. Strong in defence, energy, automotive and maritime sectors.",
    },
  },
  {
    id: "product",
    emoji: "🧭",
    color: "#ff8c42",
    name: { el: "Product Manager (tech)", en: "Product Manager (tech)" },
    tagline: {
      el: "Αποφασίζεις τι αξίζει να φτιαχτεί και γιατί.",
      en: "You decide what is worth building, and why.",
    },
    description: {
      el: "Στέκεσαι ανάμεσα σε χρήστες, μηχανικούς και επιχείρηση. Δεν γράφεις πολύ κώδικα, αλλά χωρίς τεχνικό υπόβαθρο δεν πείθεις τους μηχανικούς και δεν καταλαβαίνεις το κόστος των αποφάσεων. Πουλάς σκεπτικό, όχι εντολές.",
      en: "You sit between users, engineers and the business. You don't write much code, but without a technical background you can't earn engineers' trust or judge the cost of a decision. You sell reasoning, not orders.",
    },
    dayToDay: {
      el: "Συνεντεύξεις χρηστών, προτεραιοποίηση backlog, γραφή προδιαγραφών, μέτρηση αποτελεσμάτων, πολλές συναντήσεις.",
      en: "User interviews, backlog prioritisation, writing specs, measuring outcomes, a lot of meetings.",
    },
    tech: ["SQL (βασικό αλλά απαραίτητο)", "Analytics (GA, Amplitude)", "Figma", "Jira/Linear", "A/B testing", "Γραπτή επικοινωνία"],
    courses: [
      { el: "Τεχνολογία Λογισμικού & Διαχείριση Έργων", en: "Software Engineering & Project Management" },
      { el: "Αλληλεπίδραση Ανθρώπου-Υπολογιστή (HCI)", en: "Human-Computer Interaction (HCI)" },
      { el: "Οικονομικά / Επιχειρηματικότητα", en: "Economics / Entrepreneurship" },
    ],
    projects: [
      { el: "Product teardown: πάρε μια γνωστή εφαρμογή και γράψε τι θα άλλαζες και γιατί", en: "A product teardown: take a known app and argue what you'd change and why" },
      { el: "Ένα δικό σου project με πραγματικούς χρήστες και μετρήσεις", en: "Your own project with real users and measured outcomes" },
      { el: "Γραπτή προδιαγραφή ενός feature με success metrics", en: "A written spec for a feature with success metrics" },
    ],
    market: {
      el: "Σπάνια προσλαμβάνουν junior PM κατευθείαν από τη σχολή. Οι περισσότεροι περνάνε πρώτα 1-3 χρόνια σε τεχνικό ρόλο, σε support ή σε associate PM πρόγραμμα.",
      en: "Junior PMs are rarely hired straight out of university. Most spend 1-3 years in a technical role, support, or an associate PM programme first.",
    },
  },
  {
    id: "research",
    emoji: "🎓",
    color: "#3d5a80",
    name: { el: "Έρευνα / Ακαδημαϊκή καριέρα", en: "Research / Academia" },
    tagline: {
      el: "Δουλεύεις σε προβλήματα που δεν έχουν ακόμα λύση.",
      en: "You work on problems that don't have answers yet.",
    },
    description: {
      el: "Μεταπτυχιακό, διδακτορικό, δημοσιεύσεις, ίσως και βιομηχανικό ερευνητικό εργαστήριο. Απαιτεί αντοχή στην αβεβαιότητα και στην αποτυχία, αγάπη για το διάβασμα και τη γραφή, και μακροχρόνιο ορίζοντα.",
      en: "A master's, a PhD, publications, maybe an industrial research lab. It takes tolerance for uncertainty and failure, a love of reading and writing, and a long time horizon.",
    },
    dayToDay: {
      el: "Ανάγνωση papers, πειράματα, γραφή, αναθεωρήσεις, συνέδρια, διδασκαλία, αιτήσεις για χρηματοδότηση.",
      en: "Reading papers, experiments, writing, revisions, conferences, teaching, funding applications.",
    },
    tech: ["LaTeX", "Python/Julia/C++", "Μαθηματικά σε βάθος", "Πειραματική μεθοδολογία", "Git", "Ακαδημαϊκή γραφή"],
    courses: [
      { el: "Θεωρία Υπολογισμού & Πολυπλοκότητα", en: "Theory of Computation & Complexity" },
      { el: "Προχωρημένοι Αλγόριθμοι", en: "Advanced Algorithms" },
      { el: "Μαθηματικά (άλγεβρα, ανάλυση, πιθανότητες)", en: "Mathematics (algebra, analysis, probability)" },
      { el: "Το ερευνητικό σεμινάριο του τμήματός σου", en: "Your department's research seminar" },
    ],
    projects: [
      { el: "Διπλωματική με πραγματικό ερευνητικό ερώτημα, όχι απλή υλοποίηση", en: "A thesis with a real research question, not just an implementation" },
      { el: "Αναπαραγωγή των αποτελεσμάτων ενός paper και δημοσίευση του κώδικα", en: "Reproduce a paper's results and publish the code" },
      { el: "Βοηθητική δουλειά σε εργαστήριο του τμήματος από νωρίς", en: "Get into a department lab as an assistant early" },
    ],
    market: {
      el: "Χαμηλότερες αποδοχές στην αρχή και ανταγωνιστικές θέσεις, αλλά ανοίγει πόρτες σε ερευνητικά εργαστήρια βιομηχανίας που δεν ανοίγουν αλλιώς.",
      en: "Lower early pay and competitive positions, but it opens doors to industrial research labs that stay closed otherwise.",
    },
  },
];

export const CAREER_BY_ID: Record<CareerId, Career> = Object.fromEntries(
  CAREERS.map((c) => [c.id, c]),
) as Record<CareerId, Career>;
