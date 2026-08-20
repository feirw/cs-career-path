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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, embedded: 14, frontend: 10, devops: 8, dataeng: 6, security: 4, datasci: 3, qa: 3, ml: 2, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, embedded: 11, frontend: 8, devops: 6, dataeng: 5, security: 3, datasci: 3, qa: 2, ml: 2, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, embedded: 6, frontend: 5, devops: 5, dataeng: 4, security: 3, datasci: 3, qa: 3, ml: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 18, embedded: 14, backend: 10, security: 8, dataeng: 6, devops: 4, datasci: 3, ml: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 14, embedded: 11, backend: 8, security: 6, dataeng: 5, devops: 3, datasci: 3, ml: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 8, embedded: 6, backend: 5, security: 5, dataeng: 4, devops: 3, datasci: 3, frontend: 3, ml: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 11, backend: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 2, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 2, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, backend: 14, ml: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, backend: 11, ml: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 2, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, backend: 6, ml: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 2, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 12, mobile: 10, backend: 6, datasci: 4, dataeng: 3, ml: 3, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 9, mobile: 8, backend: 5, datasci: 3, dataeng: 3, ml: 2, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 8, frontend: 5, mobile: 5, backend: 5, datasci: 4, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 12, mobile: 10, backend: 6, datasci: 4, dataeng: 3, ml: 3, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 9, mobile: 8, backend: 5, datasci: 3, dataeng: 3, ml: 2, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 8, frontend: 5, mobile: 5, backend: 5, datasci: 4, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, security: 14, embedded: 10, devops: 8, dataeng: 6, qa: 4, datasci: 3, ml: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, security: 11, embedded: 8, devops: 6, dataeng: 5, qa: 3, datasci: 3, ml: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, security: 6, embedded: 5, devops: 5, dataeng: 4, qa: 3, datasci: 3, frontend: 3, ml: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q28",
      section: 3,
      text: {
        el: "Τα χρήματα είναι πολύ σημαντικά — θέλω μια καλή αμοιβόμενη δουλειά.",
        en: "Money is very important—want good salary"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, devops: 14, product: 10, ml: 8, dataeng: 6, security: 4, datasci: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, devops: 11, product: 8, ml: 6, dataeng: 5, security: 3, datasci: 3, embedded: 2, qa: 2, mobile: 1, frontend: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, devops: 6, product: 5, ml: 5, dataeng: 4, security: 3, datasci: 3, frontend: 3, embedded: 2, qa: 2, mobile: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 8, research: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, product: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, research: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, product: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 18, research: 14, backend: 10, devops: 8, dataeng: 6, security: 4, datasci: 3, ml: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 14, research: 11, backend: 8, devops: 6, dataeng: 5, security: 3, datasci: 3, ml: 2, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 8, research: 6, backend: 5, devops: 5, dataeng: 4, security: 3, datasci: 3, frontend: 3, ml: 2, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, research: 14, ml: 10, embedded: 8, dataeng: 6, security: 4, datasci: 3, devops: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, research: 11, ml: 8, embedded: 6, dataeng: 5, security: 3, datasci: 3, devops: 2, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, research: 6, ml: 5, embedded: 5, dataeng: 4, security: 3, datasci: 3, frontend: 3, devops: 2, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    }
  ]
};
