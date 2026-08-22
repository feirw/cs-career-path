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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, mobile: 19, datasci: 50 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 18, dataeng: 35, security: 45 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 18, frontend: 22, product: 21 }, t: { systems: 8, creative: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 9 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 16, product: 9 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 50, datasci: 50, research: 46 }, t: { analytical: 16, research: 18 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 50, datasci: 50, dataeng: 35 }, t: { analytical: 14, research: 16 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 50, dataeng: 35, backend: 18 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, embedded: 38 }, t: { creative: 12, product: 7 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 50, embedded: 38, mobile: 19 }, t: { systems: 14, research: 18 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 18, embedded: 38, devops: 44 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 18, qa: 53, embedded: 38 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 7 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 21, research: 46, frontend: 22 }, t: { people: 14, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 21, research: 46, backend: 18 }, t: { people: 12, product: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 18, qa: 53, devops: 44 }, t: { people: 8, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 38, security: 45, ml: 50 }, t: { analytical: 10, systems: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 38, research: 46, security: 45 }, t: { systems: 12, research: 16 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 45, embedded: 38, qa: 53 }, t: { adversarial: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 45, qa: 53, embedded: 38 }, t: { adversarial: 12, ops: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 53, security: 45, backend: 18 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 9 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 38, security: 45, research: 46 }, t: { systems: 12, research: 18 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 38, security: 45, dataeng: 35 }, t: { systems: 12, research: 16 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 35, devops: 44, ml: 50 }, t: { analytical: 10, research: 12 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, backend: 18, mobile: 19 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 9 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, product: 21, dataeng: 35 }, t: { creative: 14, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 22, backend: 18, qa: 53 }, t: { creative: 10, ops: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, embedded: 38, security: 45 }, t: { ops: 12, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 38, security: 45 }, t: { ops: 14, adversarial: 12 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 50, research: 46, dataeng: 35 }, t: { analytical: 16, research: 18 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 50, research: 46, datasci: 50 }, t: { analytical: 14, research: 18 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 50, dataeng: 35, backend: 18 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 7 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, backend: 18, mobile: 19 }, t: { systems: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 44, backend: 18, security: 45 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 18, devops: 44, dataeng: 35 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, product: 21 }, t: { creative: 12, product: 7 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 21, mobile: 19, frontend: 22 }, t: { product: 10, people: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 21, frontend: 22, mobile: 19 }, t: { product: 9, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 22, product: 21, mobile: 19 }, t: { product: 7, people: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, devops: 44, dataeng: 35 }, t: { systems: 10, analytical: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 38, security: 45 }, t: { systems: 12, ops: 10 } }
      ]
    }
  ]
};
