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
        el: "Με ανησυχεί η ιδέα ότι κάτι μπορεί να σπάσει απρόσμενα ή να χάσουμε δεδομένα.",
        en: "Worried about unexpected failures or data loss"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 18, backend: 14, dataeng: 12, qa: 10, security: 8, embedded: 4, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 14, backend: 11, dataeng: 9, qa: 8, security: 6, embedded: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 8, backend: 6, dataeng: 5, qa: 5, security: 4, embedded: 3, datasci: 3, frontend: 3, mobile: 2, ml: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q12",
      section: 2,
      text: {
        el: "Χαίρομαι όταν βρίσκω ένα bug που κανείς άλλος δεν είδε ή δεν περίμενε.",
        en: "Happy finding bugs nobody else expected"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 18, security: 14, backend: 10, devops: 8, embedded: 6, dataeng: 4, research: 4, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 14, security: 11, backend: 8, devops: 6, embedded: 5, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 8, security: 6, backend: 5, devops: 5, embedded: 4, dataeng: 3, research: 3, frontend: 3, datasci: 2, ml: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Σκέφτομαι πώς να κάνω κάτι να χωρέσει σε πολύ περιορισμένο χώρο ή υπό δύσκολες συνθήκες.",
        en: "Think about fitting things in very limited space or constraints"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 18, mobile: 14, backend: 10, dataeng: 8, devops: 6, security: 4, datasci: 3, qa: 3, ml: 2, frontend: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 14, mobile: 11, backend: 8, dataeng: 6, devops: 5, security: 3, datasci: 3, qa: 2, ml: 2, frontend: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 8, mobile: 6, backend: 5, dataeng: 5, devops: 4, datasci: 3, security: 3, frontend: 3, qa: 2, ml: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, datasci: 6, backend: 5, mobile: 4, dataeng: 3, ml: 2, devops: 1, embedded: 1, research: 1, security: 1, qa: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, datasci: 8, backend: 5, research: 4, dataeng: 2, ml: 2, embedded: 1, mobile: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q14",
      section: 2,
      text: {
        el: "Με ενδιαφέρει περισσότερο να κατανοώ τη θεωρία παρά να κτίσω γρήγορα κάτι πρακτικό.",
        en: "More interested in understanding theory than building quickly"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10, datasci: 8, dataeng: 6, embedded: 4, security: 3, qa: 3, devops: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 11, backend: 8, datasci: 6, dataeng: 5, embedded: 3, security: 3, qa: 2, devops: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 5, datasci: 5, dataeng: 4, embedded: 3, security: 3, frontend: 3, qa: 2, devops: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "Μου αρέσει να δοκιμάζω διάφορες τεχνικές και να σύγκρίνω ποια δίνει τα καλύτερα αποτελέσματα.",
        en: "Like trying different techniques and comparing results"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, datasci: 14, research: 10, dataeng: 8, backend: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 14, datasci: 11, research: 8, dataeng: 6, backend: 5, security: 3, devops: 3, embedded: 2, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 8, datasci: 6, research: 5, dataeng: 5, backend: 4, devops: 3, security: 3, frontend: 3, embedded: 2, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, dataeng: 2, datasci: 2, ml: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Θέλω η δουλειά μου να αξιολογείται με συγκεκριμένα κριτήρια, όχι μόνο γνώμες.",
        en: "Want work evaluated by specific criteria, not just opinions"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 18, backend: 14, datasci: 10, devops: 8, dataeng: 6, security: 4, ml: 3, embedded: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 14, backend: 11, datasci: 8, devops: 6, dataeng: 5, security: 3, ml: 3, embedded: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 8, backend: 6, datasci: 5, devops: 5, dataeng: 4, security: 3, ml: 3, frontend: 3, embedded: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q17",
      section: 2,
      text: {
        el: "Η ροή δεδομένων από την προέλευσή τους έως την τελική τους χρήση με ενδιαφέρει.",
        en: "Interested in data flow from source to final use"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 18, backend: 14, ml: 10, datasci: 8, devops: 6, security: 4, qa: 3, mobile: 3, embedded: 2, frontend: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 14, backend: 11, ml: 8, datasci: 6, devops: 5, security: 3, qa: 3, mobile: 2, embedded: 2, frontend: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 8, backend: 6, ml: 5, datasci: 5, devops: 4, security: 3, qa: 3, frontend: 3, mobile: 2, embedded: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
      ]
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Μου αρέσει όταν βλέπω αμέσως τα αποτελέσματα της δουλειάς μου αντί να περιμένω λίγες ώρες.",
        en: "Like seeing immediate results of my work vs. waiting hours"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 18, mobile: 14, product: 10, backend: 8, datasci: 6, dataeng: 4, devops: 3, ml: 3, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, mobile: 11, product: 8, backend: 6, datasci: 5, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 8, mobile: 6, product: 5, backend: 5, datasci: 4, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, dataeng: 6, security: 5, qa: 4, datasci: 3, ml: 2, embedded: 1, research: 1, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, devops: 10, dataeng: 8, research: 6, security: 5, qa: 3, datasci: 2, ml: 2, embedded: 1, frontend: 1, mobile: 1, product: 1 } }
      ]
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Προτιμώ να δουλεύω πάνω σε πολύ δύσκολα και αφηρημένα προβλήματα που λίγοι κατανοούν.",
        en: "Prefer difficult abstract problems few understand"
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
      id: "q20",
      section: 2,
      text: {
        el: "Σκέφτομαι πώς θα επικοινωνήσω μια περίπλοκη τεχνική ιδέα σε κάποιον που δεν έχει τεχνική κατάρτιση.",
        en: "Think about explaining complex ideas to non-technical people"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 12, datasci: 8, backend: 6, mobile: 6, dataeng: 4, ml: 3, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, frontend: 9, datasci: 6, backend: 5, mobile: 5, dataeng: 3, ml: 2, devops: 2, embedded: 1, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 8, frontend: 5, datasci: 5, backend: 5, mobile: 4, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
      ]
    }
  ]
};
