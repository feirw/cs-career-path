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
            el: "Ελέγχω τι άλλαξε γύρω από τον κώδικα: εκδόσεις, ρυθμίσεις, μηχάνημα",
            en: "Check what changed around the code: versions, config, the machine",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σβήνω τα πάντα και ξαναστήνω το περιβάλλον από την αρχή",
            en: "Wipe everything and rebuild the environment from scratch",
          },
          c: { devops: 2, mobile: 2 },
          t: { ops: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω κάποιον· μπορεί να το έχει ξαναδεί",
            en: "Ask someone; they may have seen it before",
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
        el: "Μια σελίδα που φτιάξατε αργεί έξι δευτερόλεπτα να φορτώσει. Από πού ξεκινάς;",
        en: "A page you built takes six seconds to load. Where do you start?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ανοίγω τα εργαλεία του browser να δω τι φορτώνει και πόσο",
            en: "Open the browser tools to see what loads and how long it takes",
          },
          c: { frontend: 3, mobile: 1 },
          t: { creative: 1, analytical: 2 },
        },
        {
          id: "b",
          label: {
            el: "Κοιτάω τι ζητάει από τη βάση και πόσες φορές",
            en: "Look at what it asks the database and how many times",
          },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μετράω πόσο αργεί για ποιους χρήστες πριν υποθέσω οτιδήποτε",
            en: "Measure how slow it is, for which users, before assuming anything",
          },
          c: { datasci: 3, devops: 1 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Κοιτάω αν φταίει ο server: μνήμη, δίκτυο, φόρτος",
            en: "Check whether it's the server: memory, network, load",
          },
          c: { devops: 3, embedded: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω αν έχει σημασία — μήπως αφορά ελάχιστους;",
            en: "Ask whether it matters — maybe it affects almost nobody?",
          },
          c: { product: 3, research: 1 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Σου δίνουν ένα αρχείο 800 γραμμών χωρίς σχόλια που πρέπει να αλλάξεις.",
        en: "You're handed an 800-line file with no comments that you must change.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το διαβάζω ολόκληρο πριν αγγίξω μία γραμμή",
            en: "Read all of it before touching a single line",
          },
          c: { research: 3, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το τρέχω με breakpoints να δω τη ροή στην πράξη",
            en: "Run it with breakpoints to watch the flow in practice",
          },
          c: { backend: 2, embedded: 2, qa: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Γράφω πρώτα δοκιμές γύρω του, μετά αλλάζω με άνεση",
            en: "Write tests around it first, then change it comfortably",
          },
          c: { qa: 3, devops: 1 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: {
            el: "Αλλάζω μόνο το ελάχιστο και δεν ανακατεύω τίποτα άλλο",
            en: "Change the bare minimum and stir nothing else",
          },
          c: { product: 2, frontend: 2, mobile: 1 },
          t: { product: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ψάχνω τι κακό μπορεί να κρύβεται εκεί μέσα τόσο καιρό",
            en: "Look for what nasty thing has been hiding in there",
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
        el: "Δουλεύετε τρεις στο ίδιο repo και τα conflicts έχουν γίνει καθημερινά.",
        en: "Three of you share a repo and merge conflicts have become a daily event.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Προτείνω κανόνες: μικρά commits, συχνά merges",
            en: "Propose rules: small commits, frequent merges",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Χωρίζουμε τον κώδικα ώστε να μην πατάει ο ένας στον άλλο",
            en: "Split the code so we stop stepping on each other",
          },
          c: { backend: 3, embedded: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κάθε πρωί δέκα λεπτά να λέμε ποιος αγγίζει τι",
            en: "Ten minutes each morning saying who's touching what",
          },
          c: { product: 3 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Τα λύνω όποτε προκύπτουν, δεν με χαλάει",
            en: "I just resolve them as they come, it doesn't bother me",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 1, ops: 1 },
        },
        {
          id: "e",
          label: {
            el: "Στήνω έλεγχο που δεν αφήνει να περάσει κώδικας που σπάει το build",
            en: "Set up a check that blocks anything breaking the build",
          },
          c: { devops: 2, qa: 3 },
          t: { ops: 2, adversarial: 1 },
        },
      ],
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "«Σε μένα δουλεύει.» Στου συμφοιτητή σου δεν δουλεύει.",
        en: "\"Works on my machine.\" On your classmate's it doesn't.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Συγκρίνω εκδόσεις και ρυθμίσεις γραμμή γραμμή",
            en: "Compare versions and settings line by line",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το βάζω σε container ώστε να τρέχει παντού το ίδιο",
            en: "Put it in a container so it runs the same everywhere",
          },
          c: { devops: 3, backend: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κάθομαι δίπλα του και το βλέπουμε μαζί",
            en: "Sit next to them and we look at it together",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ψάχνω ποια υπόθεση κάνει ο κώδικας για το μηχάνημα",
            en: "Work out which assumption the code makes about the machine",
          },
          c: { embedded: 3, backend: 1, security: 1 },
          t: { systems: 3 },
        },
      ],
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Ποια στιγμή σε ευχαριστεί περισσότερο σε ένα project;",
        en: "Which moment in a project pleases you most?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Όταν εμφανίζεται στην οθόνη αυτό που φανταζόσουν",
            en: "When what you imagined finally appears on screen",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Όταν όλα τα κομμάτια δένουν και μιλάνε μεταξύ τους",
            en: "When all the pieces click together and talk to each other",
          },
          c: { backend: 3, dataeng: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Όταν όλα τα tests γίνονται πράσινα",
            en: "When every test goes green",
          },
          c: { qa: 3, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Όταν βρίσκεις γιατί έσπαγε και ήταν κάτι απρόσμενο",
            en: "When you find why it broke and it's something unexpected",
          },
          c: { security: 2, embedded: 2, research: 2 },
          t: { adversarial: 2, research: 1 },
        },
        {
          id: "e",
          label: {
            el: "Όταν το χρησιμοποιεί κάποιος και σου λέει ότι βοήθησε",
            en: "When someone uses it and says it helped",
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
        el: "Έχεις προθεσμία αύριο. Πώς γράφεις;",
        en: "You have a deadline tomorrow. How do you write?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πρόχειρα αλλά γρήγορα· καθαρίζω μετά",
            en: "Rough but fast; I clean up afterwards",
          },
          c: { frontend: 2, mobile: 2, product: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Το ίδιο προσεκτικά· αλλιώς θα το πληρώσω",
            en: "Exactly as carefully; otherwise I'll pay for it",
          },
          c: { embedded: 3, qa: 2 },
          t: { systems: 2, adversarial: 1 },
        },
        {
          id: "c",
          label: {
            el: "Κόβω λειτουργίες, όχι ποιότητα",
            en: "I cut features, not quality",
          },
          c: { backend: 2, product: 2, qa: 1 },
          t: { product: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Γράφω πρόχειρα αλλά αφήνω σχόλια με ό,τι χρωστάω",
            en: "Write rough but leave notes of everything I owe",
          },
          c: { devops: 2, dataeng: 2, research: 1 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Βρίσκεις κώδικα που δουλεύει σωστά αλλά είναι απαίσια γραμμένος.",
        en: "You find code that works correctly but is horribly written.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τον ξαναγράφω. Δεν αντέχω να τον ξαναδώ έτσι",
            en: "Rewrite it. I can't stand seeing it again",
          },
          c: { embedded: 2, backend: 3 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Τον αφήνω και γράφω δίπλα τι κάνει",
            en: "Leave it and document what it does next to it",
          },
          c: { research: 2, qa: 2, dataeng: 1 },
          t: { research: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Τον πειράζω μόνο αν χρειαστεί να τον αλλάξω για άλλο λόγο",
            en: "Only touch it when I have another reason to change it",
          },
          c: { product: 3, devops: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα ελέγχω αν κρύβει σφάλμα που δεν έχει φανεί",
            en: "First check whether it hides a bug nobody has hit yet",
          },
          c: { qa: 2, security: 3 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: {
            el: "Τον καθαρίζω λίγο κάθε φορά που περνάω από εκεί",
            en: "Tidy a little every time I pass through it",
          },
          c: { frontend: 2, devops: 2, mobile: 1 },
          t: { ops: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Πόσο σε απασχολεί τι γίνεται κάτω από τη γλώσσα που γράφεις — μνήμη, δίσκος, δίκτυο;",
        en: "How much do you think about what's under your language — memory, disk, network?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Συνέχεια. Θέλω να ξέρω τι πληρώνω σε κάθε γραμμή",
            en: "Constantly. I want to know the cost of every line",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Όταν κάτι αργεί ή σκάει, τότε κατεβαίνω",
            en: "When something is slow or crashes, then I go down there",
          },
          c: { devops: 2, backend: 2, dataeng: 1 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Με ενδιαφέρει σαν γνώση, όχι σαν καθημερινή δουλειά",
            en: "It interests me as knowledge, not as daily work",
          },
          c: { research: 2, datasci: 2, ml: 1 },
          t: { research: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ελάχιστα. Θέλω να δουλεύω όσο πιο ψηλά γίνεται",
            en: "Barely. I want to work as high up as possible",
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
        el: "Μια έτοιμη βιβλιοθήκη κάνει το 90% αυτού που θες, αλλά όχι το υπόλοιπο.",
        en: "A library does 90% of what you need, but not the rest.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Διαβάζω τον κώδικά της και τον προσαρμόζω",
            en: "Read its source and adapt it",
          },
          c: { embedded: 2, research: 3, backend: 1 },
          t: { research: 2, systems: 1 },
        },
        {
          id: "b",
          label: {
            el: "Τη χρησιμοποιώ και κάνω το υπόλοιπο 10% με το χέρι",
            en: "Use it and handle the last 10% by hand",
          },
          c: { product: 3, frontend: 2 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ψάχνω άλλη· κάποιος θα το έχει λύσει σωστά",
            en: "Look for another; someone will have solved it properly",
          },
          c: { mobile: 2, frontend: 2, dataeng: 1 },
          t: { ops: 1, creative: 1 },
        },
        {
          id: "d",
          label: {
            el: "Τη γράφω μόνος μου. Θέλω να ελέγχω τι τρέχει",
            en: "Write my own. I want control over what runs",
          },
          c: { embedded: 3, security: 2 },
          t: { systems: 2, adversarial: 1 },
        },
        {
          id: "e",
          label: {
            el: "Πρώτα κοιτάω πόσο ενεργή είναι και τι κουβαλάει μαζί της",
            en: "First check how maintained it is and what it drags in",
          },
          c: { security: 2, devops: 3 },
          t: { adversarial: 2, ops: 2 },
        },
      ],
    },
  ],
};
