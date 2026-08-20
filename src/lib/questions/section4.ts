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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { qa: 18, embedded: 14, backend: 10, security: 8, dataeng: 6, devops: 4, datasci: 3, ml: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { qa: 14, embedded: 11, backend: 8, security: 6, dataeng: 5, devops: 3, datasci: 3, ml: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { qa: 8, embedded: 6, backend: 5, security: 5, dataeng: 4, devops: 3, datasci: 3, frontend: 3, ml: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 18, devops: 14, backend: 10, mobile: 8, dataeng: 6, frontend: 4, datasci: 3, ml: 3, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 14, devops: 11, backend: 8, mobile: 6, dataeng: 5, frontend: 3, datasci: 3, ml: 2, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { product: 8, devops: 6, backend: 5, mobile: 5, dataeng: 4, frontend: 3, datasci: 3, ml: 3, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, research: 8, ml: 6, embedded: 5, datasci: 4, dataeng: 3, devops: 2, security: 1, frontend: 1, mobile: 1, product: 1, qa: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, research: 10, ml: 8, embedded: 6, datasci: 5, dataeng: 2, devops: 2, security: 1, frontend: 1, mobile: 1, product: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, embedded: 14, devops: 10, security: 8, dataeng: 6, ml: 4, datasci: 3, qa: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, embedded: 11, devops: 8, security: 6, dataeng: 5, ml: 3, datasci: 3, qa: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, embedded: 6, devops: 5, security: 5, dataeng: 4, ml: 3, datasci: 3, frontend: 3, qa: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 18, mobile: 14, product: 10, backend: 8, datasci: 6, dataeng: 4, ml: 3, embedded: 3, qa: 2, security: 1, devops: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, mobile: 11, product: 8, backend: 6, datasci: 5, dataeng: 3, ml: 3, embedded: 2, qa: 2, security: 1, devops: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 8, mobile: 6, product: 5, backend: 5, datasci: 4, dataeng: 3, ml: 3, embedded: 2, qa: 2, security: 2, devops: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, security: 6, embedded: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, devops: 10, security: 8, embedded: 6, qa: 5, research: 4, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
      ]
    },
    {
      id: "q35",
      section: 4,
      text: {
        el: "Προτιμώ να γνωρίζω όλες τις ακριβείς προδιαγραφές πριν αρχίσω.",
        en: "Prefer having all exact specs before starting"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, qa: 14, embedded: 10, devops: 8, security: 6, dataeng: 4, datasci: 3, ml: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, qa: 11, embedded: 8, devops: 6, security: 5, dataeng: 3, datasci: 3, ml: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, qa: 6, embedded: 5, devops: 5, security: 4, dataeng: 3, datasci: 3, frontend: 3, ml: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { frontend: 18, datasci: 14, product: 10, mobile: 8, dataeng: 6, backend: 4, ml: 3, devops: 3, qa: 2, security: 1, embedded: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 14, datasci: 11, product: 8, mobile: 6, dataeng: 5, backend: 3, ml: 3, devops: 2, qa: 2, security: 1, embedded: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 8, datasci: 6, product: 5, mobile: 5, dataeng: 4, backend: 3, ml: 3, devops: 3, qa: 2, security: 2, embedded: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 18, ml: 14, backend: 10, datasci: 8, dataeng: 6, security: 4, devops: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 14, ml: 11, backend: 8, datasci: 6, dataeng: 5, security: 3, devops: 3, embedded: 2, qa: 2, mobile: 1, frontend: 1, product: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { research: 8, ml: 6, backend: 5, datasci: 5, dataeng: 4, security: 3, devops: 3, frontend: 3, embedded: 2, qa: 2, mobile: 2, product: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, dataeng: 3, datasci: 2, ml: 2, research: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, frontend: 14, product: 10, backend: 8, datasci: 6, dataeng: 4, devops: 3, ml: 3, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { mobile: 14, frontend: 11, product: 8, backend: 6, datasci: 5, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 1, qa: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { mobile: 8, frontend: 6, product: 5, backend: 5, datasci: 4, dataeng: 3, devops: 3, ml: 2, embedded: 2, security: 2, qa: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 10, devops: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, embedded: 10, devops: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, frontend: 1, mobile: 1, product: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, devops: 14, dataeng: 10, ml: 8, security: 6, datasci: 4, embedded: 3, qa: 3, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, devops: 11, dataeng: 8, ml: 6, security: 5, datasci: 3, embedded: 3, qa: 2, frontend: 1, mobile: 1, product: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, devops: 6, dataeng: 5, ml: 5, security: 4, datasci: 3, embedded: 3, frontend: 3, qa: 2, mobile: 2, product: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, product: 8, mobile: 6, backend: 5, datasci: 4, dataeng: 3, ml: 2, embedded: 1, research: 1, security: 1, qa: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 10, mobile: 8, backend: 5, research: 4, datasci: 3, ml: 2, dataeng: 1, embedded: 1, devops: 1, security: 1, qa: 1 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 18, product: 14, dataeng: 10, devops: 8, datasci: 6, security: 4, ml: 3, embedded: 3, qa: 2, mobile: 1, frontend: 1, research: 1 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, product: 11, dataeng: 8, devops: 6, datasci: 5, security: 3, ml: 3, embedded: 2, qa: 2, mobile: 1, frontend: 1, research: 1 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 8, product: 6, dataeng: 5, devops: 5, datasci: 4, security: 3, ml: 3, frontend: 3, embedded: 2, qa: 2, mobile: 2, research: 2 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 10, mobile: 8, embedded: 6, security: 5, qa: 4, dataeng: 3, research: 3, datasci: 2, ml: 2, backend: 1, product: 1, devops: 1 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, mobile: 10, embedded: 8, research: 6, security: 5, qa: 3, dataeng: 2, datasci: 2, ml: 2, backend: 1, product: 1, devops: 1 } }
      ]
    }
  ]
};
