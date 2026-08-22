import type { Section } from "./types";

export const section5: Section = {
  index: 5,
  title: { el: "41-50", en: "41-50" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q41",
      section: 5,
      text: {
        el: "Θέλω η δουλειά μου να εκμεταλλεύεται τις φυσικές ιδιότητες του περιβάλλοντος (π.χ. κίνηση, τοποθεσία, ήχο).",
        en: "My work should leverage physical properties (motion, location, sound)"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 10, datasci: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 6 }, t: { research: 8, analytical: 6 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 14, mobile: 12 }, t: { creative: 14, product: 12 } }
      ]
    },
    {
      id: "q42",
      section: 5,
      text: {
        el: "Μου αρέσει να αποσυναρμολογώ λογικά ένα πρόβλημα μέχρι να φτάσω στο πιο θεμελιώδες δομικό του στοιχείο.",
        en: "I enjoy decomposing problems to their fundamental building blocks"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 16, mobile: 12, datasci: 10 }, t: { systems: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, devops: 10, embedded: 8 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, devops: 8, security: 6 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q43",
      section: 5,
      text: {
        el: "Προτιμώ να διαμορφώνω το όραμα και τις προτεραιότητες μιας ομάδας παρά να εκτελώ τις οδηγίες άλλων.",
        en: "I prefer shaping team vision over executing orders"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, dataeng: 10 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 12, ml: 10, dataeng: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, dataeng: 6 }, t: { research: 8, analytical: 6 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q44",
      section: 5,
      text: {
        el: "Με συναρπάζει η ιδέα των αυτόνομων ρομπότ που κινούνται και λαμβάνουν αποφάσεις στον πραγματικό κόσμο.",
        en: "Fascinated by autonomous robots making decisions in the real world"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 16, qa: 14, datasci: 10 }, t: { systems: 12, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, qa: 10, embedded: 8 }, t: { systems: 10, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, qa: 8, embedded: 6 }, t: { systems: 8, ops: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q45",
      section: 5,
      text: {
        el: "Μου αρέσει να μετατρέπω έναν ακατάστατο \"ωκεανό\" από στοιχεία σε μια καθαρή, δομημένη βάση.",
        en: "I love turning messy data oceans into clean, structured databases"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, backend: 14, devops: 10 }, t: { analytical: 14, systems: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 14, backend: 10, devops: 8 }, t: { analytical: 12, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 10, backend: 8, devops: 6 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q46",
      section: 5,
      text: {
        el: "Θέλω ο χρήστης να νιώθει χαρά, άνεση και οικειότητα από το πρώτο δευτερόλεπτο που αλληλεπιδρά με τη δουλειά μου.",
        en: "Users should feel joy and comfort from first interaction with my work"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, backend: 14, dataeng: 10 }, t: { product: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, backend: 10, dataeng: 8 }, t: { product: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 10, backend: 8, dataeng: 6 }, t: { product: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 12, security: 10, qa: 8 }, t: { systems: 10, ops: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, security: 12, qa: 10 }, t: { systems: 12, ops: 10 } }
      ]
    },
    {
      id: "q47",
      section: 5,
      text: {
        el: "Με ενδιαφέρει η μυστικότητα και η κρυπτογράφηση μηνυμάτων ώστε να μην μπορεί κανείς ενδιάμεσος να τα διαβάσει.",
        en: "I care about encryption and ensuring no intermediary can read messages"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 12, ml: 10, backend: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 6 }, t: { research: 8, analytical: 6 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q48",
      section: 5,
      text: {
        el: "Απολαμβάνω τη διαδικασία του να \"στρεσάρω\" κάτι στα όριά του για να δω πότε και πώς θα σπάσει.",
        en: "I enjoy stress-testing systems to find their breaking points"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, product: 14, datasci: 10 }, t: { creative: 14, people: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, product: 10, mobile: 8 }, t: { creative: 12, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, product: 8, mobile: 6 }, t: { creative: 10, people: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 12, devops: 10, embedded: 8 }, t: { systems: 10, ops: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, devops: 12, embedded: 10 }, t: { systems: 12, ops: 10 } }
      ]
    },
    {
      id: "q49",
      section: 5,
      text: {
        el: "Θέλω να γνωρίζω πώς να στήσω μια υποδομή που να αντέχει εκατομμύρια ταυτόχρονους χρήστες χωρίς να καταρρεύσει.",
        en: "I want to architect infrastructure for millions of concurrent users"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 16, security: 14, mobile: 12 }, t: { ops: 14, systems: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 14, security: 10, backend: 8 }, t: { ops: 12, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 10, security: 8, backend: 6 }, t: { ops: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q50",
      section: 5,
      text: {
        el: "Μου αρέσει να εμβαθύνω στις μαθηματικές πιθανότητες και τη στατιστική.",
        en: "I love diving deep into mathematical probability and statistics"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, research: 14, datasci: 10 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 14, research: 10, datasci: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 10, research: 8, datasci: 6 }, t: { research: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } }
      ]
    }
  ]
};
