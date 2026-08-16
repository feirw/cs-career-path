import type { Section } from "./types";

export const section4: Section = {
  index: 4,
  title: { el: "Ανάμεσα σε ανθρώπους", en: "Among people" },
  subtitle: {
    el: "Η ίδια δουλειά γίνεται τελείως άλλη ανάλογα με το πόσο μιλάς και με ποιους. Απάντησε όπως είσαι, όχι όπως θα ήθελες να είσαι.",
    en: "The same work becomes a different life depending on how much you talk and to whom. Answer as you are, not as you'd like to be.",
  },
  questions: [
    {
      id: "q31",
      section: 4,
      text: {
        el: "Ανοίγεις ένα pull request συναδέλφου. Τι κοιτάς πρώτο;",
        en: "You open a colleague's pull request. What do you look at first?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αν λύνει το σωστό πρόβλημα, πριν καν δω πώς",
            en: "Whether it solves the right problem, before how it does it",
          },
          c: { product: 3, research: 1 },
          t: { product: 2, people: 1 },
        },
        {
          id: "b",
          label: {
            el: "Τι γίνεται όταν αποτύχει στη μέση: μισοτελειωμένες εγγραφές, κολλημένα αιτήματα",
            en: "What happens when it fails halfway: half-written records, stuck requests",
          },
          c: { backend: 2, devops: 2, qa: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Πού μπορεί να μπει είσοδος που δεν την περιμένει κανείς",
            en: "Where input nobody expects could get in",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "d",
          label: {
            el: "Αν θα το καταλαβαίνει κάποιος καινούριος σε έξι μήνες",
            en: "Whether a newcomer will understand it in six months",
          },
          c: { dataeng: 2, backend: 2, qa: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "e",
          label: {
            el: "Πώς φαίνεται το αποτέλεσμα στην οθόνη, όχι μόνο ο κώδικας",
            en: "How the result looks on screen, not just the code",
          },
          c: { frontend: 3, mobile: 1 },
          t: { creative: 3 },
        },
        {
          id: "f",
          label: {
            el: "Λέω κάτι καλό πρώτα. Τους κόστισε κόπο",
            en: "I say something good first. It cost them effort",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q32",
      section: 4,
      text: {
        el: "Μια σύσκεψη μιάμισης ώρας που δεν σε αφορά άμεσα.",
        en: "A ninety-minute meeting that doesn't directly concern you.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Καλά που ήρθα. Μαθαίνω πράγματα που δεν θα τα μάθαινα αλλιώς",
            en: "Glad I came. I learn things I wouldn't otherwise",
          },
          c: { product: 3, datasci: 1 },
          t: { people: 3, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Θα διάβαζα τις σημειώσεις σε πέντε λεπτά",
            en: "I could read the notes in five minutes",
          },
          c: { backend: 2, embedded: 2, dataeng: 1 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Ακούω. Κάπου εδώ κρύβεται το επόμενο πρόβλημά μου",
            en: "I listen. My next problem is hiding somewhere in here",
          },
          c: { qa: 2, security: 2, devops: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Χάνω τη μοναδική ώρα που θα σκεφτόμουν καθαρά σήμερα",
            en: "I'm losing the one hour today I'd think clearly",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q33",
      section: 4,
      text: {
        el: "Κάποιος σού ζητάει βοήθεια για το ίδιο πράγμα τρίτη φορά αυτή τη βδομάδα.",
        en: "Someone asks you for help with the same thing for the third time this week.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το κάνω. Έτσι καταλαβαίνω τι πραγματικά τους λείπει",
            en: "I do it. That's how I learn what they actually lack",
          },
          c: { product: 3, datasci: 1 },
          t: { people: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Τους δείχνω μια φορά καλά, ώστε να μη με ξαναχρειαστούν",
            en: "I teach them properly once so they don't need me again",
          },
          c: { dataeng: 2, devops: 2, qa: 1 },
          t: { ops: 3, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Αλλάζω το ίδιο το πράγμα, ώστε να μη γεννάει ερωτήσεις",
            en: "I change the thing itself so it stops raising questions",
          },
          c: { frontend: 2, embedded: 2, backend: 1 },
          t: { creative: 1, systems: 2 },
        },
        {
          id: "d",
          label: {
            el: "Λέω ότι θα το δω αργότερα και συνεχίζω τη δουλειά μου",
            en: "Say I'll look later and get on with my own work",
          },
          c: { research: 2, ml: 2, security: 1 },
          t: { research: 2 },
        },
      ],
    },
    {
      id: "q34",
      section: 4,
      text: {
        el: "Πρέπει να εξηγήσεις σε κόσμο που δεν ξέρει τίποτα σχετικό γιατί κάτι θα αργήσει.",
        en: "You must explain to people who know nothing about it why something will be late.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μου αρέσει. Το να το κάνω κατανοητό είναι γρίφος από μόνο του",
            en: "I enjoy it. Making it understandable is a puzzle in itself",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Το κάνω, αλλά προτιμώ γραπτά παρά μπροστά σε κοινό",
            en: "I'll do it, but I'd rather write it than face a room",
          },
          c: { research: 2, backend: 2, dataeng: 1 },
          t: { research: 1, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Θέλω νούμερα πρώτα, αλλιώς ακούγεται σαν δικαιολογία",
            en: "I want numbers first, otherwise it sounds like an excuse",
          },
          c: { datasci: 3, devops: 1 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Θα προτιμούσα να το πει κάποιος άλλος",
            en: "I'd rather someone else did it",
          },
          c: { embedded: 3, security: 1, ml: 1 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q35",
      section: 4,
      text: {
        el: "Ένας πρωτοετής κολλάει τρίτη φορά στο ίδιο σημείο στο στήσιμο του περιβάλλοντος.",
        en: "A first-year gets stuck for the third time setting up the same environment.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάθομαι μαζί του και τον φέρνω εκεί με ερωτήσεις",
            en: "Sit with them and get them there with questions",
          },
          c: { product: 2, qa: 2 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Γράφω κάτι που το λύνει για όλους μια για πάντα",
            en: "Write something that solves it for everyone once and for all",
          },
          c: { dataeng: 2, devops: 2, research: 1 },
          t: { ops: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Αλλάζω τα πράγματα ώστε να μην μπορεί να γίνει αυτό το λάθος",
            en: "Change things so that mistake becomes impossible",
          },
          c: { embedded: 2, qa: 2, devops: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Του το λύνω γρήγορα και γυρνάω στα δικά μου",
            en: "Solve it for them quickly and get back to my own",
          },
          c: { backend: 2, ml: 1, security: 1 },
          t: { systems: 1 },
        },
      ],
    },
    {
      id: "q36",
      section: 4,
      text: {
        el: "Σε ποια ομάδα θα έδινες τον καλύτερό σου εαυτό;",
        en: "Which team would get the best out of you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τέσσερις άνθρωποι, όλοι κάνουν λίγο απ' όλα, τίποτα δεν υπάρχει ακόμα",
            en: "Four people, everyone does a bit of everything, nothing exists yet",
          },
          c: { frontend: 2, mobile: 2, product: 2 },
          t: { creative: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Ομάδα με καθαρούς ρόλους, όπου το κομμάτι μου είναι δικό μου",
            en: "A team with clear roles where my piece is mine",
          },
          c: { backend: 2, embedded: 2, qa: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ομάδα που κρατάει όρθιο κάτι μεγάλο που το πατάνε όλοι",
            en: "A team keeping alive something big that everyone depends on",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Δύο-τρεις άνθρωποι σε ένα δύσκολο ερώτημα, για καιρό",
            en: "Two or three people on one hard question, for a long time",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ομάδα που η δουλειά της είναι να μη συμβεί κάτι κακό",
            en: "A team whose job is that nothing bad happens",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3 },
        },
      ],
    },
    {
      id: "q37",
      section: 4,
      text: {
        el: "Η ομάδα αποφασίζει κάτι που θεωρείς λάθος, αλλά όχι επικίνδυνο.",
        en: "The group decides something you think is wrong, but not dangerous.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Λέω τη γνώμη μου μία φορά καθαρά και μετά στηρίζω",
            en: "State my view once, clearly, then back the decision",
          },
          c: { product: 2, devops: 2, backend: 1 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Μαζεύω σιωπηλά στοιχεία που θα το δείξουν σε δύο μήνες",
            en: "Quietly gather the evidence that will show it in two months",
          },
          c: { datasci: 3, research: 1 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Φροντίζω τουλάχιστον να παίρνεται εύκολα πίσω",
            en: "Make sure it's at least easy to reverse",
          },
          c: { devops: 3, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "Το αφήνω. Δεν αξίζει ενέργεια",
            en: "Let it go. Not worth the energy",
          },
          c: { frontend: 2, mobile: 2, embedded: 1 },
          t: { creative: 1, systems: 1 },
        },
      ],
    },
    {
      id: "q38",
      section: 4,
      text: {
        el: "Ποιο σχόλιο θα σε χαροποιούσε περισσότερο;",
        en: "Which comment would please you most?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Από τότε που το ανέλαβες εσύ, δεν έχει ξαναχαλάσει»",
            en: "\"Since you took it over, it hasn't broken once\"",
          },
          c: { devops: 3, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Είναι πολύ πιο ευχάριστο απ' ό,τι ήταν»",
            en: "\"It's so much nicer than it was\"",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "«Δεν το είχε σκεφτεί κανείς αυτό»",
            en: "\"Nobody had thought of that\"",
          },
          c: { research: 2, security: 2, ml: 1 },
          t: { research: 2, adversarial: 2 },
        },
        {
          id: "d",
          label: {
            el: "«Χάρη σε αυτό αλλάξαμε απόφαση»",
            en: "\"We changed our decision because of it\"",
          },
          c: { datasci: 3, product: 2 },
          t: { product: 2, analytical: 1 },
        },
        {
          id: "e",
          label: {
            el: "«Χωρίς εσένα δεν θα το είχαμε βγάλει»",
            en: "\"We wouldn't have got through it without you\"",
          },
          c: { product: 2, devops: 2, backend: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q39",
      section: 4,
      text: {
        el: "Πόσες ώρες τη μέρα αντέχεις να μιλάς με κόσμο για δουλειά;",
        en: "How many hours a day can you spend talking to people about work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τις μισές. Εκεί γίνεται η δουλειά ουσιαστικά",
            en: "Half of them. That's where the work really happens",
          },
          c: { product: 3, security: 1 },
          t: { people: 3, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Δύο-τρεις, αν βγαίνει κάτι από αυτές",
            en: "Two or three, if something comes of them",
          },
          c: { datasci: 2, frontend: 2, mobile: 1 },
          t: { people: 2 },
        },
        {
          id: "c",
          label: {
            el: "Μία, οργανωμένη, όχι διακοπές όλη μέρα",
            en: "One, scheduled, not interruptions all day",
          },
          c: { backend: 2, dataeng: 2, devops: 1 },
          t: { systems: 1, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Όσο λιγότερες γίνεται. Δώστε μου το πρόβλημα",
            en: "As few as possible. Just give me the problem",
          },
          c: { embedded: 3, research: 2, ml: 1 },
          t: { systems: 2, research: 2 },
        },
      ],
    },
    {
      id: "q40",
      section: 4,
      text: {
        el: "Σου προτείνουν να γίνεις υπεύθυνος μιας μικρής ομάδας σε δύο χρόνια.",
        en: "You're offered to lead a small team in two years.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θετικά. Με ενδιαφέρει πιο πολύ τι βγάζει η ομάδα παρά τι κάνω εγώ",
            en: "Positively. What the team produces interests me more than what I do",
          },
          c: { product: 3, devops: 1 },
          t: { people: 3, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Ίσως, αν συνεχίσω να κάνω και ο ίδιος τη δουλειά",
            en: "Maybe, if I still get to do the work myself",
          },
          c: { backend: 2, frontend: 2, mobile: 1 },
          t: { systems: 1, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Όχι ακόμα. Θέλω πρώτα να γίνω πολύ καλός σε κάτι",
            en: "Not yet. First I want to be genuinely good at something",
          },
          c: { embedded: 2, security: 2, ml: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "d",
          label: {
            el: "Όχι. Δεν θέλω η μέρα μου να γίνει άνθρωποι και συντονισμός",
            en: "No. I don't want my day to become people and coordination",
          },
          c: { research: 3, embedded: 1, qa: 1 },
          t: { research: 3 },
        },
      ],
    },
  ],
};
