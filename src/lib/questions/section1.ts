import type { Section } from "./types";

export const section1: Section = {
  index: 1,
  title: { el: "Μια συνηθισμένη μέρα", en: "An ordinary day" },
  subtitle: {
    el: "Ξεκινάμε μακριά από υπολογιστές. Καμία απάντηση δεν είναι «σωστή» — μας ενδιαφέρει πώς σκέφτεσαι όταν πρέπει να κάνεις κάτι.",
    en: "We start far from computers. No answer is \"right\" — what matters is how you think when you need to solve something.",
  },
  questions: [
    {
      id: "q01",
      section: 1,
      text: {
        el: "Έχεις μόνο μιάμιση ώρα ελεύθερη και 5 πράγματα που θα ήταν καλό να κάνεις.",
        en: "You have 1.5 hours free and 5 things you'd like to do.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Κάνω ένα πράγμα καλά, το υπόλοιπο δεν χέρια",
            en: "Do one thing well, the rest can wait",
          },
          c: { frontend: 2, product: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κάνω λίγο από καθένα ώστε τουλάχιστον να προχωρήσει",
            en: "Do a bit of each so at least some progress happens",
          },
          c: { dataeng: 2, qa: 1 },
          t: { ops: 2, analytical: 1 },
        },
        {
          id: "c",
          label: {
            el: "Σχεδιάζω ποια είναι πρώτα και εκτελώ σχεδιασμένα",
            en: "Plan which is first, then execute in order",
          },
          c: { backend: 2, devops: 2, dataeng: 1 },
          t: { ops: 3, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ξέρω ποιο είναι πιο σημαντικό και κάνω εκείνο",
            en: "I know which matters most and I do that",
          },
          c: { product: 3, research: 1 },
          t: { product: 3, analytical: 1 },
        },
        {
          id: "e",
          label: {
            el: "Αρχίζω από ό,τι με ενδιαφέρει περισσότερο",
            en: "Start with what interests me most",
          },
          c: { mobile: 2, frontend: 2, research: 1 },
          t: { creative: 2, research: 1 },
        },
      ],
    },
    {
      id: "q02",
      section: 1,
      text: {
        el: "Έχεις αρχίσει να κάνεις κάτι και συνειδητοποιούς ότι δεν ξέρεις τι κάνεις.",
        en: "You started doing something and realize you don't actually know what you're doing.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σταματάω και ψάχνω να μάθω σωστά πρώτα",
            en: "Stop and learn properly first",
          },
          c: { research: 3, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "b",
          label: {
            el: "Συνεχίζω και μαθαίνω ενώ τα κάνω",
            en: "Keep going and learn as I go",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2 },
        },
        {
          id: "c",
          label: {
            el: "Δοκιμάζω, χτυπάω δοκιμαστικά, βλέπω τι σπάει",
            en: "Try, fail, see what breaks, fix",
          },
          c: { qa: 2, security: 2 },
          t: { adversarial: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ρωτάω κάποιον που ξέρει ή βρίσκω σε κάποιο tutorial",
            en: "Ask someone or find a tutorial",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 2 },
        },
        {
          id: "e",
          label: {
            el: "Αφήνω αυτό και κάνω κάτι που ξέρω ότι μπορώ",
            en: "Skip it and do something I know I can do",
          },
          c: { product: 2, mobile: 1 },
          t: { product: 2 },
        },
      ],
    },
    {
      id: "q03",
      section: 1,
      text: {
        el: "Κάποιος έκανε ένα σφάλμα που σε αφορά και μπορεί να πάει άσχημα.",
        en: "Someone made a mistake that affects you and it could go badly.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το λέω αμέσως, πριν φτάσει να πάει πολύ μακριά",
            en: "Tell them immediately before it gets worse",
          },
          c: { product: 2, qa: 2 },
          t: { people: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Πρώτα κοιτάω αν μπορώ να το διορθώσω μόνος μου",
            en: "First see if I can fix it myself",
          },
          c: { embedded: 2, backend: 2 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Συλλέγω στοιχεία ώστε να καταλάβω τι ακριβώς πήγε στραβά",
            en: "Gather evidence to understand exactly what went wrong",
          },
          c: { datasci: 2, research: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σκέφτομαι πώς θα μπορούσε να αποτραπεί σε μέλλον",
            en: "Think how we can prevent this next time",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω τι ακριβώς έγινε πριν πω κάτι",
            en: "Ask what happened before I say anything",
          },
          c: { security: 2, product: 1 },
          t: { adversarial: 2, people: 1 },
        },
      ],
    },
    {
      id: "q04",
      section: 1,
      text: {
        el: "Είσαι σε ένα σημείο όπου μπορείς να πάρεις δύο εντελώς διαφορετικές απόφασεις. Κανείς δεν ξέρει ποια είναι πιο σωστή.",
        en: "You're at a fork where two very different choices exist. Nobody really knows which is right.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Προχωράω με ό,τι νιώθω σωστό",
            en: "Go with what feels right",
          },
          c: { product: 3, frontend: 1 },
          t: { creative: 2, product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Κάνω τη δοκιμή για κάθε περίπτωση και βλέπω ποια δουλεύει",
            en: "Test both options and see which works better",
          },
          c: { qa: 2, research: 2, datasci: 1 },
          t: { analytical: 3, adversarial: 1 },
        },
        {
          id: "c",
          label: {
            el: "Διαλέγω το πιο ασφαλές—είτε εύκολο να αναστραφεί είτε δυσκολεύει άλλα πράγματα",
            en: "Choose the safer option—either reversible or less risky overall",
          },
          c: { security: 2, devops: 2 },
          t: { ops: 2, adversarial: 2 },
        },
        {
          id: "d",
          label: {
            el: "Ζητάω γνώμη από κάποιον που έχει ξανακάνει κάτι παρόμοιο",
            en: "Ask someone who's done something similar before",
          },
          c: { backend: 2, product: 1 },
          t: { people: 3 },
        },
        {
          id: "e",
          label: {
            el: "Διαλέγω γρήγορα και προχωράω—το learning είναι πιο σημαντικό",
            en: "Pick quickly and move on—learning matters more",
          },
          c: { mobile: 2, frontend: 2, research: 1 },
          t: { creative: 2, research: 1 },
        },
      ],
    },
    {
      id: "q05",
      section: 1,
      text: {
        el: "Πρέπει να κάνεις κάτι που απαιτεί ακρίβεια και δεν υπάρχει περίπτωση λάθους.",
        en: "You need to do something that requires precision and there's no room for error.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το κάνω αργά και ελέγχω κάθε λεπτομέρεια",
            en: "Do it slowly and check every detail",
          },
          c: { qa: 3, embedded: 1 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "b",
          label: {
            el: "Το κάνω με ένα σύστημα—καταλογογραφώ τα βήματα πρώτα",
            en: "Do it with a system—I list steps first",
          },
          c: { dataeng: 2, devops: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Έχω κάνει αυτό πολλές φορές, το κάνω όπως πάντα",
            en: "I've done this before, I know my routine",
          },
          c: { embedded: 3, backend: 1 },
          t: { systems: 2 },
        },
        {
          id: "d",
          label: {
            el: "Σταματάω να σκέφτομαι και μπαίνω σε ένα mode πλήρης συγκέντρωσης",
            en: "I stop thinking and enter full focus mode",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ρωτάω κάποιον να με ελέγξει πριν ολοκληρώσω",
            en: "Have someone check before I finish",
          },
          c: { product: 2, backend: 1 },
          t: { people: 2 },
        },
      ],
    },
    {
      id: "q06",
      section: 1,
      text: {
        el: "Έχεις ένα μεγάλο πρόβλημα που δεν μπορείς να λύσεις μόνος σου.",
        en: "You have a big problem you can't solve alone.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το σπάω σε μικρότερα κομμάτια και δοκιμάζω να λύσω καθένα",
            en: "Break it into smaller pieces and solve each",
          },
          c: { dataeng: 2, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ψάχνω αν κάποιος άλλος έχει ήδη λύσει κάτι παρόμοιο",
            en: "See if someone else has already solved something like it",
          },
          c: { research: 3, frontend: 1 },
          t: { research: 2 },
        },
        {
          id: "c",
          label: {
            el: "Ζητάω βοήθεια από κάποιον που έχει εμπειρία",
            en: "Ask someone experienced to help",
          },
          c: { product: 2, backend: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Κάνω ένα σχέδιο με όλα τα βήματα και δουλεύω μαζί με άλλους",
            en: "Make a plan with all steps and work with others",
          },
          c: { devops: 2, qa: 2 },
          t: { ops: 2, people: 1 },
        },
        {
          id: "e",
          label: {
            el: "Σκέφτομαι περισσότερο διαφορετικά—μπορεί η λύση είναι πιο απλή",
            en: "Think differently—maybe the solution is simpler",
          },
          c: { mobile: 2, frontend: 2 },
          t: { creative: 3 },
        },
      ],
    },
    {
      id: "q07",
      section: 1,
      text: {
        el: "Κάποιος βασίζεται σε εσένα για κάτι σημαντικό και το περνάς ή όχι.",
        en: "Someone is counting on you for something important—pass or fail.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δίνω τα πάντα για να τα καταφέρω",
            en: "I give everything to make it work",
          },
          c: { product: 3, frontend: 1 },
          t: { product: 2, people: 2 },
        },
        {
          id: "b",
          label: {
            el: "Σχεδιάζω ώστε να μην υπάρχει περίπτωση αποτυχίας",
            en: "Plan so there's no chance of failure",
          },
          c: { devops: 3, qa: 1 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Λέω αν δεν είμαι σίγουρος και δουλεύουμε σε λύση μαζί",
            en: "Tell them if I'm unsure and we work on a solution together",
          },
          c: { backend: 2, product: 1 },
          t: { people: 2, systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Το κάνω με προσοχή ώστε να μην έχει κενά",
            en: "Do it carefully so there are no gaps",
          },
          c: { security: 2, embedded: 2 },
          t: { systems: 2, adversarial: 1 },
        },
        {
          id: "e",
          label: {
            el: "Παίρνω στοιχεία από τι θέλουν ακριβώς",
            en: "Get clear on what they actually need",
          },
          c: { datasci: 2, research: 1 },
          t: { analytical: 2, people: 1 },
        },
      ],
    },
    {
      id: "q08",
      section: 1,
      text: {
        el: "Πρέπει να μάθεις κάτι πολύ νέο γρήγορα και δεν έχει χρόνο.",
        en: "You need to learn something brand new, fast, with no time.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ακούω αμέσως από κάποιον που ξέρει",
            en: "Learn immediately from someone who knows",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Βρίσκω τις πιο σημαντικές ιδέες και μαθαίνω εκείνες",
            en: "Find the core ideas and focus on those",
          },
          c: { backend: 2, research: 2 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Το δοκιμάζω ενώ μαθαίνω—hands on είναι πιο γρήγορο",
            en: "Learn by doing—hands on is faster",
          },
          c: { mobile: 2, frontend: 2, dataeng: 1 },
          t: { creative: 2 },
        },
        {
          id: "d",
          label: {
            el: "Λυσαριθμώ πώς θα το κάνω και μετά κάνω",
            en: "Figure out how I'd do it, then do it",
          },
          c: { embedded: 2, security: 1 },
          t: { systems: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ζητάω βοήθεια και άσχημα δεν μπορώ",
            en: "Ask for help—I can't do bad work",
          },
          c: { qa: 2, product: 1 },
          t: { ops: 2, people: 1 },
        },
      ],
    },
    {
      id: "q09",
      section: 1,
      text: {
        el: "Έχεις την ευκαιρία να δοκιμάσεις κάτι εντελώς άγνωστο.",
        en: "You have a chance to try something completely unfamiliar.",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Άμεσα δεν, δεν θέλω να φαίνομαι ανίκανος",
            en: "Not now, I don't want to look incompetent",
          },
          c: { product: 2, frontend: 1 },
          t: { ops: 1, people: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ναι, αλλά θα προετοιμαστώ πρώτα",
            en: "Yes, but I'll prep first",
          },
          c: { research: 2, embedded: 2, backend: 1 },
          t: { research: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ναι, επειδή δεν μαθαίνεις αν δεν δοκιμάσεις",
            en: "Yes, because you don't learn if you don't try",
          },
          c: { frontend: 2, mobile: 2, datasci: 1 },
          t: { creative: 3, research: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ναι, ασχέτως αποτελέσματος μπορώ να μάθω από το να αποτύχω",
            en: "Yes, I can learn even if I fail",
          },
          c: { qa: 2, research: 2, security: 1 },
          t: { adversarial: 2, research: 2 },
        },
        {
          id: "e",
          label: {
            el: "Ναι και ξέρω πώς θα το αναλάβω",
            en: "Yes and I know how I'd approach it",
          },
          c: { devops: 2, dataeng: 2 },
          t: { systems: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q10",
      section: 1,
      text: {
        el: "Το έκανες και δεν πήγε καλά. Ποια είναι η πρώτη σου αντίδραση;",
        en: "You did it and it didn't go well. What's your first reaction?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Τι έπρεπε να κάνω διαφορετικά;",
            en: "What should I have done differently?",
          },
          c: { research: 3, datasci: 1 },
          t: { analytical: 3, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Μήπως έχει κρυμμένο πρόβλημα που δεν είδα;",
            en: "Is there a hidden problem I missed?",
          },
          c: { security: 2, qa: 2 },
          t: { adversarial: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ξανακάνω με διαφορετικό τρόπο",
            en: "Try again differently",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "d",
          label: {
            el: "Σχεδιάζω πώς θα το κάνω καλά την επόμενη φορά",
            en: "Plan how I'd do it right next time",
          },
          c: { devops: 2, dataeng: 2, backend: 1 },
          t: { ops: 3 },
        },
        {
          id: "e",
          label: {
            el: "Ζητάω ανατροφοδότηση από κάποιον",
            en: "Ask someone for feedback",
          },
          c: { product: 2, backend: 1 },
          t: { people: 2 },
        },
      ],
    },
  ],
};
