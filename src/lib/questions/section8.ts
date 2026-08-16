import type { Section } from "./types";

export const section8: Section = {
  index: 8,
  title: { el: "Ποιότητα, δοκιμές, ασφάλεια", en: "Quality, testing, security" },
  subtitle: {
    el: "Ο καθένας έχει τη δική του εμμονή για το τι σημαίνει «σωστό». Κάθε εμμονή ταιριάζει σε διαφορετική δουλειά.",
    en: "Everyone has their own obsession about what \"correct\" means, and each fits a different job.",
  },
  questions: [
    {
      id: "q71",
      section: 8,
      text: {
        el: "Τι θα σε ενοχλούσε αρκετά ώστε να το φτιάξεις χωρίς να σου το ζητήσουν;",
        en: "What would bother you enough to fix it unasked?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ένα κουμπί δύο pixel πιο κάτω απ' ό,τι πρέπει",
            en: "A button two pixels lower than it should be",
          },
          c: { frontend: 3, mobile: 1 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ένα μήνυμα σφάλματος που λέει μόνο «κάτι πήγε στραβά»",
            en: "An error message that only says \"something went wrong\"",
          },
          c: { devops: 2, backend: 2, qa: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μια στήλη που άλλοτε έχει κείμενο και άλλοτε αριθμό",
            en: "A column that's sometimes text and sometimes a number",
          },
          c: { dataeng: 3, datasci: 1 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Έναν κωδικό γραμμένο μέσα στον κώδικα",
            en: "A password written inside the source code",
          },
          c: { security: 3, devops: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: {
            el: "Μια λειτουργία που όλοι τη χρησιμοποιούν λάθος",
            en: "A feature everyone uses wrongly",
          },
          c: { product: 3, frontend: 2 },
          t: { product: 2, people: 1 },
        },
        {
          id: "f",
          label: {
            el: "Ένα build που θέλει τρία λεπτά ενώ θα μπορούσε τριάντα δευτερόλεπτα",
            en: "A build taking three minutes that could take thirty seconds",
          },
          c: { embedded: 2, devops: 2, backend: 1 },
          t: { systems: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q72",
      section: 8,
      text: {
        el: "Γράφεις κώδικα που θα τον χρησιμοποιήσουν άλλοι προγραμματιστές.",
        en: "You're writing code other developers will use.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να είναι δύσκολο να τον χρησιμοποιήσουν λάθος",
            en: "It should be hard to use wrongly",
          },
          c: { embedded: 2, qa: 2, security: 2 },
          t: { adversarial: 2, systems: 1 },
        },
        {
          id: "b",
          label: {
            el: "Να τον καταλαβαίνουν χωρίς να με ρωτήσουν",
            en: "They should understand it without asking me",
          },
          c: { frontend: 2, product: 2, devops: 1 },
          t: { people: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Να μη σπάει όταν αλλάξω κάτι σε έξι μήνες",
            en: "It shouldn't break when I change something in six months",
          },
          c: { backend: 3, dataeng: 1 },
          t: { systems: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να αφήνει ίχνη ώστε να φαίνεται τι έγινε όταν σκάσει",
            en: "It should leave traces so you can see what happened when it blows up",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Να είναι κομψός. Θα τον διαβάσουν πιο ευχάριστα",
            en: "It should be elegant. People will read it more happily",
          },
          c: { frontend: 2, research: 2, mobile: 1 },
          t: { creative: 3 },
        },
      ],
    },
    {
      id: "q73",
      section: 8,
      text: {
        el: "Ένας χρήστης έκανε κάτι που δεν φαντάστηκε κανείς και η εφαρμογή έσκασε.",
        en: "A user did something nobody imagined and the app crashed.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Καλά έκανε. Έπρεπε να το είχαμε προβλέψει»",
            en: "\"Fair enough. We should have foreseen it\"",
          },
          c: { qa: 3, security: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Γιατί το έκανε; Μάλλον φταίει η οθόνη μας»",
            en: "\"Why did they do it? Probably our screen misled them\"",
          },
          c: { frontend: 2, product: 3 },
          t: { creative: 1, product: 2 },
        },
        {
          id: "c",
          label: {
            el: "«Πόσοι άλλοι μπορεί να το κάνουν; Ας το μετρήσω»",
            en: "\"How many others might do it? Let me measure\"",
          },
          c: { datasci: 3, dataeng: 1 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Ο κώδικας δεν έπρεπε να δέχεται καν τέτοια είσοδο»",
            en: "\"The code shouldn't have accepted that input at all\"",
          },
          c: { backend: 2, embedded: 2, security: 1 },
          t: { systems: 3 },
        },
      ],
    },
    {
      id: "q74",
      section: 8,
      text: {
        el: "Πόσες δοκιμές γράφεις για κάτι δικό σου που δεν θα το δει κανείς;",
        en: "How many tests do you write for something of yours nobody will see?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Καμία. Το τρέχω και βλέπω",
            en: "None. I run it and look",
          },
          c: { frontend: 2, mobile: 2, product: 1 },
          t: { creative: 2 },
        },
        {
          id: "b",
          label: {
            el: "Λίγες, στα σημεία που φοβάμαι",
            en: "A few, at the parts that scare me",
          },
          c: { backend: 2, datasci: 2, devops: 1 },
          t: { systems: 1, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Πολλές. Δεν εμπιστεύομαι τον εαυτό μου μετά από τρεις μέρες",
            en: "Plenty. I don't trust myself three days later",
          },
          c: { qa: 3, embedded: 2 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: {
            el: "Δεν γράφω δοκιμές· βάζω ελέγχους που τρέχουν συνέχεια όσο ζει",
            en: "Not tests; checks that run continuously while it's alive",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q75",
      section: 8,
      text: {
        el: "Ποιο λάθος θα σου φαινόταν πιο ντροπιαστικό;",
        en: "Which mistake would feel most shameful?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να διαρρεύσουν στοιχεία χρηστών από κάτι που έγραψες",
            en: "User data leaking from something you wrote",
          },
          c: { security: 3, backend: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να δουλέψεις τρεις μήνες σε κάτι που δεν χρησιμοποίησε κανείς",
            en: "Spending three months on something nobody used",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να σβηστεί η βάση και να μην υπάρχει αντίγραφο",
            en: "Wiping the database with no backup",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να παρουσιάσεις συμπέρασμα που ήταν στατιστικά λάθος",
            en: "Presenting a conclusion that was statistically wrong",
          },
          c: { datasci: 3, research: 2, ml: 1 },
          t: { analytical: 2, research: 2 },
        },
        {
          id: "e",
          label: {
            el: "Να βγει κάτι με το όνομά σου γεμάτο πρόχειρες λύσεις",
            en: "Shipping something with your name on it, full of hacks",
          },
          c: { embedded: 2, qa: 2, frontend: 2 },
          t: { systems: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q76",
      section: 8,
      text: {
        el: "Ο κώδικάς σου πρέπει να τρέχει σε μηχάνημα με ελάχιστη μνήμη και χωρίς δίκτυο.",
        en: "Your code must run on a machine with minimal memory and no network.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ενδιαφέρον. Θα μετρήσω κάθε byte",
            en: "Interesting. I'll count every byte",
          },
          c: { embedded: 3, backend: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Εντάξει, αρκεί να βλέπω πού φεύγει η μνήμη",
            en: "Fine, as long as I can see where memory goes",
          },
          c: { devops: 2, backend: 2, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Θα έλεγα ας πάρουμε μεγαλύτερο μηχάνημα· κοστίζει λιγότερο από τον χρόνο μου",
            en: "I'd say get a bigger machine; it costs less than my time",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θα με άγχωνε. Προτιμώ να μην ασχολούμαι σε αυτό το επίπεδο",
            en: "It would stress me. I'd rather not work at that level",
          },
          c: { frontend: 3, product: 1, mobile: 1 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q77",
      section: 8,
      text: {
        el: "Κάνεις review σε κώδικα συναδέλφου και δεν δέχεται εύκολα παρατηρήσεις.",
        en: "You review a colleague's code and they don't take notes well.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Γράφω ένα test που αποδεικνύει πού σπάει",
            en: "Write a test that proves where it breaks",
          },
          c: { qa: 3, security: 2 },
          t: { adversarial: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ξεχωρίζω τι είναι απαραίτητο και τι είναι γούστο μου",
            en: "Separate what's necessary from what's my taste",
          },
          c: { product: 2, devops: 2, backend: 1 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: {
            el: "Το συζητάμε από κοντά αντί για σχόλια στο PR",
            en: "Talk it through in person instead of PR comments",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Επιμένω. Αν είναι λάθος, θα το πληρώσουμε αργότερα",
            en: "Hold my ground. If it's wrong, we pay later",
          },
          c: { embedded: 2, security: 2, research: 1 },
          t: { systems: 2, adversarial: 1 },
        },
      ],
    },
    {
      id: "q78",
      section: 8,
      text: {
        el: "Ποια λέξη σε περιγράφει καλύτερα όταν δουλεύεις;",
        en: "Which word describes you best while working?",
      },
      options: [
        {
          id: "a",
          label: { el: "Σχολαστικός", en: "Meticulous" },
          c: { qa: 3, embedded: 2, security: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "b",
          label: { el: "Γρήγορος", en: "Fast" },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "c",
          label: { el: "Μεθοδικός", en: "Methodical" },
          c: { dataeng: 3, backend: 2, devops: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "d",
          label: { el: "Επίμονος", en: "Stubborn" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: { el: "Καχύποπτος", en: "Suspicious" },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "f",
          label: { el: "Συνεννοήσιμος", en: "Easy to work with" },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q79",
      section: 8,
      text: {
        el: "Βλέπεις ότι το σύστημα στέλνει στο κινητό περισσότερα δεδομένα απ' όσα χρειάζεται.",
        en: "You notice the system sends more data to the phone than it needs.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Με ανησυχεί τι ακριβώς φεύγει και ποιος μπορεί να το δει",
            en: "I worry about exactly what leaves and who could see it",
          },
          c: { security: 3, backend: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "b",
          label: {
            el: "Με ενοχλεί που καίει μπαταρία και δεδομένα του χρήστη",
            en: "It bothers me that it burns battery and the user's data plan",
          },
          c: { mobile: 3, embedded: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Με ενοχλεί το κόστος σε κίνηση και servers",
            en: "It bothers me as bandwidth and server cost",
          },
          c: { devops: 3, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Δεν με απασχολεί αν δεν το νιώθει ο χρήστης",
            en: "It doesn't concern me if the user can't feel it",
          },
          c: { frontend: 2, product: 3 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q80",
      section: 8,
      text: {
        el: "Παραδίδεις κάτι. Πότε νιώθεις ότι έκανες καλή δουλειά;",
        en: "You deliver something. When does it feel like good work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Όταν κάποιος το χρησιμοποιεί και χαμογελάει",
            en: "When someone uses it and smiles",
          },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 2, people: 1 },
        },
        {
          id: "b",
          label: {
            el: "Όταν δεν χρειάστηκε να το ξαναπιάσω ποτέ",
            en: "When I never had to touch it again",
          },
          c: { backend: 2, embedded: 2, devops: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Όταν άντεξε σε ό,τι του έριξα",
            en: "When it survived everything I threw at it",
          },
          c: { qa: 3, security: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Όταν έμαθα κάτι φτιάχνοντάς το",
            en: "When I learned something by building it",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Όταν άλλαξε μια απόφαση ή ένα αποτέλεσμα",
            en: "When it changed a decision or an outcome",
          },
          c: { product: 3, datasci: 2 },
          t: { product: 3 },
        },
      ],
    },
  ],
};
