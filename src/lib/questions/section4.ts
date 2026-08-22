import type { Section } from "./types";

export const section4: Section = {
  index: 4,
  title: { el: "31-40", en: "31-40" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q31",
      section: 4,
      text: {
        el: "Μου αρέσει να συνδέω διαφορετικά εργαλεία μεταξύ τους ώστε να λειτουργούν σαν μια καλοκουρδισμένη μηχανή.",
        en: "I love connecting tools to work as one fine-tuned machine"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 20, embedded: 14, security: 12 }, t: { ops: 14, adversarial: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 16, embedded: 12, backend: 10, security: 8 }, t: { ops: 12, adversarial: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 10, backend: 10, embedded: 8, frontend: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 14, mobile: 12 }, t: { creative: 14, product: 14 } }
      ]
    },
    {
      id: "q32",
      section: 4,
      text: {
        el: "Προτιμώ τα οπτικά διαγράμματα και τις εικόνες για να κατανοήσω ένα πρόβλημα αντί για μεγάλες παραγράφους κειμένου.",
        en: "I prefer visual diagrams over long text explanations"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 20, mobile: 14, devops: 12 }, t: { product: 14, people: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 16, mobile: 12, frontend: 10, backend: 8 }, t: { product: 12, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 10, frontend: 10, mobile: 8, backend: 8 }, t: { creative: 10, product: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, research: 12, dataeng: 10 }, t: { research: 12, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, research: 14, ml: 12 }, t: { research: 14, analytical: 12 } }
      ]
    },
    {
      id: "q33",
      section: 4,
      text: {
        el: "Νιώθω ανικανοποίητος αν δεν είμαι 100% βέβαιος ότι αυτό που παρέδωσα είναι απαλλαγμένο από κάθε ελάττωμα.",
        en: "I feel unsatisfied unless I'm 100% sure there are no flaws"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 20, mobile: 12, embedded: 12 }, t: { systems: 14, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, devops: 12, security: 10, dataeng: 8 }, t: { systems: 12, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, devops: 10, embedded: 8, frontend: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 14, mobile: 12 }, t: { creative: 14, product: 12 } }
      ]
    },
    {
      id: "q34",
      section: 4,
      text: {
        el: "Με ενδιαφέρει περισσότερο το γιατί φτιάχνουμε κάτι και αν έχει εμπορική αξία, παρά το πώς θα γραφτεί τεχνικά.",
        en: "I care more about why and value than technical implementation"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 20, product: 14, dataeng: 10 }, t: { creative: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 16, mobile: 12, backend: 10, product: 8 }, t: { creative: 12, product: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, mobile: 10, backend: 8, product: 8 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, security: 12, embedded: 10 }, t: { ops: 12, adversarial: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, security: 14, qa: 12 }, t: { ops: 14, adversarial: 12 } }
      ]
    },
    {
      id: "q35",
      section: 4,
      text: {
        el: "Με γοητεύει ο τρόπος με τον οποίο ο ανθρώπινος εγκέφαλος επεξεργάζεται πληροφορίες και θέλω να τον αντιγράψω.",
        en: "Fascinated by how the brain processes info, want to replicate it"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 18, qa: 14, mobile: 12 }, t: { ops: 12, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, qa: 12, devops: 10, embedded: 8 }, t: { ops: 10, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, qa: 10, devops: 8, frontend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, ml: 14, product: 12 }, t: { creative: 14, research: 12 } }
      ]
    },
    {
      id: "q36",
      section: 4,
      text: {
        el: "Προτιμώ τη σταθερότητα, την τάξη και την πρόληψη προβλημάτων από την εισαγωγή ρίσκου και συνεχών αλλαγών.",
        en: "I prefer stability and prevention over risk and constant change"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 20, mobile: 14, dataeng: 12 }, t: { creative: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 16, datasci: 12, product: 10, ml: 8 }, t: { creative: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, datasci: 10, product: 8, backend: 8 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 12, security: 10 }, t: { systems: 10, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 14, research: 12 }, t: { systems: 12, research: 10 } }
      ]
    },
    {
      id: "q37",
      section: 4,
      text: {
        el: "Νιώθω την ανάγκη να προστατεύω τους αδύναμους ή τα ευαίσθητα δεδομένα από κακόβουλες προθέσεις.",
        en: "I feel the need to protect vulnerable people and sensitive data"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 20, ml: 14, dataeng: 12 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 16, ml: 12, datasci: 10, backend: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 10, ml: 10, backend: 8, dataeng: 8 }, t: { research: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, devops: 14, embedded: 12 }, t: { creative: 14, ops: 10 } }
      ]
    },
    {
      id: "q38",
      section: 4,
      text: {
        el: "Απολαμβάνω να βρίσκω την ισορροπία ανάμεσα σε δύο αντίθετες δυνάμεις (π.χ. ταχύτητα vs ποιότητα).",
        en: "I enjoy finding balance between opposing forces"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 20, frontend: 14, product: 12 }, t: { creative: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { mobile: 16, frontend: 12, backend: 10, product: 8 }, t: { creative: 12, product: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 10, frontend: 10, backend: 8, product: 8 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, qa: 12, security: 10 }, t: { ops: 12, adversarial: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, security: 14, embedded: 12 }, t: { ops: 14, adversarial: 12 } }
      ]
    },
    {
      id: "q39",
      section: 4,
      text: {
        el: "Προτιμώ να λύνω γρίφους που απαιτούν βαθιά παρατηρητικότητα παρά να φτιάχνω πράγματα από το μηδέν.",
        en: "I prefer solving complex puzzles over building from scratch"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 20, mobile: 14, datasci: 12 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, devops: 12, ml: 10, security: 8 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, devops: 10, frontend: 8, dataeng: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, product: 10 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 14, mobile: 12 }, t: { creative: 14, product: 12 } }
      ]
    },
    {
      id: "q40",
      section: 4,
      text: {
        el: "Με γεμίζει η ιδέα να καθοδηγώ νέους ανθρώπους και να τους μεταδίδω γνώση.",
        en: "I love mentoring new people and sharing knowledge"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, dataeng: 14, mobile: 12 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, product: 12, dataeng: 10, devops: 8 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, product: 10, dataeng: 8, frontend: 8 }, t: { systems: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, embedded: 10 }, t: { creative: 12, systems: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 14, qa: 12 }, t: { creative: 14, product: 10 } }
      ]
    }
  ]
};
