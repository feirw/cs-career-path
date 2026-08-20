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
      id: "q26",
      section: 2,
      text: {
        el: "Κάποιος λέει ότι η λύση σου είναι λάθος. Αντίδρασή σου;",
        en: "Someone says your idea is wrong. How do you react?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ακούω τη λογική — ίσως έχει δίκαιο",
            en: "Listen to their logic—maybe right",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Εξηγώ γιατί δουλεύει",
            en: "Explain why it works",
          },
          c: { backend: 2, devops: 1 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Δοκιμάζουμε και τις δύο λύσεις",
            en: "Test both approaches",
          },
          c: { research: 2, qa: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Δεν με χαλάει — ας πάμε με αυτή που δουλεύει",
            en: "Doesn't matter—let's use what works",
          },
          c: { mobile: 2, product: 1 },
          t: { creative: 1 },
        },
      ],
    },
    {
      id: "q27",
      section: 2,
      text: {
        el: "Πρέπει να κάνεις κάτι που δεν έχεις ξανακάνει. Ξεκινάς πώς;",
        en: "You need to do something new. How do you start?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ψάχνω παραδείγματα ή παρόμοια έργα",
            en: "Look for examples",

          },
          c: { research: 3, frontend: 1 },
          t: { research: 2 },
        },
        {
          id: "b",
          label: {
            el: "Κάνω ένα σχέδιο πρώτα",
            en: "Make a plan first",
          },
          c: { backend: 3, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ξεκινάω και μαθαίνω ενώ κάνω",
            en: "Just start and learn",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ζητάω κάποιον που ξέρει",
            en: "Ask someone experienced",
          },
          c: { product: 2, qa: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q28",
      section: 2,
      text: {
        el: "Ένα κοινό αρχείο που κανείς δεν κατάλαβε. Τι κάνεις;",
        en: "A shared file nobody understands. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το διαβάζω αργά και κάνω σημειώσεις",
            en: "Read slowly, take notes",
          },
          c: { research: 3, backend: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ψάχνω για τα λάθη πρώτα",
            en: "Look for bugs first",
          },
          c: { qa: 3, security: 1 },
          t: { adversarial: 2 },
        },
        {
          id: "c",
          label: {
            el: "Γράφω tests γύρω του",
            en: "Write tests around it",
          },
          c: { qa: 3, backend: 1 },
          t: { ops: 2 },
        },
        {
          id: "d",
          label: {
            el: "Το ξαναγράφω καθαρό",
            en: "Rewrite it clean",
          },
          c: { backend: 3, frontend: 1 },
          t: { systems: 3 },
        },
      ],
    },
    {
      id: "q29",
      section: 2,
      text: {
        el: "Δύο άτομα δουλεύουν στο ίδιο κομμάτι και συγκρούονται. Λύση;",
        en: "Two people keep conflicting edits. How to fix?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σχεδιάζουν ποιος κάνει τι",
            en: "Plan who does what",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Χωρίζουν τον κώδικα",
            en: "Split the code",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Μικρότερα, πιο συχνά updates",
            en: "Smaller, frequent updates",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q30",
      section: 2,
      text: {
        el: "Ακατάστατος κώδικας που δουλεύει. Το καθαρίζεις ή το αφήνεις;",
        en: "Messy code that works. Clean it or leave it?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ναι — ο καθαρός κώδικας είναι σημαντικός",
            en: "Yes—clean code matters",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Όχι — αν δουλεύει, δεν το αγγίζω",
            en: "No—if it works, leave it",
          },
          c: { product: 3, frontend: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Μόνο αν έχω χρόνο",
            en: "Only if I have time",
          },
          c: { qa: 2, mobile: 1 },
          t: { creative: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ελέγχω πρώτα αν κρύβει προβλήματα",
            en: "Check if it hides bugs first",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q31",
      section: 2,
      text: {
        el: "«Σε μένα δουλεύει» αλλά σε εσένα όχι. Ξεκινάς πώς;",
        en: "\"Works for me\" but not for you. How to debug?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Συγκρίνω περιβάλλοντα",
            en: "Compare environments",
          },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το βάζω σε container",
            en: "Put in container",
          },
          c: { devops: 3, backend: 2 },
          t: { ops: 2 },
        },
        {
          id: "c",
          label: {
            el: "Δουλεύουμε μαζί",
            en: "Work together",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σκέφτομαι τι υποθέσεις κάνει",
            en: "Think what it assumes",
          },
          c: { backend: 3, security: 1 },
          t: { systems: 3 },
        },
      ],
    },
    {
      id: "q32",
      section: 2,
      text: {
        el: "Έχεις προθεσμία αύριο. Τι κώδικα γράφεις;",
        en: "Deadline tomorrow. What code do you write?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Γρήγορα και πρόχειρα",
            en: "Fast and rough",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Προσεκτικά όπως πάντα",
            en: "Careful as always",
          },
          c: { embedded: 3, qa: 2 },
          t: { systems: 3, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κόβω λειτουργίες, όχι ποιότητα",
            en: "Cut features, not quality",
          },
          c: { backend: 2, product: 2 },
          t: { product: 2 },
        },
        {
          id: "d",
          label: {
            el: "Tests πρώτα, μετά κώδικα",
            en: "Tests first, code second",
          },
          c: { qa: 3, backend: 1 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q33",
      section: 2,
      text: {
        el: "Μία ειδικότητα απόλυτη ή πολλές δεξιότητες;",
        en: "Deep expertise or broad skills?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Απόλυτη ειδικότητα — να είμαι εξπέρ",
            en: "Deep—become expert",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Πολλές δεξιότητες — ποικιλία",
            en: "Broad—lots of variety",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ένα κύριο + γενικές γνώσεις",
            en: "One main + general knowledge",
          },
          c: { backend: 2, product: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Εξαρτάται από ενδιαφέρει με",
            en: "Depends on interests",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q34",
      section: 2,
      text: {
        el: "Κάποιος σχολιάζει δημόσια το λάθος σου. Νιώθεις πώς;",
        en: "Someone publicly calls out your mistake. How do you feel?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ευχαριστώ — συνεισφέρει στη μάθησή μου",
            en: "Thanks—helps me learn",
          },
          c: { backend: 2, qa: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Λίγο ντροπή αλλά καταλαβαίνω",
            en: "Embarrassed but I understand",
          },
          c: { frontend: 2, product: 1 },
          t: { creative: 1, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Δεν με χαλάει — πάμε στο σημαντικό",
            en: "Doesn't bother me—move on",
          },
          c: { research: 2, devops: 1 },
          t: { systems: 1, ops: 1 },
        },
      ],
    },
    {
      id: "q35",
      section: 2,
      text: {
        el: "Θέλεις εργαλεία που δοκιμάσεις ή που ξέρεις ότι δουλεύουν;",
        en: "Try new tools or use proven ones?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δοκιμάζω νέα — η ανακάλυψη είναι διασκεδαστική",
            en: "Try new—fun to discover",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ξέρω τι δουλεύει — δεν αλλάζω",
            en: "Use proven—no unnecessary risk",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Δοκιμάζω νέα αν έχουν όφελος",
            en: "Try if there's clear benefit",
          },
          c: { research: 2, devops: 2 },
          t: { analytical: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q36",
      section: 2,
      text: {
        el: "Μαθαίνεις από σφάλματα ή προτιμάς να τα αποφεύγεις;",
        en: "Learn from mistakes or avoid them?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μαθαίνω από αυτά — πολύτιμη εμπειρία",
            en: "Learn from them—valuable",
          },
          c: { research: 2, frontend: 2 },
          t: { research: 2, creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Αποφεύγω — καλύτερο να μη συμβούν",
            en: "Avoid—better they don't happen",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο — αποφεύγω αλλά μαθαίνω αν συμβούν",
            en: "Both—avoid but learn if they happen",
          },
          c: { backend: 2, product: 2 },
          t: { systems: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q37",
      section: 2,
      text: {
        el: "Έχεις 2 δουλειές — μία ενδιαφέρουσα αλλά ανασφαλής, μία σταθερή αλλά βαρετή;",
        en: "Interesting but risky job or boring but stable?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ενδιαφέρουσα — θέλω να μαθαίνω",
            en: "Interesting—love learning",
          },
          c: { research: 3, mobile: 2 },
          t: { creative: 3, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Σταθερή — θέλω ασφάλεια",
            en: "Stable—want security",
          },
          c: { qa: 2, embedded: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ενδιαφέρουσα αν μπορώ να κρατήσω ασφάλεια",
            en: "Interesting if I can stay safe",
          },
          c: { product: 2, backend: 2 },
          t: { systems: 2, people: 1 },
        },
      ],
    },
    {
      id: "q38",
      section: 2,
      text: {
        el: "Ένα μεγάλο project που θέλει δουλειά με τη δική σου ομάδα. Προτιμάς να κάνεις;",
        en: "Big project needing teamwork. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Παίρνω το κομμάτι που με ενδιαφέρει",
            en: "Pick the part I like",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2 },
        },
        {
          id: "b",
          label: {
            el: "Αναλαμβάνω ευθύνη και συντονίζω",
            en: "Take lead and coordinate",
          },
          c: { product: 3, backend: 1 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κάνω οποιοδήποτε κομμάτι χρειάζεται",
            en: "Do whatever's needed",
          },
          c: { qa: 2, backend: 2 },
          t: { systems: 2, people: 1 },
        },
        {
          id: "d",
          label: {
            el: "Δουλεύω μόνος σε ένα μέρος",
            en: "Work alone on my part",
          },
          c: { embedded: 2, research: 2 },
          t: { systems: 2, research: 1 },
        },
      ],
    },
    {
      id: "q39",
      section: 2,
      text: {
        el: "Δουλειά που αλλάζει συχνά ή όπου τα πράγματα παραμένουν σταθερά;",
        en: "Constantly changing or stable work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αλλάζει — μου αρέσει η δυναμική",
            en: "Changing—I like dynamic",
          },
          c: { product: 3, mobile: 2 },
          t: { creative: 3, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Σταθερή — καλύτερο να σχεδιάζω",
            en: "Stable—I can plan ahead",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Αργή αλλαγή — εξισορρόπηση",
            en: "Slow change—balance",
          },
          c: { research: 2, devops: 2 },
          t: { analytical: 2, systems: 1 },
        },
      ],
    },
    {
      id: "q40",
      section: 2,
      text: {
        el: "Κάποιος που δεν αρέσει σου προσωπικά. Μπορείς να δουλέψεις μαζί;",
        en: "Someone you don't like personally. Can you work together?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ναι — το προσωπικό είναι ξεχωριστό",
            en: "Yes—separate personal from work",
          },
          c: { backend: 2, qa: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Δύσκολο — χρειάζεται χημεία",
            en: "Hard—need chemistry",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Εξαρτάται από το πόσο διαφορετικοί είμαστε",
            en: "Depends on how different we are",
          },
          c: { research: 2, devops: 2 },
          t: { analytical: 2, people: 1 },
        },
      ],
    },
    {
      id: "q41",
      section: 2,
      text: {
        el: "Κάποιος καλό σχέδιο αλλά εκτέλεση μέτρια. Τι κρίνεις;",
        en: "Good plan but poor execution. What's worse?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το σχέδιο — αν δεν ξέρεις που πας",
            en: "Plan—if you don't know where to go",
          },
          c: { backend: 2, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Η εκτέλεση — λεπτομέρειες σημαίνουν",
            en: "Execution—details matter",
          },
          c: { qa: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο είναι σημαντικά",
            en: "Both matter equally",
          },
          c: { product: 2, frontend: 2 },
          t: { systems: 1, creative: 1 },
        },
      ],
    },
    {
      id: "q42",
      section: 2,
      text: {
        el: "Έχεις ένα εργαλείο που αγαπάς ή προτιμάς να μαθαίνεις νέα;",
        en: "Stick with tools you love or learn new ones?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αγαπώ μ' εργαλεία μου — έχει νόημα",
            en: "Love my tools—makes sense",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 2 },
        },
        {
          id: "b",
          label: {
            el: "Μαθαίνω νέα — το κτισμό δεν είναι το εργαλείο",
            en: "Learn new—the build, not the tool",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Χρησιμοποιώ το καλύτερο για κάθε δουλειά",
            en: "Use best tool for job",
          },
          c: { research: 2, devops: 2 },
          t: { analytical: 2 },
        },
      ],
    },
    {
      id: "q43",
      section: 2,
      text: {
        el: "Προφέρεις κύκλος κοντής διάρκειας ή εκτενή projects;",
        en: "Short cycles or long projects?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κύκλος κοντής διάρκειας — γρήγορα αποτελέσματα",
            en: "Short—quick wins",
          },
          c: { product: 3, mobile: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Εκτενή — βαθιά κατανόηση",
            en: "Long—deep understanding",
          },
          c: { research: 3, backend: 2 },
          t: { research: 3, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο — εξαρτάται από το έργο",
            en: "Both—depends on project",
          },
          c: { frontend: 2, qa: 2 },
          t: { creative: 1, analytical: 1 },
        },
      ],
    },
    {
      id: "q44",
      section: 2,
      text: {
        el: "Ένας boss που κατευθύνει ή ελευθερία χωρίς επίβλεψη;",
        en: "Boss directing or freedom without oversight?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Boss κατευθύνει — ξέρω τι περιμένεται",
            en: "Boss directs—I know expectations",
          },
          c: { qa: 2, embedded: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ελευθερία — αποφασίζω μόνος",
            en: "Freedom—I decide",
          },
          c: { research: 3, backend: 2 },
          t: { systems: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Καθοδήγηση με ελευθερία",
            en: "Guidance with freedom",
          },
          c: { product: 2, frontend: 2 },
          t: { creative: 2, people: 1 },
        },
      ],
    },
    {
      id: "q45",
      section: 2,
      text: {
        el: "Δουλειά που είναι ορατή (άλλοι βλέπουν ό,τι κάνεις) ή κρυμμένη;",
        en: "Visible work or invisible infrastructure?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ορατή — θέλω να δουν τη δουλειά μου",
            en: "Visible—want recognition",
          },
          c: { frontend: 3, product: 2 },
          t: { creative: 2, people: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κρυμμένη — αρκεί να δουλεύει",
            en: "Invisible—as long as it works",
          },
          c: { backend: 3, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο — πολλά συστήματα έχουν visible interface",
            en: "Both—systems have visible part too",
          },
          c: { devops: 2, research: 2 },
          t: { systems: 1, analytical: 1 },
        },
      ],
    },
    {
      id: "q46",
      section: 2,
      text: {
        el: "Πόσο σημαντικές οι δοκιμές στη δουλειά σου;",
        en: "How important is testing to you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πολύ — δεν κρέμω κώδικα χωρίς tests",
            en: "Very—no code without tests",
          },
          c: { qa: 3, backend: 2 },
          t: { ops: 3, systems: 1 },
        },
        {
          id: "b",
          label: {
            el: "Σημαντική αλλά όχι απόλυτη",
            en: "Important but not absolute",
          },
          c: { frontend: 2, product: 2 },
          t: { creative: 1, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Λιγότερο — κωδικά δουλεύει μετά",
            en: "Less—ship and fix",
          },
          c: { mobile: 2, research: 1 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q47",
      section: 2,
      text: {
        el: "Ένα feature που σου ζητούν αλλά δεν έχει νόημα. Τι κάνεις;",
        en: "Asked to build something that doesn't make sense. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το κάνω — έτσι πληρώνομαι",
            en: "Build it—that's the job",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ρωτάω γιατί — ίσως δεν καταλαβαίνω",
            en: "Ask why—maybe I don't understand",
          },
          c: { product: 3, backend: 1 },
          t: { people: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Προτείνω κάτι καλύτερο",
            en: "Suggest something better",
          },
          c: { research: 2, product: 2 },
          t: { creative: 2 },
        },
        {
          id: "d",
          label: {
            el: "Δεν το κάνω — αν δεν έχει νόημα",
            en: "Don't—if it doesn't make sense",
          },
          c: { security: 2, research: 1 },
          t: { adversarial: 1 },
        },
      ],
    },
    {
      id: "q48",
      section: 2,
      text: {
        el: "Τελευταία — τι σας κάνει να αισθάνεστε ότι έκανε μια καλή δουλειά;",
        en: "Last: what makes you feel like you did good work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάποιος το χρησιμοποιεί και είναι ευχαριστημένος",
            en: "Someone uses it and is happy",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 2, creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ο κώδικας είναι καθαρός και ωραίος",
            en: "Code is clean and elegant",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Δεν σπάει όταν χρησιμοποιείται",
            en: "Doesn't break when used",
          },
          c: { qa: 3, security: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Έμαθα κάτι νέο",
            en: "I learned something new",
          },
          c: { research: 3, mobile: 1 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q49",
      section: 2,
      text: {
        el: "Σε έναν κοινό κώδικα, παίρνεις ευθύνη για τα δικά σου μέρη ή όλο το σύστημα;",
        en: "In shared code, responsible for your part or whole system?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μόνο το δικό μου μέρος",
            en: "Just my part",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ολόκληρο το σύστημα",
            en: "Whole system",
          },
          c: { backend: 3, devops: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Το δικό μου + πώς αλληλεπιδρά με τα άλλα",
            en: "Mine + how it connects",
          },
          c: { product: 2, research: 2 },
          t: { systems: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q50",
      section: 2,
      text: {
        el: "Αν μπορούσες να αλλάξεις μία σχέση με κώδικα, τι θα ήταν;",
        en: "One thing you'd change about coding, what is it?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Λιγότερη γραφειοκρατία, περισσότερη κωδικοποίηση",
            en: "Less meetings, more coding",
          },
          c: { backend: 2, frontend: 2 },
          t: { systems: 1, creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Πιο ξεκάθαρες απαιτήσεις",
            en: "Clearer requirements",
          },
          c: { qa: 2, product: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Περισσότερος χρόνος να σκεφτώ",
            en: "More time to think",
          },
          c: { research: 3, backend: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Καλύτερα εργαλεία και βιβλιοθήκες",
            en: "Better tools and libraries",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2 },
        },
      ],
    },
  ],
};
