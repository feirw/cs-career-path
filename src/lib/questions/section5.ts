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
        el: "Προτιμώ να δουλεύω σε έναν τομέα όπου έχει πολλά άγνωστα και δεν υπάρχουν σαφείς απαντήσεις.",
        en: "Prefer area with unknowns and no clear answers"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 20, ml: 14, datasci: 8 }, t: { research: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 10, backend: 6 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, product: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 7, qa: 5 }, t: { systems: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 12, devops: 8 }, t: { systems: 10 } }
      ]
    },
    {
      id: "q42",
      section: 5,
      text: {
        el: "Με ενδιαφέρει να δουλεύω όπου έχει καθαρή αρχιτεκτονική και δεν είναι χαοτικό.",
        en: "Like working where architecture is clear, not chaotic"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, embedded: 12, devops: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, embedded: 8, qa: 5 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, mobile: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 7, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 6 }, t: { creative: 9 } }
      ]
    },
    {
      id: "q43",
      section: 5,
      text: {
        el: "Χαίρομαι περισσότερο για τη δική μου προσωπική ανάπτυξη παρά για την προώθηση σταδιοδρομίας.",
        en: "Happy more about personal growth than career advancement"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 16, ml: 12, embedded: 8 }, t: { research: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 11, ml: 8, backend: 5 }, t: { analytical: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, dataeng: 3 }, t: { ops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { product: 10, frontend: 7, mobile: 4 }, t: { people: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 18, frontend: 12, mobile: 8 }, t: { people: 10 } }
      ]
    },
    {
      id: "q44",
      section: 5,
      text: {
        el: "Προτιμώ ένα σύστημα που είναι αναγνώσιμο και κατανοητό παρά ένα που είναι «έξυπνο».",
        en: "Prefer readable system over clever system"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 14, qa: 12, frontend: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 10, qa: 8, embedded: 5 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 5, dataeng: 3 }, t: { analytical: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { ml: 10, research: 7, datasci: 4 }, t: { research: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { ml: 18, research: 12, datasci: 8 }, t: { research: 10 } }
      ]
    },
    {
      id: "q45",
      section: 5,
      text: {
        el: "Δεν με ενδιαφέρει πόσο είναι γνωστό το εργαλείο — αν λύνει το πρόβλημα, το χρησιμοποιώ.",
        en: "Don't care if tool is known—if it solves problem, use it"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 14, backend: 10, dataeng: 6 }, t: { analytical: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 10, backend: 7, research: 4 }, t: { analytical: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 5, security: 3 }, t: { ops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { devops: 10, qa: 7, embedded: 5 }, t: { ops: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 18, security: 12, embedded: 8 }, t: { ops: 10 } }
      ]
    },
    {
      id: "q46",
      section: 5,
      text: {
        el: "Μου αρέσει να διατηρώ πολλά πράγματα στο μυαλό μου και να δω τα μεγάλα πατήματα.",
        en: "Like keeping lots in mind and seeing big picture"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, product: 12, dataeng: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, product: 8, datasci: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 5, qa: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, embedded: 7, security: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, embedded: 12, security: 8 }, t: { creative: 10 } }
      ]
    },
    {
      id: "q47",
      section: 5,
      text: {
        el: "Θα ήθελα να κάνω κάτι που δεν έχει γίνει πριν, ακόμη κι αν είναι δύσκολο.",
        en: "Like doing something never done before, even if hard"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 12, backend: 6 }, t: { research: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 13, ml: 9, datasci: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, mobile: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { devops: 10, qa: 7, embedded: 4 }, t: { ops: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 18, embedded: 12, security: 6 }, t: { ops: 9 } }
      ]
    },
    {
      id: "q48",
      section: 5,
      text: {
        el: "Θέλω να επηρεάσω ανθρώπους και να δω τα αποτελέσματα της δουλειάς μου πάνω τους.",
        en: "Want to influence people and see results on them"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 12, mobile: 8 }, t: { people: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 12, frontend: 8, backend: 4 }, t: { people: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, research: 3 }, t: { analytical: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 7, security: 4 }, t: { systems: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, security: 12, research: 6 }, t: { systems: 10 } }
      ]
    },
    {
      id: "q49",
      section: 5,
      text: {
        el: "Θέλω το σύστημά μου να δουλεύει 24/7 χωρίς να χρειάζεται παρέμβαση ή επιτήρηση.",
        en: "Want system working 24/7 without intervention"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 18, backend: 12, security: 8 }, t: { ops: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 13, backend: 9, dataeng: 5 }, t: { ops: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 5, frontend: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 7, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 8 }, t: { creative: 10 } }
      ]
    },
    {
      id: "q50",
      section: 5,
      text: {
        el: "Εν κατακλείδι: αν ήταν να επιλέξω, θα ήθελα μια δουλειά που μ' ενθουσιάζει πάνω από όλα.",
        en: "Ultimately: would choose exciting work above all else"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 16, ml: 12, frontend: 8 }, t: { research: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 11, ml: 8, datasci: 5 }, t: { research: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 5, qa: 3 }, t: { ops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, embedded: 7, security: 4 }, t: { systems: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 12, devops: 8 }, t: { systems: 10 } }
      ]
    }
  ]
};
