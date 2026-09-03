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
        el: "Με ενθουσιάζει η ιδέα να δημιουργήσω κάτι που \"μαθαίνει\" από τα λάθη του και βελτιώνεται μόνο του.",
        en: "I love the idea of self-learning systems that improve autonomously"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 38, backend: 18, research: 46 }, t: { analytical: 12, research: 18 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 14, embedded: 29, devops: 34, dataeng: 27 }, t: { analytical: 10, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, frontend: 17, mobile: 15, product: 16 }, t: { people: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { product: 16, frontend: 17, mobile: 15, qa: 40 }, t: { people: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 21, frontend: 22, mobile: 19 }, t: { people: 14, product: 9 } }
      ]
    },
    {
      id: "q22",
      section: 3,
      text: {
        el: "Προτιμώ να δουλεύω με περιορισμένους πόρους γιατί αυτό απαιτεί πιο έξυπνη και κομψή σκέψη.",
        en: "I prefer working with limited resources—it demands clever solutions"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, datasci: 50, mobile: 19 }, t: { analytical: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 27, datasci: 38, backend: 14, devops: 34 }, t: { analytical: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 27, datasci: 38, backend: 14, mobile: 15, uiux: 12 }, t: { analytical: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, product: 16, mobile: 15, ml: 38, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, research: 46, uiux: 21 }, t: { creative: 14, research: 16 } }
      ]
    },
    {
      id: "q23",
      section: 3,
      text: {
        el: "Έχω την τάση να ψάχνω επίμονα για \"ρωγμές\" και λάθη στη δουλειά των άλλων.",
        en: "I actively hunt for bugs and flaws in others' work"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 50, dataeng: 35, product: 21 }, t: { analytical: 14, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { datasci: 38, dataeng: 27, product: 16, ml: 38 }, t: { analytical: 12, product: 7 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 38, dataeng: 27, backend: 14, frontend: 17 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, frontend: 17, embedded: 29, devops: 34, uiux: 12 }, t: { systems: 10, creative: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 38, backend: 18, research: 46 }, t: { systems: 12, research: 16 } }
      ]
    },
    {
      id: "q24",
      section: 3,
      text: {
        el: "Απολαμβάνω τη διαδικασία του να \"προβλέπω\" μελλοντικές τάσεις αναλύοντας συμπεριφορές του παρελθόντος.",
        en: "I love predicting future trends by analyzing past behavior"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 45, backend: 18, embedded: 38 }, t: { adversarial: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 34, backend: 14, devops: 34, qa: 40 }, t: { adversarial: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { security: 34, backend: 14, devops: 34, frontend: 17 }, t: { adversarial: 8, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, mobile: 15, product: 16, backend: 14, uiux: 18 }, t: { creative: 12, product: 7 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 21 }, t: { creative: 14, product: 7 } }
      ]
    },
    {
      id: "q25",
      section: 3,
      text: {
        el: "Νιώθω άνετα όταν πρέπει να πάρω αποφάσεις σε συνθήκες αβεβαιότητας, αρκεί να έχω το γενικό πρόσταγμα.",
        en: "I'm comfortable deciding under uncertainty if I have the general goal"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 21, mobile: 19, frontend: 22 }, t: { product: 10, people: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 16, frontend: 17, mobile: 15, qa: 40 }, t: { product: 9, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, mobile: 15, backend: 14, product: 16, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, dataeng: 27, devops: 34, research: 36 }, t: { systems: 10, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { research: 46, backend: 18, embedded: 38 }, t: { systems: 12, research: 18 } }
      ]
    },
    {
      id: "q26",
      section: 3,
      text: {
        el: "Με ελκύει η ιδέα ότι η δουλειά μου βρίσκεται πάντα στην τσέπη εκατομμυρίων ανθρώπων ανά πάσα στιγμή.",
        en: "My work reaches millions of people worldwide, every moment"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 35, mobile: 19, qa: 53 }, t: { ops: 14, systems: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 27, mobile: 15, backend: 14, qa: 40 }, t: { ops: 12, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 34, backend: 14, dataeng: 27, frontend: 17 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, mobile: 15, product: 16, backend: 14, uiux: 15 }, t: { creative: 10, product: 5 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 22, product: 21, mobile: 19, uiux: 18 }, t: { creative: 12, product: 7 } }
      ]
    },
    {
      id: "q27",
      section: 3,
      text: {
        el: "Θέλω να είμαι ο άνθρωπος που εμπιστεύονται όλοι όταν ξέσπασε μια κρίση και πρέπει να μείνει το σύστημα \"όρθιο\".",
        en: "I want to be the trusted crisis manager who keeps systems alive"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 19, product: 21, dataeng: 35, uiux: 21 }, t: { creative: 14, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 17, backend: 14, mobile: 15, ml: 38, uiux: 18 }, t: { creative: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, frontend: 17, devops: 34, dataeng: 27, uiux: 12 }, t: { systems: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, devops: 34, embedded: 29, qa: 40 }, t: { ops: 12, systems: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 44, backend: 18, embedded: 38 }, t: { ops: 14, systems: 10 } }
      ]
    },
    {
      id: "q28",
      section: 3,
      text: {
        el: "Μου αρέσει να χτίζω τις αόρατες \"διαδρομές\" από τις οποίες ταξιδεύει η πληροφορία με ασφάλεια.",
        en: "I love building invisible secure pathways for data"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 50, frontend: 22, backend: 18 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 38, frontend: 17, backend: 14, mobile: 15 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 17, backend: 14, mobile: 15, dataeng: 27, uiux: 12 }, t: { analytical: 8, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 29, devops: 34, security: 34 }, t: { ops: 12, systems: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 38, backend: 18, devops: 44 }, t: { ops: 14, systems: 12 } }
      ]
    },
    {
      id: "q29",
      section: 3,
      text: {
        el: "Παρατηρώ συνεχώς πώς συμπεριφέρονται οι άνθρωποι και προσπαθώ να καταλάβω τι τους δυσκολεύει.",
        en: "I constantly observe people to understand their pain points"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 45, ml: 50, research: 46 }, t: { research: 21, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 34, ml: 38, embedded: 29, research: 36 }, t: { research: 18, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, frontend: 17, dataeng: 27, devops: 34 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 17, mobile: 15, product: 16, backend: 14, uiux: 20 }, t: { creative: 10, people: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 21, frontend: 22, mobile: 19 }, t: { product: 10, people: 12 } }
      ]
    },
    {
      id: "q30",
      section: 3,
      text: {
        el: "Θα προτιμούσα να ανακαλύψω μια νέα θεωρία που θα μείνει στην ιστορία παρά να φτιάξω ένα εμπορικό προϊόν.",
        en: "I prefer discovering theory that makes history over commercial products"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 46, product: 21, ml: 50 }, t: { research: 21, product: 9 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 36, product: 16, ml: 38, backend: 14 }, t: { research: 18, product: 9 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 14, product: 16, frontend: 17, devops: 34 }, t: { systems: 10, product: 7 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, devops: 34, mobile: 15, security: 34 }, t: { ops: 12, systems: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, devops: 44, security: 45 }, t: { ops: 14, systems: 12 } }
      ]
    }
  ]
};
