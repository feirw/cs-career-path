import type { Section } from "./types";

export const section7: Section = {
  index: 7,
  title: { el: "Αβεβαιότητα και ρίσκο", en: "Uncertainty and risk" },
  subtitle: {
    el: "Πόσο άνετα ζεις χωρίς σίγουρη απάντηση; Είναι ίσως ο πιο καθοριστικός παράγοντας για το ποια δουλειά θα σου φαίνεται εύκολη.",
    en: "How comfortably do you live without a certain answer? It may be the single biggest factor in which job feels easy to you.",
  },
  questions: [
    {
      id: "q61",
      section: 7,
      text: {
        el: "Ένας αριθμός που παρακολουθείς έπεσε απότομα χθες. Τι κάνεις πρώτο;",
        en: "A number you track dropped sharply yesterday. What first?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ελέγχω μήπως μετράει λάθος το ίδιο το μέτρο",
            en: "Check whether the measurement itself broke",
          },
          c: { dataeng: 3, qa: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κοιτάω αν έπεσε παντού ή μόνο σε ένα κομμάτι",
            en: "See if it dropped everywhere or only in one slice",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κοιτάω τι αλλάξαμε εμείς χθες",
            en: "Look at what we changed yesterday",
          },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ρωτάω αν άλλαξε κάτι έξω από εμάς",
            en: "Ask whether something outside us changed",
          },
          c: { product: 3, research: 1 },
          t: { product: 3 },
        },
        {
          id: "e",
          label: {
            el: "Περιμένω άλλη μια μέρα. Μπορεί να μη σημαίνει τίποτα",
            en: "Wait another day. It might mean nothing",
          },
          c: { research: 2, embedded: 1, qa: 1 },
          t: { research: 2 },
        },
      ],
    },
    {
      id: "q62",
      section: 7,
      text: {
        el: "Ένα αποτέλεσμα βγαίνει ακριβώς όπως το ήλπιζες.",
        en: "A result comes out exactly as you hoped.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Κάπου έκανα λάθος. Ας το ελέγξω αλλιώς»",
            en: "\"I made a mistake somewhere. Let me check another way\"",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 2, analytical: 2 },
        },
        {
          id: "b",
          label: {
            el: "«Ωραία, το ανακοινώνω»",
            en: "\"Great, I'll share it\"",
          },
          c: { product: 2, frontend: 2 },
          t: { product: 2 },
        },
        {
          id: "c",
          label: {
            el: "«Ας δω αν κρατάει και σε άλλη περίπτωση»",
            en: "\"Let's see if it holds elsewhere\"",
          },
          c: { ml: 3, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Ποιος άλλος πρέπει να το κοιτάξει πριν το πιστέψουμε;»",
            en: "\"Who else should look before we believe it?\"",
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
        el: "Πρέπει να απαντήσεις σε κάτι, αλλά τα στοιχεία που έχεις είναι μπερδεμένα και ελλιπή.",
        en: "You must answer something, but the information you have is messy and incomplete.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Καλά. Το να τα βάλω σε τάξη είναι η μισή δουλειά και μου αρέσει",
            en: "Fine. Putting it in order is half the job and I like it",
          },
          c: { dataeng: 3, datasci: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Πρώτα φτιάχνω τον τρόπο που τα μαζεύω, να μην ξανασυμβεί",
            en: "First I fix how they're gathered, so it doesn't recur",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Απαντάω, αλλά λέω καθαρά πόσο σίγουρος είμαι",
            en: "I answer, but I say plainly how sure I am",
          },
          c: { research: 3, datasci: 1 },
          t: { research: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Με ενοχλεί. Θα προτιμούσα πρόβλημα με καθαρούς κανόνες",
            en: "It frustrates me. I'd rather a problem with clean rules",
          },
          c: { backend: 2, embedded: 2, frontend: 1 },
          t: { systems: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω ποια απόφαση κρέμεται από αυτό και απαντάω όσο χρειάζεται",
            en: "Ask which decision hangs on it and answer only as far as needed",
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
        el: "Κάτι αποφασίζεται αυτόματα από έναν κανόνα, και μερικές φορές είναι άδικο.",
        en: "Something is decided automatically by a rule, and sometimes it's unfair.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θέλω να καταλάβω πάνω σε τι στηρίχτηκε ο κανόνας",
            en: "I want to understand what the rule was built on",
          },
          c: { ml: 3, datasci: 2 },
          t: { analytical: 2, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Θέλω να μπορεί ένας άνθρωπος να τον παρακάμψει, και να φαίνεται",
            en: "I want a human to be able to override it, visibly",
          },
          c: { product: 3, devops: 1 },
          t: { product: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Θέλω να δω αν μπορεί κάποιος να τον εξαπατήσει επίτηδες",
            en: "I want to see if someone could game it deliberately",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θέλω να αποδειχθεί με μέτρηση ότι είναι όντως άδικος",
            en: "I want it proven unfair by measurement",
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
        el: "Σου λένε «αυτό το νούμερο είναι το σημαντικό, ανέβασέ το».",
        en: "You're told \"this number is what matters, push it up\".",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ρωτάω πώς υπολογίζεται ακριβώς",
            en: "Ask exactly how it's calculated",
          },
          c: { dataeng: 3, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: {
            el: "Σκέφτομαι πώς θα μπορούσε να ανέβει χωρίς να προσφέρει τίποτα",
            en: "Think how it could rise while adding nothing",
          },
          c: { security: 2, product: 2, qa: 1 },
          t: { adversarial: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Το δέχομαι και κοιτάω τι μπορώ να κάνω εγώ γι' αυτό",
            en: "Accept it and look at what I can do about it",
          },
          c: { frontend: 2, mobile: 2, backend: 1 },
          t: { creative: 1, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ψάχνω ποιο άλλο νούμερο θα χειροτερέψει όταν αυτό ανέβει",
            en: "Look for which other number gets worse when this rises",
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
        el: "Έχεις δέκα λεπτά να πείσεις κάποιον για κάτι που ανακάλυψες.",
        en: "You have ten minutes to convince someone of something you found.",
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
            el: "Μια σελίδα κείμενο που στέκεται και χωρίς εμένα",
            en: "One page of writing that stands without me",
          },
          c: { research: 3, product: 1 },
          t: { research: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μια ζωντανή επίδειξη, να το δει να συμβαίνει",
            en: "A live demo, so they watch it happen",
          },
          c: { frontend: 2, mobile: 2, security: 2 },
          t: { creative: 2, people: 1 },
        },
        {
          id: "d",
          label: {
            el: "Το πριν και το μετά, με το κόστος δίπλα",
            en: "The before and after, with the cost beside it",
          },
          c: { product: 3, devops: 1 },
          t: { product: 3 },
        },
        {
          id: "e",
          label: {
            el: "Θα ζητούσα περισσότερο χρόνο. Δεν συμπιέζεται σε δέκα λεπτά",
            en: "I'd ask for more time. It doesn't compress into ten minutes",
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
        el: "Θέλεις να μάθεις αν κάτι δουλεύει: ρωτάς δέκα ανθρώπους ή μετράς δέκα χιλιάδες;",
        en: "To learn if something works: ask ten people, or measure ten thousand?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τους δέκα. Θα μου πουν το «γιατί» που δεν λένε τα νούμερα",
            en: "The ten. They give me the \"why\" numbers never do",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Τους δέκα χιλιάδες. Άλλα λένε οι άνθρωποι, άλλα κάνουν",
            en: "The ten thousand. People say one thing and do another",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο, αλλά πρώτα στήνω σωστά τη μέτρηση",
            en: "Both, but I set up the measurement properly first",
          },
          c: { dataeng: 3, devops: 1 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ούτε· πρώτα ελέγχω αν αυτό που φτιάξαμε είναι καν σωστό",
            en: "Neither; first I check whether what we built is even correct",
          },
          c: { qa: 3, embedded: 1 },
          t: { adversarial: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q68",
      section: 7,
      text: {
        el: "Κάποιος σου λέει «αυτό πετυχαίνει στο 95% των περιπτώσεων».",
        en: "Someone tells you \"this works 95% of the time\".",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Και τι ποσοστό πετυχαίνει αν δεν κάνουμε τίποτα;»",
            en: "\"And what's the rate if we do nothing at all?\"",
          },
          c: { ml: 3, research: 2 },
          t: { analytical: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Τι κοστίζει το 5% όταν πέφτει έξω;»",
            en: "\"What does the 5% cost when it misses?\"",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "«Πόσο γρήγορο και πόσο ακριβό είναι στην πράξη;»",
            en: "\"How fast and how expensive is it in practice?\"",
          },
          c: { devops: 2, backend: 2, dataeng: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "«Τι πρέπει να του δώσω για να αποτύχει;»",
            en: "\"What would I feed it to make it fail?\"",
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
        el: "Παίρνεις μια απόφαση που μπορεί να αποτύχει. Τι θέλεις εξασφαλισμένο πρώτα;",
        en: "You take a decision that might fail. What do you want secured first?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ότι μπορούμε να γυρίσουμε πίσω γρήγορα",
            en: "That we can go back quickly",
          },
          c: { devops: 3, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ότι θα καταλάβουμε από στοιχεία αν πέτυχε",
            en: "That evidence will tell us whether it worked",
          },
          c: { datasci: 3, ml: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ότι όλοι έχουν συμφωνήσει πως αξίζει το ρίσκο",
            en: "That everyone agreed the risk is worth it",
          },
          c: { product: 3, qa: 1 },
          t: { people: 2, product: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ότι δεν μπορεί να προκαλέσει ζημιά που δεν διορθώνεται",
            en: "That it can't cause damage we can't undo",
          },
          c: { security: 3, embedded: 2 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q70",
      section: 7,
      text: {
        el: "Πόσο καιρό αντέχεις να δουλεύεις χωρίς να ξέρεις αν οδηγεί κάπου;",
        en: "How long can you work without knowing whether it leads anywhere?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μήνες, αν πιστεύω ότι υπάρχει απάντηση",
            en: "Months, if I believe there's an answer",
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
            el: "Λίγες μέρες. Μετά θέλω να αλλάξω και να γυρίσω αργότερα",
            en: "A few days. Then I want to switch and come back later",
          },
          c: { backend: 2, frontend: 2, devops: 1 },
          t: { systems: 1, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ελάχιστα. Θέλω να τελειώνει και να φαίνεται",
            en: "Not long. I want things to finish and show",
          },
          c: { mobile: 3, frontend: 2, qa: 1 },
          t: { creative: 2, ops: 1 },
        },
      ],
    },
  ],
};
