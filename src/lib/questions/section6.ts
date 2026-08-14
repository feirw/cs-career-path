import type { Section } from "./types";

export const section6: Section = {
  index: 6,
  title: { el: "Τάξη, χάος και ρουτίνα", en: "Order, chaos and routine" },
  subtitle: {
    el: "Πόση προβλεψιμότητα χρειάζεσαι για να λειτουργήσεις; Δεν υπάρχει καλύτερη απάντηση — υπάρχουν δουλειές για κάθε εκδοχή.",
    en: "How much predictability do you need to function? There's no better answer — there are jobs for each version.",
  },
  questions: [
    {
      id: "q51",
      section: 6,
      text: {
        el: "Το γραφείο ή το τραπέζι όπου δουλεύεις, μια συνηθισμένη Τετάρτη:",
        en: "Your desk or table on an ordinary Wednesday:",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Άδειο. Ό,τι δεν χρειάζομαι, φεύγει",
            en: "Empty. Anything I don't need goes away",
          },
          c: { devops: 2, qa: 2, embedded: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Χάος, αλλά ξέρω ακριβώς πού είναι το καθετί",
            en: "Chaos, but I know exactly where everything is",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "Έχει πράγματα που μου αρέσει να βλέπω",
            en: "It has things I like looking at",
          },
          c: { frontend: 3, mobile: 1 },
          t: { creative: 3 },
        },
        {
          id: "d",
          label: {
            el: "Μισοτελειωμένα πράγματα που θα τα πιάσω σε λίγο",
            en: "Half-finished things I'll get back to shortly",
          },
          c: { mobile: 2, product: 2, ml: 1 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "e",
          label: {
            el: "Ό,τι χρειάζεται για να δουλεύω, στημένο με σύστημα",
            en: "Exactly what the work needs, arranged as a system",
          },
          c: { dataeng: 3, backend: 2 },
          t: { systems: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q52",
      section: 6,
      text: {
        el: "Ποιος ρυθμός δουλειάς σου ταιριάζει πραγματικά;",
        en: "Which working rhythm actually suits you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πολλά μικρά που τελειώνουν την ίδια μέρα",
            en: "Many small things that finish the same day",
          },
          c: { frontend: 3, qa: 1, mobile: 1 },
          t: { creative: 2 },
        },
        {
          id: "b",
          label: {
            el: "Ήσυχες βδομάδες και ξαφνικές κρίσεις που τις λύνω εγώ",
            en: "Quiet weeks and sudden crises I get to solve",
          },
          c: { devops: 3, security: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ένα μεγάλο πράγμα που το σκάβω μήνες",
            en: "One big thing I dig at for months",
          },
          c: { research: 3, embedded: 2, ml: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σταθερός ρυθμός με προβλέψιμα παραδοτέα",
            en: "A steady pace with predictable deliverables",
          },
          c: { backend: 2, dataeng: 2, qa: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "e",
          label: {
            el: "Αλλάζει συνέχεια. Θα βαριόμουν αλλιώς",
            en: "Constantly changing. I'd be bored otherwise",
          },
          c: { product: 3, mobile: 1 },
          t: { product: 2, people: 1 },
        },
      ],
    },
    {
      id: "q53",
      section: 6,
      text: {
        el: "Σου δίνουν μια δουλειά χωρίς οδηγίες, μόνο έναν στόχο.",
        en: "You're handed a task with no instructions, only a goal.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τέλεια. Εκεί δουλεύω καλύτερα",
            en: "Perfect. That's where I work best",
          },
          c: { research: 3, product: 2 },
          t: { research: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Εντάξει, αλλά φτιάχνω μόνος μου βήματα και ορόσημα",
            en: "Fine, but I'll build my own steps and milestones",
          },
          c: { dataeng: 2, devops: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Άβολα. Θέλω να ξέρω πότε θεωρείται τελειωμένο",
            en: "Uncomfortable. I want to know when it counts as done",
          },
          c: { qa: 3, embedded: 2 },
          t: { adversarial: 1, ops: 2 },
        },
        {
          id: "d",
          label: {
            el: "Πρώτα ρωτάω ποιος θα το χρησιμοποιήσει και γιατί",
            en: "First I ask who'll use it and why",
          },
          c: { product: 3, datasci: 1 },
          t: { product: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ξεκινάω να φτιάχνω κάτι πρόχειρο για να δω αν έχω καταλάβει",
            en: "Start building something rough to check I understood",
          },
          c: { frontend: 2, mobile: 2, ml: 1 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q54",
      section: 6,
      text: {
        el: "Ποιο σε ενοχλεί περισσότερο σε μια ομαδική δουλειά;",
        en: "What bothers you most in group work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να μην ξέρει κανείς ποιος κάνει τι",
            en: "Nobody knowing who's doing what",
          },
          c: { devops: 2, dataeng: 2, product: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να αποφασίζονται πράγματα χωρίς επιχειρήματα",
            en: "Decisions made without arguments to back them",
          },
          c: { research: 2, datasci: 3 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να παραδίδεται κάτι μισοτελειωμένο",
            en: "Handing in something half-finished",
          },
          c: { qa: 3, embedded: 2 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Να μη μιλάει κανείς μεταξύ του",
            en: "Nobody talking to each other",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "e",
          label: {
            el: "Να μη μου αφήνουν χώρο να δουλέψω απερίσπαστος",
            en: "Not being left alone long enough to work",
          },
          c: { embedded: 2, research: 2, ml: 2 },
          t: { systems: 2, research: 1 },
        },
      ],
    },
    {
      id: "q55",
      section: 6,
      text: {
        el: "Ξέρεις ότι κάτι κρέμεται από μια κλωστή, αλλά προς το παρόν δουλεύει.",
        en: "You know something is hanging by a thread, but for now it works.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δεν ησυχάζω. Θα το στηρίξω πριν χρειαστεί",
            en: "I can't settle. I'll shore it up before it's needed",
          },
          c: { devops: 3, embedded: 1 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Καταγράφω πού είναι η κλωστή και ποιος πρέπει να το ξέρει",
            en: "I note where the thread is and who needs to know",
          },
          c: { qa: 2, product: 2, research: 1 },
          t: { people: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Το αφήνω. Δεν έχει σπάσει ακόμα",
            en: "I leave it. It hasn't snapped yet",
          },
          c: { product: 2, frontend: 2, mobile: 1 },
          t: { product: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ψάχνω τι ακριβώς θα το κόψει, να ξέρω πόσο κοντά είμαστε",
            en: "I work out exactly what would cut it, to know how close we are",
          },
          c: { security: 2, backend: 2, datasci: 1 },
          t: { adversarial: 2, analytical: 2 },
        },
      ],
    },
    {
      id: "q56",
      section: 6,
      text: {
        el: "Πόσο σε ενοχλεί να αλλάζει το σχέδιο στη μέση;",
        en: "How much does a plan changing halfway bother you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Καθόλου. Έτσι γίνεται πάντα",
            en: "Not at all. That's how it always goes",
          },
          c: { product: 3, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: {
            el: "Λίγο, αν μου εξηγήσουν γιατί",
            en: "A little, if someone explains why",
          },
          c: { frontend: 2, datasci: 2, devops: 1 },
          t: { people: 1, creative: 1, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Πολύ. Είχα χτίσει πάνω στο προηγούμενο",
            en: "A lot. I'd built on the previous one",
          },
          c: { backend: 2, embedded: 3 },
          t: { systems: 3 },
        },
        {
          id: "d",
          label: {
            el: "Με νοιάζει μόνο αν αυτό που έφτιαξα πεταχτεί",
            en: "I only mind if what I made gets thrown away",
          },
          c: { qa: 2, dataeng: 2, ml: 1 },
          t: { ops: 2 },
        },
      ],
    },
    {
      id: "q57",
      section: 6,
      text: {
        el: "Δύο πράγματα επείγουν ταυτόχρονα και προλαβαίνεις ένα.",
        en: "Two things are urgent at once and you can only do one.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αυτό που επηρεάζει περισσότερους ανθρώπους τώρα",
            en: "The one affecting more people right now",
          },
          c: { devops: 2, product: 2, datasci: 1 },
          t: { ops: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Αυτό που χειροτερεύει όσο περνάει η ώρα",
            en: "The one that gets worse the longer it waits",
          },
          c: { security: 3, dataeng: 1 },
          t: { adversarial: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Αυτό που σίγουρα τελειώνω, να μην έχω δύο μισά",
            en: "The one I can definitely finish, to avoid two halves",
          },
          c: { qa: 2, backend: 2, embedded: 1 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ρωτάω ποιος περιμένει τι και αφήνω αυτούς να διαλέξουν",
            en: "Ask who's waiting for what and let them choose",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q58",
      section: 6,
      text: {
        el: "Σου ζητούν να υποσχεθείς ημερομηνία για κάτι που δεν έχεις ξανακάνει.",
        en: "You're asked to promise a date for something you've never done.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Δώσε μου δύο μέρες να δοκιμάσω και μετά σου λέω»",
            en: "\"Give me two days to try, then I'll tell you\"",
          },
          c: { research: 2, ml: 2, backend: 1 },
          t: { research: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "«Θα έχεις κάτι να δεις σε μια βδομάδα, ό,τι κι αν είναι»",
            en: "\"You'll have something to look at in a week, whatever it is\"",
          },
          c: { frontend: 2, mobile: 2, product: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Δίνω ημερομηνία με μεγάλο περιθώριο και την τηρώ",
            en: "Give a date with plenty of slack and hit it",
          },
          c: { qa: 2, embedded: 2, dataeng: 1 },
          t: { ops: 3 },
        },
        {
          id: "d",
          label: {
            el: "«Πες μου τι χρειάζεσαι εσύ και θα το φέρω στα μέτρα του»",
            en: "\"Tell me what you need and I'll size it to fit\"",
          },
          c: { product: 3, devops: 1 },
          t: { people: 2, product: 2 },
        },
      ],
    },
    {
      id: "q59",
      section: 6,
      text: {
        el: "Ένα πράγμα που κάνεις κάθε βδομάδα σου παίρνει μία ώρα.",
        en: "Something you do every week takes you an hour.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Θα περάσω μια μέρα να το αυτοματοποιήσω τελείως",
            en: "I'll spend a day automating it away entirely",
          },
          c: { devops: 3, dataeng: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Θα βρω πώς να το κάνω σε είκοσι λεπτά",
            en: "I'll find a way to do it in twenty minutes",
          },
          c: { backend: 2, embedded: 2, qa: 1 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Θα ρωτήσω αν χρειάζεται να γίνεται καθόλου",
            en: "I'll ask whether it needs doing at all",
          },
          c: { product: 3, research: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: {
            el: "Μια χαρά είναι. Μου αρέσει που είναι ήσυχη ώρα",
            en: "It's fine. I like that it's a quiet hour",
          },
          c: { frontend: 1, research: 2, mobile: 1 },
          t: { creative: 1, research: 1 },
        },
      ],
    },
    {
      id: "q60",
      section: 6,
      text: {
        el: "Μετά από μια εξαντλητική βδομάδα, τι σε ξεκουράζει αληθινά;",
        en: "After an exhausting week, what actually restores you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάτι με τα χέρια μου, μακριά από οθόνες",
            en: "Something with my hands, away from screens",
          },
          c: { embedded: 3, devops: 1 },
          t: { systems: 2 },
        },
        {
          id: "b",
          label: {
            el: "Να τακτοποιήσω επιτέλους ό,τι έμεινε μισό",
            en: "Finally tidying everything left half-done",
          },
          c: { qa: 2, dataeng: 2, devops: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να διαβάσω κάτι δύσκολο και άσχετο",
            en: "Reading something hard and unrelated",
          },
          c: { research: 3, ml: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να φτιάξω κάτι δικό μου, μικρό και όμορφο",
            en: "Making something of my own, small and pretty",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "e",
          label: {
            el: "Κόσμος, φασαρία, να μη σκέφτομαι καθόλου",
            en: "People, noise, no thinking at all",
          },
          c: { product: 3 },
          t: { people: 3 },
        },
      ],
    },
  ],
};
