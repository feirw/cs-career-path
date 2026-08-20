import type { Section } from "./types";

export const section1: Section = {
  index: 1,
  title: { el: "Εσύ", en: "You" },
  subtitle: {
    el: "Κανένα σωστό ή λάθος. Μας ενδιαφέρει πώς σκέφτεσαι, πώς δουλεύεις, τι σε κινητοποιεί.",
    en: "No right or wrong answers. We want to know how you think, how you work, what moves you.",
  },
  questions: [
    {
      id: "q01",
      section: 1,
      text: {
        el: "Όταν κάποιος δεν συμφωνεί μαζί σου, τι κάνεις;",
        en: "When someone disagrees with you, what do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ακούω πρώτα — ίσως έχει κάτι σωστό",
            en: "Listen first—maybe they're onto something",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Εξηγώ γιατί έχω δίκαιο",
            en: "Explain why I'm right",
          },
          c: { backend: 2, devops: 1 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Ψάχνω στοιχεία για να κρίνω",
            en: "Look for facts to decide",
          },
          c: { datasci: 3, research: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Δεν με χαλάει — συμφωνούμε να διαφωνούμε",
            en: "Doesn't bother me—we can disagree",
          },
          c: { mobile: 2, frontend: 2 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q02",
      section: 1,
      text: {
        el: "Προτιμάς ομάδα ή δουλειά μόνος σου;",
        en: "Team or solo work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ομάδα — τα ιδέες γίνονται καλύτερες μαζί",
            en: "Team—ideas get better together",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "b",
          label: {
            el: "Μόνος — συγκεντρώνομαι καλύτερα",
            en: "Solo—I focus better alone",
          },
          c: { backend: 3, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο ανάλογα με τι",
            en: "Both—depends on the task",
          },
          c: { research: 2, dataeng: 2 },
          t: { analytical: 2 },
        },
      ],
    },
    {
      id: "q03",
      section: 1,
      text: {
        el: "Κάτι δεν δουλεύει. Πώς αντιδράς;",
        en: "Something breaks. How do you react?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δοκιμάζω διάφορα γρήγορα",
            en: "Try things quickly",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Σταματάω και σκέφτομαι συστηματικά",
            en: "Stop and think systematically",
          },
          c: { backend: 3, datasci: 2 },
          t: { analytical: 3, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ζητάω βοήθεια αμέσως",
            en: "Ask for help immediately",
          },
          c: { product: 2, qa: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Διαβάζω το μήνυμα σφάλματος προσεκτικά",
            en: "Read the error message carefully",
          },
          c: { qa: 3, embedded: 2 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q04",
      section: 1,
      text: {
        el: "Σαφείς κανόνες ή ελευθερία;",
        en: "Clear rules or total freedom?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σαφείς κανόνες — θέλω να ξέρω τι περιμένεται",
            en: "Clear rules—tell me what's expected",
          },
          c: { qa: 3, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ελευθερία — αποφασίζω μόνος",
            en: "Freedom—let me decide",
          },
          c: { research: 3, backend: 2 },
          t: { creative: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ένα γενικό σχέδιο, ελευθερία στις λεπτομέρειες",
            en: "Outline with freedom in details",
          },
          c: { frontend: 2, product: 2 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q05",
      section: 1,
      text: {
        el: "Η πίεση σε βοηθάει ή σε αγχώνει;",
        en: "Does pressure energize or stress you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Με ενεργοποιεί — δουλεύω καλύτερα γρήγορα",
            en: "Energizes me—I work better fast",
          },
          c: { product: 3, devops: 2 },
          t: { product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Με στρεσάρει — προτιμώ χρόνο",
            en: "Stresses me—I prefer time",
          },
          c: { research: 3, embedded: 2 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "Λίγη πίεση ναι, αλλά όχι πολλή",
            en: "Some pressure is good",
          },
          c: { backend: 2, frontend: 2 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q06",
      section: 1,
      text: {
        el: "Αποτυχία — δοκιμάζεις ξανά ή σταματάς;",
        en: "When you fail, do you try again or move on?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δοκιμάζω ξανά αμέσως",
            en: "Try again right away",
          },
          c: { backend: 2, qa: 2 },
          t: { systems: 2 },
        },
        {
          id: "b",
          label: {
            el: "Σταματάω και σκέφτομαι καλύτερη στρατηγική",
            en: "Stop and rethink strategy",
          },
          c: { research: 3, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ζητάω συμβουλή",
            en: "Ask for advice",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Δεν με ενδιαφέρει η αποτυχία — μαθαίνω από αυτή",
            en: "Failure doesn't bother me—I learn",
          },
          c: { mobile: 2, research: 2 },
          t: { creative: 2, research: 1 },
        },
      ],
    },
    {
      id: "q07",
      section: 1,
      text: {
        el: "Πώς μαθαίνεις καλύτερα;",
        en: "How do you learn best?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Διαβάζω και σκέφτομαι τα πράγματα",
            en: "Reading and thinking",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κάνοντας και δοκιμάζοντας",
            en: "Doing and experimenting",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κάποιος να μου δείξει",
            en: "Someone showing me",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 3 },
        },
      ],
    },
    {
      id: "q08",
      section: 1,
      text: {
        el: "Θέλεις να καταλάβεις πώς δουλεύουν τα πράγματα κάτω από το κάλυμμα;",
        en: "Do you care how things work underneath?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πολύ — θέλω κάθε λεπτομέρεια",
            en: "Yes—every detail",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Μόνο αν σπάει — τότε κοιτάω",
            en: "Only if it breaks",
          },
          c: { devops: 2, backend: 1 },
          t: { ops: 2 },
        },
        {
          id: "c",
          label: {
            el: "Όχι — αρκεί να δουλεύει",
            en: "No—as long as it works",
          },
          c: { frontend: 3, product: 2 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q09",
      section: 1,
      text: {
        el: "Τι σε κάνει ευτυχή;",
        en: "What makes you happy?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να κτίσω κάτι που φαίνεται ωραίο",
            en: "Building beautiful things",
          },
          c: { frontend: 3, product: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Να λύσω δύσκολα προβλήματα",
            en: "Solving hard problems",
          },
          c: { backend: 3, research: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να βοηθώ ανθρώπους",
            en: "Helping people",
          },
          c: { product: 3, qa: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να μάθω κάτι τελείως καινούργιο",
            en: "Learning something new",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q10",
      section: 1,
      text: {
        el: "Αν σχεδίαζες τη δική σου δουλειά, τι θα ήταν;",
        en: "If you designed your ideal job, what would it be?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σταθερή, ήρεμη, χωρίς εκπλήξεις",
            en: "Stable, calm, predictable",
          },
          c: { embedded: 3, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Χαοτική, γρήγορη, πάντα κάτι νέο",
            en: "Chaotic, fast, always something new",
          },
          c: { product: 3, mobile: 2 },
          t: { product: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ενδιαφέρουσα, βαθιά, χωρίς βιασύνη",
            en: "Interesting, deep, no rush",
          },
          c: { research: 3, backend: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ευέλικτη — εγώ αποφασίζω πώς δουλεύω",
            en: "Flexible—I control how I work",
          },
          c: { devops: 2, frontend: 2 },
          t: { systems: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q11",
      section: 1,
      text: {
        el: "Κάποιος σχολιάζει κάτι που έκανες. Πώς αντιδράς;",
        en: "Someone critiques your work. How do you feel?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ευχαριστώ — όλη η κριτική είναι χρήσιμη",
            en: "Thanks—all feedback helps",
          },
          c: { backend: 2, qa: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Λίγο αγκωμαρία αλλά κοιτάω τι λέει",
            en: "A bit defensive but I listen",
          },
          c: { frontend: 2, product: 1 },
          t: { creative: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Δεν με χαλάει — έχει δίκαιο ή όχι",
            en: "Doesn't bother me—right or wrong",
          },
          c: { research: 2, datasci: 1 },
          t: { analytical: 2 },
        },
      ],
    },
    {
      id: "q12",
      section: 1,
      text: {
        el: "Έχεις ένα μεγάλο σχέδιο και λίγο χρόνο. Τι κάνεις;",
        en: "Big goal, tight deadline. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δουλεύω υπερωρίες μέχρι να τελειώσει",
            en: "Work overtime—just get it done",
          },
          c: { product: 2, frontend: 2 },
          t: { product: 2 },
        },
        {
          id: "b",
          label: {
            el: "Σχεδιάζω προσεκτικά και δουλεύω αποδοτικά",
            en: "Plan carefully and work smart",
          },
          c: { backend: 2, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κόβω το σχέδιο — κάνω μόνο τα απαραίτητα",
            en: "Cut scope—just essentials",
          },
          c: { qa: 2, product: 2 },
          t: { analytical: 2, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Ζητάω βοήθεια να το μοιράσουμε",
            en: "Get help and split it",
          },
          c: { mobile: 2, research: 1 },
          t: { people: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q13",
      section: 1,
      text: {
        el: "Τι είναι πιο σημαντικό — η διαδικασία ή το αποτέλεσμα;",
        en: "More important: process or result?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το αποτέλεσμα — μόνο αυτό σημαίνει",
            en: "Result—that's what matters",
          },
          c: { product: 3, mobile: 2 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: {
            el: "Η διαδικασία — πρέπει να γίνει σωστά",
            en: "Process—must be done right",
          },
          c: { qa: 3, embedded: 2 },
          t: { systems: 3, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο — χρειάζονται και τα δύο",
            en: "Both—they're connected",
          },
          c: { backend: 2, research: 2 },
          t: { systems: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q14",
      section: 1,
      text: {
        el: "Μόνος χنουτι ή με τη στήριξη ενός mentor;",
        en: "Do it alone or learn from a mentor?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μόνος — θέλω να μάθω δικά μου λάθη",
            en: "Alone—learn from my mistakes",
          },
          c: { backend: 2, research: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Mentor — γλιτώνει χρόνο και λάθη",
            en: "Mentor—saves time and mistakes",
          },
          c: { product: 2, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: {
            el: "Μόνος με επίβλεψη — έχω ελευθερία αλλά και στήριξη",
            en: "Alone with guidance—freedom with backup",
          },
          c: { mobile: 2, devops: 2 },
          t: { creative: 2, people: 1 },
        },
      ],
    },
    {
      id: "q15",
      section: 1,
      text: {
        el: "Ένα πράγμα που είσαι σίγουρος ή πολλά που δοκιμάζεις;",
        en: "Expert at one thing or try many things?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ένα πράγμα — να γίνω εξπέρ",
            en: "One thing—become expert",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Πολλά — μου αρέσει η ποικιλία",
            en: "Many—I like variety",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ένα κύριο και γενική γνώση στα άλλα",
            en: "One main + general knowledge",
          },
          c: { product: 2, dataeng: 2 },
          t: { analytical: 2 },
        },
        {
          id: "d",
          label: {
            el: "Εξαρτάται από τα ενδιαφέροντά μου",
            en: "Depends on my interests",
          },
          c: { research: 3, datasci: 2 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q16",
      section: 1,
      text: {
        el: "Κάποιος λαμβάνει πιστώσεις για τη δική σου ιδέα. Πώς αντιδράς;",
        en: "Someone takes credit for your idea. How do you react?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μου πει αμέσως — δεν ανέχομαι άδικη αντιμετώπιση",
            en: "Tell them immediately—unfair",
          },
          c: { product: 2, qa: 1 },
          t: { people: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Δεν με ενδιαφέρει — το σημαντικό είναι ότι δουλεύει",
            en: "Doesn't matter—work is what counts",
          },
          c: { backend: 2, research: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "c",
          label: {
            el: "Λίγο με χαλάει αλλά συνεχίζω",
            en: "A bit annoying but I move on",
          },
          c: { frontend: 2, devops: 1 },
          t: { creative: 1, ops: 1 },
        },
      ],
    },
    {
      id: "q17",
      section: 1,
      text: {
        el: "Τι σε φοβάει περισσότερο;",
        en: "What scares you most?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να μην ξέρω τι κάνω",
            en: "Not knowing what I'm doing",
          },
          c: { backend: 2, qa: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Να βαρεθώ ή να μην μαθαίνω",
            en: "Boredom or no learning",
          },
          c: { research: 3, mobile: 2 },
          t: { creative: 3, research: 1 },
        },
        {
          id: "c",
          label: {
            el: "Να αποτύχω δημόσια",
            en: "Failing in front of others",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 2 },
        },
        {
          id: "d",
          label: {
            el: "Να μην έχω σωστό σχέδιο",
            en: "No clear plan or direction",
          },
          c: { devops: 2, embedded: 2 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q18",
      section: 1,
      text: {
        el: "Έχεις ένα πρόβλημα που άλλοι δεν βλέπουν. Τι κάνεις;",
        en: "You see a problem nobody else notices. What do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Το λέω αμέσως και προτείνω λύση",
            en: "Tell them and suggest a fix",
          },
          c: { product: 2, qa: 2 },
          t: { people: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Δουλεύω σιωπηλά για να το λύσω",
            en: "Work quietly to fix it",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 2 },
        },
        {
          id: "c",
          label: {
            el: "Ψάχνω αν όντως είναι πρόβλημα πρώτα",
            en: "Verify it's really a problem first",
          },
          c: { research: 2, datasci: 2 },
          t: { analytical: 3 },
        },
      ],
    },
    {
      id: "q19",
      section: 1,
      text: {
        el: "Μακροπρόθεσμα — χρήματα, ασφάλεια ή ενδιαφέρον;",
        en: "In the long run, what matters most?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Χρήματα — θέλω να ζήσω άνετα",
            en: "Money—want to live comfortably",
          },
          c: { product: 2, devops: 1 },
          t: { product: 1, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Ασφάλεια — σταθερή δουλειά, σταθερό εισόδημα",
            en: "Security—stable job, income",
          },
          c: { qa: 3, embedded: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ενδιαφέρον — τι κάνω πρέπει να με ενθουσιάζει",
            en: "Interest—work must excite me",
          },
          c: { research: 3, mobile: 2 },
          t: { creative: 3, research: 1 },
        },
        {
          id: "d",
          label: {
            el: "Και τα τρία αν μπορώ",
            en: "All three if possible",
          },
          c: { frontend: 2, backend: 2 },
          t: { systems: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q20",
      section: 1,
      text: {
        el: "Αν μπορούσες να αλλάξεις μία φορά σε μία πτυχή της προσωπικότητάς σου, ποια θα ήταν;",
        en: "If you could change one thing about yourself, what would it be?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να είμαι πιο κοινωνικός και ανοικτός",
            en: "Be more social and outgoing",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 2 },
        },
        {
          id: "b",
          label: {
            el: "Να είμαι πιο υπομονετικός και λεπτομερής",
            en: "Be more patient and detail-oriented",
          },
          c: { qa: 2, backend: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Να είμαι πιο γρήγορος στην ανάληψη κινδύνων",
            en: "Be bolder with risks",
          },
          c: { mobile: 2, research: 2 },
          t: { creative: 2, research: 1 },
        },
        {
          id: "d",
          label: {
            el: "Δεν θα άλλαζα τίποτα",
            en: "I wouldn't change anything",
          },
          c: { backend: 2, devops: 1 },
          t: { systems: 1 },
        },
      ],
    },
    {
      id: "q21",
      section: 1,
      text: {
        el: "Δουλειά που σε κάνει περήφανο ή δουλειά με καλά όφέλη;",
        en: "Meaningful work or great benefits?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Περήφανο — θέλω να νιώθω ότι έκανα κάτι σημαντικό",
            en: "Proud—want to make a difference",
          },
          c: { product: 3, research: 2 },
          t: { people: 2, creative: 1 },
        },
        {
          id: "b",
          label: {
            el: "Καλά όφέλη — θέλω ασφάλεια",
            en: "Benefits—want security",
          },
          c: { qa: 2, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Και τα δύο",
            en: "Both equally",
          },
          c: { frontend: 2, backend: 2 },
          t: { systems: 2, people: 1 },
        },
      ],
    },
    {
      id: "q22",
      section: 1,
      text: {
        el: "Νέα τεχνολογία που έρχεται — μαθαίνεις αμέσως ή περιμένεις;",
        en: "New tech appears. Learn now or wait?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μαθαίνω αμέσως — θέλω να είμαι μπροστά",
            en: "Learn now—stay ahead",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 2 },
        },
        {
          id: "b",
          label: {
            el: "Περιμένω να σταθμιστεί — περιττή πολυπλοκότητα",
            en: "Wait—no unnecessary complexity",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Εξαρτάται από το τι είναι και ποια είναι η χρήση",
            en: "Depends on what it is",
          },
          c: { research: 2, devops: 2 },
          t: { analytical: 2 },
        },
      ],
    },
    {
      id: "q23",
      section: 1,
      text: {
        el: "Αποχή από ένα μεγάλο λάθος ή προσπάθεια να το λύσεις;",
        en: "Avoid a big mistake or try to fix it?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Αποχή — πρόληψη είναι καλύτερη",
            en: "Avoid—prevention is better",
          },
          c: { security: 3, qa: 2 },
          t: { adversarial: 3, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Λύσε το — πάντα υπάρχει λύση",
            en: "Fix it—there's always a way",
          },
          c: { backend: 2, product: 2 },
          t: { systems: 2, product: 1 },
        },
        {
          id: "c",
          label: {
            el: "Εξαρτάται από το κόστος του λάθους",
            en: "Depends on the cost",
          },
          c: { research: 2, datasci: 2 },
          t: { analytical: 3 },
        },
      ],
    },
    {
      id: "q24",
      section: 1,
      text: {
        el: "Σε έναν διαγωνισμό, παίζεις για να κερδίσεις ή για να διασκεδάσεις;",
        en: "In competition, play to win or have fun?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Για να κερδίσω — θέλω να είμαι ο καλύτερος",
            en: "Win—want to be best",
          },
          c: { product: 3, devops: 2 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: {
            el: "Για να διασκεδάσω — η διαδικασία είναι σημαντική",
            en: "Fun—process matters",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Κερδίζω διασκεδάζοντας",
            en: "Win while having fun",
          },
          c: { backend: 2, research: 2 },
          t: { systems: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q25",
      section: 1,
      text: {
        el: "Τελευταία ερώτηση — τι σε περιγράφει καλύτερα;",
        en: "Last: what describes you best?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πρακτικός — έχω τα πόδια στη γη",
            en: "Practical—feet on ground",
          },
          c: { backend: 2, qa: 2 },
          t: { systems: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Δημιουργικός — σκέφτομαι έξω από το κουτί",
            en: "Creative—think outside box",
          },
          c: { frontend: 3, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Περίεργος — θέλω να καταλάβω τα πάντα",
            en: "Curious—want to understand",
          },
          c: { research: 3, backend: 1 },
          t: { research: 3, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Φιλικός — με ανθρώπους το κάνω καλά",
            en: "Friendly—work well with people",
          },
          c: { product: 3, frontend: 1 },
          t: { people: 3 },
        },
      ],
    },
  ],
};
