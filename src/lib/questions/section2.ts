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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 18, backend: 12, qa: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 12, backend: 9, security: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 5, dataeng: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, product: 2 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, research: 3 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 20, security: 12, embedded: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 14, security: 9, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, devops: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, product: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 10, product: 4 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 20, mobile: 12, backend: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 14, mobile: 9, dataeng: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { security: 5, qa: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 6, datasci: 2 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 10, research: 3 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 20, ml: 12, datasci: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 9, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, devops: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 6, product: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 10, product: 6 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, datasci: 12, research: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 12, datasci: 9, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, mobile: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { devops: 10, qa: 6, embedded: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 18, embedded: 10, qa: 4 } }
      ]
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Με ενοχλεί όταν η αξιολόγηση ή η ποιότητα ενός έργου γίνεται μόνο ποιοτικά (υποκειμενικά).",
        en: "Bothered when quality judgment is purely subjective"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, qa: 12, datasci: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, qa: 9, devops: 5 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 5, research: 4 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, mobile: 7, product: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 10, mobile: 6 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 20, backend: 12, ml: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 14, backend: 9, datasci: 5 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, devops: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 11, mobile: 7, product: 3 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 10, embedded: 4 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 20, mobile: 12, product: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, mobile: 9, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, research: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 12, devops: 7, embedded: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 10, research: 6 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 20, ml: 14, backend: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 10, datasci: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, embedded: 4 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, mobile: 8, product: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 10, product: 6 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, frontend: 10, datasci: 6 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 12, frontend: 8, backend: 4 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 5, devops: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 12, backend: 7, devops: 4 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, devops: 10, security: 4 } }
      ]
    }
  ]
};
