import type { Section } from "./types";

export const section5: Section = {
  index: 5,
  title: { el: "Αξίες και μακροπρόθεσμα", en: "Values and the long game" },
  subtitle: {
    el: "Τελευταία ενότητα. Εδώ κρίνεται το τι θέλεις να αντέχεις για χρόνια — αυτό συνήθως καθορίζει την καριέρα περισσότερο από τις τεχνολογίες.",
    en: "Last section. This is about what you're willing to live with for years — usually a bigger factor than any technology.",
  },
  questions: [
    {
      id: "q41",
      section: 5,
      kind: "personality",
      text: { el: "Πού θα ήθελες να είσαι σε δέκα χρόνια;", en: "Where would you like to be in ten years?" },
      options: [
        {
          id: "a",
          label: {
            el: "Βαθιά τεχνικός ειδικός (staff / principal engineer)",
            en: "A deep technical expert (staff / principal engineer)",
          },
          c: { backend: 3, embedded: 2, devops: 2, security: 1 },
          t: { systems: 3 },
        },
        {
          id: "b",
          label: { el: "Επικεφαλής προϊόντος ή ομάδας", en: "Leading a product or a team" },
          c: { product: 3 },
          t: { people: 2, product: 3 },
        },
        {
          id: "c",
          label: { el: "Ερευνητής ή καθηγητής", en: "A researcher or a professor" },
          c: { research: 3 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: { el: "Με δική μου εταιρεία ή προϊόν", en: "Running my own company or product" },
          c: { product: 3, frontend: 1, mobile: 1 },
          t: { product: 3, creative: 1 },
        },
      ],
    },
    {
      id: "q42",
      section: 5,
      kind: "personality",
      text: { el: "Τι σημαίνει «επιτυχία» για σένα;", en: "What does \"success\" mean to you?" },
      options: [
        {
          id: "a",
          label: { el: "Καλός μισθός και σταθερότητα", en: "Good pay and stability" },
          c: { backend: 2, devops: 2, security: 2, qa: 1 },
          t: { ops: 1 },
        },
        {
          id: "b",
          label: { el: "Να δουλεύω σε κάτι που έχει νόημα για μένα", en: "Working on something that means something to me" },
          c: { research: 2, product: 2, security: 1, ml: 1 },
          t: { research: 1, product: 1 },
        },
        {
          id: "c",
          label: { el: "Αναγνώριση από ανθρώπους που σέβομαι", en: "Recognition from people I respect" },
          c: { research: 3, security: 2, ml: 1 },
          t: { research: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: { el: "Ελευθερία στο πού, πότε και πώς δουλεύω", en: "Freedom in where, when and how I work" },
          c: { frontend: 2, mobile: 2, product: 1, dataeng: 1 },
          t: { creative: 2 },
        },
      ],
    },
    {
      id: "q43",
      section: 5,
      kind: "personality",
      text: { el: "Ποιος κλάδος σε τραβάει;", en: "Which industry attracts you?" },
      options: [
        {
          id: "a",
          label: { el: "Υγεία και βιοϊατρική", en: "Health and biomedical" },
          c: { ml: 2, research: 2, datasci: 2, embedded: 1 },
          t: { research: 1, analytical: 1 },
        },
        {
          id: "b",
          label: { el: "Τράπεζες και fintech", en: "Banking and fintech" },
          c: { backend: 2, datasci: 2, security: 2, dataeng: 1 },
          t: { ops: 1, analytical: 1 },
        },
        {
          id: "c",
          label: { el: "Gaming, media και ψυχαγωγία", en: "Gaming, media and entertainment" },
          c: { frontend: 2, mobile: 2, embedded: 1, ml: 1 },
          t: { creative: 2 },
        },
        {
          id: "d",
          label: { el: "Υποδομές, βιομηχανία, ενέργεια, ναυτιλία", en: "Infrastructure, industry, energy, shipping" },
          c: { embedded: 3, devops: 2, security: 1 },
          t: { systems: 2 },
        },
      ],
    },
    {
      id: "q44",
      section: 5,
      kind: "personality",
      text: {
        el: "Πόσο σημαντικό είναι να δουλεύεις με ό,τι πιο καινούριο βγαίνει;",
        en: "How important is working with the newest thing available?",
      },
      options: [
        {
          id: "a",
          label: { el: "Πολύ — θέλω να είμαι στην αιχμή", en: "Very — I want to be at the frontier" },
          c: { ml: 3, research: 2, frontend: 1 },
          t: { research: 2 },
        },
        {
          id: "b",
          label: { el: "Προτιμώ ώριμα, δοκιμασμένα εργαλεία", en: "I prefer mature, proven tools" },
          c: { embedded: 3, backend: 2, qa: 2, security: 1 },
          t: { systems: 2, ops: 2 },
        },
        {
          id: "c",
          label: { el: "Ό,τι λύνει καλύτερα το πρόβλημα του χρήστη", en: "Whatever best solves the user's problem" },
          c: { product: 3, frontend: 1, mobile: 1 },
          t: { product: 3 },
        },
        {
          id: "d",
          label: { el: "Ό,τι είναι πιο αξιόπιστο στην παραγωγή", en: "Whatever is most reliable in production" },
          c: { devops: 3, qa: 2, backend: 1 },
          t: { ops: 3 },
        },
      ],
    },
    {
      id: "q45",
      section: 5,
      kind: "personality",
      text: {
        el: "Πόσο σε απασχολεί η ηθική διάσταση της τεχνολογίας;",
        en: "How much does the ethics of technology occupy you?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "Πάρα πολύ — καθορίζει και πού θα δεχόμουν να δουλέψω",
            en: "A great deal — it determines where I'd agree to work",
          },
          c: { research: 2, security: 3, product: 1, ml: 1 },
          t: { adversarial: 1, research: 1 },
        },
        {
          id: "b",
          label: {
            el: "Αρκετά, ιδίως όταν πρόκειται για προσωπικά δεδομένα",
            en: "Quite a lot, especially where personal data is involved",
          },
          c: { security: 2, dataeng: 2, datasci: 2, product: 1 },
          t: { adversarial: 1, ops: 1 },
        },
        {
          id: "c",
          label: {
            el: "Σκέφτομαι κυρίως αν η δουλειά μου είναι τεχνικά σωστή",
            en: "I mostly think about whether my work is technically correct",
          },
          c: { backend: 2, embedded: 2, qa: 2 },
          t: { systems: 1, analytical: 1 },
        },
        {
          id: "d",
          label: {
            el: "Λιγότερο — με ενδιαφέρει αν το προϊόν βοηθάει τον χρήστη",
            en: "Less — I care whether the product helps the user",
          },
          c: { product: 2, frontend: 2, mobile: 1 },
          t: { product: 2 },
        },
      ],
    },
    {
      id: "q46",
      section: 5,
      kind: "personality",
      text: { el: "Ποιο θα ήταν το ιδανικό σου πρώτο internship;", en: "What would your ideal first internship be?" },
      options: [
        {
          id: "a",
          label: { el: "Σε ομάδα προϊόντος, να φτιάχνω features", en: "On a product team, shipping features" },
          c: { frontend: 2, backend: 2, mobile: 2, product: 1 },
          t: { creative: 1 },
        },
        {
          id: "b",
          label: { el: "Σε ομάδα δεδομένων ή analytics", en: "On a data or analytics team" },
          c: { datasci: 3, dataeng: 2, ml: 1 },
          t: { analytical: 2 },
        },
        {
          id: "c",
          label: { el: "Σε ομάδα υποδομών ή ασφάλειας", en: "On an infrastructure or security team" },
          c: { devops: 3, security: 3 },
          t: { ops: 2, adversarial: 1 },
        },
        {
          id: "d",
          label: { el: "Σε ερευνητικό εργαστήριο πανεπιστημίου", en: "In a university research lab" },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
      ],
    },
    {
      id: "q47",
      section: 5,
      kind: "personality",
      text: {
        el: "Τι θα ήθελες να μπορείς να πεις για τη δουλειά σου σε ένα τραπέζι;",
        en: "What would you like to be able to say about your job at a dinner table?",
      },
      options: [
        {
          id: "a",
          label: {
            el: "«Αυτή η εφαρμογή που έχεις στο κινητό; Εγώ την έφτιαξα»",
            en: "\"That app on your phone? I built it\"",
          },
          c: { mobile: 3, frontend: 3 },
          t: { creative: 3 },
        },
        {
          id: "b",
          label: {
            el: "«Κρατάω όρθιο ένα σύστημα που χρησιμοποιούν εκατομμύρια»",
            en: "\"I keep a system millions of people rely on standing\"",
          },
          c: { devops: 3, backend: 2 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "c",
          label: {
            el: "«Δουλεύω σε κάτι που δεν έχει λυθεί από κανέναν ακόμα»",
            en: "\"I work on something nobody has solved yet\"",
          },
          c: { research: 3, ml: 2 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: { el: "«Προστατεύω τα δεδομένα σου»", en: "\"I protect your data\"" },
          c: { security: 3 },
          t: { adversarial: 2 },
        },
      ],
    },
    {
      id: "q48",
      section: 5,
      kind: "personality",
      text: { el: "Πώς δουλεύεις κάτω από πίεση χρόνου;", en: "How do you work under time pressure?" },
      options: [
        {
          id: "a",
          label: { el: "Αποδίδω καλύτερα με προθεσμία από πάνω μου", en: "I perform better with a deadline over me" },
          c: { product: 2, devops: 2, frontend: 2, security: 1 },
          t: { product: 1, ops: 1 },
        },
        {
          id: "b",
          label: { el: "Χρειάζομαι χρόνο για να κάνω κάτι σωστά", en: "I need time to do something properly" },
          c: { embedded: 3, research: 3, qa: 1 },
          t: { systems: 1, research: 2 },
        },
        {
          id: "c",
          label: { el: "Θέλω σταθερό, προβλέψιμο ρυθμό", en: "I want a steady, predictable rhythm" },
          c: { qa: 3, dataeng: 2, backend: 1 },
          t: { ops: 2 },
        },
        {
          id: "d",
          label: {
            el: "Εξαρτάται από το πόσο με ενδιαφέρει το πρόβλημα",
            en: "It depends how much the problem interests me",
          },
          c: { ml: 2, research: 2, frontend: 1, datasci: 1 },
          t: { research: 1, creative: 1 },
        },
      ],
    },
    {
      id: "q49",
      section: 5,
      kind: "personality",
      text: {
        el: "Ποιο μειονέκτημα θα δεχόσουν να αντέξεις για πέντε χρόνια;",
        en: "Which downside would you accept for five years?",
      },
      options: [
        {
          id: "a",
          label: { el: "Πολλή γραφειοκρατία και αυστηρές διαδικασίες", en: "Heavy bureaucracy and strict process" },
          c: { security: 3, qa: 2, embedded: 1 },
          t: { ops: 2 },
        },
        {
          id: "b",
          label: { el: "Ασταθές ωράριο και επείγοντα περιστατικά", en: "Unpredictable hours and emergencies" },
          c: { devops: 3, security: 1, product: 1 },
          t: { ops: 2 },
        },
        {
          id: "c",
          label: { el: "Αργή πρόοδο και πολλά πειράματα που αποτυγχάνουν", en: "Slow progress and many failed experiments" },
          c: { research: 3, ml: 3 },
          t: { research: 3 },
        },
        {
          id: "d",
          label: { el: "Πολλές συναντήσεις και εσωτερική πολιτική", en: "Endless meetings and internal politics" },
          c: { product: 3 },
          t: { people: 2, product: 2 },
        },
      ],
    },
    {
      id: "q50",
      section: 5,
      kind: "personality",
      text: {
        el: "Τι θα σε έκανε να αλλάξεις ρόλο μέσα στην πληροφορική;",
        en: "What would make you switch roles within tech?",
      },
      options: [
        {
          id: "a",
          label: { el: "Αν σταματούσα να μαθαίνω", en: "If I stopped learning" },
          c: { ml: 2, research: 2, frontend: 1, devops: 1 },
          t: { research: 2 },
        },
        {
          id: "b",
          label: { el: "Αν δεν έβλεπα κανέναν αντίκτυπο", en: "If I saw no impact at all" },
          c: { product: 3, datasci: 2, frontend: 1 },
          t: { product: 3 },
        },
        {
          id: "c",
          label: { el: "Αν η δουλειά γινόταν χαοτική και ανεξέλεγκτη", en: "If the work turned chaotic and out of control" },
          c: { qa: 2, backend: 2, embedded: 2, dataeng: 1 },
          t: { ops: 2, systems: 1 },
        },
        {
          id: "d",
          label: {
            el: "Αν δεν αμειβόμουν αντίστοιχα με την ευθύνη μου",
            en: "If the pay didn't match the responsibility",
          },
          c: { devops: 2, security: 2, backend: 2, ml: 1 },
          t: { ops: 1 },
        },
      ],
    },
  ],
};
