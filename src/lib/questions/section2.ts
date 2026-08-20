import type { Section } from "./types";

export const section2: Section = {
  index: 2,
  title: { el: "Μπροστά στην οθόνη", en: "In front of the screen" },
  subtitle: {
    el: "Καταστάσεις που θα συναντήσεις γράφοντας κώδικα. Αν κάτι δεν το έχεις ζήσει ακόμα, διάλεξε τι νομίζεις ότι θα έκανες.",
    en: "Situations you'll meet while writing code. If you haven't lived one yet, pick what you think you'd do.",
  },
  questions: [
    {
      id: "q11",
      section: 2,
      text: {
        el: "Ο κώδικας που δούλευε χθες, σήμερα δεν τρέχει — και ορκίζεσαι ότι δεν άλλαξες τίποτα.",
        en: "Code that ran yesterday doesn't run today — and you swear you changed nothing.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κοιτάω το ιστορικό του git μέχρι να βρω πού άλλαξε",
            en: "Walk back through git history until I find where it changed",
          },
          c: { backend: 2, qa: 2, research: 1 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: {
            el: "Διαβάζω ολόκληρο το μήνυμα σφάλματος, μέχρι κάτω",
            en: "Read the entire error message, all the way down",
          },
          c: { embedded: 2, backend: 2, qa: 1 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ελέγχω τι άλλαξε: τι εκδόσεις έχω, ποιες ρυθμίσεις",
            en: "Check what changed around the code: versions, config, the machine",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ξαναρχίζω όλα — δεν έχω χρόνο να ψάξω",
            en: "Restart everything — no time to dig",
          },
          c: { product: 2, frontend: 2 },
          t: { product: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω κάποιον που έχει ξαναδεί κάτι παρόμοιο",
            en: "Ask someone who's seen something like it before",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q12",
      section: 2,
      text: {
        el: "Έχεις μια λίστα με 1000 items που στον browser παγώνει. Πού θα ψάξεις πρώτα;",
        en: "A list of 1000 items freezes the browser. Where do you look first?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Βάζω loading indicator και φορτώνω σταδιακά",
            en: "Add loading and load in batches",
          },
          c: { frontend: 3, mobile: 1 },
          t: { creative: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ποια είναι τα προβλήματα της βάσης — κατάσταση, indexes, queries",
            en: "Database status — state, indexes, queries",
          },
          c: { backend: 2, dataeng: 3 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ελέγχω σε πόσους ανθρώπους συμβαίνει το πρόβλημα",
            en: "Measure exactly for which users it's a problem",
          },
          c: { datasci: 3, product: 1 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Περνάω μόνο τα απαραίτητα δεδομένα στον browser",
            en: "Send only what's really needed to the browser",
          },
          c: { devops: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω τι χρειάζονται να δουν πραγματικά οι χρήστες",
            en: "Ask what users actually need to see",
          },
          c: { product: 3, frontend: 1 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Σου δίνουν ένα αρχείο που κανείς δεν κατάλαβε για πόσο καιρό και πρέπει να το αλλάξεις.",
        en: "Handed an 800-line file nobody understood in ages—you need to change it.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το διαβάζω σιγά-σιγά, κάνω σημειώσεις, το σπάω σε κομμάτια",
            en: "Read it systematically, annotate, break it into parts",
          },
          c: { research: 3, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το τρέχω με εργαλείο αποσφαλμάτωσης και παρακολουθώ τι κάνει",
            en: "Run it with a debugger and watch it step by step",
          },
          c: { backend: 2, embedded: 2, qa: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Πρώτα γράφω tests γύρω του, μετά κάνω τη αλλαγή",
            en: "Write tests around it first, then make the change",
          },
          c: { qa: 3, devops: 1 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: {
            el: "Κάνω μόνο τη μικρή αλλαγή που χρειάζομαι",
            en: "Make only the small change I need",
          },
          c: { product: 2, frontend: 2, mobile: 1 },
          t: { product: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ψάχνω πρώτα για κρυμμένα bugs ή ευπάθειες",
            en: "Look first for hidden bugs or weaknesses",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q14",
      section: 2,
      text: {
        el: "Τρεις δουλεύετε στο ίδιο repo και merge conflicts είναι καθημερινά.",
        en: "Three of you share a repo and merge conflicts happen every day.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ετήσια σχέδιο: ποιος κάνει τι και πότε",
            en: "Planning: who does what and when",
          },
          c: { product: 3 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Χωρίζουμε τον κώδικα ώστε να μην πατάει ο ένας στον άλλο",
            en: "Refactor so you're not stepping on each other",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Μικρά commits, συχνά merges, μηχανοποίηση των ελέγχων",
            en: "Smaller commits, frequent merges, automate checks",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Τα λύνω όποτε προκύπτουν, δεν με χαλάει",
            en: "I just resolve them, it doesn't bother me",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 1, ops: 1 },
        },
      ],
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "Ο κώδικας είναι ανάγνωστος ή δεν δουλεύει (ή και τα δύο). Τι κάνεις;",
        en: "Code is unreadable or it doesn't work (or both). What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το ξαναγράφω όσο πιο καθάριο γίνεται",
            en: "Rewrite it as clean as possible",
          },
          c: { embedded: 2, backend: 3 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το αφήνω και τεκμηριώνω τι κάνει",
            en: "Leave it and document what it does",
          },
          c: { research: 2, qa: 2, dataeng: 1 },
          t: { research: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μόνο αν βλέπω κάτι που σίγουρα λάθος",
            en: "Only if I spot something clearly wrong",
          },
          c: { product: 3, devops: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ελέγχω αν κρύβει πρόβλημα που δεν φάνηκε ακόμα",
            en: "Check if it hides a problem nobody's hit yet",
          },
          c: { qa: 2, security: 3 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: {
            el: "Καθαρίζω σταδιακά κάθε φορά που πατάω εκεί",
            en: "Clean it gradually every time I pass through",
          },
          c: { frontend: 2, devops: 2, mobile: 1 },
          t: { ops: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Ποια στιγμή του project σε κάνει ευτυχή;",
        en: "Which moment in a project makes you happiest?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Όταν το visual αποτέλεσμα ταιριάζει τη φαντασία",
            en: "When the visual matches what you imagined",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Όταν όλα τα κομμάτια δένουν σωστά",
            en: "When all pieces fit correctly",
          },
          c: { backend: 3, dataeng: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Όταν δεν υπάρχει κανένα μη-ελεγμένο σενάριο",
            en: "When nothing goes untested",
          },
          c: { qa: 3, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Όταν βρίσκω γιατί έσπαγε κάτι παράξενο",
            en: "When I find why something weird broke",
          },
          c: { security: 2, embedded: 2, research: 2 },
          t: { adversarial: 2, research: 1 },
        },
        {
          id: "e",
          label: {
            el: "Όταν κάποιος το χρησιμοποιεί και χαμογελάει",
            en: "When someone uses it and smiles",
          },
          c: { product: 3, frontend: 1 },
          t: { product: 2, people: 1 },
        },
      ],
    },
    {
      id: "q17",
      section: 2,
      text: {
        el: "Έχεις προθεσμία αύριο. Ποιον κωδικό γράφεις;",
        en: "Deadline is tomorrow. What kind of code do you write?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Γρήγορα και πρόχειρα, θα καθαρίσω μετά",
            en: "Fast and rough, I'll clean up later",
          },
          c: { frontend: 2, mobile: 2, product: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Τόσο προσεκτικά όσο πάντα — αλλιώς θα το ζήσω",
            en: "As careful as always — or I'll regret it",
          },
          c: { embedded: 3, qa: 2 },
          t: { systems: 2, adversarial: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κόβω λειτουργίες αν χρειάζεται, όχι πρότυπα",
            en: "Cut features if needed, not standards",
          },
          c: { backend: 2, product: 2, qa: 1 },
          t: { product: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Γράφω με σχόλια που λένε τι χρωστάω",
            en: "Write with comments listing what I owe",
          },
          c: { devops: 2, dataeng: 2, research: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Πρώτα τα tests, μετά τον κώδικα—πάντα",
            en: "Tests first, code second—always",
          },
          c: { qa: 3, backend: 2 },
          t: { ops: 2, systems: 1 },
        },
      ],
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Μια βιβλιοθήκη κάνει το 90% αυτού που θες. Υπόλοιπο 10%;",
        en: "A library does 90% of what you need. The other 10%?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Διαβάζω τον κώδικά της και τον προσαρμόζω",
            en: "Read its source and adapt it to what I need",
          },
          c: { embedded: 2, research: 3, backend: 1 },
          t: { research: 2, systems: 1 },
        },
        {
          id: "b",
          label: {
            el: "Τη χρησιμοποιώ και αντιμετωπίζω το 10% χειροκίνητα",
            en: "Use it and handle the 10% manually",
          },
          c: { product: 3, frontend: 2 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ψάχνω άλλη που κάνει το 100%",
            en: "Find another that does 100%",
          },
          c: { mobile: 2, frontend: 2, dataeng: 1 },
          t: { ops: 1, creative: 1 },
        },
        {
          id: "d",
          label: {
            el: "Τη γράφω εξ αρχής — θέλω πλήρη έλεγχο",
            en: "Write it from scratch — I want full control",
          },
          c: { embedded: 3, security: 2 },
          t: { systems: 2, adversarial: 1 },
        },
        {
          id: "e",
          label: {
            el: "Πρώτα κοιτάω αν είναι συντηρούμενη και τι κουβαλάει",
            en: "First check if it's maintained and what it carries",
          },
          c: { security: 2, devops: 3 },
          t: { adversarial: 2, ops: 2 },
        },
      ],
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Σε ενδιαφέρει τι ακριβώς γίνεται στα παρασκήνια — πόση δύναμη χρησιμοποιείται;",
        en: "How much do you think about what happens under the hood?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πολύ. Θέλω να ξέρω το κόστος κάθε γραμμής",
            en: "A lot. I want to know the cost of every line",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Όταν κάτι αργεί, τότε κατεβαίνω να ψάξω",
            en: "When something's slow, then I investigate",
          },
          c: { devops: 2, backend: 2, dataeng: 1 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Με ενδιαφέρει σαν γνώση, όχι σαν καθημερινό πράγμα",
            en: "It interests me, but not as my daily work",
          },
          c: { research: 2, datasci: 2, ml: 1 },
          t: { research: 2 },
        },
        {
          id: "d",
          label: {
            el: "Όχι πολύ. Θέλω να δουλεύω όσο ψηλά γίνεται",
            en: "Not much. I prefer working as high as possible",
          },
          c: { frontend: 3, product: 2, mobile: 1 },
          t: { creative: 2, product: 1 },
        },
      ],
    },
    {
      id: "q20",
      section: 2,
      text: {
        el: "Έρχεται κάποιος και λέει «δουλεύει σε μένα». Σε εσένα όχι. Τι;",
        en: "Someone says \"works for me.\" It doesn't work for you. What next?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Συγκρίνω τι έχουν δεδομένο εκείνοι και τι έχω εγώ",
            en: "Compare environments line by line",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Σε container ώστε να τρέχει το ίδιο παντού",
            en: "Put it in a container so it runs the same everywhere",
          },
          c: { devops: 3, backend: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κάθομαι δίπλα και δουλεύουμε μαζί",
            en: "Sit together and figure it out",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σκάβω για ποια υπόθεση κάνει ο κώδικας",
            en: "Work out what assumption the code makes",
          },
          c: { embedded: 3, backend: 1, security: 1 },
          t: { systems: 3 },
        },
      ],
    },
  ],
};
