import type { Section } from "./types";

export const section2: Section = {
  index: 2,
  title: { el: "Στη δουλειά", en: "At work" },
  subtitle: {
    el: "Πραγματικές καταστάσεις που θα αντιμετωπίσεις. Τι θα έκανες;",
    en: "Real situations you'll face. What would you do?",
  },
  questions: [
    {
      id: "q11",
      section: 2,
      text: {
        el: "Κάποιος δεν συμφωνεί με τη δική σου λύση. Πώς αντιδράς;",
        en: "Someone disagrees with your solution. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Του δείχνω γιατί η δική μου είναι καλύτερη",
            en: "Show them why mine is better",
          },
          c: { backend: 2, product: 1 },
          t: { systems: 2, people: 0 },
        },
        {
          id: "b",
          label: {
            el: "Ακούω το σκεπτικό του — ίσως έχει δίκαιο",
            en: "Listen to their reasoning—maybe they're right",
          },
          c: { frontend: 2, product: 2 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: {
            el: "Σχεδιάζω να δοκιμάσουμε και τις δύο",
            en: "Suggest we try both and see",
          },
          c: { research: 2, qa: 2 },
          t: { analytical: 2, creative: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ζητάω απόψεις και από άλλα άτομα",
            en: "Ask others what they think",
          },
          c: { product: 2, devops: 1 },
          t: { people: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q12",
      section: 2,
      text: {
        el: "Πρέπει να κάνεις κάτι νέο και δεν ξέρεις από πού να ξεκινήσεις.",
        en: "You need to do something new and don't know where to start.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ψάχνω αν κάποιος άλλος έχει κάνει κάτι παρόμοιο",
            en: "Look for similar work someone's done",
          },
          c: { research: 2, frontend: 1 },
          t: { research: 2 },
        },
        {
          id: "b",
          label: {
            el: "Κάνω ένα σχέδιο βήμα-προς-βήμα πρώτα",
            en: "Make a step-by-step plan first",
          },
          c: { backend: 2, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ξεκινάω και μαθαίνω ενώ το κάνω",
            en: "Start and learn as I go",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ζητάω βοήθεια από κάποιον που ξέρει",
            en: "Ask someone experienced",
          },
          c: { product: 2, qa: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Δουλεύεις σε ένα μεγάλο αρχείο που δεν καταλαβαίνεις. Τι κάνεις;",
        en: "You need to edit a large file you don't understand. What's your approach?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το διαβάζω αργά και κάνω σημειώσεις",
            en: "Read it slowly, take notes",
          },
          c: { research: 3, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Κοιτάω τι είναι τα σφάλματα πρώτα",
            en: "Look for what's broken first",
          },
          c: { qa: 2, backend: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Γράφω tests πρώτα, μετά κάνω αλλαγές",
            en: "Write tests first, then change it",
          },
          c: { qa: 3, devops: 1 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ψάχνω για κρυμμένα προβλήματα πριν αλλάξω κάτι",
            en: "Check for hidden problems before changing",
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
        el: "Δύο ανθρώποι δουλεύουν μαζί και συχνά έχουν conflicting αλλαγές. Τι λύση;",
        en: "Two people keep making changes that conflict. How to fix?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σχεδιάζουν ποιος κάνει τι και πότε",
            en: "Plan who does what and when",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Χωρίζουν τον κώδικα ώστε να δουλεύουν χωριστά",
            en: "Split the code so they work separately",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κάνουν συχνότερα και μικρότερα commits",
            en: "Make smaller, more frequent updates",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ο καθένας δουλεύει στη δική του κλάδο",
            en: "Each works on their own branch",
          },
          c: { frontend: 2, mobile: 1 },
          t: { creative: 1, ops: 1 },
        },
      ],
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "Βρίσκεις ένα μέρος του κώδικα που είναι σπαγγέτι. Το καθαρίζεις;",
        en: "You find messy code. Do you clean it up?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ναι, το ξαναγράφω καθαρό",
            en: "Yes, rewrite it clean",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Όχι, απλώς το τεκμηριώνω",
            en: "No, just document what it does",
          },
          c: { research: 2, qa: 1 },
          t: { research: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μόνο αν έχω χρόνο και εάν κανείς δεν χρειάζεται",
            en: "Only if I have time and nobody needs it",
          },
          c: { product: 3, frontend: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ελέγχω αν κρύβει προβλήματα πρώτα",
            en: "Check if it hides bugs first",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Κάποιος λέει «σε μένα δουλεύει». Σε εσένα όχι. Πώς ξεκινάς;",
        en: "Someone says \"works for me.\" It doesn't work for you. Start with what?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Συγκρίνω τι έχουν δεδομένο διαφορετικό",
            en: "Compare what's different in their setup",
          },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το βάζω σε ένα container ώστε να είναι ίδιο παντού",
            en: "Put it in a container so it's the same everywhere",
          },
          c: { devops: 3, backend: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Καθομαι δίπλα του και δουλεύουμε μαζί",
            en: "Sit together and work through it",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σκέφτομαι τι υποθέσεις κάνει ο κώδικας",
            en: "Think about what assumptions the code makes",
          },
          c: { backend: 3, security: 1 },
          t: { systems: 3 },
        },
      ],
    },
    {
      id: "q17",
      section: 2,
      text: {
        el: "Έχεις προθεσμία αύριο. Τι είδους κώδικα γράφεις;",
        en: "Deadline is tomorrow. What kind of code do you write?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Γρήγορα και πρόχειρα — θα το καθαρίσω μετά",
            en: "Fast and rough—I'll clean up later",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Τόσο προσεκτικά όσο πάντα — αν όχι, θα το ζήσω",
            en: "As careful as always—or I'll regret it",
          },
          c: { embedded: 3, qa: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κόβω λειτουργίες αν χρειάζεται, αλλά όχι ποιότητα",
            en: "Cut features if needed, not quality",
          },
          c: { backend: 2, product: 2 },
          t: { product: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα τα tests, μετά τον κώδικα",
            en: "Tests first, code second",
          },
          c: { qa: 3, backend: 1 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Θέλεις να μάθεις μία εξειδίκευση βαθιά ή πολλά πράγματα λίγο;",
        en: "Deep expertise in one thing or broad knowledge in many?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ένα πράγμα — θέλω να γίνω εξπέρ",
            en: "One thing—I want to be expert",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Πολλά πράγματα — μου αρέσει η ποικιλία",
            en: "Many things—I like variety",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2, research: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κύρια δεξιότητα + γενική γνώση",
            en: "One main skill + general knowledge",
          },
          c: { backend: 2, product: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Εξαρτάται από τα ενδιαφέροντά μου",
            en: "Depends on my interests",
          },
          c: { research: 2, datasci: 2 },
          t: { research: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Κάποιος ανακοινώνει δημόσια το λάθος σου. Πώς αντιδράς;",
        en: "Someone publicly calls out your mistake. How do you react?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Με ενοχλεί αλλά του εξηγώ",
            en: "Bothers me but I explain",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 2, ops: 0 },
        },
        {
          id: "b",
          label: {
            el: "Ευχαριστώ — καλό που το ανακάλυψε",
            en: "Thank them—good they caught it",
          },
          c: { backend: 2, research: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "c",
          label: {
            el: "Δεν με ενδιαφέρει — ό,τι για να μάθω",
            en: "Doesn't bother me—whatever to learn",
          },
          c: { qa: 2, security: 2 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Θα προτιμούσα να το μάθω ιδιωτικά",
            en: "Would prefer to hear it privately",
          },
          c: { devops: 2, embedded: 1 },
          t: { ops: 2, systems: 1 },
        },
      ],
    },
    {
      id: "q20",
      section: 2,
      text: {
        el: "Τι θα ήθελες να κάνεις πιο πολύ στη δουλειά σου;",
        en: "What would you want to do more of at work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να κτίσω χαρακτηριστικά που άνθρωποι χρησιμοποιούν",
            en: "Build features people use",
          },
          c: { frontend: 3, product: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να λύσω τεχνικά προβλήματα",
            en: "Solve technical problems",
          },
          c: { backend: 2, security: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να δουλεύω με άτομα και ιδέες",
            en: "Work with people and ideas",
          },
          c: { product: 2, research: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να μάθω καινούργια πράγματα",
            en: "Learn new things",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 3 },
        },
      ],
    },
  ],
};
