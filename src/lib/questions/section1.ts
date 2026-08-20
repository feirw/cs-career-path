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
        el: "Όταν γνωρίζεις κάποιον νέο και έχετε διαφορετική άποψη, τι κάνεις;",
        en: "When meeting someone new who disagrees with you, what do you do?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ακούω τα επιχειρήματά του και ίσως αλλάξω γνώμη",
            en: "Listen to their point and maybe change my mind",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 3, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Εξηγώ γιατί πιστεύω ότι έχω δίκαιο",
            en: "Explain why I think I'm right",
          },
          c: { backend: 2, product: 1 },
          t: { systems: 2, people: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ψάχνω στοιχεία για να δω ποιος έχει δίκαιο",
            en: "Look for facts to see who's right",
          },
          c: { datasci: 2, research: 2 },
          t: { analytical: 3 },
        },
        {
          id: "d",
          label: {
            el: "Αφήνω το θέμα — δεν με ενδιαφέρει αν διαφωνούμε",
            en: "Drop it—doesn't bother me if we disagree",
          },
          c: { mobile: 2, frontend: 2 },
          t: { creative: 2, product: 1 },
        },
      ],
    },
    {
      id: "q02",
      section: 1,
      text: {
        el: "Προτιμάς να συνεργαστείς με άτομα ή να δουλέψεις μόνος σου;",
        en: "Do you prefer working with people or working alone?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μόνος μου — σκέφτομαι καλύτερα όταν δεν με αποσπάνε",
            en: "Alone—I think better without distractions",
          },
          c: { backend: 3, embedded: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Με ανθρώπους — τα ιδέες μας γίνονται καλύτερες μαζί",
            en: "With people—ideas get better when we talk",
          },
          c: { product: 3, frontend: 2 },
          t: { people: 3 },
        },
        {
          id: "c",
          label: {
            el: "Εξαρτάται από το τι δουλεύω",
            en: "Depends on what I'm working on",
          },
          c: { research: 2, dataeng: 2 },
          t: { analytical: 2, systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Και τα δύο μοιχ — κάποιες στιγμές και τα δύο",
            en: "Both—some times alone, some times together",
          },
          c: { qa: 2, devops: 2 },
          t: { ops: 2, people: 1 },
        },
      ],
    },
    {
      id: "q03",
      section: 1,
      text: {
        el: "Αν κάτι δεν δουλεύει, τι είναι το πρώτο που κάνεις;",
        en: "When something doesn't work, what's your first move?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δοκιμάζω διάφορα μέχρι να το βρω",
            en: "Try different things until it works",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ψάχνω να καταλάβω τι ακριβώς συνέβη",
            en: "Try to understand what exactly went wrong",
          },
          c: { backend: 2, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ζητάω βοήθεια αμέσως",
            en: "Ask for help right away",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Διαβάζω τι λέει το σφάλμα στην οθόνη",
            en: "Read what the error message says",
          },
          c: { qa: 2, embedded: 2 },
          t: { systems: 2, analytical: 1 },
        },
      ],
    },
    {
      id: "q04",
      section: 1,
      text: {
        el: "Προτιμάς έργα με σαφή κανόνες ή με ελευθερία να κάνεις ό,τι θες;",
        en: "Do you prefer clear rules or freedom to figure things out?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σαφείς κανόνες — θέλω να ξέρω τι περιμένεται",
            en: "Clear rules—I want to know what's expected",
          },
          c: { qa: 2, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Ελευθερία — μου αρέσει να αποφασίζω",
            en: "Freedom—I like to decide",
          },
          c: { research: 2, backend: 2 },
          t: { systems: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Λίγο και τα δύο — ένα γενικό σχέδιο αλλά ελευθερία στις λεπτομέρειες",
            en: "Both—a general plan but freedom in details",
          },
          c: { frontend: 2, product: 2 },
          t: { creative: 2, systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Εξαρτάται — θέλω να ξέρω τι γίνεται",
            en: "Depends—I want clarity first",
          },
          c: { embedded: 2, security: 2 },
          t: { systems: 2, adversarial: 1 },
        },
      ],
    },
    {
      id: "q05",
      section: 1,
      text: {
        el: "Η πίεση και οι θέσεις σου βοηθάνε ή σε αγχώνουν;",
        en: "Does pressure push you forward or stress you out?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Με βοηθάει — δουλεύω καλύτερα όταν βιάζομαι",
            en: "Pushes me—I work better under pressure",
          },
          c: { product: 2, devops: 2 },
          t: { product: 2, ops: 1 },
        },
        {
          id: "b",
          label: {
            el: "Με στρεσάρει — προτιμώ χρόνο να σκεφτώ",
            en: "Stresses me—I prefer time to think",
          },
          c: { research: 3, embedded: 1 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: {
            el: "Οριακή πίεση ναι, αλλά όχι πολύ",
            en: "Some pressure is good, but not too much",
          },
          c: { backend: 2, frontend: 2 },
          t: { systems: 2, creative: 1 },
        },
        {
          id: "d",
          label: {
            el: "Δεν με ενδιαφέρει — κάνω το καθήκον μου",
            en: "Doesn't matter—I just do my job",
          },
          c: { qa: 2, datasci: 1 },
          t: { analytical: 2, ops: 1 },
        },
      ],
    },
    {
      id: "q06",
      section: 1,
      text: {
        el: "Όταν κάτι δεν εργάζεται, το δοκιμάζεις ξανά ή το αφήνεις;",
        en: "When you fail at something, do you try again or give up?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Δοκιμάζω ξανά αμέσως — θέλω να τα καταφέρω",
            en: "Try again—I want to make it work",
          },
          c: { backend: 2, research: 2 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Σταματάω και σκέφτομαι καλύτερη στρατηγική",
            en: "Stop and think of a better approach",
          },
          c: { frontend: 2, datasci: 2 },
          t: { analytical: 3 },
        },
        {
          id: "c",
          label: {
            el: "Ζητάω συμβουλή — ίσως κάνω κάτι λάθος",
            en: "Ask for advice—maybe I'm doing it wrong",
          },
          c: { product: 2, qa: 2 },
          t: { people: 2, ops: 1 },
        },
        {
          id: "d",
          label: {
            el: "Δεν με ενδιαφέρει αν αποτύχω — μαθαίνω από αυτό",
            en: "Failure doesn't bother me—I learn from it",
          },
          c: { research: 2, mobile: 2 },
          t: { creative: 2, research: 1 },
        },
      ],
    },
    {
      id: "q07",
      section: 1,
      text: {
        el: "Μαθαίνεις καλύτερα διαβάζοντας, παρακολουθώντας ή κάνοντας;",
        en: "How do you learn best: reading, watching, or doing?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Διαβάζοντας — θέλω να καταλάβω πώς λειτουργούν τα πράγματα",
            en: "Reading—I want to understand how things work",
          },
          c: { backend: 2, embedded: 2 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "b",
          label: {
            el: "Κάνοντας — μαθαίνω κάνοντας",
            en: "Doing—I learn by trying",
          },
          c: { frontend: 2, mobile: 2 },
          t: { creative: 3 },
        },
        {
          id: "c",
          label: {
            el: "Παρακολουθώντας — προτιμώ κάποιος να μου δείξει",
            en: "Watching—I like someone to show me",
          },
          c: { product: 2, frontend: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Όλα — εξαρτάται από το τι",
            en: "All—depends on the subject",
          },
          c: { research: 2, datasci: 2 },
          t: { analytical: 2, research: 1 },
        },
      ],
    },
    {
      id: "q08",
      section: 1,
      text: {
        el: "Θέλεις να γνωρίζεις πώς δουλεύουν τα πράγματα στα παρασκήνια;",
        en: "Do you want to understand how things work underneath?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πολύ — θέλω να ξέρω κάθε λεπτομέρεια",
            en: "Yes—I want to know every detail",
          },
          c: { embedded: 3, backend: 2 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: {
            el: "Μόνο αν δεν δουλεύει — τότε ψάχνω",
            en: "Only if it breaks—then I investigate",
          },
          c: { devops: 2, backend: 1 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "Λίγο — αρκεί να δουλεύει",
            en: "Not really—as long as it works",
          },
          c: { frontend: 3, product: 2 },
          t: { creative: 2, product: 1 },
        },
        {
          id: "d",
          label: {
            el: "Είναι ενδιαφέρον αλλά όχι απαραίτητο",
            en: "Interesting but not necessary",
          },
          c: { research: 2, mobile: 2 },
          t: { research: 2, creative: 1 },
        },
      ],
    },
    {
      id: "q09",
      section: 1,
      text: {
        el: "Τι σε κάνει ευτυχή στη δουλειά;",
        en: "What makes you happy at work?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Να κτίσω κάτι που βλέπουν όλοι",
            en: "Building something people can see",
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
          c: { backend: 2, research: 2 },
          t: { systems: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να βοηθώ ανθρώπους",
            en: "Helping people",
          },
          c: { product: 2, qa: 2 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Να μάθω καινούργια πράγματα",
            en: "Learning new things",
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
        el: "Αν μπορούσες να σχεδιάσεις τη δική σου δουλειά, τι θα άλλαζες;",
        en: "If you could design your ideal job, what would it be like?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Σταθερή, προβλέψιμη, χωρίς εκπλήξεις",
            en: "Stable, predictable, no surprises",
          },
          c: { embedded: 2, qa: 2 },
          t: { ops: 3 },
        },
        {
          id: "b",
          label: {
            el: "Γρήγορη, συναρπαστική, πάντα κάτι καινούργιο",
            en: "Fast-paced, exciting, always something new",
          },
          c: { product: 3, mobile: 2 },
          t: { product: 2, creative: 1 },
        },
        {
          id: "c",
          label: {
            el: "Ενδιαφέρουσα, με χρόνο να σκεφτώ, χωρίς βιασύνη",
            en: "Interesting, with time to think, no rush",
          },
          c: { research: 3, backend: 1 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Ευέλικτη — μόνο μου να αποφασίζω πώς να δουλεύω",
            en: "Flexible—I decide how to work",
          },
          c: { frontend: 2, devops: 2 },
          t: { systems: 2, creative: 1 },
        },
      ],
    },
  ],
};
