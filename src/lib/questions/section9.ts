import type { Section } from "./types";

export const section9: Section = {
  index: 9,
  title: { el: "Κλίμακα και συστήματα", en: "Scale and systems" },
  subtitle: {
    el: "Άλλο ένα project για δέκα χρήστες και άλλο για δέκα εκατομμύρια· άλλο κώδικας μιας βδομάδας και άλλο μιας δεκαετίας.",
    en: "A project for ten users is not one for ten million; a week-old codebase is not a decade-old one.",
  },
  questions: [
    {
      id: "q81",
      section: 9,
      text: {
        el: "Ποιο μέγεθος συστήματος σε τραβάει;",
        en: "Which size of system draws you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάτι που τρέχει σε ένα μηχάνημα και το καταλαβαίνω ολόκληρο",
            en: "Something on one machine that I understand entirely",
          },
          c: { embedded: 3, backend: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Κάτι που τρέχει σε εκατοντάδες μηχανήματα ταυτόχρονα",
            en: "Something running across hundreds of machines at once",
          },
          c: { devops: 3, dataeng: 2, backend: 1 },
          t: { ops: 2, systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Κάτι απλό που το ανοίγουν εκατομμύρια κάθε μέρα",
            en: "Something simple that millions open every day",
          },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Κάτι που το καταλαβαίνουν δέκα άνθρωποι στον κόσμο",
            en: "Something ten people in the world understand",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Κάτι που κρύβει ευαίσθητα δεδομένα πολλών ανθρώπων",
            en: "Something guarding a lot of people's sensitive data",
          },
          c: { security: 3, dataeng: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q82",
      section: 9,
      text: {
        el: "Γράφεις κώδικα που πρέπει να δουλεύει ακόμα σε δέκα χρόνια.",
        en: "You're writing code that must still work in ten years.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τον κρατάω απλό, να τον διαβάζει ο επόμενος",
            en: "Keep it simple enough for the next person to read",
          },
          c: { backend: 2, qa: 2, product: 1 },
          t: { people: 1, systems: 2 },
        },
        {
          id: "b",
          label: {
            el: "Δεν τον στηρίζω σε βιβλιοθήκες που μπορεί να εγκαταλειφθούν",
            en: "Don't build it on libraries that might be abandoned",
          },
          c: { embedded: 3, devops: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Φροντίζω να στήνεται από το μηδέν με μία εντολή",
            en: "Make sure it rebuilds from zero with one command",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Γράφω γιατί πάρθηκαν οι αποφάσεις, όχι μόνο τι κάνει",
            en: "Write down why the decisions were made, not just what it does",
          },
          c: { research: 3, product: 2 },
          t: { research: 2, people: 1 },
        },
      ],
    },
    {
      id: "q83",
      section: 9,
      text: {
        el: "Παραδίδεις το project σου σε άλλη ομάδα και φεύγεις.",
        en: "You hand your project to another team and leave.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Γράφω τι δοκίμασα και τι απέτυχε, όχι μόνο το τελικό",
            en: "Write what I tried and what failed, not just the final version",
          },
          c: { research: 3, qa: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Φροντίζω να τρέχει με μία εντολή σε καινούριο μηχάνημα",
            en: "Make it run with one command on a fresh machine",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Αφήνω tests που θα τους πουν αν χάλασαν κάτι",
            en: "Leave tests that tell them if they broke something",
          },
          c: { qa: 3, backend: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Κάθομαι μαζί τους μια μέρα και τους τα περνάω",
            en: "Sit with them for a day and walk them through it",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q84",
      section: 9,
      text: {
        el: "Η εφαρμογή πέρασε από 1.000 σε 100.000 χρήστες μέσα σε έναν χρόνο.",
        en: "The app went from 1,000 to 100,000 users in a year.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θέλω να ξαναφτιάξω τα κομμάτια που δεν αντέχουν πια",
            en: "I want to rebuild the parts that no longer hold",
          },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Θέλω να κρατήσω κόστος και διαθεσιμότητα υπό έλεγχο",
            en: "I want to keep cost and uptime under control",
          },
          c: { devops: 3, product: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Θέλω να καταλάβω ποιοι είναι πια οι χρήστες μας",
            en: "I want to understand who our users even are now",
          },
          c: { product: 3, datasci: 2 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θέλω να κλείσω τα κενά ασφαλείας πριν μας βρει κάποιος",
            en: "I want to close the security gaps before someone finds us",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: {
            el: "Θέλω να μη χαλάσει η εμπειρία που τους έφερε εδώ",
            en: "I want the experience that brought them here not to degrade",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
      ],
    },
    {
      id: "q85",
      section: 9,
      text: {
        el: "Τι θα σε ικανοποιούσε περισσότερο κοιτώντας πίσω σε δέκα χρόνια;",
        en: "Looking back in ten years, which would satisfy you more?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ένα σύστημα που δουλεύει ακόμα και το πατάνε πολλοί",
            en: "One system still running that many depend on",
          },
          c: { embedded: 3, backend: 2, dataeng: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Δεκάδες μικρά που βγήκαν γρήγορα και βοήθησαν",
            en: "Dozens of small things shipped fast that helped",
          },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μια ιδέα ή ένα εργαλείο που το πήραν και άλλοι",
            en: "An idea or tool others adopted",
          },
          c: { research: 3, ml: 1, security: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Μια ομάδα που δουλεύει καλύτερα επειδή πέρασα από εκεί",
            en: "A team that works better because I passed through",
          },
          c: { product: 3, devops: 1, qa: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q86",
      section: 9,
      text: {
        el: "Αναλαμβάνεις παλιό κώδικα δέκα ετών που δουλεύει και τον χρησιμοποιούν χιλιάδες.",
        en: "You inherit ten-year-old code that works and thousands rely on.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τον αφήνω να δουλεύει και αλλάζω μόνο ό,τι πρέπει",
            en: "Let it run and change only what must change",
          },
          c: { devops: 2, qa: 2, product: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Τον αντικαθιστώ σιγά σιγά, κομμάτι κομμάτι",
            en: "Replace it slowly, piece by piece",
          },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Πρώτα τον μελετάω μέχρι να καταλάβω γιατί γράφτηκε έτσι",
            en: "First study it until I know why it was written that way",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα κοιτάω τι επικίνδυνο κουβαλάει: παλιές βιβλιοθήκες, ξεχασμένα κλειδιά",
            en: "First look at what's dangerous in it: old libraries, forgotten keys",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q87",
      section: 9,
      text: {
        el: "Τι θα σε βαρούσε πρώτο αν το έκανες τρία χρόνια;",
        en: "What would bore you first after three years of it?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να φτιάχνω παρόμοιες οθόνες ξανά και ξανά",
            en: "Building similar screens over and over",
          },
          c: { research: 2, ml: 2, backend: 1 },
          t: { research: 2, systems: 1 },
        },
        {
          id: "b",
          label: {
            el: "Να συντηρώ σύστημα που δεν αλλάζει ποτέ",
            en: "Maintaining a system that never changes",
          },
          c: { frontend: 2, product: 2, ml: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Να διαβάζω και να γράφω χωρίς να τρέχει κώδικας",
            en: "Reading and writing without any code running",
          },
          c: { devops: 2, backend: 2, mobile: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Να αλλάζω τεχνολογία κάθε τρεις μήνες χωρίς να εμβαθύνω",
            en: "Switching technology every three months without going deep",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Να περνάω τη μέρα σε συσκέψεις αντί σε κώδικα",
            en: "Spending the day in meetings instead of code",
          },
          c: { embedded: 2, qa: 2, backend: 1 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q88",
      section: 9,
      text: {
        el: "Ο λογαριασμός του cloud τριπλασιάστηκε τον τελευταίο μήνα.",
        en: "The cloud bill tripled last month.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θα βρω πού πάει κάθε ευρώ και θα το κόψω",
            en: "I'll find where every euro goes and cut it",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Θα δω αν το κόστος δικαιολογείται από τη χρήση",
            en: "I'll see whether the cost is justified by the usage",
          },
          c: { product: 3, datasci: 2 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Θα ψάξω ποιο κομμάτι κώδικα ξοδεύει άσκοπα πόρους",
            en: "I'll hunt the code that wastes resources",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θα ελέγξω μήπως κάποιος τρέχει κάτι δικό του πάνω στους πόρους μας",
            en: "I'll check whether someone is running their own thing on our resources",
          },
          c: { security: 3, devops: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q89",
      section: 9,
      text: {
        el: "Βγαίνει καινούρια τεχνολογία που ίσως αχρηστέψει αυτό που ξέρεις καλά.",
        en: "A new technology appears that may make your skill obsolete.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Την πιάνω αμέσως, πριν με προσπεράσει",
            en: "I take it up immediately, before it passes me",
          },
          c: { ml: 3, frontend: 2 },
          t: { creative: 1, research: 1, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Περιμένω να δω αν επιβιώσει δύο χρόνια",
            en: "Wait to see if it survives two years",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ψάχνω τι σπάει και τι νέους κινδύνους φέρνει",
            en: "Look at what it breaks and what new risks it brings",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Κοιτάω αν λύνει αληθινό πρόβλημα ή είναι μόδα",
            en: "Check whether it solves a real problem or is a fashion",
          },
          c: { product: 3, devops: 1 },
          t: { product: 3 },
        },
        {
          id: "e",
          label: {
            el: "Θέλω να καταλάβω γιατί δουλεύει πριν τη χρησιμοποιήσω",
            en: "I want to understand why it works before I use it",
          },
          c: { research: 3, ml: 1 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q90",
      section: 9,
      text: {
        el: "Σε ένα μεγάλο σύστημα, ποιο κομμάτι θα ήθελες να είναι δικό σου για χρόνια;",
        en: "In a large system, which part would you want as yours for years?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αυτό που βλέπει και αγγίζει ο χρήστης",
            en: "The part the user sees and touches",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Αυτό που κρατάει τα δεδομένα σωστά και ενημερωμένα",
            en: "The part that keeps the data correct and current",
          },
          c: { dataeng: 3, backend: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Αυτό που αποφασίζει ποιος επιτρέπεται να κάνει τι",
            en: "The part that decides who may do what",
          },
          c: { security: 3, backend: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Αυτό που κάνει τους βαριούς υπολογισμούς",
            en: "The part doing the heavy computation",
          },
          c: { ml: 3, research: 2 },
          t: { analytical: 2, research: 1 },
        },
        {
          id: "e",
          label: {
            el: "Αυτό που φροντίζει να μη σταματήσει ποτέ τίποτα",
            en: "The part that makes sure nothing ever stops",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
      ],
    },
  ],
};
