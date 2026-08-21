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
        el: "Προτιμώ να δουλεύω με άγνωστα προβλήματα χωρίς σαφείς απαντήσεις.",
        en: "Prefer working with unknowns and no clear answers"
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
        el: "Με ενδιαφέρει καθαρή αρχιτεκτονική και δεν ανέχομαι χαοτικές δομές.",
        en: "Clear architecture interests me; chaos bothers me"
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
        el: "Η προσωπική ανάπτυξή μου έχει προτεραιότητα έναντι της προώθησης σταδιοδρομίας.",
        en: "Personal growth matters more than career advancement"
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
        el: "Ο αναγνώσιμος κώδικας με ενδιαφέρει περισσότερο από έξυπνες λύσεις.",
        en: "Readable code matters more than clever solutions"
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
        el: "Δεν με νοιάζει αν ένα εργαλείο είναι δημοφιλές—αν λύνει το πρόβλημα, το χρησιμοποιώ.",
        en: "Don't care if tool is popular—if it solves it, I use it"
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
        el: "Μου αρέσει να κρατώ πολλά στο μυαλό μου και να δω το σύνολο.",
        en: "Like juggling complexity and seeing the big picture"
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
        el: "Ανυπομονώ να δουλέψω σε κάτι που δεν έχει γίνει ποτέ πριν.",
        en: "Excited to work on something never done before"
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
        el: "Θέλω να δω κατευθείαν τις συνέπειες της δουλειάς μου στους χρήστες.",
        en: "Want to see my work's impact directly on users"
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
        el: "Θέλω συστήματα που δουλεύουν αξιόπιστα 24/7 χωρίς διακοπές.",
        en: "Systems must work reliably 24/7 without interruption"
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
        el: "Τελικά, επιλέγω δουλειά που με εμπνέει και με ενθουσιάζει κυρίως.",
        en: "Ultimately, choose work that excites and inspires me"
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
