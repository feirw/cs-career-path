import type { Section } from "./types";

export const section4: Section = {
  index: 4,
  title: { el: "Περιβάλλον και ομάδα", en: "Environment and team" },
  subtitle: {
    el: "Η καριέρα δεν είναι μόνο τι κώδικα γράφεις αλλά και με ποιους, πόσο συχνά μιλάς και τι πίεση αντέχεις. Απάντησε ειλικρινά, όχι όπως «θα έπρεπε».",
    en: "A career isn't only what code you write but who you write it with, how much you talk, and what pressure you tolerate. Answer honestly, not aspirationally.",
  },
  questions: [
    {
      id: "q31",
      section: 4,
      kind: "personality",
      text: { el: "Ποια ομάδα σου ταιριάζει;", en: "Which team suits you?" },
      options: [
        {
          id: "a",
          label: {
            el: "Μικρή ομάδα σε startup, όπου φοράω πολλά καπέλα",
            en: "A small startup team where I wear many hats",
          },
          c: { product: 3, frontend: 2, mobile: 1, devops: 1 },
          t: { product: 2, people: 1 },
        },
        {
          id: "b",
          label: {
            el: "Μεγάλη εταιρεία με ξεκάθαρο ρόλο και διαδικασίες",
            en: "A large company with a clear role and clear processes",
          },
          c: { backend: 2, qa: 3, security: 2, embedded: 1 },
          t: { ops: 2 },
        },
        {
          id: "c",
          label: { el: "Ερευνητική ομάδα ή πανεπιστημιακό εργαστήριο", en: "A research group or university lab" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: {
            el: "Δουλεύω κυρίως μόνος, με ελάχιστες συναντήσεις",
            en: "Mostly alone, with as few meetings as possible",
          },
          c: { embedded: 2, security: 2, dataeng: 2, research: 1 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q32",
      section: 4,
      kind: "personality",
      text: {
        el: "Πόσες ώρες συναντήσεων την ημέρα αντέχεις;",
        en: "How many hours of meetings a day can you take?",
      },
      options: [
        {
          id: "a",
          label: { el: "Σχεδόν καθόλου — θέλω μεγάλα μπλοκ συγκέντρωσης", en: "Almost none — I want long blocks of focus" },
          c: { embedded: 3, ml: 2, research: 2, backend: 1 },
          t: { systems: 2, research: 1 },
        },
        {
          id: "b",
          label: { el: "Μία με δύο ώρες, αρκεί να έχουν νόημα", en: "One or two hours, as long as they're useful" },
          c: { backend: 2, frontend: 2, dataeng: 1, qa: 1 },
          t: { ops: 1 },
        },
        {
          id: "c",
          label: { el: "Μισή μέρα — μου αρέσει η αλληλεπίδραση", en: "Half the day — I enjoy the interaction" },
          c: { product: 3, datasci: 1 },
          t: { people: 3 },
        },
        {
          id: "d",
          label: {
            el: "Όσες χρειαστεί· εκεί παίρνονται οι αποφάσεις",
            en: "As many as it takes; that's where decisions happen",
          },
          c: { product: 3 },
          t: { people: 3, product: 2 },
        },
      ],
    },
    {
      id: "q33",
      section: 4,
      kind: "personality",
      text: {
        el: "Χτυπάει alert στις 3 τα ξημερώματα και είσαι εσύ υπεύθυνος. Πώς το βλέπεις;",
        en: "An alert fires at 3am and it's your responsibility. How do you feel?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Μέρος της δουλειάς — μου αρέσει κιόλας η αδρεναλίνη",
            en: "Part of the job — I even like the adrenaline",
          },
          c: { devops: 3, security: 3 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "b",
          label: { el: "Το αντέχω περιστασιακά αν αμείβεται σωστά", en: "I can take it occasionally if it's paid properly" },
          c: { backend: 2, devops: 1, mobile: 1 },
          t: { ops: 1 },
        },
        {
          id: "c",
          label: { el: "Το αποφεύγω· θέλω προβλέψιμο ωράριο", en: "I'd avoid it; I want predictable hours" },
          c: { qa: 2, datasci: 2, frontend: 2, product: 1, research: 1 },
          t: {},
        },
        {
          id: "d",
          label: { el: "Απόλυτο deal-breaker για μένα", en: "An absolute deal-breaker for me" },
          c: { research: 3, product: 2, frontend: 2, datasci: 1 },
          t: { research: 1 },
        },
      ],
    },
    {
      id: "q34",
      section: 4,
      kind: "personality",
      text: { el: "Τι σε κινητοποιεί περισσότερο στη δουλειά;", en: "What motivates you most at work?" },
      options: [
        {
          id: "a",
          label: { el: "Να μαθαίνω συνέχεια κάτι καινούριο", en: "Constantly learning something new" },
          c: { ml: 2, frontend: 2, research: 2, devops: 1 },
          t: { research: 2 },
        },
        {
          id: "b",
          label: { el: "Να βλέπω ορατό αντίκτυπο σε χρήστες", en: "Seeing visible impact on users" },
          c: { product: 3, frontend: 2, mobile: 2 },
          t: { product: 3, people: 1 },
        },
        {
          id: "c",
          label: { el: "Να γίνω ο ειδικός σε κάτι πολύ συγκεκριμένο", en: "Becoming the expert in one narrow thing" },
          c: { embedded: 3, security: 2, research: 2 },
          t: { systems: 2, research: 2 },
        },
        {
          id: "d",
          label: { el: "Σταθερότητα και καλή ισορροπία με τη ζωή μου", en: "Stability and a good balance with my life" },
          c: { qa: 3, backend: 1, dataeng: 1 },
          t: { ops: 2 },
        },
      ],
    },
    {
      id: "q35",
      section: 4,
      kind: "personality",
      text: {
        el: "Πόσο σου ταιριάζει να εξηγείς τεχνικά θέματα σε μη τεχνικούς;",
        en: "How well does explaining technical things to non-technical people suit you?",
      },
      options: [
        {
          id: "a",
          label: { el: "Πολύ — μου βγαίνει φυσικά και το απολαμβάνω", en: "Very — it comes naturally and I enjoy it" },
          c: { product: 3, datasci: 2 },
          t: { people: 3, product: 1 },
        },
        {
          id: "b",
          label: { el: "Το κάνω μια χαρά όταν χρειάζεται", en: "I do it fine when needed" },
          c: { frontend: 2, backend: 1, qa: 1, dataeng: 1 },
          t: { people: 1 },
        },
        {
          id: "c",
          label: { el: "Το βρίσκω κουραστικό", en: "I find it draining" },
          c: { embedded: 2, backend: 2, ml: 1 },
          t: { systems: 1 },
        },
        {
          id: "d",
          label: { el: "Προτιμώ να μιλάω μόνο με μηχανικούς", en: "I'd rather only talk to engineers" },
          c: { embedded: 3, security: 2, research: 1 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q36",
      section: 4,
      kind: "personality",
      text: { el: "Τι είδους ευθύνη θέλεις;", en: "What kind of responsibility do you want?" },
      options: [
        {
          id: "a",
          label: { el: "Να αποφασίζω εγώ τι θα φτιαχτεί", en: "Deciding what gets built" },
          c: { product: 3, research: 1 },
          t: { product: 3 },
        },
        {
          id: "b",
          label: { el: "Ευθύνη πάνω στην ποιότητα και τη σταθερότητα", en: "Responsibility for quality and stability" },
          c: { qa: 3, security: 2, devops: 2 },
          t: { ops: 3 },
        },
        {
          id: "c",
          label: {
            el: "Να μου δίνουν ένα καθαρό τεχνικό πρόβλημα και να το λύνω",
            en: "Being handed a clean technical problem and solving it",
          },
          c: { backend: 3, embedded: 2, ml: 1, frontend: 1 },
          t: { systems: 2, analytical: 1 },
        },
        {
          id: "d",
          label: { el: "Ευθύνη πάνω σε κάτι δικό μου, ολόκληρο", en: "Ownership of something entirely mine" },
          c: { mobile: 2, frontend: 2, product: 2, research: 1 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q37",
      section: 4,
      kind: "personality",
      text: {
        el: "Συνεργασία με ανθρώπους εκτός τεχνολογίας (πωλήσεις, marketing, νομικούς);",
        en: "Working with people outside tech (sales, marketing, legal)?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Ενδιαφέρον — έτσι μαθαίνω πώς λειτουργεί η επιχείρηση",
            en: "Interesting — that's how I learn how a business works",
          },
          c: { product: 3, datasci: 2 },
          t: { product: 3, people: 2 },
        },
        {
          id: "b",
          label: { el: "Μια χαρά σε λογικό βαθμό", en: "Fine in reasonable doses" },
          c: { frontend: 1, backend: 1, qa: 1, security: 1, dataeng: 1 },
          t: { people: 1 },
        },
        {
          id: "c",
          label: { el: "Το αποφεύγω όσο μπορώ", en: "I avoid it where I can" },
          c: { embedded: 2, ml: 2, research: 2 },
          t: { systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Μόνο αν είναι δομημένο, π.χ. αναφορές συμμόρφωσης",
            en: "Only if it's structured, e.g. compliance reports",
          },
          c: { security: 3, qa: 2 },
          t: { ops: 2 },
        },
      ],
    },
    {
      id: "q38",
      section: 4,
      kind: "personality",
      text: { el: "Ποιο ρίσκο θα έπαιρνες μετά το πτυχίο;", en: "Which risk would you take after graduating?" },
      options: [
        {
          id: "a",
          label: {
            el: "Startup με χαμηλότερο μισθό αλλά τεράστια μάθηση",
            en: "A startup with lower pay but enormous learning",
          },
          c: { product: 2, frontend: 2, mobile: 2, ml: 1 },
          t: { product: 2 },
        },
        {
          id: "b",
          label: { el: "Διδακτορικό με χαμηλή αμοιβή για τέσσερα χρόνια", en: "A PhD on low pay for four years" },
          c: { research: 3, ml: 1 },
          t: { research: 3 },
        },
        {
          id: "c",
          label: { el: "Καμία — σίγουρη θέση σε μεγάλη εταιρεία", en: "None — a safe role at a big company" },
          c: { backend: 2, qa: 2, security: 2, devops: 1 },
          t: { ops: 2 },
        },
        {
          id: "d",
          label: { el: "Freelance ή δικό μου προϊόν", en: "Freelance or my own product" },
          c: { frontend: 3, mobile: 2, product: 2 },
          t: { creative: 2, product: 2 },
        },
      ],
    },
    {
      id: "q39",
      section: 4,
      kind: "personality",
      text: { el: "Τι σε κουράζει περισσότερο;", en: "What drains you most?" },
      options: [
        {
          id: "a",
          label: { el: "Η επανάληψη — τα ίδια πράγματα ξανά και ξανά", en: "Repetition — the same thing over and over" },
          c: { product: 2, research: 2, ml: 1, frontend: 1 },
          t: { research: 1, product: 1 },
        },
        {
          id: "b",
          label: { el: "Οι συνεχείς αλλαγές προτεραιοτήτων", en: "Priorities changing every week" },
          c: { embedded: 2, qa: 2, backend: 2, security: 1 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: { el: "Οι πολλές συναντήσεις και οι διακοπές", en: "Too many meetings and interruptions" },
          c: { embedded: 2, ml: 2, backend: 2, dataeng: 1 },
          t: { systems: 2 },
        },
        {
          id: "d",
          label: {
            el: "Η αβεβαιότητα για το αν αυτό που κάνω είναι χρήσιμο",
            en: "Not knowing whether what I'm doing is useful",
          },
          c: { devops: 2, qa: 2, product: 1, frontend: 1 },
          t: { ops: 2, product: 1 },
        },
      ],
    },
    {
      id: "q40",
      section: 4,
      kind: "personality",
      text: { el: "Διδασκαλία και mentoring;", en: "Teaching and mentoring?" },
      options: [
        {
          id: "a",
          label: { el: "Το λατρεύω — θα ήθελα να διδάσκω κιόλας", en: "I love it — I'd like to teach, even" },
          c: { research: 3, product: 2 },
          t: { people: 3, research: 1 },
        },
        {
          id: "b",
          label: { el: "Χαίρομαι να βοηθάω τους νεότερους της ομάδας", en: "I enjoy helping the juniors on my team" },
          c: { backend: 2, frontend: 2, qa: 2, product: 1 },
          t: { people: 2 },
        },
        {
          id: "c",
          label: { el: "Ουδέτερα — το κάνω αν μου ζητηθεί", en: "Neutral — I'll do it if asked" },
          c: { dataeng: 1, ml: 1, mobile: 1, devops: 1 },
          t: {},
        },
        {
          id: "d",
          label: { el: "Προτιμώ να επικεντρώνομαι στη δική μου δουλειά", en: "I'd rather focus on my own work" },
          c: { embedded: 2, security: 2, ml: 1 },
          t: { systems: 1 },
        },
      ],
    },
  ],
};
