import type { Section } from "./types";

export const section10: Section = {
  index: 10,
  title: { el: "Τι θέλεις από τη ζωή σου", en: "What you want from your life" },
  subtitle: {
    el: "Τελευταία ενότητα. Εδώ κρίνεται τι θα δεχτείς, τι θα θυσιάσεις και τι θα αντέχεις για χρόνια — αυτά καθορίζουν την καριέρα περισσότερο από κάθε τεχνολογία.",
    en: "Last section. What you'll accept, what you'll trade away, what you can bear for years — these decide a career more than any technology.",
  },
  questions: [
    {
      id: "q91",
      section: 10,
      text: {
        el: "Δύο προσφορές εργασίας, ίδιος μισθός. Ποια παίρνεις;",
        en: "Two job offers, same salary. Which do you take?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ομάδα προϊόντος που βγάζει νέα έκδοση κάθε βδομάδα",
            en: "A product team shipping a new release every week",
          },
          c: { frontend: 2, product: 3, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ομάδα υποδομής που την πατάνε όλες οι άλλες ομάδες",
            en: "An infrastructure team every other team stands on",
          },
          c: { devops: 3, dataeng: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ερευνητική ομάδα με δύσκολο πρόβλημα και αργό αποτέλεσμα",
            en: "A research group with a hard problem and slow results",
          },
          c: { research: 3, ml: 2, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ομάδα ασφάλειας που η δουλειά της είναι να μη συμβεί κάτι κακό",
            en: "A security team whose job is that nothing bad happens",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ομάδα που φτιάχνει κάτι φυσικό: συσκευές, ρομπότ, οχήματα",
            en: "A team building something physical: devices, robots, vehicles",
          },
          c: { embedded: 3, mobile: 1 },
          t: { systems: 3 },
        },
      ],
    },
    {
      id: "q92",
      section: 10,
      text: {
        el: "Τι θα θυσίαζες πιο εύκολα για δουλειά που σε γεμίζει;",
        en: "What would you trade away most easily for work that fulfils you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Χρήματα. Θέλω να μου αρέσει το αντικείμενο",
            en: "Money. I want to love the subject",
          },
          c: { research: 3, ml: 1, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Σιγουριά. Δέχομαι ρίσκο για κάτι δικό μου",
            en: "Security. I'll take risk for something of my own",
          },
          c: { product: 3, frontend: 1, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Αναγνώριση. Δεν με πειράζει να είναι αόρατη η δουλειά μου",
            en: "Recognition. I don't mind my work being invisible",
          },
          c: { devops: 3, dataeng: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ποικιλία. Δέχομαι να κάνω το ίδιο πράγμα πολύ καλά",
            en: "Variety. I'll do one thing extremely well",
          },
          c: { embedded: 2, qa: 3, security: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "e",
          label: {
            el: "Ελεύθερο χρόνο, αν πραγματικά αξίζει αυτό που κάνω",
            en: "Free time, if what I'm doing is genuinely worth it",
          },
          c: { product: 2, security: 2, ml: 1 },
          t: { people: 1, product: 1, adversarial: 1 },
        },
      ],
    },
    {
      id: "q93",
      section: 10,
      text: {
        el: "Ποιο μειονέκτημα θα δεχόσουν για πέντε χρόνια;",
        en: "Which downside would you accept for five years?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να με ξυπνάνε κάποιες νύχτες",
            en: "Being woken some nights",
          },
          c: { devops: 3, security: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να μην τελειώνει ποτέ τίποτα εντελώς",
            en: "Nothing ever being completely finished",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να περνάω μισή μέρα σε συζητήσεις και γραπτά",
            en: "Half my day in conversations and writing",
          },
          c: { product: 3 },
          t: { people: 3, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Να ξαναφτιάχνω πράγματα που άλλοι έκαναν βιαστικά",
            en: "Redoing things other people rushed",
          },
          c: { qa: 2, backend: 2, dataeng: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "e",
          label: {
            el: "Να μη φαίνεται πουθενά το όνομά μου",
            en: "My name appearing nowhere",
          },
          c: { embedded: 2, devops: 2, dataeng: 1 },
          t: { systems: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q94",
      section: 10,
      text: {
        el: "Τι θα ήθελες να μπορείς να πεις στο τραπέζι για τη δουλειά σου;",
        en: "What would you want to be able to say about your job at dinner?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Αυτό που κρατάς στο χέρι σου το έφτιαξα εγώ»",
            en: "\"The thing in your hand — I made that\"",
          },
          c: { mobile: 3, frontend: 2, embedded: 1 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Δουλεύω σε κάτι που δεν το έχει λύσει κανείς»",
            en: "\"I work on something nobody has solved\"",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "«Αν σταματήσω εγώ, θα το καταλάβουν πολλοί»",
            en: "\"If I stopped, a lot of people would notice\"",
          },
          c: { devops: 3, dataeng: 1, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Προστατεύω πράγματα που έχουν σημασία για κόσμο»",
            en: "\"I protect things that matter to people\"",
          },
          c: { security: 3, qa: 1 },
          t: { adversarial: 2, people: 1 },
        },
        {
          id: "e",
          label: {
            el: "«Βοηθάω να παίρνονται σωστές αποφάσεις»",
            en: "\"I help people decide correctly\"",
          },
          c: { datasci: 3, product: 2 },
          t: { analytical: 2, product: 1 },
        },
      ],
    },
    {
      id: "q95",
      section: 10,
      text: {
        el: "Δουλειά σε χώρο με αυστηρούς κανόνες και σοβαρές συνέπειες (υγεία, χρήμα, ασφάλεια):",
        en: "Work in a field with strict rules and serious consequences (health, money, safety):",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μου ταιριάζει. Οι κανόνες υπάρχουν επειδή το λάθος κοστίζει αληθινά",
            en: "Suits me. The rules exist because mistakes truly cost",
          },
          c: { security: 3, qa: 2, embedded: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Εντάξει, αν το πρόβλημα από κάτω είναι ενδιαφέρον",
            en: "Fine, if the underlying problem is interesting",
          },
          c: { backend: 2, dataeng: 2, ml: 1 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Πνιγηρό. Θέλω να δοκιμάζω γρήγορα",
            en: "Suffocating. I want to try things fast",
          },
          c: { frontend: 2, product: 2, mobile: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Θα προτιμούσα κάπου που να μελετάω αντί να συμμορφώνομαι",
            en: "I'd rather be somewhere I study instead of comply",
          },
          c: { research: 3, ml: 1 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q96",
      section: 10,
      text: {
        el: "Αν είχες χρόνο και χρήμα, τι θα διάλεγες να σπουδάσεις παραπάνω;",
        en: "With time and money, what would you choose to study further?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάτι βαθιά μαθηματικό, ακόμα κι αν δεν το χρησιμοποιήσω",
            en: "Something deeply mathematical, even if I never use it",
          },
          c: { ml: 3, research: 3 },
          t: { analytical: 2, research: 2 },
        },
        {
          id: "b",
          label: {
            el: "Κάτι για το πώς δουλεύουν οι μηχανές και τα δίκτυα",
            en: "Something about how machines and networks work",
          },
          c: { embedded: 3, devops: 2, security: 1 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κάτι ανάμεσα σε ανθρώπους, σχέδιο και επιχείρηση",
            en: "Something between people, design and business",
          },
          c: { product: 3, frontend: 1 },
          t: { product: 2, people: 2 },
        },
        {
          id: "d",
          label: {
            el: "Τίποτα. Μαθαίνω καλύτερα δουλεύοντας",
            en: "Nothing. I learn better by working",
          },
          c: { frontend: 2, devops: 2, qa: 2, mobile: 1 },
          t: { ops: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q97",
      section: 10,
      text: {
        el: "Καταλαβαίνεις ότι αυτό που κάνεις δεν σου ταιριάζει. Τι κάνεις;",
        en: "You realise what you're doing doesn't suit you. What then?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αλλάζω γρήγορα. Δεν κάθομαι έναν χρόνο σε λάθος θέση",
            en: "Change fast. I won't sit a year in the wrong seat",
          },
          c: { product: 2, frontend: 2, datasci: 1 },
          t: { product: 2, people: 1 },
        },
        {
          id: "b",
          label: {
            el: "Μένω μέχρι να γίνω καλός, και μετά αποφασίζω",
            en: "Stay until I'm good at it, then decide",
          },
          c: { backend: 2, embedded: 2, qa: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Μετακινούμαι σε κάτι κοντινό, όχι σε κάτι εντελώς άλλο",
            en: "Move to something adjacent, not somewhere entirely new",
          },
          c: { dataeng: 2, devops: 2, datasci: 2 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Δύσκολα. Έχω επενδύσει και θέλω να πάω βαθιά κάπου",
            en: "Reluctantly. I've invested and I want depth somewhere",
          },
          c: { research: 3, ml: 1, security: 1 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q98",
      section: 10,
      text: {
        el: "Δέκα χρόνια μετά, τι θα σήμαινε για σένα ότι πέτυχες;",
        en: "Ten years on, what would count as having succeeded?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να είμαι αυτός που ρωτάνε όταν κάτι δύσκολο κολλήσει",
            en: "Being the one they ask when something hard is stuck",
          },
          c: { backend: 2, embedded: 2, security: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να έχω φτιάξει κάτι δικό μου που στέκεται μόνο του",
            en: "Having built something of my own that stands alone",
          },
          c: { product: 3, frontend: 1, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να έχω ισορροπία: καλή δουλειά και ζωή έξω από αυτήν",
            en: "Having balance: good work and a life outside it",
          },
          c: { qa: 2, dataeng: 2, frontend: 1, devops: 1 },
          t: { ops: 2 },
        },
        {
          id: "d",
          label: {
            el: "Να ξέρω κάτι σε βάθος που το ξέρουν ελάχιστοι",
            en: "Knowing something deeply that few people know",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Να έχω βοηθήσει ανθρώπους να γίνουν καλύτεροι στη δουλειά τους",
            en: "Having helped people get better at their work",
          },
          c: { product: 2, devops: 2, qa: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q99",
      section: 10,
      text: {
        el: "Ποια πρώτη δουλειά θα σε ωφελούσε περισσότερο, ό,τι κι αν λέει ο τίτλος της;",
        en: "Which first job would help you most, whatever the title says?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μικρή ομάδα όπου θα αγγίξω τα πάντα, καλά ή άσχημα",
            en: "A small team where I touch everything, for better or worse",
          },
          c: { frontend: 2, backend: 2, product: 2, devops: 1 },
          t: { product: 2, creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Μεγάλος οργανισμός με σοβαρή κλίμακα και ανθρώπους να μάθω",
            en: "A big organisation with real scale and people to learn from",
          },
          c: { backend: 2, devops: 2, dataeng: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Θέση όπου η δουλειά μου είναι να βρίσκω τι δεν πάει καλά",
            en: "A role where my job is finding what's wrong",
          },
          c: { qa: 3, security: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ομάδα που δουλεύει σε κάτι πρωτότυπο, έστω με λιγότερα λεφτά",
            en: "A team working on something novel, even for less money",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Κάπου με πολλούς χρήστες, να δω τι θέλει ο κόσμος στ' αλήθεια",
            en: "Somewhere with many users, to see what people actually want",
          },
          c: { product: 3, datasci: 2, mobile: 1 },
          t: { product: 3 },
        },
      ],
    },
    {
      id: "q100",
      section: 10,
      text: {
        el: "Τελευταία: τι θα ήθελες να ισχύει για τις μέρες σου;",
        en: "Last one: what would you want to be true of your days?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να βλέπω κάτι να παίρνει μορφή μέσα στη μέρα",
            en: "Seeing something take shape within the day",
          },
          c: { frontend: 3, mobile: 2, product: 1 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να καταλαβαίνω κάτι που δεν καταλάβαινα χθες",
            en: "Understanding something I didn't yesterday",
          },
          c: { research: 3, ml: 2, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να ξέρω ότι όλα δουλεύουν και ξέρω ακριβώς πώς",
            en: "Knowing everything is running and knowing exactly how",
          },
          c: { devops: 3, dataeng: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να αλλάζει κάτι για συγκεκριμένους ανθρώπους",
            en: "Something changing for specific people",
          },
          c: { product: 3, datasci: 2, security: 1 },
          t: { product: 2, people: 2 },
        },
        {
          id: "e",
          label: {
            el: "Να μην έχω άγχος για κάτι που μπορεί να σπάσει",
            en: "Not worrying about something that might break",
          },
          c: { qa: 3, embedded: 1, backend: 1 },
          t: { adversarial: 2, ops: 1 },
        },
      ],
    },
  ],
};
