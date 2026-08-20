import type { Section } from "./types";

export const section3: Section = {
  index: 3,
  title: { el: "21-30", en: "21-30" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q21",
      section: 3,
      text: {
        el: "Καταλαβαίνω έξι μήνες αργότερα ότι θα έπρεπε να είχα δημιουργήσει κάτι πολύ διαφορετικά.",
        en: "Realize later should have built it differently"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 8, backend: 12, devops: 10 }, t: { analytical: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 5, backend: 8, mobile: 4 }, t: { creative: 5 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 4, dataeng: 3 }, t: { ops: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 8, devops: 6, security: 4 }, t: { systems: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 14, research: 10, devops: 6 }, t: { research: 8 } }
      ]
    },
    {
      id: "q22",
      section: 3,
      text: {
        el: "Είμαι πολύ σχολαστικός με τις λεπτομέρειες και τις edge cases.",
        en: "Very meticulous about details and edge cases"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 18, embedded: 12, backend: 8 }, t: { systems: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 12, embedded: 8, security: 5 }, t: { systems: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 4, devops: 3 }, t: { ops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 7, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, product: 6 }, t: { creative: 9 } }
      ]
    },
    {
      id: "q23",
      section: 3,
      text: {
        el: "Μου αρέσει να ερευνώ κάτι που δεν έχει γίνει πριν ή δεν είναι καλά κατανοητό.",
        en: "Like researching what hasn't been done before"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 20, ml: 12, datasci: 8 }, t: { research: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 9, backend: 4 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, product: 3 }, t: { creative: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 7, frontend: 4 }, t: { systems: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, devops: 10, frontend: 6 }, t: { systems: 9 } }
      ]
    },
    {
      id: "q24",
      section: 3,
      text: {
        el: "Μου αρέσει να κτίσω κάτι καλό ακόμα κι αν δεν θα το χρησιμοποιήσει κανείς.",
        en: "Like building something good even if nobody uses it"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 16, backend: 12, embedded: 8 }, t: { creative: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 11, backend: 8, ml: 5 }, t: { analytical: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 5, qa: 3 }, t: { ops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { product: 11, frontend: 8, mobile: 5 }, t: { people: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 18, frontend: 12, mobile: 8 }, t: { people: 9 } }
      ]
    },
    {
      id: "q25",
      section: 3,
      text: {
        el: "Νοιάζομαι τι θα πει ένας άλλος ανθρωπος για την δουλειά μου.",
        en: "Care what others think about my work"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 14, frontend: 10, mobile: 6 }, t: { people: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 10, frontend: 7, qa: 4 }, t: { people: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, backend: 3 }, t: { analytical: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, research: 7, security: 5 }, t: { systems: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, research: 12, embedded: 8 }, t: { systems: 10 } }
      ]
    },
    {
      id: "q26",
      section: 3,
      text: {
        el: "Προτιμώ να δουλεύω σε ένα μεγάλο ομαδικό project παρά να κάνω ατομικές εργασίες.",
        en: "Prefer large team projects vs. individual tasks"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 16, backend: 10, mobile: 6 }, t: { people: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 11, frontend: 8, backend: 5 }, t: { people: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, devops: 3 }, t: { ops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, backend: 7, research: 4 }, t: { systems: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, research: 12, security: 8 }, t: { systems: 10 } }
      ]
    },
    {
      id: "q27",
      section: 3,
      text: {
        el: "Μετά από ένα σφάλμα, προτιμώ να κατανοώ ακριβώς τι συνέβη παρά να δοκιμάσω λύσεις.",
        en: "Prefer understanding exactly what went wrong vs. trying fixes"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, embedded: 12, security: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, embedded: 8, qa: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 5, product: 3 }, t: { creative: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 7, datasci: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, datasci: 6 }, t: { creative: 10 } }
      ]
    },
    {
      id: "q28",
      section: 3,
      text: {
        el: "Τα χρήματα είναι πολύ σημαντικά, θέλω μια καλά αμοιβόμενη δουλειά.",
        en: "Money is very important—want good salary"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 8, backend: 10, devops: 8 }, t: { ops: 7 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 6, backend: 7, frontend: 4 }, t: { people: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, datasci: 3 }, t: { analytical: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { research: 8, mobile: 6, ml: 4 }, t: { research: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { research: 14, ml: 10, embedded: 6 }, t: { research: 8 } }
      ]
    },
    {
      id: "q29",
      section: 3,
      text: {
        el: "Προτιμώ ένα ήρεμο γραφείο παρά έναν ανταγωνιστικό περιβάλλον.",
        en: "Prefer calm office vs. competitive environment"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 14, research: 10, backend: 6 }, t: { systems: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 10, backend: 7, dataeng: 4 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, devops: 3 }, t: { ops: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 7, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, product: 6 }, t: { creative: 9 } }
      ]
    },
    {
      id: "q30",
      section: 3,
      text: {
        el: "Χαίρομαι πραγματικά όταν επιλύω ένα πολύπλοκο πρόβλημα μόνος μου.",
        en: "Really happy solving a complex problem alone"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 14, research: 12, embedded: 8 }, t: { systems: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 10, research: 8, ml: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 5, frontend: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { product: 10, frontend: 8, mobile: 4 }, t: { people: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 16, frontend: 12, mobile: 8 }, t: { people: 9 } }
      ]
    }
  ]
};
