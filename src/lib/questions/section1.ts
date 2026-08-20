import type { Section } from "./types";

export const section1: Section = {
  index: 1,
  title: { el: "1-10", en: "1-10" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q01",
      section: 1,
      text: {
        el: "Δοκιμάζω διάφορες προσεγγίσεις γρήγορα για να δω τι δουλεύει, αντί να σχεδιάζω προσεκτικά πρώτα.",
        en: "I try different approaches quickly vs. plan carefully first"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 18, mobile: 10, product: 8, backend: 3, datasci: 2, ml: 2, dataeng: 1, devops: 1, embedded: 1, security: 1, qa: 2, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, mobile: 8, product: 6, backend: 5, datasci: 3, ml: 2, dataeng: 2, devops: 2, embedded: 1, security: 1, qa: 3, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 8, mobile: 4, backend: 8, product: 4, datasci: 4, ml: 2, dataeng: 3, devops: 2, embedded: 2, security: 2, qa: 2, research: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, qa: 6, security: 5, dataeng: 4, research: 4, frontend: 2, mobile: 2, datasci: 2, ml: 2, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 10, research: 8, security: 6, dataeng: 5, qa: 4, datasci: 3, ml: 3, product: 2, frontend: 1, mobile: 1 } }
      ]
    },
    {
      id: "q02",
      section: 1,
      text: {
        el: "Με ενοχλεί αν κάτι δεν 'αισθάνεται' σωστό ή δεν φαίνεται όπως το φαντάστηκα.",
        en: "Bothered when something doesn't 'feel' right or look right"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 18, product: 10, mobile: 8, qa: 4, backend: 3, datasci: 2, ml: 2, dataeng: 1, devops: 1, embedded: 1, security: 1, research: 2 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, product: 8, mobile: 6, qa: 5, backend: 4, datasci: 2, ml: 2, dataeng: 2, devops: 1, embedded: 1, security: 2, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 8, backend: 7, mobile: 4, product: 4, datasci: 4, devops: 3, qa: 3, embedded: 2, dataeng: 2, ml: 2, security: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, embedded: 7, devops: 6, security: 5, research: 5, dataeng: 4, qa: 3, datasci: 3, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, research: 8, devops: 7, dataeng: 6, security: 5, qa: 3, datasci: 3, ml: 3, frontend: 1, mobile: 1, product: 1 } }
      ]
    },
    {
      id: "q03",
      section: 1,
      text: {
        el: "Σκέφτομαι πώς θα κλιμακώσει ένα σύστημα όταν αναλαμβάνει εκατομμύρια χρήστες.",
        en: "I think about system scaling with millions of users"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, dataeng: 14, devops: 12, mobile: 4, datasci: 3, ml: 2, embedded: 2, frontend: 2, security: 2, qa: 2, product: 2, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, dataeng: 11, devops: 9, mobile: 5, datasci: 4, security: 3, ml: 2, embedded: 2, frontend: 2, qa: 2, product: 2, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, dataeng: 6, devops: 5, frontend: 5, product: 4, datasci: 4, security: 3, mobile: 3, ml: 2, qa: 2, embedded: 1, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, dataeng: 4, backend: 4, datasci: 3, ml: 2, embedded: 2, research: 2, qa: 1, devops: 1, security: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, research: 5, backend: 3, datasci: 2, ml: 2, dataeng: 1, embedded: 1, qa: 1, devops: 1, security: 1 } }
      ]
    },
    {
      id: "q04",
      section: 1,
      text: {
        el: "Χαίρομαι όταν ανακαλύπτω ένα pattern στα δεδομένα που κανείς άλλος δεν είδε.",
        en: "Happy when discovering hidden patterns in data"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 18, ml: 14, research: 10, dataeng: 8, backend: 4, product: 3, mobile: 2, frontend: 2, devops: 2, embedded: 1, security: 1, qa: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { datasci: 14, ml: 11, research: 8, dataeng: 6, backend: 4, product: 3, frontend: 2, mobile: 2, devops: 2, embedded: 1, security: 1, qa: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 8, ml: 6, dataeng: 5, research: 4, backend: 4, frontend: 4, product: 3, mobile: 2, devops: 2, embedded: 2, security: 2, qa: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, embedded: 4, datasci: 2, ml: 2, dataeng: 2, devops: 2, security: 2, qa: 1, research: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, embedded: 10, product: 8, backend: 5, mobile: 4, dataeng: 2, datasci: 1, ml: 1, research: 2, devops: 2, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q05",
      section: 1,
      text: {
        el: "Με νοιάζει η κατανάλωση μπαταρίας, μνήμης και άλλων πόρων.",
        en: "Concerned about battery, memory, and resource consumption"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, embedded: 16, devops: 8, backend: 6, dataeng: 4, security: 3, qa: 3, datasci: 2, ml: 2, frontend: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { mobile: 14, embedded: 13, devops: 6, backend: 5, dataeng: 4, security: 3, qa: 3, datasci: 2, ml: 2, frontend: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 8, embedded: 7, devops: 5, backend: 5, dataeng: 4, datasci: 3, frontend: 3, security: 3, qa: 2, ml: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 4, backend: 5, datasci: 4, dataeng: 3, ml: 2, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, backend: 6, datasci: 5, ml: 4, research: 4, devops: 2, dataeng: 2, mobile: 1, embedded: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q06",
      section: 1,
      text: {
        el: "Με ελκύει η ιδέα ότι ένα σύστημα μπορεί να 'μάθει' και να προσαρμόζεται.",
        en: "Attracted to systems that learn and adapt"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, datasci: 14, research: 10, dataeng: 8, backend: 5, devops: 3, mobile: 2, frontend: 2, embedded: 1, security: 1, qa: 1, product: 2 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 14, datasci: 11, research: 8, dataeng: 6, backend: 4, devops: 3, frontend: 2, mobile: 2, embedded: 1, security: 1, qa: 1, product: 2 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 8, datasci: 6, research: 5, dataeng: 4, backend: 4, frontend: 4, product: 3, devops: 3, mobile: 2, embedded: 2, security: 2, qa: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 8, backend: 6, frontend: 5, mobile: 4, security: 3, qa: 3, dataeng: 2, datasci: 2, ml: 1, product: 1, research: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, devops: 10, backend: 8, security: 5, qa: 4, dataeng: 3, frontend: 2, mobile: 2, datasci: 1, ml: 1, research: 1, product: 1 } }
      ]
    },
    {
      id: "q07",
      section: 1,
      text: {
        el: "Σκέφτομαι αμέσως τι μπορεί να πάει στραβά ή πώς θα εκμεταλλευόταν κάποιος ένα σύστημα.",
        en: "Think immediately about what could go wrong or be exploited"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 18, qa: 14, devops: 10, backend: 8, dataeng: 4, embedded: 4, research: 3, datasci: 2, ml: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 14, qa: 11, devops: 8, backend: 6, embedded: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { security: 8, qa: 6, devops: 5, backend: 5, dataeng: 4, embedded: 3, research: 3, frontend: 3, datasci: 2, ml: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 3, devops: 1, dataeng: 1, embedded: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q08",
      section: 1,
      text: {
        el: "Με ενδιαφέρει η ιστορία πίσω από τα δεδομένα — τι αποκαλύπτουν και γιατί.",
        en: "Interested in the story behind data and its insights"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 18, product: 12, research: 10, ml: 8, backend: 4, dataeng: 4, frontend: 3, mobile: 2, devops: 2, embedded: 1, security: 1, qa: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { datasci: 14, product: 9, research: 8, ml: 6, backend: 4, dataeng: 4, frontend: 3, mobile: 2, devops: 2, embedded: 1, security: 1, qa: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 8, product: 6, research: 5, ml: 4, backend: 4, dataeng: 4, frontend: 3, devops: 3, mobile: 2, embedded: 2, security: 2, qa: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 8, backend: 6, frontend: 5, mobile: 4, security: 3, qa: 3, dataeng: 2, datasci: 1, ml: 1, product: 1, research: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, devops: 10, backend: 8, security: 5, mobile: 4, qa: 3, dataeng: 2, datasci: 1, ml: 1, product: 1, research: 1, frontend: 1 } }
      ]
    },
    {
      id: "q09",
      section: 1,
      text: {
        el: "Μου αρέσει να αυτοματοποιώ επαναληπτικές διαδικασίες έτσι ώστε να μη χρειάζονται ανθρώπινη παρέμβαση.",
        en: "Like automating repetitive tasks to eliminate human intervention"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 18, dataeng: 14, ml: 10, backend: 8, security: 4, qa: 4, embedded: 3, datasci: 3, frontend: 2, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 14, dataeng: 11, ml: 8, backend: 6, security: 4, qa: 4, embedded: 3, datasci: 3, frontend: 2, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 8, dataeng: 6, ml: 5, backend: 5, security: 4, qa: 3, embedded: 3, datasci: 3, frontend: 3, product: 2, mobile: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, security: 1, qa: 1, devops: 1, research: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q10",
      section: 1,
      text: {
        el: "Με ενδιαφέρει να συνδέσω μια τεχνική λύση με τις πραγματικές ανάγκες των χρηστών.",
        en: "Connect technical solutions with real user needs"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 12, datasci: 8, backend: 6, mobile: 6, dataeng: 3, ml: 3, devops: 2, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 9, datasci: 6, backend: 5, mobile: 5, dataeng: 3, ml: 2, devops: 2, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 8, frontend: 5, datasci: 5, backend: 5, mobile: 4, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 8, backend: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, devops: 10, backend: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, product: 1, frontend: 1, mobile: 1 } }
      ]
    }
  ]
};
