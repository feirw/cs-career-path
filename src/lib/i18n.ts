export type Locale = "el" | "en";

/** Ένα κείμενο σε δύο γλώσσες. A single string in both languages. */
export type LS = { el: string; en: string };

export function t(value: LS, locale: Locale): string {
  return value[locale];
}

export const DEFAULT_LOCALE: Locale = "el";

export const ui = {
  appName: { el: "CS Career Path", en: "CS Career Path" },
  /** Ο τίτλος σπάει σε δύο ελεγχόμενες γραμμές αντί να τυλίγεται μόνος του. */
  taglineLead: { el: "Βρες το μονοπάτι σου", en: "Find your path" },
  taglineTail: { el: "στην πληροφορική", en: "in tech" },
  heroLead: {
    el: "Διάλεξε πόσο βαθιά θέλεις να πας. Χωρίς εγγραφή, χωρίς email. Στο τέλος παίρνεις κατάταξη σε 12 καριέρες, το προφίλ σου και ένα roadmap για να ξεκινήσεις.",
    en: "Choose how deep you want to go. No signup, no email. You get a ranking across 12 careers, your trait profile and a roadmap to get started.",
  },
  /** Μία πρόταση που εξηγεί τη δουλειά της σελίδας, πάνω από τη γραμμή του folder. */
  heroJob: {
    el: "Απαντάς για το πώς σκέφτεσαι και δουλεύεις, και βλέπεις ποιες από τις 12 κατευθύνσεις σου ταιριάζουν — με roadmap για να ξεκινήσεις.",
    en: "Answer how you think and work, then see which of the 12 directions fit you — with a roadmap to get started.",
  },
  stepAnswer: { el: "Απαντάς αυθόρμητα", en: "Answer on instinct" },
  stepSee: { el: "Βλέπεις το προφίλ σου", en: "See your profile" },
  stepPlan: { el: "Παίρνεις roadmap", en: "Get a roadmap" },
  noSignup: { el: "Χωρίς εγγραφή", en: "No signup" },
  // Επιλογή τεστ
  chooseTest: { el: "Διάλεξε τεστ", en: "Choose your test" },
  shortTest: { el: "Γρήγορο τεστ", en: "Quick test" },
  fullTest: { el: "Πλήρες τεστ", en: "Full test" },
  shortTestLead: {
    el: "20 γρήγορες ερωτήσεις που απαντιούνται με το ένστικτο, σε 2-3 λεπτά. Δίνει μια χοντρική εικόνα: ποιες κατευθύνσεις σε αγγίζουν.",
    en: "20 quick questions you answer on instinct, in 2-3 minutes. It gives a rough read: which directions speak to you.",
  },
  fullTestLead: {
    el: "100 σενάρια από πραγματική δουλειά: τι θα έκανες όταν κάτι σπάει, τι θυσιάζεις, τι αντέχεις. Ξεκαθαρίζει την κατεύθυνση.",
    en: "100 scenarios from real work: what you'd do when things break, what you'd sacrifice, what you can live with. It settles the direction.",
  },
  /** Μία γραμμή προδιαγραφών κάτω από κάθε κουμπί, ώστε η διαφορά να είναι σαφής. */
  fullTestSpec: {
    el: "ξεκάθαρη κατεύθυνση",
    en: "a clear direction",
  },
  shortTestSpec: {
    el: "μια πρώτη εικόνα",
    en: "a first impression",
  },
  shortTestNote: {
    el: "Υποτυπώδες αποτέλεσμα — καλό για να ξεκινήσεις τη σκέψη.",
    en: "A rough result — good for getting your thinking started.",
  },
  fullTestNote: {
    el: "Το αποτέλεσμα που πρέπει να πάρεις στα σοβαρά.",
    en: "The result worth taking seriously.",
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
  // Results
  yourTop: { el: "Το καλύτερο ταίριασμά σου", en: "Your best match" },
  basedOnShort: {
    el: "Με βάση το σύντομο τεστ των 20 ερωτήσεων",
    en: "Based on the 20-question quick test",
  },
  basedOnFull: {
    el: "Με βάση το πλήρες τεστ των 100 ερωτήσεων",
    en: "Based on the full 100-question test",
  },
  shortResultWarning: {
    el: "Αυτό είναι μια πρώτη εικόνα, όχι συμπέρασμα. Το σύντομο τεστ ρωτάει το ένστικτό σου σε 20 ερωτήσεις, οπότε οι κοντινές καριέρες μπερδεύονται εύκολα. Το πλήρες τεστ έχει άλλες 100 ερωτήσεις, με σενάρια από πραγματική δουλειά — εκεί βγαίνει καθαρή απάντηση.",
    en: "This is a first impression, not a conclusion. The quick test asks your instinct across 20 questions, so neighbouring careers blur easily. The full test is a different set of 100 scenario questions — that's where a clear answer comes from.",
  },
  takeFullTest: { el: "Κάνε το πλήρες τεστ (100 ερωτήσεις)", en: "Take the full test (100 questions)" },
  closeCall: {
    el: "Οι δύο πρώτες καριέρες είναι πολύ κοντά — δεν έχεις μία καθαρή κατεύθυνση, έχεις δύο.",
    en: "Your top two are very close — you don't have one clear direction, you have two.",
  },
  clearDirection: {
    el: "Η πρώτη ξεχωρίζει καθαρά από τις υπόλοιπες.",
    en: "Your top match stands clearly apart from the rest.",
  },
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
  certifications: { el: "Πιστοποιήσεις για συνεντεύξεις", en: "Certifications for interviews" },
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
