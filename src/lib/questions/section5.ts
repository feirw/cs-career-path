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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 11, backend: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 8, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 8, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, devops: 14, embedded: 10, security: 8, dataeng: 6, ml: 4, datasci: 3, qa: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, devops: 11, embedded: 8, security: 6, dataeng: 5, ml: 3, datasci: 3, qa: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, devops: 6, embedded: 5, security: 5, dataeng: 4, ml: 3, datasci: 3, frontend: 3, qa: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, backend: 14, ml: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, backend: 11, ml: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 8, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, backend: 6, ml: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 8, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, qa: 14, embedded: 10, security: 8, dataeng: 6, ml: 4, datasci: 3, devops: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, qa: 11, embedded: 8, security: 6, dataeng: 5, ml: 3, datasci: 3, devops: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, qa: 6, embedded: 5, security: 5, dataeng: 4, ml: 3, datasci: 3, frontend: 3, devops: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, datasci: 5, backend: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, datasci: 6, backend: 5, ml: 2, dataeng: 1, research: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, backend: 14, dataeng: 10, devops: 8, datasci: 6, security: 4, embedded: 3, qa: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 14, backend: 11, dataeng: 8, devops: 6, datasci: 5, security: 3, embedded: 3, qa: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 8, backend: 6, dataeng: 5, devops: 5, datasci: 4, security: 3, embedded: 3, frontend: 3, qa: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q46",
      section: 5,
      text: {
        el: "Μου αρέσει να διατηρώ πολλά πράγματα στο μυαλό μου και να δω τη μεγάλη εικόνα",
        en: "Like keeping lots in mind and seeing big picture"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, product: 14, dataeng: 10, devops: 8, datasci: 6, security: 4, ml: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, product: 11, dataeng: 8, devops: 6, datasci: 5, security: 3, ml: 3, embedded: 8, qa: 2, mobile: 1, frontend: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, product: 6, dataeng: 5, devops: 5, datasci: 4, security: 3, ml: 3, frontend: 3, embedded: 8, qa: 2, mobile: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, backend: 1, product: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, embedded: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, backend: 1, product: 1, devops: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 11, backend: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 8, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 8, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 14, mobile: 10, backend: 8, datasci: 6, dataeng: 4, ml: 3, devops: 3, embedded: 8, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 11, mobile: 8, backend: 6, datasci: 5, dataeng: 3, ml: 3, devops: 2, embedded: 8, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 8, frontend: 6, mobile: 5, backend: 5, datasci: 4, dataeng: 3, devops: 3, ml: 2, embedded: 8, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 18, backend: 14, security: 10, dataeng: 8, ml: 6, datasci: 4, embedded: 3, qa: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 14, backend: 11, security: 8, dataeng: 6, ml: 5, datasci: 3, embedded: 3, qa: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 8, backend: 6, security: 5, dataeng: 5, ml: 4, datasci: 3, embedded: 3, frontend: 3, qa: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 11, backend: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 8, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 8, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 5, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 5, devops: 1, security: 1, qa: 1 } }
      ]
    }
  ]
};
