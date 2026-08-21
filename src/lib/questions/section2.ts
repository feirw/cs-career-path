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
        el: "Ένα πολύ καλό API με άσχημη σύνδεση για τον χρήστη με ενοχλεί περισσότερο από ένα άσχημο API με ωραία σύνδεση.",
        en: "Great API with poor UI bothers me more than poor API with beautiful UI"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, dataeng: 12, devops: 10 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, dataeng: 10, security: 8 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, frontend: 10, product: 8 }, t: { systems: 8, creative: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, product: 10 }, t: { creative: 12, product: 12 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 14, product: 12 }, t: { creative: 16, product: 12 } }
      ]
    },
    {
      id: "q12",
      section: 2,
      text: {
        el: "Αν βρω ένα pattern στα δεδομένα, ήθελα να το καταλάβω μαθηματικά, όχι μόνο να το δω στο γράφημα.",
        en: "Finding patterns in data—I need to understand the maths, not just see the chart"
      },
      options: [
        { id: "a", label: { el: "Πάντα", en: "Always" }, c: { ml: 20, datasci: 14, research: 12 }, t: { analytical: 16, research: 12 } },
        { id: "b", label: { el: "Συχνά", en: "Often" }, c: { ml: 16, datasci: 14, dataeng: 10 }, t: { analytical: 14, research: 10 } },
        { id: "c", label: { el: "Μερικές φορές", en: "Sometimes" }, c: { datasci: 12, dataeng: 10, backend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Σπάνια", en: "Rarely" }, c: { frontend: 12, product: 10, mobile: 10 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Όχι", en: "Never" }, c: { frontend: 16, product: 12, embedded: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Όταν κάτι δεν δουλεύει, θέλω αμέσως να ξέρω ποιο είναι το πρόβλημα και γιατί, όχι απλώς να το 'φτιάξω'.",
        en: "When something breaks, I need to know why, not just fix it"
      },
      options: [
        { id: "a", label: { el: "Πάντα", en: "Always" }, c: { backend: 18, embedded: 16, research: 12 }, t: { systems: 14, research: 12 } },
        { id: "b", label: { el: "Συχνά", en: "Often" }, c: { backend: 16, embedded: 14, devops: 12 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Μερικές φορές", en: "Sometimes" }, c: { backend: 10, qa: 10, embedded: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Σπάνια", en: "Rarely" }, c: { frontend: 12, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Όχι", en: "Never" }, c: { frontend: 14, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q14",
      section: 2,
      text: {
        el: "Ευχαριστιέμαι να εξηγώ στους άλλους πώς λειτουργούν τα πράγματα ή να τους βοηθώ να μάθουν.",
        en: "I enjoy explaining to others how things work or mentoring them"
      },
      options: [
        { id: "a", label: { el: "Πολύ", en: "Very much" }, c: { product: 18, research: 14, frontend: 10 }, t: { people: 14, product: 12 } },
        { id: "b", label: { el: "Αρκετά", en: "Quite a bit" }, c: { product: 14, research: 12, backend: 10 }, t: { people: 12, product: 10 } },
        { id: "c", label: { el: "Λίγο", en: "A little" }, c: { backend: 10, qa: 10, devops: 8 }, t: { people: 8, systems: 8 } },
        { id: "d", label: { el: "Όχι ιδιαίτερα", en: "Not particularly" }, c: { embedded: 14, security: 10, ml: 10 }, t: { analytical: 10, systems: 8 } },
        { id: "e", label: { el: "Προτιμώ να δουλέψω μόνος μου", en: "I prefer solo work" }, c: { embedded: 16, research: 12, security: 10 }, t: { systems: 12, research: 10 } }
      ]
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "Ένα σύστημα που μπορεί να χαλάσει και να βλάψει ανθρώπους με ανησυχεί περισσότερο από ένα που απλώς θα κρεμάσει.",
        en: "A system that could fail and harm people worries me more than one that just crashes"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 18, embedded: 14, qa: 12 }, t: { adversarial: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 16, qa: 14, embedded: 10 }, t: { adversarial: 12, ops: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 10, security: 10, backend: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 14, product: 12 }, t: { creative: 12, product: 12 } }
      ]
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Θέλω να δουλεύω σε έναν τομέα που έχει λίγο ανταγωνισμό και θέλω να είμαι ειδικός, όχι γενικός.",
        en: "I want a niche field where there's less competition and I can be a specialist"
      },
      options: [
        { id: "a", label: { el: "Πολύ σημαντικό", en: "Very important" }, c: { embedded: 18, security: 14, research: 12 }, t: { systems: 12, research: 12 } },
        { id: "b", label: { el: "Σημαντικό", en: "Important" }, c: { embedded: 16, security: 12, dataeng: 10 }, t: { systems: 12, research: 10 } },
        { id: "c", label: { el: "Κάπως σημαντικό", en: "Somewhat important" }, c: { dataeng: 12, devops: 10, ml: 10 }, t: { analytical: 10, research: 8 } },
        { id: "d", label: { el: "Λιγότερο σημαντικό", en: "Less important" }, c: { frontend: 12, backend: 10, mobile: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Καθόλου σημαντικό", en: "Not important" }, c: { frontend: 16, mobile: 14, product: 12 }, t: { creative: 12, product: 12 } }
      ]
    },
    {
      id: "q17",
      section: 2,
      text: {
        el: "Προτιμώ να έχω αμέσως αποτέλεσμα που θα δω (ακόμα και 'χοντρό') παρά να περιμένω για τέλειο.",
        en: "Quick visible results over perfect: I'd rather ship rough today than perfect in a month"
      },
      options: [
        { id: "a", label: { el: "Πάντα προτιμώ τη ταχύτητα", en: "Always speed" }, c: { frontend: 18, mobile: 14, product: 12 }, t: { creative: 14, product: 12 } },
        { id: "b", label: { el: "Συνήθως ταχύτητα", en: "Usually speed" }, c: { frontend: 16, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } },
        { id: "c", label: { el: "Ισορροπία", en: "Balance" }, c: { frontend: 10, backend: 10, qa: 8 }, t: { creative: 10, ops: 8 } },
        { id: "d", label: { el: "Συνήθως τελειότητα", en: "Usually quality" }, c: { backend: 14, embedded: 12, security: 10 }, t: { ops: 12, analytical: 10 } },
        { id: "e", label: { el: "Πάντα τελειότητα", en: "Always quality" }, c: { backend: 18, embedded: 16, security: 14 }, t: { ops: 14, adversarial: 12 } }
      ]
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Τα Γραμμική Άλγεβρα και Λογισμός από τα αγαπημένα μου μαθήματα (ή ήθελα να ήταν).",
        en: "Linear algebra and calculus were among my favourite subjects"
      },
      options: [
        { id: "a", label: { el: "Ναι, πολύ", en: "Yes, really" }, c: { ml: 20, research: 14, dataeng: 12 }, t: { analytical: 16, research: 12 } },
        { id: "b", label: { el: "Ναι, αρκετά", en: "Yes, quite" }, c: { ml: 16, research: 12, datasci: 12 }, t: { analytical: 14, research: 12 } },
        { id: "c", label: { el: "Λίγο-λίγο", en: "Somewhat" }, c: { datasci: 12, dataeng: 10, backend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Όχι ιδιαίτερα", en: "Not really" }, c: { frontend: 12, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Καθόλου", en: "Not at all" }, c: { frontend: 16, mobile: 14, product: 12 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Με ενδιαφέρει ο σχεδιασμός συστημάτων κάτω στο επίπεδο δικτύων, caching και όχι μόνο αλγόριθμοι επιπέδου εφαρμογής.",
        en: "I care about network layers, caching, infrastructure—not just application logic"
      },
      options: [
        { id: "a", label: { el: "Πολύ", en: "Very much" }, c: { devops: 18, backend: 14, embedded: 12 }, t: { systems: 14, ops: 12 } },
        { id: "b", label: { el: "Αρκετά", en: "Quite a bit" }, c: { devops: 16, backend: 12, security: 10 }, t: { systems: 12, ops: 10 } },
        { id: "c", label: { el: "Λίγο", en: "A little" }, c: { backend: 12, devops: 10, dataeng: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Όχι ιδιαίτερα", en: "Not particularly" }, c: { frontend: 14, mobile: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Καθόλου", en: "Not at all" }, c: { frontend: 16, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } }
      ]
    },
    {
      id: "q20",
      section: 2,
      text: {
        el: "Θέλω να δω πώς οι αποφάσεις μου επηρεάζουν πραγματικούς ανθρώπους, όχι μόνο αριθμούς.",
        en: "I want to see how my work affects real people, not just numbers"
      },
      options: [
        { id: "a", label: { el: "Πολύ σημαντικό", en: "Very important" }, c: { product: 18, mobile: 14, frontend: 12 }, t: { product: 14, people: 10 } },
        { id: "b", label: { el: "Σημαντικό", en: "Important" }, c: { product: 14, frontend: 12, mobile: 10 }, t: { product: 12, people: 10 } },
        { id: "c", label: { el: "Κάπως σημαντικό", en: "Somewhat important" }, c: { frontend: 10, product: 10, mobile: 8 }, t: { product: 10, people: 8 } },
        { id: "d", label: { el: "Λιγότερο σημαντικό", en: "Less important" }, c: { backend: 12, devops: 10, dataeng: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "e", label: { el: "Καθόλου σημαντικό", en: "Not important" }, c: { backend: 16, embedded: 12, security: 10 }, t: { systems: 12, ops: 10 } }
      ]
    }
  ]
};
