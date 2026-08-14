import type { Section } from "./types";

export const section3: Section = {
  index: 3,
  title: { el: "Μπροστά σε μια επιλογή", en: "Facing a choice" },
  subtitle: {
    el: "Καταστάσεις όπου δεν υπάρχει σωστή απάντηση, μόνο ανταλλάγματα. Αυτό που θυσιάζεις πρώτο λέει πολλά.",
    en: "Situations with no right answer, only trade-offs. What you give up first says a lot.",
  },
  questions: [
    {
      id: "q21",
      section: 3,
      text: {
        el: "Αγοράζεις κάτι ακριβό που θα το κρατήσεις χρόνια. Τι σε αποφασίζει;",
        en: "You're buying something expensive you'll keep for years. What decides it?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πώς δείχνει και πώς νιώθω όταν το χρησιμοποιώ",
            en: "How it looks and how it feels to use",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Πόσο εύκολα επισκευάζεται όταν χαλάσει",
            en: "How easily it can be repaired when it breaks",
          },
          c: { embedded: 3, devops: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Οι συγκριτικές δοκιμές και τα νούμερα",
            en: "Comparison tests and the numbers",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Τι λένε όσοι το έχουν εδώ και δύο χρόνια",
            en: "What people who've had it for two years say",
          },
          c: { qa: 2, product: 2 },
          t: { people: 2, adversarial: 1 },
        },
        {
          id: "e",
          label: {
            el: "Το να μην το ξανασκεφτώ ποτέ. Παίρνω το ακριβό και τέλος",
            en: "Never having to think about it again. I buy the expensive one and I'm done",
          },
          c: { product: 3, backend: 1 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q22",
      section: 3,
      text: {
        el: "Γρήγορα και μέτρια σήμερα, ή αργά και καλά σε δύο βδομάδες;",
        en: "Fast and mediocre today, or slow and good in two weeks?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σήμερα. Θα το βελτιώνω αφού δω πώς πάει",
            en: "Today. I'll improve it once I see how it goes",
          },
          c: { product: 3, frontend: 2 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: {
            el: "Σε δύο βδομάδες, για να μην το ξαναπιάσω ποτέ",
            en: "In two weeks, so I never have to touch it again",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Σήμερα, αλλά με δίχτυ που πιάνει το λάθος αν γίνει",
            en: "Today, but with a net that catches it if it goes wrong",
          },
          c: { devops: 3, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ούτε το ένα ούτε το άλλο πριν καταλάβω τι χρειάζεται πραγματικά",
            en: "Neither, until I understand what's actually needed",
          },
          c: { research: 3, ml: 1, datasci: 1 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q23",
      section: 3,
      text: {
        el: "Κάποιος σού προτείνει μια «εύκολη λύση» για ένα πρόβλημά σου. Πρώτη ερώτηση;",
        en: "Someone offers you an \"easy fix\" for a problem of yours. First question?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Τι δίνω σε αντάλλαγμα χωρίς να το καταλάβω;»",
            en: "\"What am I giving up without realising?\"",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Τι γίνεται αν αυτή η λύση σταματήσει να υπάρχει;»",
            en: "\"What happens if this fix stops existing?\"",
          },
          c: { devops: 3, backend: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "«Πόσο χρόνο μού γλιτώνει στην πράξη;»",
            en: "\"How much time does it really save me?\"",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Πώς ακριβώς δουλεύει από μέσα;»",
            en: "\"How exactly does it work inside?\"",
          },
          c: { embedded: 2, research: 3 },
          t: { systems: 2, research: 2 },
        },
        {
          id: "e",
          label: {
            el: "«Ποιος άλλος το έχει δοκιμάσει και τι έπαθε;»",
            en: "\"Who else tried it and how did it go?\"",
          },
          c: { qa: 2, dataeng: 2 },
          t: { analytical: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q24",
      section: 3,
      text: {
        el: "Πρέπει να είσαι κάπου ακριβώς στην ώρα σου, αλλιώς δεν έχει νόημα να πας.",
        en: "You must be somewhere exactly on time, or there's no point going at all.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Χρονομετρώ κάθε βήμα της διαδρομής από πριν",
            en: "Time every leg of the journey in advance",
          },
          c: { embedded: 2, backend: 3 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Φεύγω πολύ νωρίς και περιμένω εκεί",
            en: "Leave far too early and wait there",
          },
          c: { qa: 3, devops: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Έχω δεύτερη διαδρομή στο μυαλό αν κολλήσει η πρώτη",
            en: "Keep a second route in mind in case the first jams",
          },
          c: { devops: 3, security: 2 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: {
            el: "Κοιτάω ιστορικά πόσο κάνει τέτοια ώρα και εμπιστεύομαι τον μέσο όρο",
            en: "Look at how long it usually takes at that hour and trust the average",
          },
          c: { datasci: 3, dataeng: 1 },
          t: { analytical: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ειδοποιώ ότι μπορεί να αργήσω και το λύνω αν συμβεί",
            en: "Warn them I might be late and deal with it if it happens",
          },
          c: { product: 3, mobile: 1 },
          t: { people: 2, product: 1 },
        },
      ],
    },
    {
      id: "q25",
      section: 3,
      text: {
        el: "Κάτι στο σπίτι δουλεύει, αλλά κανείς δεν ξέρει πώς και γιατί.",
        en: "Something in the house works, but nobody knows how or why.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το αφήνω ήσυχο. Δουλεύει",
            en: "Leave it alone. It works",
          },
          c: { product: 2, frontend: 2 },
          t: { product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Το ξεψαχνίζω μέχρι να καταλάβω",
            en: "Take it apart until I understand",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "Γράφω τι κάνει, ώστε να ξέρει ο επόμενος",
            en: "Write down what it does, so the next person knows",
          },
          c: { qa: 2, dataeng: 2, devops: 1 },
          t: { ops: 2, people: 1 },
        },
        {
          id: "d",
          label: {
            el: "Υποθέτω ότι κάποια στιγμή θα μας τη φέρει και προετοιμάζομαι",
            en: "Assume it'll bite us eventually and prepare",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q26",
      section: 3,
      text: {
        el: "Δύο σχέδια: ένα απλό που δεν καλύπτει τα πάντα, ένα πλήρες αλλά βαρύ.",
        en: "Two plans: a simple one that misses cases, a complete one that's heavy.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το απλό. Το μεγαλώνουμε αν χρειαστεί",
            en: "The simple one. We grow it if we need to",
          },
          c: { product: 3, frontend: 2, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το πλήρες. Δεν θέλω να τα ξαναφτιάχνω όλα σε έναν χρόνο",
            en: "The complete one. I don't want to redo it all in a year",
          },
          c: { backend: 3, dataeng: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Όποιο μπορώ να πάρω πιο εύκολα πίσω αν έκανα λάθος",
            en: "Whichever I can walk back more easily if I'm wrong",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα θέλω να ξέρω ποιες περιπτώσεις συμβαίνουν όντως",
            en: "First I want to know which cases actually happen",
          },
          c: { datasci: 3, research: 2 },
          t: { analytical: 3 },
        },
      ],
    },
    {
      id: "q27",
      section: 3,
      text: {
        el: "Έχεις ελευθερία να διαλέξεις εργαλεία και τρόπο. Τι σε καθορίζει;",
        en: "You're free to choose your tools and method. What decides it?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τι θα με αφήσει να δείξω κάτι μέσα σε λίγες μέρες",
            en: "Whatever lets me show something within days",
          },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Τι μου δίνει έλεγχο σε ό,τι συμβαίνει από κάτω",
            en: "Whatever gives me control over what happens underneath",
          },
          c: { embedded: 3, backend: 2, security: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Τι θα μπορούν να συνεχίσουν οι άλλοι χωρίς εμένα",
            en: "Whatever others can carry on without me",
          },
          c: { devops: 2, qa: 2, product: 1 },
          t: { ops: 2, people: 1 },
        },
        {
          id: "d",
          label: {
            el: "Τι θα μου μάθει κάτι που δεν ξέρω",
            en: "Whatever teaches me something I don't know",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Τι είναι φθηνότερο και πιο απλό συνολικά",
            en: "Whatever is cheaper and simpler overall",
          },
          c: { dataeng: 2, devops: 2, datasci: 1 },
          t: { ops: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q28",
      section: 3,
      text: {
        el: "Πότε λες «αυτό είναι καλά σχεδιασμένο»;",
        en: "When do you say \"this is well designed\"?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Όταν μπορώ να το εξηγήσω σε οποιονδήποτε σε πέντε λεπτά",
            en: "When I can explain it to anyone in five minutes",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Όταν κάθε κομμάτι έχει έναν ρόλο και τίποτα δεν περισσεύει",
            en: "When every part has one job and nothing is spare",
          },
          c: { backend: 3, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Όταν σου δείχνει καθαρά ότι κάτι πάει στραβά, αντί να το κρύβει",
            en: "When it tells you clearly something is wrong instead of hiding it",
          },
          c: { devops: 3, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Όταν μπορώ να δείξω γιατί είναι σωστό, όχι μόνο ότι δουλεύει",
            en: "When I can show why it's correct, not just that it runs",
          },
          c: { research: 3, ml: 1, security: 1 },
          t: { research: 2, analytical: 2 },
        },
        {
          id: "e",
          label: {
            el: "Όταν το χρησιμοποιείς χωρίς να χρειαστεί να σου το εξηγήσουν",
            en: "When you use it without anyone explaining it to you",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
      ],
    },
    {
      id: "q29",
      section: 3,
      text: {
        el: "Δεν προλαβαίνεις τα πάντα. Τι κόβεις πρώτο;",
        en: "You can't do everything. What goes first?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τη γυαλάδα: λεπτομέρειες, εμφάνιση, φινίρισμα",
            en: "The polish: details, looks, finish",
          },
          c: { backend: 2, dataeng: 2, embedded: 1 },
          t: { systems: 2 },
        },
        {
          id: "b",
          label: {
            el: "Τις σπάνιες περιπτώσεις. Καλύπτω τη βασική διαδρομή",
            en: "The rare cases. I cover the main path",
          },
          c: { product: 3, frontend: 2 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κόβω το εύρος και κάνω σωστά τα λίγα που μένουν",
            en: "Cut the scope and do the little that's left properly",
          },
          c: { qa: 2, embedded: 2, research: 1 },
          t: { adversarial: 1, systems: 2 },
        },
        {
          id: "d",
          label: {
            el: "Την αυτοματοποίηση. Το κάνω με το χέρι για λίγο",
            en: "The automation. I'll do it by hand for a while",
          },
          c: { datasci: 2, mobile: 2, product: 1 },
          t: { product: 2 },
        },
        {
          id: "e",
          label: {
            el: "Τίποτα· ζητάω περισσότερο χρόνο ή περισσότερα χέρια",
            en: "Nothing; I ask for more time or more hands",
          },
          c: { devops: 2, product: 2 },
          t: { people: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q30",
      section: 3,
      text: {
        el: "Κάποιος διαφωνεί έντονα μαζί σου. Τι σε κάνει να αλλάξεις γνώμη;",
        en: "Someone strongly disagrees with you. What changes your mind?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ένα συγκεκριμένο παράδειγμα όπου η άποψή μου καταρρέει",
            en: "One concrete example where my view falls apart",
          },
          c: { qa: 3, security: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "b",
          label: {
            el: "Νούμερα από την πραγματικότητα που με διαψεύδουν",
            en: "Real-world numbers proving me wrong",
          },
          c: { datasci: 3, dataeng: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Το ότι αυτός θα ζήσει με τις συνέπειες κι εγώ όχι",
            en: "That they'll live with the consequences and I won't",
          },
          c: { product: 2, devops: 2, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ένα επιχείρημα από την αρχή που δεν μπορώ να αντικρούσω",
            en: "An argument from first principles I can't refute",
          },
          c: { research: 3, embedded: 1, ml: 1 },
          t: { research: 2, analytical: 2 },
        },
      ],
    },
  ],
};
