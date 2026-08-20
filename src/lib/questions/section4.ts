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
        el: "Προτιμώ να κτίσω κάτι μικρό και τέλειο παρά κάτι μεγάλο και κατά προσέγγιση.",
        en: "Prefer small & perfect vs. large & approximate"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 16, qa: 12, backend: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 11, qa: 8, security: 5 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, research: 3 }, t: { analytical: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 7, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 8 }, t: { creative: 10 } }
      ]
    },
    {
      id: "q32",
      section: 4,
      text: {
        el: "Αν κάτι δεν χρησιμοποιείται ακόμα, δεν θέλω να το κτίσω ακόμα.",
        en: "Don't build what isn't used yet"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { devops: 14, backend: 10, product: 6 }, t: { ops: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { devops: 10, backend: 7, dataeng: 4 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { ml: 5, research: 3 }, t: { analytical: 3 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { research: 10, ml: 8, backend: 5 }, t: { research: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { research: 18, ml: 12, embedded: 6 }, t: { research: 10 } }
      ]
    },
    {
      id: "q33",
      section: 4,
      text: {
        el: "Μου αρέσει να γνωρίζω ακριβώς πόσο «γρήγορη» ή «βαριά» είναι μια λειτουργία.",
        en: "Like knowing exactly how fast or heavy each function is"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, embedded: 14, devops: 8 }, t: { systems: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, embedded: 10, mobile: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, qa: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 11, mobile: 8, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 8 }, t: { creative: 10 } }
      ]
    },
    {
      id: "q34",
      section: 4,
      text: {
        el: "Δεν ανησυχώ για το τι θα γίνει αν κάτι σπάσει — μπορώ να το διορθώσω.",
        en: "Don't worry if something breaks—can fix it"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 14, mobile: 10, product: 6 }, t: { creative: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 10, mobile: 7, backend: 4 }, t: { creative: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, qa: 3 }, t: { analytical: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { devops: 11, security: 8, qa: 5 }, t: { ops: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 18, security: 12, embedded: 8 }, t: { ops: 10 } }
      ]
    },
    {
      id: "q35",
      section: 4,
      text: {
        el: "Προτιμώ να γνωρίζω όλες τις περιγραφές ακριβών προδιαγραφών πριν αρχίσω.",
        en: "Prefer having all exact specs before starting"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 14, embedded: 12, qa: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 10, embedded: 8, devops: 5 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, mobile: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 11, mobile: 8, product: 5 }, t: { creative: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 8 }, t: { creative: 10 } }
      ]
    },
    {
      id: "q36",
      section: 4,
      text: {
        el: "Με ενδιαφέρει να δω τα δεδομένα οπτικοποιημένα και κατανοητά αμέσως.",
        en: "Want to see data visualized and understood immediately"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 16, datasci: 12, product: 8 }, t: { creative: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 11, datasci: 8, mobile: 5 }, t: { creative: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, backend: 3 }, t: { analytical: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { embedded: 11, backend: 8, devops: 5 }, t: { systems: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 18, backend: 12, research: 8 }, t: { systems: 10 } }
      ]
    },
    {
      id: "q37",
      section: 4,
      text: {
        el: "Μου αρέσει να δουλεύω με άγνωστες προκλήσεις όπου δεν υπάρχει μια σαφή λύση.",
        en: "Like working with unknown challenges without clear solutions"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 12, backend: 6 }, t: { research: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 12, ml: 8, datasci: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 5, frontend: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { devops: 11, qa: 8, embedded: 5 }, t: { ops: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 18, qa: 12, embedded: 8 }, t: { ops: 10 } }
      ]
    },
    {
      id: "q38",
      section: 4,
      text: {
        el: "Το τέλειο είναι εχθρός του καλού — προτιμώ 80/20 παρά 100%.",
        en: "Perfect is enemy of good—prefer 80/20 vs. 100%"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 14, frontend: 10, product: 6 }, t: { creative: 8 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { mobile: 10, frontend: 7, backend: 4 }, t: { creative: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 5, research: 3 }, t: { analytical: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 11, embedded: 8, qa: 6 }, t: { systems: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 12, qa: 8 }, t: { systems: 10 } }
      ]
    },
    {
      id: "q39",
      section: 4,
      text: {
        el: "Μ' αρέσει να χωρίζω ένα μεγάλο σύστημα σε μικρά, ανεξάρτητα κομμάτια.",
        en: "Like splitting large system into small independent pieces"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, devops: 12, dataeng: 8 }, t: { systems: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, devops: 8, dataeng: 5 }, t: { systems: 6 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, mobile: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 11, mobile: 8, research: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 6 }, t: { creative: 9 } }
      ]
    },
    {
      id: "q40",
      section: 4,
      text: {
        el: "Θέλω να καταλάβω πώς όλα συνδέονται και το κύριο σχέδιο του συστήματος.",
        en: "Want to understand how everything connects and main plan"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 16, dataeng: 12, security: 8 }, t: { systems: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 11, dataeng: 8, devops: 5 }, t: { analytical: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 5, mobile: 3 }, t: { creative: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 11, mobile: 8, product: 4 }, t: { creative: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 12, product: 6 }, t: { creative: 9 } }
      ]
    }
  ]
};
