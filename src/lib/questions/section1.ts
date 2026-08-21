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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 18, product: 12, dataeng: 10 }, t: { creative: 14, product: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 16, mobile: 10, product: 8, backend: 4 }, t: { creative: 12, product: 8 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 8, backend: 8, mobile: 6, product: 6 }, t: { analytical: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, embedded: 12, devops: 8, qa: 6 }, t: { systems: 12, ops: 8 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 18, devops: 12, security: 8, research: 6 }, t: { systems: 14, ops: 10 } }
      ]
    },
    {
      id: "q02",
      section: 1,
      text: {
        el: "Με ενοχλεί αν κάτι δεν 'φαίνεται' σωστό ή δεν φαίνεται όπως το φαντάστηκα.",
        en: "Bothered when something doesn't 'feel' right or look right"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { mobile: 16, product: 14, dataeng: 10 }, t: { creative: 16, product: 10 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { frontend: 16, product: 10, mobile: 8, qa: 6 }, t: { creative: 14, product: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, backend: 10, product: 6, mobile: 6 }, t: { creative: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 12, embedded: 12, security: 8, devops: 6 }, t: { systems: 12, analytical: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { backend: 18, embedded: 16, research: 10, security: 8 }, t: { systems: 14, research: 10 } }
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
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { backend: 20, dataeng: 16, devops: 14 }, t: { systems: 16, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, dataeng: 12, devops: 10, embedded: 6 }, t: { systems: 14, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, dataeng: 8, devops: 8, frontend: 6 }, t: { systems: 10, analytical: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 10, mobile: 8, backend: 4 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 12, mobile: 10, research: 6 }, t: { creative: 14, product: 10 } }
      ]
    },
    {
      id: "q04",
      section: 1,
      text: {
        el: "Ενδιαφέρομαι για το κάτω επίπεδο: πώς λειτουργεί το hardware, τα protocols, τα bytes.",
        en: "Interested in low-level details: hardware, protocols, bytes"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 20, backend: 14, security: 12 }, t: { systems: 16, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 18, backend: 12, security: 10, devops: 6 }, t: { systems: 14, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 10, backend: 10, devops: 8, frontend: 6 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 10, mobile: 10, datasci: 6 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 14, product: 12, ml: 8 }, t: { creative: 14, product: 10 } }
      ]
    },
    {
      id: "q05",
      section: 1,
      text: {
        el: "Θέλω κώδικα που να δουλεύει πολύ γρήγορα ακόμα κι αν ο ίδιος ο κώδικας είναι πιο περίπλοκος.",
        en: "Want code fast vs. code elegant"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 18, backend: 14, ml: 12 }, t: { systems: 12, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 16, backend: 12, ml: 10, devops: 6 }, t: { systems: 10, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, ml: 10, embedded: 8, frontend: 8 }, t: { analytical: 10, systems: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 10, backend: 8, qa: 6 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 12, research: 10, qa: 8 }, t: { creative: 14, research: 10 } }
      ]
    },
    {
      id: "q06",
      section: 1,
      text: {
        el: "Όταν κάποιος είπε 'αυτό είναι αργό', άμεσα σκέφτομαι profiling και optimization, όχι user experience.",
        en: "Slow = optimization problem, not UX problem"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 18, embedded: 16, mobile: 12 }, t: { systems: 16, analytical: 14 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, embedded: 14, devops: 10, dataeng: 6 }, t: { systems: 14, analytical: 12 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, embedded: 10, devops: 8, frontend: 8 }, t: { systems: 10, analytical: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 12, mobile: 10, backend: 4 }, t: { creative: 12, product: 12 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 14, mobile: 12, research: 6 }, t: { creative: 14, product: 12 } }
      ]
    },
    {
      id: "q07",
      section: 1,
      text: {
        el: "Έχω δουλέψει με assembly, drivers, embedded systems ή network protocols.",
        en: "Worked with assembly, drivers, embedded, or protocols"
      },
      options: [
        { id: "a", label: { el: "Πολύ", en: "Yes, extensively" }, c: { embedded: 20, backend: 10, security: 10 }, t: { systems: 16, analytical: 12 } },
        { id: "b", label: { el: "Λίγο", en: "A little" }, c: { embedded: 16, backend: 12, security: 8, devops: 6 }, t: { systems: 14, analytical: 10 } },
        { id: "c", label: { el: "Ποτέ δεν ενδιαφέρθηκα", en: "Never interested" }, c: { frontend: 14, mobile: 12, product: 10, backend: 6 }, t: { creative: 12, product: 10 } },
        { id: "d", label: { el: "Δεν με ενδιαφέρει πολύ", en: "Not interested" }, c: { frontend: 16, mobile: 12, product: 10, ml: 6 }, t: { creative: 14, product: 10 } },
        { id: "e", label: { el: "Ήθελα αλλά δεν έχω ευκαιρία ακόμα", en: "Want to but no chance yet" }, c: { embedded: 18, backend: 12, research: 10, qa: 6 }, t: { systems: 14, research: 10 } }
      ]
    },
    {
      id: "q08",
      section: 1,
      text: {
        el: "Το γεγονός ότι το κινητό μου έχει CPU, RAM, και σκληρό δίσκο με ενδιαφέρει περισσότερο από ότι το UX.",
        en: "Hardware specs interest me more than UX"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { embedded: 20, backend: 14, security: 10 }, t: { systems: 16, analytical: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { embedded: 18, backend: 12, devops: 8, qa: 6 }, t: { systems: 14, analytical: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { embedded: 10, backend: 10, mobile: 10, frontend: 8 }, t: { systems: 10, creative: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, mobile: 12, product: 10, backend: 6 }, t: { creative: 12, product: 12 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, mobile: 14, product: 12 }, t: { creative: 16, product: 12 } }
      ]
    },
    {
      id: "q09",
      section: 1,
      text: {
        el: "Αν κάποιο πράγμα μου δεν εξηγείται σε επίπεδο συστήματος, δεν το νιώθω ότι το κατάλαβα.",
        en: "Need to understand system-level details to feel I understand"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 14, embedded: 16, datasci: 12 }, t: { systems: 16, research: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { backend: 16, embedded: 14, research: 10, devops: 6 }, t: { systems: 14, research: 10 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { backend: 10, embedded: 10, frontend: 10, research: 8 }, t: { systems: 10, analytical: 10 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 14, product: 12, mobile: 10, qa: 6 }, t: { creative: 12, product: 12 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 18, product: 14, mobile: 12, qa: 8 }, t: { creative: 14, product: 12 } }
      ]
    },
    {
      id: "q10",
      section: 1,
      text: {
        el: "Σταματάω να δουλεύω σε ένα feature μέχρι να καλύψω edge cases και corner cases.",
        en: "Must cover edge cases and corner cases before stopping"
      },
      options: [
        { id: "a", label: { el: "Πάντα", en: "Always" }, c: { qa: 18, backend: 14, security: 12 }, t: { ops: 16, adversarial: 12 } },
        { id: "b", label: { el: "Συχνά", en: "Often" }, c: { qa: 16, backend: 12, security: 10, devops: 6 }, t: { ops: 14, adversarial: 10 } },
        { id: "c", label: { el: "Μερικές φορές", en: "Sometimes" }, c: { qa: 10, backend: 10, frontend: 10, mobile: 8 }, t: { ops: 10, analytical: 8 } },
        { id: "d", label: { el: "Σπάνια", en: "Rarely" }, c: { frontend: 14, product: 12, mobile: 10, backend: 6 }, t: { creative: 12, product: 10 } },
        { id: "e", label: { el: "Όχι", en: "Never" }, c: { frontend: 16, product: 14, mobile: 12 }, t: { creative: 14, product: 12 } }
      ]
    }
  ]
};
