import type { Section } from "./types";

export const section7: Section = {
  index: 7,
  title: { el: "Δεδομένα, μοντέλα, αβεβαιότητα", en: "Data, models, uncertainty" },
  subtitle: {
    el: "Δεν χρειάζεται να ξέρεις στατιστική. Μας ενδιαφέρει πώς αντιδράς όταν τα νούμερα δεν λένε καθαρή ιστορία.",
    en: "No statistics needed. What matters is how you react when the numbers don't tell a clean story.",
  },
  questions: [
    {
      id: "q61",
      section: 7,
      text: {
        el: "Το γράφημα χρήσης της εφαρμογής έπεσε 30% χθες. Τι κάνεις πρώτο;",
        en: "Your app's usage chart dropped 30% yesterday. What first?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ελέγχω μήπως χάλασε ο τρόπος που καταγράφουμε τη χρήση",
            en: "Check whether the tracking itself broke",
          },
          c: { dataeng: 3, qa: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κοιτάω αν έπεσε παντού ή μόνο σε μια πλατφόρμα ή χώρα",
            en: "See if it dropped everywhere or only on one platform or country",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κοιτάω τι ανέβηκε χθες στην παραγωγή",
            en: "Look at what shipped to production yesterday",
          },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ρωτάω αν άλλαξε κάτι έξω από εμάς: αργία, ανταγωνιστής, ειδήσεις",
            en: "Ask if something outside changed: a holiday, a rival, the news",
          },
          c: { product: 3, research: 1 },
          t: { product: 3 },
        },
        {
          id: "e",
          label: {
            el: "Κοιτάω μήπως μας χτύπησε κάποιος ή έπεσε τρίτη υπηρεσία",
            en: "Check whether we were attacked or a third-party service died",
          },
          c: { security: 3, devops: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q62",
      section: 7,
      text: {
        el: "Το μοντέλο ή η ανάλυσή σου βγάζει ακριβώς αυτό που ήλπιζες.",
        en: "Your model or analysis produces exactly what you hoped.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Κάπου έκανα λάθος. Ας το ελέγξω από άλλη μεριά»",
            en: "\"I got something wrong. Let me check another way\"",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 2, analytical: 2 },
        },
        {
          id: "b",
          label: {
            el: "«Ωραία, το παρουσιάζω και προχωράμε»",
            en: "\"Great, I'll present it and we move on\"",
          },
          c: { product: 2, frontend: 2 },
          t: { product: 2 },
        },
        {
          id: "c",
          label: {
            el: "«Ας δω αν κρατάει και σε δεδομένα που δεν έχει ξαναδεί»",
            en: "\"Let's see if it holds on data it hasn't seen\"",
          },
          c: { ml: 3, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Ποιος άλλος πρέπει να το ελέγξει πριν το πιστέψουμε;»",
            en: "\"Who else should check it before we believe it?\"",
          },
          c: { qa: 3, security: 1 },
          t: { adversarial: 2, people: 1 },
        },
      ],
    },
    {
      id: "q63",
      section: 7,
      text: {
        el: "Τα δεδομένα που σου δίνουν είναι βρόμικα: κενά πεδία, διπλοεγγραφές, λάθος ημερομηνίες.",
        en: "The data you're given is dirty: missing fields, duplicates, wrong dates.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μια χαρά. Το καθάρισμα είναι η μισή δουλειά και μου ταιριάζει",
            en: "Fine by me. Cleaning is half the job and it suits me",
          },
          c: { dataeng: 3, datasci: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Φτιάχνω πρώτα τη ροή που τα φέρνει, να μην ξανάρθουν έτσι",
            en: "First fix the pipeline that brings them, so it stops recurring",
          },
          c: { devops: 2, dataeng: 3 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Απαντάω, αλλά γράφω καθαρά τι δεν εμπιστεύομαι",
            en: "I answer, but I write down clearly what I don't trust",
          },
          c: { research: 3, datasci: 1 },
          t: { research: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Με ενοχλεί. Προτιμώ πρόβλημα με καθαρούς κανόνες",
            en: "It frustrates me. I prefer a problem with clean rules",
          },
          c: { backend: 2, embedded: 2, frontend: 1 },
          t: { systems: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω ποια απόφαση κρέμεται από αυτά και καθαρίζω μόνο όσο χρειάζεται",
            en: "Ask which decision depends on it and clean only as much as needed",
          },
          c: { product: 3 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q64",
      section: 7,
      text: {
        el: "Ένα σύστημα κρίνει αυτόματα αιτήσεις ανθρώπων και μερικές απορρίψεις είναι άδικες.",
        en: "A system automatically judges people's applications and some rejections are unfair.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θέλω να δω σε τι δεδομένα εκπαιδεύτηκε",
            en: "I want to see what data it was trained on",
          },
          c: { ml: 3, datasci: 2 },
          t: { analytical: 2, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Θέλω να μπορεί άνθρωπος να το ακυρώνει, και να καταγράφεται",
            en: "I want a human able to override it, and it logged",
          },
          c: { product: 3, devops: 1 },
          t: { product: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Θέλω να δω αν κάποιος μπορεί να το εξαπατήσει επίτηδες",
            en: "I want to see whether someone can game it deliberately",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θέλω να μετρηθεί η αδικία, αλλιώς μιλάμε στον αέρα",
            en: "I want the unfairness measured, otherwise we're guessing",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 2, analytical: 2 },
        },
      ],
    },
    {
      id: "q65",
      section: 7,
      text: {
        el: "Η ομάδα διάλεξε έναν δείκτη επιτυχίας και τον κυνηγάει.",
        en: "The team picked one success metric and is chasing it.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ρωτάω πώς υπολογίζεται ακριβώς, πριν τον εμπιστευτώ",
            en: "Ask exactly how it's computed before trusting it",
          },
          c: { dataeng: 3, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: {
            el: "Σκέφτομαι πώς θα μπορούσε να ανέβει χωρίς να ωφεληθεί κανείς",
            en: "Think how it could rise while helping nobody",
          },
          c: { security: 2, product: 2, qa: 1 },
          t: { adversarial: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Τον δέχομαι και κοιτάω τι μπορώ να κάνω εγώ γι' αυτόν",
            en: "Accept it and look at what I can do about it",
          },
          c: { frontend: 2, mobile: 2, backend: 1 },
          t: { creative: 1, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ψάχνω ποιος άλλος δείκτης θα χειροτερέψει όταν ανέβει αυτός",
            en: "Look for which other metric worsens as this one rises",
          },
          c: { research: 2, datasci: 2, devops: 1 },
          t: { analytical: 2, research: 1 },
        },
      ],
    },
    {
      id: "q66",
      section: 7,
      text: {
        el: "Πρέπει να παρουσιάσεις ένα τεχνικό εύρημα σε δέκα λεπτά.",
        en: "You must present a technical finding in ten minutes.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ένα γράφημα που λέει την ιστορία χωρίς να μιλήσω",
            en: "One chart that tells the story without me speaking",
          },
          c: { datasci: 3, product: 1 },
          t: { analytical: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Μια σελίδα κείμενο που στέκεται και χωρίς εμένα στην αίθουσα",
            en: "One page of writing that stands without me in the room",
          },
          c: { research: 3, product: 1 },
          t: { research: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ζωντανή επίδειξη: το τρέχω μπροστά τους",
            en: "A live demo: I run it in front of them",
          },
          c: { frontend: 2, mobile: 2, security: 2 },
          t: { creative: 2, people: 1 },
        },
        {
          id: "d",
          label: {
            el: "Πριν και μετά, με το κόστος και τον χρόνο δίπλα",
            en: "Before and after, with cost and time beside it",
          },
          c: { product: 3, devops: 1 },
          t: { product: 3 },
        },
        {
          id: "e",
          label: {
            el: "Θα ζητούσα περισσότερο χρόνο· δεν συμπιέζεται σωστά",
            en: "I'd ask for more time; it doesn't compress honestly",
          },
          c: { research: 2, embedded: 2 },
          t: { research: 2, systems: 1 },
        },
      ],
    },
    {
      id: "q67",
      section: 7,
      text: {
        el: "Θέλετε να μάθετε αν το νέο feature αρέσει. Πώς;",
        en: "You want to know whether the new feature lands. How?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μιλάω με δέκα χρήστες· θα μου πουν το «γιατί»",
            en: "Talk to ten users; they'll give me the \"why\"",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Το δίνω στους μισούς και συγκρίνω τα νούμερα",
            en: "Give it to half of them and compare the numbers",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Πρώτα στήνω σωστά τη μέτρηση, αλλιώς δεν μαθαίνουμε τίποτα",
            en: "First set the measurement up properly, or we learn nothing",
          },
          c: { dataeng: 3, devops: 1 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα ελέγχω αν δουλεύει σωστά σε όλες τις συσκευές",
            en: "First check it works correctly on every device",
          },
          c: { qa: 3, mobile: 2 },
          t: { adversarial: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q68",
      section: 7,
      text: {
        el: "Ένα μοντέλο πετυχαίνει 95% ακρίβεια. Ποια είναι η πρώτη σου ερώτηση;",
        en: "A model reaches 95% accuracy. What's your first question?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Τι πετυχαίνει αν λέει πάντα την πιο συχνή απάντηση;»",
            en: "\"What does it score if it always says the most common answer?\"",
          },
          c: { ml: 3, research: 2 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Τι κοστίζει το 5% όταν πέφτει έξω;»",
            en: "\"What does the 5% cost when it's wrong?\"",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "«Πόσο γρήγορα απαντάει και πόσο κοστίζει να τρέχει;»",
            en: "\"How fast does it answer and what does it cost to run?\"",
          },
          c: { devops: 2, backend: 2, dataeng: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "«Τι πρέπει να του δώσω για να πει βλακεία;»",
            en: "\"What would I feed it to make it say something stupid?\"",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q69",
      section: 7,
      text: {
        el: "Πρόκειται να βγει μια αλλαγή που μπορεί να αποτύχει. Τι θέλεις εξασφαλισμένο;",
        en: "A change that might fail is about to ship. What do you want secured?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ότι γυρνάμε πίσω μέσα σε λίγα λεπτά",
            en: "That we can roll back within minutes",
          },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ότι θα φανεί από τα νούμερα αν πήγε καλά",
            en: "That the numbers will show whether it went well",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ότι όλοι ξέρουν τι αλλάζει και τι να πουν στους χρήστες",
            en: "That everyone knows what changes and what to tell users",
          },
          c: { product: 3, qa: 1 },
          t: { people: 2, product: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ότι δεν μπορεί να χαλάσει δεδομένα με τρόπο που δεν διορθώνεται",
            en: "That it can't corrupt data in a way we can't undo",
          },
          c: { security: 3, embedded: 1, dataeng: 1 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q70",
      section: 7,
      text: {
        el: "Δουλεύεις σε κάτι και δεν ξέρεις ακόμα αν οδηγεί κάπου.",
        en: "You're working on something and don't yet know if it leads anywhere.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αντέχω μήνες, αν πιστεύω ότι υπάρχει απάντηση",
            en: "I can take months, if I believe there's an answer",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Βδομάδες, αν βλέπω μικρή πρόοδο κάθε μέρα",
            en: "Weeks, if I see small progress daily",
          },
          c: { ml: 2, datasci: 2, embedded: 1 },
          t: { analytical: 2, research: 1 },
        },
        {
          id: "c",
          label: {
            el: "Λίγες μέρες. Μετά θέλω κάτι άλλο και επιστρέφω αργότερα",
            en: "A few days. Then I want something else and return later",
          },
          c: { backend: 2, frontend: 2, devops: 1 },
          t: { systems: 1, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ελάχιστα. Θέλω να βγαίνει κάτι που δουλεύει",
            en: "Not long. I want something that works to come out",
          },
          c: { mobile: 3, frontend: 2, qa: 1 },
          t: { creative: 2, ops: 1 },
        },
      ],
    },
  ],
};
