import type { Section } from "./types";

export const section2: Section = {
  index: 2,
  title: { el: "Όταν κάτι πάει στραβά", en: "When something goes wrong" },
  subtitle: {
    el: "Οι δυσκολίες δείχνουν τον τρόπο σκέψης καθαρότερα από τις καλές μέρες. Απάντησε με το τι κάνεις πραγματικά, όχι με το τι θα ήταν σωστό.",
    en: "Trouble reveals how you think far better than good days do. Answer with what you actually do, not what would be correct.",
  },
  questions: [
    {
      id: "q11",
      section: 2,
      text: {
        el: "Οδηγείς και το αυτοκίνητο αρχίζει να βγάζει έναν ήχο που δεν είχε ποτέ.",
        en: "You're driving and the car starts making a noise it has never made.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σταματάω αμέσως. Δεν ρισκάρω κάτι που δεν καταλαβαίνω",
            en: "Stop immediately. I don't gamble on something I don't understand",
          },
          c: { security: 2, qa: 3 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κλείνω το ραδιόφωνο και ακούω πότε ακριβώς γίνεται",
            en: "Turn off the radio and listen for exactly when it happens",
          },
          c: { embedded: 3, backend: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Συνεχίζω μέχρι το συνεργείο, αλλά προσεκτικά",
            en: "Keep going to the garage, carefully",
          },
          c: { devops: 3, mobile: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Το ηχογραφώ για να το δείξω σε κάποιον που ξέρει",
            en: "Record it so I can play it to someone who knows",
          },
          c: { dataeng: 2, product: 2 },
          t: { people: 1, analytical: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ψάχνω στο κινητό τι σημαίνει τέτοιος ήχος",
            en: "Search on my phone what that noise means",
          },
          c: { research: 2, datasci: 2 },
          t: { research: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q12",
      section: 2,
      text: {
        el: "Οργανώνεις κάτι για είκοσι άτομα και δύο μέρες πριν ακυρώνει ο χώρος.",
        en: "You're hosting something for twenty people and two days out the venue cancels.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Παίρνω τηλέφωνα μέχρι να βρω λύση. Θα γίνει",
            en: "Start calling people until I find something. It's happening",
          },
          c: { product: 3, devops: 1 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Είχα ήδη σκεφτεί εναλλακτική. Την ενεργοποιώ",
            en: "I already had a backup. I switch to it",
          },
          c: { devops: 3, security: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Το κάνω πιο μικρό και πιο απλό αντί να το σώσω όπως ήταν",
            en: "Make it smaller and simpler instead of saving the original plan",
          },
          c: { product: 2, frontend: 2, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ζητάω ευθύνες από τον χώρο. Δεν πάει έτσι",
            en: "Hold the venue to account. That's not how this works",
          },
          c: { qa: 2, security: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: {
            el: "Το αναβάλλω. Καλύτερα σωστά παρά βιαστικά",
            en: "Postpone it. Better right than rushed",
          },
          c: { embedded: 2, research: 2, qa: 1 },
          t: { systems: 2, research: 1 },
        },
      ],
    },
    {
      id: "q13",
      section: 2,
      text: {
        el: "Ένα πρόβλημα σε απασχολεί τρεις ώρες και δεν έχει κουνηθεί καθόλου.",
        en: "You've been on one problem for three hours and it hasn't budged.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Συνεχίζω. Συνήθως σπάει λίγο μετά",
            en: "Keep going. It usually cracks soon after",
          },
          c: { embedded: 2, research: 3 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το εξηγώ σε κάποιον από την αρχή, ακόμα κι αν δεν ξέρει σχετικά",
            en: "Explain it to someone from scratch, even if they know nothing about it",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: {
            el: "Τα παρατάω όλα και ξεκινάω από άλλη αφετηρία",
            en: "Drop everything and start from a different angle",
          },
          c: { ml: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "d",
          label: {
            el: "Το σπάω σε κομμάτια μέχρι να βρω ποιο ακριβώς φταίει",
            en: "Break it into pieces until I find which piece is guilty",
          },
          c: { backend: 2, qa: 2, datasci: 1 },
          t: { analytical: 3 },
        },
        {
          id: "e",
          label: {
            el: "Πάω βόλτα. Λύνεται μόνο του στο μυαλό μου",
            en: "Go for a walk. It solves itself in my head",
          },
          c: { research: 2, ml: 2, frontend: 1 },
          t: { research: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q14",
      section: 2,
      text: {
        el: "Δύο άνθρωποι σού δίνουν εντελώς αντίθετες εξηγήσεις για το ίδιο πράγμα.",
        en: "Two people give you completely opposite explanations of the same thing.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Βρίσκω τι θα ξεχώριζε ποιος έχει δίκιο και το ελέγχω",
            en: "Work out what would settle it and check that",
          },
          c: { datasci: 3, research: 1 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: {
            el: "Υποθέτω ότι κάνουν και οι δύο λάθος και το κοιτάω μόνος μου",
            en: "Assume both are wrong and look myself",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "c",
          label: {
            el: "Τους βάζω να το συζητήσουν μπροστά μου",
            en: "Get them to hash it out in front of me",
          },
          c: { product: 3 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Διαλέγω αυτό που παίρνεται πιο εύκολα πίσω και το δοκιμάζω",
            en: "Pick whichever is easiest to undo and just try it",
          },
          c: { devops: 3, mobile: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Εμπιστεύομαι αυτόν που έχει περισσότερη εμπειρία",
            en: "Trust whoever has more experience",
          },
          c: { qa: 2, backend: 2 },
          t: { ops: 2 },
        },
      ],
    },
    {
      id: "q15",
      section: 2,
      text: {
        el: "Ανακαλύπτεις ότι κάτι ήταν λάθος εδώ και δύο χρόνια και δεν το είχε δει κανείς.",
        en: "You discover something has been wrong for two years and nobody noticed.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Τι άλλο μπορεί να μας ξεφεύγει τόσο καιρό;»",
            en: "\"What else has been slipping past us all this time?\"",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Πρέπει να υπάρχει τρόπος να το μαθαίναμε νωρίτερα»",
            en: "\"There should have been a way to find out sooner\"",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "«Πόσο μας κόστισε πραγματικά;»",
            en: "\"What did it actually cost us?\"",
          },
          c: { product: 3, datasci: 2 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Γιατί φαινόταν σωστό; Αυτό θέλω να καταλάβω»",
            en: "\"Why did it look right? That's what I want to understand\"",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "«Ας το φτιάξουμε και ας προχωρήσουμε»",
            en: "\"Let's fix it and move on\"",
          },
          c: { frontend: 2, mobile: 2, backend: 1 },
          t: { creative: 1, product: 1 },
        },
      ],
    },
    {
      id: "q16",
      section: 2,
      text: {
        el: "Σε παίρνουν τηλέφωνο στις 3 τα ξημερώματα γιατί κάτι δικό σου χάλασε.",
        en: "You get a 3am phone call because something you're responsible for broke.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σηκώνομαι. Μου αρέσει που εξαρτάται από μένα",
            en: "I get up. I like that it depends on me",
          },
          c: { devops: 3, security: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το αντέχω περιστασιακά, όχι σαν μόνιμη κατάσταση",
            en: "Occasionally fine, not as a way of life",
          },
          c: { backend: 2, dataeng: 2, mobile: 1 },
          t: { systems: 1, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Θα προτιμούσα να είχα φτιάξει κάτι που δεν χαλάει στις 3",
            en: "I'd rather have built something that doesn't break at 3am",
          },
          c: { qa: 3, embedded: 2 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Άσχημα. Θέλω δουλειά που τελειώνει όταν φεύγω",
            en: "Badly. I want work that ends when I leave",
          },
          c: { research: 2, datasci: 2, frontend: 2 },
          t: { research: 1, creative: 1 },
        },
      ],
    },
    {
      id: "q17",
      section: 2,
      text: {
        el: "Ήταν δικό σου λάθος και το έμαθαν όλοι. Τι κάνεις;",
        en: "It was your mistake and everyone found out. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το λέω ανοιχτά και εξηγώ τι έμαθα",
            en: "Own it openly and explain what I learned",
          },
          c: { product: 2, qa: 2 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ψάχνω γιατί ήταν καν δυνατό να το κάνω",
            en: "Ask why it was even possible for me to do it",
          },
          c: { devops: 2, qa: 2, embedded: 1 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "c",
          label: {
            el: "Το διορθώνω σιωπηλά και προχωράω",
            en: "Fix it quietly and move on",
          },
          c: { backend: 2, embedded: 2, security: 1 },
          t: { systems: 2 },
        },
        {
          id: "d",
          label: {
            el: "Με τρώει μέρες, αφού όλοι το έχουν ξεχάσει",
            en: "It gnaws at me for days after everyone forgot",
          },
          c: { research: 2, ml: 2 },
          t: { research: 2 },
        },
        {
          id: "e",
          label: {
            el: "Φτιάχνω κάτι ώστε να μην το ξαναπάθει ούτε άλλος",
            en: "Build something so nobody else repeats it",
          },
          c: { dataeng: 2, devops: 2, qa: 1 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q18",
      section: 2,
      text: {
        el: "Σου λένε «κάν' το πρόχειρα τώρα, το φτιάχνουμε σωστά τον άλλο μήνα».",
        en: "You're told \"bodge it now, we'll do it properly next month\".",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το κάνω, αλλά γράφω κάπου τι χρωστάμε και γιατί",
            en: "Do it, but write down what we now owe and why",
          },
          c: { devops: 2, qa: 2, product: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Το κάνω χωρίς δεύτερη σκέψη",
            en: "Do it without a second thought",
          },
          c: { frontend: 2, mobile: 2, product: 2 },
          t: { product: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Αντιστέκομαι. Ο άλλος μήνας δεν έρχεται ποτέ",
            en: "Push back. Next month never comes",
          },
          c: { embedded: 3, backend: 1, security: 1 },
          t: { systems: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ρωτάω τι ακριβώς χαλάει αν δεν το κάνουμε καθόλου",
            en: "Ask what breaks if we don't do it at all",
          },
          c: { product: 3, research: 1 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q19",
      section: 2,
      text: {
        el: "Το ίδιο πρόβλημα σού συμβαίνει τρίτη φορά μέσα σε δύο μήνες.",
        en: "The same problem hits you for the third time in two months.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αλλάζω τον τρόπο που το κάνω, να μη χρειάζεται ποτέ ξανά",
            en: "Change how I do it so it never comes up again",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Άρα δεν είχα βρει την πραγματική αιτία τις προηγούμενες φορές",
            en: "So I never found the real cause the previous times",
          },
          c: { research: 3, embedded: 1 },
          t: { research: 2, analytical: 2 },
        },
        {
          id: "c",
          label: {
            el: "Κάποιος θα το εκμεταλλευτεί αν δεν το κλείσω",
            en: "Someone will take advantage if I don't close it",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Μετράω πόσο μου κοστίζει κάθε φορά, να δω αν αξίζει να ασχοληθώ",
            en: "Measure what each occurrence costs me, to see if it's worth fixing",
          },
          c: { datasci: 2, product: 3 },
          t: { product: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q20",
      section: 2,
      text: {
        el: "Πόσο σε ενοχλεί να μην ξέρεις γιατί κάτι δούλεψε;",
        en: "How much does it bother you not to know why something worked?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πάρα πολύ. Δεν προχωράω μέχρι να το εξηγήσω",
            en: "Enormously. I can't move on until I can explain it",
          },
          c: { embedded: 3, research: 2 },
          t: { systems: 2, research: 2 },
        },
        {
          id: "b",
          label: {
            el: "Αρκετά, γι' αυτό κρατάω σημείωση να το ξαναδώ",
            en: "Enough that I note it down to revisit",
          },
          c: { qa: 2, dataeng: 2, backend: 1 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Καθόλου. Δούλεψε, πάμε παρακάτω",
            en: "Not at all. It worked, next",
          },
          c: { product: 3, frontend: 2, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Εξαρτάται πόσο ακριβά θα μου στοιχίσει αν ξαναχαλάσει",
            en: "Depends how expensive it'll be if it breaks again",
          },
          c: { security: 2, devops: 2, datasci: 1 },
          t: { adversarial: 2, ops: 1 },
        },
      ],
    },
  ],
};
