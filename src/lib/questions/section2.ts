import type { Section } from "./types";

export const section2: Section = {
  index: 2,
  title: { el: "11-20", en: "11-20" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q11",
      section: 2,
      text: {
        el: "Προτιμώ να χτίζω τη στιβαρή \"μηχανή\" που τρέχει στο υπόβαθρο, παρά το όμορφο περιβάλλον που βλέπει ο χρήστης.",
        en: "I prefer building robust backend systems over beautiful user interfaces"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 18, mobile: 12, datasci: 10 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, dataeng: 10, security: 8 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, frontend: 10, product: 8 }, t: { systems: 8, creative: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, product: 10 }, t: { creative: 12, product: 12 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 14, product: 12 }, t: { creative: 16, product: 12 } }
      ]
    },
    {
      id: "q12",
      section: 2,
      text: {
        el: "Όταν πιάνω στα χέρια μου μια νέα συσκευή, η πρώτη μου σκέψη είναι να μάθω πώς λειτουργεί εσωτερικά στο πιο χαμηλό επίπεδο.",
        en: "With new tech, I first want to understand how it works internally"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 20, datasci: 14, research: 12 }, t: { analytical: 16, research: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 16, datasci: 14, dataeng: 10 }, t: { analytical: 14, research: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 12, dataeng: 10, backend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 10, mobile: 10 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, embedded: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Νιώθω μεγάλη ικανοποίηση όταν αυτοματοποιώ μια επαναλαμβανόμενη εργασία, ακόμα κι αν αφιερώσω ώρες για να το πετύχω.",
        en: "I enjoy automating repetitive tasks, even if it takes many hours"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 18, embedded: 16, mobile: 10 }, t: { systems: 14, research: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, embedded: 14, devops: 12 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, qa: 10, embedded: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 14, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q14",
      section: 2,
      text: {
        el: "Έχω την τάση να αμφισβητώ τους κανόνες και να ψάχνω \"παραθυράκια\" σε οποιοδήποτε σύστημα συναντώ.",
        en: "I tend to question rules and look for loopholes in systems"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, research: 14, frontend: 10 }, t: { people: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, research: 12, backend: 10 }, t: { people: 12, product: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, qa: 10, devops: 8 }, t: { people: 8, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 14, security: 10, ml: 10 }, t: { analytical: 10, systems: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, research: 12, security: 10 }, t: { systems: 12, research: 10 } }
      ]
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "Προτιμώ να εργάζομαι με στοιχεία που έχουν αυστηρή δομή παρά με ακατάστατες πληροφορίες από διάφορες πηγές.",
        en: "I prefer structured data over messy information from multiple sources"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 18, embedded: 14, qa: 12 }, t: { adversarial: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 16, qa: 14, embedded: 10 }, t: { adversarial: 12, ops: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 10, security: 10, backend: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 14, product: 12 }, t: { creative: 12, product: 12 } }
      ]
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Με εκνευρίζει φοβερά όταν μια εφαρμογή καθυστερεί να ανταποκριθεί, έστω και για ελάχιστα δευτερόλεπτα.",
        en: "App delay, even tiny, drives me crazy"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 18, security: 14, research: 12 }, t: { systems: 12, research: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 16, security: 12, dataeng: 10 }, t: { systems: 12, research: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 12, devops: 10, ml: 10 }, t: { analytical: 10, research: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, backend: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 14, product: 12 }, t: { creative: 12, product: 12 } }
      ]
    },
    {
      id: "q17",
      section: 2,
      text: {
        el: "Με συναρπάζει η μελέτη των μαθηματικών θεωρημάτων και η αναζήτηση της απόλυτης αλήθειας πίσω από μια έννοια.",
        en: "I love studying mathematical proofs and absolute truth"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, product: 14, dataeng: 10 }, t: { creative: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 16, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, backend: 10, qa: 8 }, t: { creative: 10, ops: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 12, security: 10 }, t: { ops: 12, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 16, security: 14 }, t: { ops: 14, adversarial: 12 } }
      ]
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Θέλω να σχεδιάζω την \"αρχιτεκτονική\" μιας λύσης στο χαρτί πριν ξεκινήσω την υλοποίηση.",
        en: "I prefer designing architecture on paper before building"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 20, research: 14, dataeng: 12 }, t: { analytical: 16, research: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 16, research: 12, datasci: 12 }, t: { analytical: 14, research: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 12, dataeng: 10, backend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 14, product: 12 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Στις ομαδικές εργασίες αναλαμβάνω φυσικά τον ρόλο του παρουσιαστή που πείθει τους άλλους.",
        en: "In teamwork, I naturally take the role of the presenter"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 18, backend: 14, mobile: 12 }, t: { systems: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 16, backend: 12, security: 10 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 12, devops: 10, dataeng: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q20",
      section: 2,
      text: {
        el: "Δίνω τεράστια σημασία στην πρώτη εντύπωση και στη συναισθηματική εμπειρία που νιώθει κάποιος.",
        en: "First impression and emotional experience matter hugely to me"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, mobile: 14, frontend: 12 }, t: { product: 14, people: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 12, mobile: 10 }, t: { product: 12, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, product: 10, mobile: 8 }, t: { product: 10, people: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 12, devops: 10, dataeng: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 12, security: 10 }, t: { systems: 12, ops: 10 } }
      ]
    }
  ]
};
