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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 53, embedded: 38, security: 45 }, t: { ops: 14, adversarial: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 40, embedded: 29, backend: 14, security: 34 }, t: { ops: 12, adversarial: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 40, backend: 14, embedded: 29, frontend: 17 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 21 }, t: { creative: 14, product: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 21, mobile: 19, devops: 44 }, t: { product: 10, people: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 16, mobile: 15, frontend: 17, backend: 14 }, t: { product: 9, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 16, frontend: 17, mobile: 15, backend: 14, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, research: 46, dataeng: 35 }, t: { research: 18, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, research: 46, ml: 50 }, t: { research: 21, analytical: 12 } }
      ]
    },
    {
      id: "q33",
      section: 4,
      text: {
        el: "Νιώθω ανικανοποίητος/η αν δεν είμαι 100% βέβαιος ότι αυτό που παρέδωσα είναι απαλλαγμένο από κάθε ελάττωμα.",
        en: "I feel unsatisfied unless I'm 100% sure there are no flaws"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, mobile: 19, embedded: 38 }, t: { systems: 14, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, devops: 34, security: 34, dataeng: 27 }, t: { systems: 12, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, devops: 34, embedded: 29, frontend: 17 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 21 }, t: { creative: 14, product: 9 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, product: 21, dataeng: 35, uiux: 21 }, t: { creative: 14, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 17, mobile: 15, backend: 14, product: 16, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, mobile: 15, backend: 14, product: 16, uiux: 15 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, security: 45, embedded: 38 }, t: { ops: 12, adversarial: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, security: 45, qa: 53 }, t: { ops: 14, adversarial: 12 } }
      ]
    },
    {
      id: "q35",
      section: 4,
      text: {
        el: "Με συναρπάζουν οι τεχνικές μάθησης που μιμούνται τη φυσική διαδικασία επεξεργασίας πληροφοριών του ανθρώπινου εγκεφάλου",
        en: "Fascinated by how the brain processes info, want to replicate it"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, ml: 53, mobile: 19 }, t: { ops: 12, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, qa: 40, devops: 34, embedded: 29 }, t: { ops: 10, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, qa: 40, devops: 34, frontend: 17 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, qa: 50, product: 21, uiux: 21 }, t: { creative: 14, research: 18 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 50, mobile: 19, dataeng: 35, uiux: 21 }, t: { creative: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 17, datasci: 38, product: 16, ml: 38, uiux: 18 }, t: { creative: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, datasci: 38, product: 16, backend: 14, uiux: 15 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, embedded: 38, security: 45 }, t: { systems: 10, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 38, research: 46 }, t: { systems: 12, research: 16 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 46, ml: 50, dataeng: 35 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 36, ml: 38, datasci: 38, backend: 14 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 36, ml: 38, backend: 14, dataeng: 27 }, t: { research: 16, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, devops: 44, embedded: 38, uiux: 21 }, t: { creative: 14, ops: 10 } }
      ]
    },
    {
      id: "q38",
      section: 4,
      text: {
        el: "Προτιμώ να παραδώσω γρήγορα ένα λειτουργικό πρωτότυπο (MVP) παρά να αφιερώσω χρόνο για να γράψω το τέλειο, πλήρως βελτιστοποιημένο κώδικα",
        en: "I enjoy finding balance between opposing forces"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, frontend: 22, product: 21, uiux: 21 }, t: { creative: 14, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { mobile: 15, frontend: 17, backend: 14, product: 16, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 15, frontend: 17, backend: 14, product: 16, uiux: 15 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 18, qa: 53, security: 45 }, t: { ops: 12, adversarial: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, security: 45, embedded: 38 }, t: { ops: 14, adversarial: 12 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, mobile: 19, datasci: 50 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, devops: 34, ml: 38, security: 34 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, devops: 34, frontend: 17, dataeng: 27 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, product: 21, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 21 }, t: { creative: 14, product: 9 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 21, dataeng: 35, mobile: 19 }, t: { systems: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, product: 16, dataeng: 27, devops: 34 }, t: { systems: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, product: 16, dataeng: 27, frontend: 17, uiux: 12 }, t: { systems: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 22, mobile: 19, embedded: 38, uiux: 18 }, t: { creative: 12, systems: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, mobile: 19, qa: 53, uiux: 21 }, t: { creative: 14, product: 7 } }
      ]
    }
  ]
};
