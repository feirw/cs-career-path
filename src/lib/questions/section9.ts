import type { Section } from "./types";

export const section9: Section = {
  index: 9,
  title: { el: "Μέγεθος και διάρκεια", en: "Size and duration" },
  subtitle: {
    el: "Άλλο να φτιάχνεις κάτι για δέκα ανθρώπους και άλλο για δέκα εκατομμύρια· άλλο για μια βδομάδα και άλλο για μια δεκαετία.",
    en: "Making something for ten people is not making it for ten million; for a week is not for a decade.",
  },
  questions: [
    {
      id: "q81",
      section: 9,
      text: {
        el: "Ποιο μέγεθος πράγματος σε τραβάει;",
        en: "Which size of thing draws you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάτι που το καταλαβαίνω ολόκληρο μόνος μου",
            en: "Something I can hold in my head entirely",
          },
          c: { embedded: 3, backend: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Κάτι τεράστιο, που κανείς δεν το ξέρει όλο",
            en: "Something enormous that nobody knows all of",
          },
          c: { devops: 3, dataeng: 2, backend: 1 },
          t: { ops: 2, systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Κάτι απλό που το αγγίζουν εκατομμύρια",
            en: "Something simple that millions touch",
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
      ],
    },
    {
      id: "q82",
      section: 9,
      text: {
        el: "Φτιάχνεις κάτι που πρέπει να δουλεύει ακόμα σε δέκα χρόνια.",
        en: "You're making something that must still work in ten years.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το κάνω τόσο απλό ώστε να το πιάνει ο επόμενος",
            en: "Keep it simple enough for the next person to grasp",
          },
          c: { backend: 2, qa: 2, product: 1 },
          t: { people: 1, systems: 2 },
        },
        {
          id: "b",
          label: {
            el: "Δεν το στηρίζω σε πράγματα που μπορεί να εξαφανιστούν",
            en: "Don't build it on things that might disappear",
          },
          c: { embedded: 3, devops: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Φροντίζω να μπορεί να ξαναφτιαχτεί από το μηδέν",
            en: "Make sure it can be rebuilt from zero",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Γράφω γιατί έγινε έτσι, όχι μόνο πώς",
            en: "Write down why it was done this way, not just how",
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
        el: "Παραδίδεις κάτι δικό σου σε άλλους και φεύγεις.",
        en: "You hand something of yours to others and leave.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Γράφω τι δοκίμασα και τι απέτυχε, όχι μόνο το τελικό",
            en: "Write what I tried and what failed, not just the final result",
          },
          c: { research: 3, qa: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το κάνω να στήνεται εύκολα από την αρχή",
            en: "Make it easy to set up from scratch",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Αφήνω ελέγχους που θα τους πουν αν χάλασαν κάτι",
            en: "Leave checks that tell them if they broke something",
          },
          c: { qa: 3, backend: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Κάθομαι μαζί τους μια μέρα και τους τα δείχνω",
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
        el: "Κάτι που ξεκίνησε μικρό μεγάλωσε δέκα φορές μέσα σε έναν χρόνο.",
        en: "Something that started small grew tenfold in a year.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θέλω να ξαναφτιάξω τα θεμέλια που δεν αντέχουν πια",
            en: "I want to rebuild the foundations that no longer hold",
          },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Θέλω να κρατήσω το κόστος και τη σταθερότητα υπό έλεγχο",
            en: "I want to keep cost and stability under control",
          },
          c: { devops: 3, product: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Θέλω να καταλάβω ποιοι είναι πια αυτοί που το χρησιμοποιούν",
            en: "I want to work out who's actually using it now",
          },
          c: { product: 3, datasci: 2 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θέλω να κλείσω τα κενά πριν τα βρει κάποιος άλλος",
            en: "I want to close the gaps before someone else finds them",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
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
            el: "Ένα πράγμα που το χρησιμοποιούν ακόμα",
            en: "One thing still in use",
          },
          c: { embedded: 3, backend: 2, dataeng: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Δεκάδες μικρά που βοήθησαν και ξεχάστηκαν",
            en: "Dozens of small things that helped and were forgotten",
          },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μια ιδέα που την πήραν και άλλοι",
            en: "An idea others picked up",
          },
          c: { research: 3, ml: 1, security: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Άνθρωποι που δουλεύουν καλύτερα επειδή πέρασα από εκεί",
            en: "People who work better because I was there",
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
        el: "Αναλαμβάνεις κάτι παλιό που δουλεύει και το χρησιμοποιούν πολλοί.",
        en: "You take over something old that works and many people rely on.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το αφήνω να δουλεύει και αλλάζω μόνο ό,τι πρέπει",
            en: "Let it run and change only what must change",
          },
          c: { devops: 2, qa: 2, product: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το αντικαθιστώ σιγά σιγά, κομμάτι κομμάτι",
            en: "Replace it slowly, piece by piece",
          },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Πρώτα το μελετάω μέχρι να καταλάβω γιατί έγινε έτσι",
            en: "First study it until I know why it is the way it is",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα κοιτάω τι επικίνδυνο κουβαλάει από την εποχή του",
            en: "First look at what dangerous baggage it carries",
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
        en: "What would bore you first if you did it for three years?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να φτιάχνω παρόμοια πράγματα ξανά και ξανά",
            en: "Making similar things over and over",
          },
          c: { research: 2, ml: 2, backend: 1 },
          t: { research: 2, systems: 1 },
        },
        {
          id: "b",
          label: {
            el: "Να συντηρώ κάτι που δεν αλλάζει ποτέ",
            en: "Maintaining something that never changes",
          },
          c: { frontend: 2, product: 2, ml: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Να διαβάζω και να γράφω χωρίς να φτιάχνω τίποτα",
            en: "Reading and writing without making anything",
          },
          c: { devops: 2, backend: 2, mobile: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Να πηδάω από θέμα σε θέμα χωρίς να εμβαθύνω",
            en: "Jumping topic to topic without going deep",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Να μιλάω για δουλειά αντί να την κάνω",
            en: "Talking about work instead of doing it",
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
        el: "Πόσο σε αφορά το κόστος αυτού που τρέχει κάθε μήνα;",
        en: "How much does the monthly running cost concern you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πολύ. Το να πληρώνουμε διπλά χωρίς λόγο με ενοχλεί προσωπικά",
            en: "A lot. Paying double for nothing offends me personally",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Μόνο όταν εμποδίζει το τι μπορούμε να κάνουμε",
            en: "Only when it limits what we can do",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Το βλέπω σαν γρίφο, ανεξάρτητα από τα λεφτά",
            en: "I see it as a puzzle, regardless of the money",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ελάχιστα. Το βλέπει κάποιος άλλος",
            en: "Barely. Someone else watches that",
          },
          c: { frontend: 2, research: 2, mobile: 1 },
          t: { creative: 1, research: 1 },
        },
      ],
    },
    {
      id: "q89",
      section: 9,
      text: {
        el: "Έρχεται κάτι καινούριο που ίσως αχρηστέψει αυτό που ξέρεις καλά.",
        en: "Something new appears that may make what you're good at obsolete.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το πιάνω αμέσως, πριν με προσπεράσει",
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
            el: "Θέλω να καταλάβω γιατί δουλεύει, πριν το χρησιμοποιήσω",
            en: "I want to understand why it works before using it",
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
        el: "Σε ένα μεγάλο εγχείρημα, ποιο κομμάτι θα ήθελες δικό σου;",
        en: "In a big undertaking, which part would you want as yours?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αυτό που συναντά τον κόσμο",
            en: "The part that meets the public",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Αυτό που κρατάει τα στοιχεία σωστά και ενημερωμένα",
            en: "The part that keeps the records right and current",
          },
          c: { dataeng: 3, backend: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Αυτό που ορίζει ποιος επιτρέπεται να κάνει τι",
            en: "The part that decides who's allowed to do what",
          },
          c: { security: 3, backend: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Αυτό που κάνει τους δύσκολους υπολογισμούς",
            en: "The part that does the hard calculations",
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
