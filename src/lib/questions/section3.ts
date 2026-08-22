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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 18, backend: 14, research: 12 }, t: { analytical: 12, research: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, embedded: 12, devops: 10, dataeng: 6 }, t: { analytical: 10, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, frontend: 10, mobile: 10, product: 8 }, t: { people: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { product: 14, frontend: 12, mobile: 10, qa: 8 }, t: { people: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 18, frontend: 14, mobile: 12 }, t: { people: 14, product: 12 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 20, datasci: 16, mobile: 10 }, t: { analytical: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 16, datasci: 14, backend: 10, devops: 8 }, t: { analytical: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 10, datasci: 10, backend: 10, mobile: 8 }, t: { analytical: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 12, mobile: 10, ml: 6 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 14, research: 10 }, t: { creative: 14, research: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { datasci: 20, dataeng: 14, product: 12 }, t: { analytical: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { datasci: 16, dataeng: 12, product: 10, ml: 8 }, t: { analytical: 12, product: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 10, dataeng: 10, backend: 8, frontend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 12, frontend: 12, embedded: 10, devops: 6 }, t: { systems: 10, creative: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, backend: 12, research: 10 }, t: { systems: 12, research: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 20, backend: 14, embedded: 10 }, t: { adversarial: 14, ops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 18, backend: 12, devops: 10, qa: 6 }, t: { adversarial: 12, ops: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { security: 10, backend: 10, devops: 8, frontend: 8 }, t: { adversarial: 8, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, product: 10, backend: 6 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 12, mobile: 10 }, t: { creative: 14, product: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { product: 20, mobile: 14, frontend: 12 }, t: { product: 14, people: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 16, frontend: 14, mobile: 10, qa: 8 }, t: { product: 12, people: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, mobile: 10, backend: 10, product: 8 }, t: { creative: 10, product: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, dataeng: 12, devops: 10, research: 6 }, t: { systems: 10, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { research: 18, backend: 14, embedded: 10 }, t: { systems: 12, research: 12 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 20, mobile: 14, qa: 12 }, t: { ops: 14, systems: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 16, mobile: 12, backend: 10, qa: 8 }, t: { ops: 12, systems: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { devops: 10, backend: 10, dataeng: 10, frontend: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, mobile: 12, product: 10, backend: 6 }, t: { creative: 10, product: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 14, product: 12, mobile: 10 }, t: { creative: 12, product: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, product: 14, dataeng: 10 }, t: { creative: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 16, backend: 12, mobile: 10, ml: 8 }, t: { creative: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 12, frontend: 10, devops: 10, dataeng: 8 }, t: { systems: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, devops: 12, embedded: 10, qa: 8 }, t: { ops: 12, systems: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { devops: 16, backend: 12, embedded: 10 }, t: { ops: 14, systems: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { ml: 18, frontend: 14, backend: 10 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { ml: 16, frontend: 12, backend: 10, mobile: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, backend: 10, mobile: 10, dataeng: 8 }, t: { analytical: 8, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 12, devops: 10, security: 8 }, t: { ops: 12, systems: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { embedded: 16, backend: 14, devops: 10 }, t: { ops: 14, systems: 12 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { security: 20, ml: 16, research: 14 }, t: { research: 14, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { security: 16, ml: 14, embedded: 12, research: 8 }, t: { research: 12, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 12, frontend: 10, dataeng: 10, devops: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, mobile: 12, product: 10, backend: 8 }, t: { creative: 10, people: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { product: 18, frontend: 14, mobile: 10 }, t: { product: 14, people: 12 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { research: 20, product: 16, ml: 12 }, t: { research: 14, product: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { research: 16, product: 14, ml: 12, backend: 8 }, t: { research: 12, product: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 12, product: 10, frontend: 10, devops: 10 }, t: { systems: 10, product: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, devops: 12, mobile: 10, security: 8 }, t: { ops: 12, systems: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 16, devops: 14, security: 10 }, t: { ops: 14, systems: 12 } }
      ]
    }
  ]
};
