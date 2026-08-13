export type Locale = "el" | "en";

/** Ένα κείμενο σε δύο γλώσσες. A single string in both languages. */
export type LS = { el: string; en: string };

export function t(value: LS, locale: Locale): string {
  return value[locale];
}

export const DEFAULT_LOCALE: Locale = "el";

export const ui = {
  appName: { el: "CS Career Path", en: "CS Career Path" },
  tagline: {
    el: "Βρες ποιο μονοπάτι της πληροφορικής σου ταιριάζει",
    en: "Find the tech career path that fits you",
  },
  heroLead: {
    el: "50 ερωτήσεις, ~8 λεπτά. Χωρίς εγγραφή, χωρίς email. Στο τέλος παίρνεις κατάταξη σε 12 καριέρες, το προφίλ σου και ένα roadmap για να ξεκινήσεις.",
    en: "50 questions, ~8 minutes. No signup, no email. You get a ranking across 12 careers, your trait profile and a roadmap to get started.",
  },
  startTest: { el: "Ξεκίνα το τεστ", en: "Start the test" },
  resumeTest: { el: "Συνέχισε από εκεί που έμεινες", en: "Resume where you left off" },
  startOver: { el: "Ξεκίνα από την αρχή", en: "Start over" },
  questions: { el: "ερωτήσεις", en: "questions" },
  minutes: { el: "λεπτά", en: "minutes" },
  careersCount: { el: "καριέρες", en: "careers" },
  anonymous: { el: "100% ανώνυμο", en: "100% anonymous" },
  next: { el: "Επόμενη", en: "Next" },
  back: { el: "Πίσω", en: "Back" },
  finish: { el: "Δες τα αποτελέσματα", en: "See my results" },
  submitting: { el: "Υπολογισμός...", en: "Calculating..." },
  page: { el: "Ενότητα", en: "Section" },
  of: { el: "από", en: "of" },
  answered: { el: "απαντήθηκαν", en: "answered" },
  answerAllOnPage: {
    el: "Απάντησε όλες τις ερωτήσεις αυτής της ενότητας για να συνεχίσεις.",
    en: "Answer every question in this section to continue.",
  },
  technical: { el: "Τεχνική", en: "Technical" },
  nonTechnical: { el: "Προσωπικότητα", en: "Personality" },
  // Results
  yourTop: { el: "Το καλύτερο ταίριασμά σου", en: "Your best match" },
  topThree: { el: "Οι 3 κορυφαίες καριέρες σου", en: "Your top 3 careers" },
  allCareers: { el: "Κατάταξη και στις 12 καριέρες", en: "Ranking across all 12 careers" },
  match: { el: "ταίριασμα", en: "match" },
  yourProfile: { el: "Το προφίλ σου", en: "Your profile" },
  profileLead: {
    el: "Πώς κατανέμονται οι απαντήσεις σου στις 8 διαστάσεις που μετράει το τεστ.",
    en: "How your answers spread across the 8 dimensions the test measures.",
  },
  roadmap: { el: "Roadmap", en: "Roadmap" },
  techToLearn: { el: "Τεχνολογίες να μάθεις", en: "Technologies to learn" },
  coursesToTake: { el: "Μαθήματα / γνώσεις", en: "Courses / knowledge" },
  portfolioProjects: { el: "Projects για portfolio", en: "Portfolio projects" },
  juniorMarket: { el: "Junior αγορά", en: "Junior market" },
  dayToDay: { el: "Η καθημερινότητα", en: "Day to day" },
  downloadPdf: { el: "Κατέβασε PDF", en: "Download PDF" },
  copyLink: { el: "Αντίγραψε link", en: "Copy link" },
  linkCopied: { el: "Το link αντιγράφηκε!", en: "Link copied!" },
  retake: { el: "Ξανακάνε το τεστ", en: "Retake the test" },
  disclaimer: {
    el: "Το τεστ είναι εργαλείο αυτογνωσίας, όχι πρόβλεψη. Οι καριέρες επικαλύπτονται και αλλάζουν — χρησιμοποίησέ το σαν αφετηρία, όχι σαν απόφαση.",
    en: "This test is a self-reflection tool, not a prediction. These careers overlap and evolve — treat it as a starting point, not a verdict.",
  },
  resultNotFound: { el: "Το αποτέλεσμα δεν βρέθηκε", en: "Result not found" },
  resultNotFoundLead: {
    el: "Ίσως το link είναι λάθος ή το αποτέλεσμα διαγράφηκε.",
    en: "The link may be wrong or the result was deleted.",
  },
  // Admin
  adminTitle: { el: "Στατιστικά υποβολών", en: "Submission statistics" },
  adminLogin: { el: "Είσοδος διαχειριστή", en: "Admin login" },
  password: { el: "Κωδικός", en: "Password" },
  login: { el: "Είσοδος", en: "Log in" },
  logout: { el: "Έξοδος", en: "Log out" },
  wrongPassword: { el: "Λάθος κωδικός.", en: "Wrong password." },
} satisfies Record<string, LS>;

export type UiKey = keyof typeof ui;
