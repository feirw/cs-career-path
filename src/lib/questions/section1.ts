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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 20, mobile: 8, product: 2 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 12, mobile: 5, backend: 3 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 5, research: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 6, embedded: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, devops: 12, embedded: 8 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 18, product: 10, qa: 4 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 12, product: 7, mobile: 3 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 4, datasci: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 8, devops: 5, embedded: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, research: 6 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 20, dataeng: 14, devops: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, dataeng: 10, mobile: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 4, product: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, product: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 8, product: 2 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 20, ml: 12, research: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { datasci: 14, ml: 9, dataeng: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 4, devops: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, embedded: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 14, embedded: 10, qa: 4 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, embedded: 16, devops: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { mobile: 12, embedded: 11, backend: 3 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 4, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 5, datasci: 2 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 8, research: 2 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 20, datasci: 12, research: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 14, datasci: 9, dataeng: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 5, frontend: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 6, frontend: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, devops: 10, qa: 4 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 20, qa: 12, devops: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 14, qa: 9, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 4, research: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, product: 2 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, product: 3 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 18, product: 10, research: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { datasci: 12, product: 7, ml: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, backend: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, mobile: 6, devops: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, devops: 10, qa: 4 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 20, dataeng: 12, ml: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 14, dataeng: 9, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, frontend: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, product: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 10, product: 4 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 20, frontend: 10, datasci: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 8, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 5, dataeng: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 10, devops: 6, qa: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, devops: 10, research: 6 } }
      ]
    }
  ]
};
