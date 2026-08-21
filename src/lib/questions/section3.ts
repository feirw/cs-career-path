import type { Section } from "./types";

export const section3: Section = {
  index: 3,
  title: { el: "21-30", en: "21-30" },
  subtitle: { el: "Δεν υπάρχουν σωστές ή λάθος απαντήσεις.", en: "No right or wrong answers." },
  questions: [
    {
      id: "q21",
      section: 3,
      text: {
        el: "Προτιμώ να δουλεύω ατομικά σε καλά ορισμένα προβλήματα, παρά σε ομάδες με αλλεπάλληλες συναντήσεις.",
        en: "Prefer focused solo work vs. collaborative meetings"
      },
      options: [
        { id: "a", label: { el: "Απόλυτα solo", en: "Strongly solo" }, c: { embedded: 18, backend: 14, research: 12 } },
        { id: "b", label: { el: "Περισσότερο solo", en: "Mostly solo" }, c: { backend: 16, embedded: 12, devops: 10, dataeng: 6 } },
        { id: "c", label: { el: "Ισορροπία", en: "Balanced" }, c: { backend: 10, frontend: 10, mobile: 10, product: 8 } },
        { id: "d", label: { el: "Περισσότερη συνεργασία", en: "Mostly collaborative" }, c: { product: 14, frontend: 12, mobile: 10, qa: 8 } },
        { id: "e", label: { el: "Πολύ συνεργασία", en: "Highly collaborative" }, c: { product: 18, frontend: 14, mobile: 12 } }
      ]
    },
    {
      id: "q22",
      section: 3,
      text: {
        el: "Όταν αντιμετωπίζω πρόβλημα, σκέφτομαι πρώτα τα δεδομένα και τη μέτρηση, όχι τις ιδέες.",
        en: "Problem-solving: data-driven first, ideas after"
      },
      options: [
        { id: "a", label: { el: "Συμφωνώ απόλυτα", en: "Strongly agree" }, c: { dataeng: 20, datasci: 16, devops: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { dataeng: 16, datasci: 14, backend: 10, devops: 8 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { dataeng: 10, datasci: 10, backend: 10, mobile: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { frontend: 12, product: 12, mobile: 10, ml: 6 } },
        { id: "e", label: { el: "Διαφωνώ απόλυτα", en: "Strongly disagree" }, c: { frontend: 16, product: 14, research: 10 } }
      ]
    },
    {
      id: "q23",
      section: 3,
      text: {
        el: "Με ενδιαφέρει να δω πώς τα δεδομένα χρησιμοποιούνται για αποφάσεις, όχι απλώς να τα συγκεντρώσω.",
        en: "Interested in how data drives decisions, not just collecting it"
      },
      options: [
        { id: "a", label: { el: "Πολύ", en: "Very much" }, c: { datasci: 20, dataeng: 14, product: 12 } },
        { id: "b", label: { el: "Κάπως", en: "Somewhat" }, c: { datasci: 16, dataeng: 12, product: 10, ml: 8 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { datasci: 10, dataeng: 10, backend: 8, frontend: 8 } },
        { id: "d", label: { el: "Λίγο", en: "Not much" }, c: { backend: 12, frontend: 12, embedded: 10, devops: 6 } },
        { id: "e", label: { el: "Καθόλου", en: "Not at all" }, c: { embedded: 16, backend: 12, research: 10 } }
      ]
    },
    {
      id: "q24",
      section: 3,
      text: {
        el: "Σκέφτομαι επιθέσεις και αδυναμίες ακόμα και όταν σχεδιάζω απλή λειτουργία.",
        en: "Think about attacks and vulnerabilities even in simple features"
      },
      options: [
        { id: "a", label: { el: "Πάντα", en: "Always" }, c: { security: 20, backend: 14, embedded: 10 } },
        { id: "b", label: { el: "Συχνά", en: "Often" }, c: { security: 18, backend: 12, devops: 10, qa: 6 } },
        { id: "c", label: { el: "Μερικές φορές", en: "Sometimes" }, c: { security: 10, backend: 10, devops: 8, frontend: 8 } },
        { id: "d", label: { el: "Σπάνια", en: "Rarely" }, c: { frontend: 14, mobile: 12, product: 10, backend: 6 } },
        { id: "e", label: { el: "Ποτέ", en: "Never" }, c: { frontend: 16, product: 12, mobile: 10 } }
      ]
    },
    {
      id: "q25",
      section: 3,
      text: {
        el: "Είμαι ευχαριστημένος/η μόνο αν άνθρωποι χρησιμοποιούν πραγματικά το κάτι που χτίσαμε.",
        en: "Need to see real users actually using what we built"
      },
      options: [
        { id: "a", label: { el: "Απόλυτα συμφωνώ", en: "Strongly agree" }, c: { product: 20, mobile: 14, frontend: 12 } },
        { id: "b", label: { el: "Συμφωνώ", en: "Agree" }, c: { product: 16, frontend: 14, mobile: 10, qa: 8 } },
        { id: "c", label: { el: "Ουδέτερο", en: "Neutral" }, c: { frontend: 10, mobile: 10, backend: 10, product: 8 } },
        { id: "d", label: { el: "Διαφωνώ", en: "Disagree" }, c: { backend: 14, dataeng: 12, devops: 10, research: 6 } },
        { id: "e", label: { el: "Απόλυτα διαφωνώ", en: "Strongly disagree" }, c: { research: 18, backend: 14, embedded: 10 } }
      ]
    },
    {
      id: "q26",
      section: 3,
      text: {
        el: "Με εξάπτει η αυτοματοποίηση: γιατί κάνει κάποιος κάτι χειροκίνητα αν μπορεί να γίνει script;",
        en: "Obsessed with automation: why do something by hand if it can be scripted?"
      },
      options: [
        { id: "a", label: { el: "Εντελώς", en: "Completely" }, c: { devops: 20, backend: 14, qa: 12 } },
        { id: "b", label: { el: "Πολύ", en: "Very much" }, c: { devops: 18, backend: 12, dataeng: 10, qa: 8 } },
        { id: "c", label: { el: "Αρκετά", en: "Quite" }, c: { devops: 10, backend: 10, dataeng: 10, frontend: 8 } },
        { id: "d", label: { el: "Λίγο", en: "A bit" }, c: { frontend: 12, mobile: 12, product: 10, backend: 6 } },
        { id: "e", label: { el: "Καθόλου", en: "Not at all" }, c: { frontend: 14, product: 12, mobile: 10 } }
      ]
    },
    {
      id: "q27",
      section: 3,
      text: {
        el: "Προτιμώ να χτίσω κάτι εντελώς νέο, παρά να συντηρήσω ή να βελτιώσω παλιό κώδικα.",
        en: "Build new vs. maintain and improve existing"
      },
      options: [
        { id: "a", label: { el: "Μόνο νέο", en: "Only new" }, c: { frontend: 18, mobile: 14, product: 12 } },
        { id: "b", label: { el: "Κυρίως νέο", en: "Mostly new" }, c: { frontend: 16, backend: 12, mobile: 10, ml: 8 } },
        { id: "c", label: { el: "Ισορροπία", en: "Balanced" }, c: { backend: 12, frontend: 10, devops: 10, dataeng: 8 } },
        { id: "d", label: { el: "Κυρίως συντήρηση", en: "Mostly maintain" }, c: { backend: 14, devops: 12, embedded: 10, qa: 8 } },
        { id: "e", label: { el: "Μόνο συντήρηση", en: "Only maintain" }, c: { devops: 16, backend: 12, embedded: 10 } }
      ]
    },
    {
      id: "q28",
      section: 3,
      text: {
        el: "Θέλω να δουλεύω με την τελευταία τεχνολογία, ακόμα κι αν είναι ασταθής και χρειάζεται debugging.",
        en: "Cutting-edge tech vs. stable, boring, proven"
      },
      options: [
        { id: "a", label: { el: "Πάντα cutting-edge", en: "Always cutting-edge" }, c: { ml: 18, frontend: 14, backend: 10 } },
        { id: "b", label: { el: "Προτιμώ τα νέα", en: "Prefer newer" }, c: { ml: 16, frontend: 12, backend: 10, mobile: 8 } },
        { id: "c", label: { el: "Δεν πειράζει", en: "Doesn't matter" }, c: { frontend: 10, backend: 10, mobile: 10, dataeng: 8 } },
        { id: "d", label: { el: "Προτιμώ αποδεδειγμένα", en: "Prefer proven" }, c: { backend: 14, embedded: 12, devops: 10, security: 8 } },
        { id: "e", label: { el: "Μόνο tested και stable", en: "Only tested and stable" }, c: { embedded: 16, backend: 14, devops: 10 } }
      ]
    },
    {
      id: "q29",
      section: 3,
      text: {
        el: "Θέλω να γίνω πολύ ειδικός σε μια θέση (expert), όχι γενικευμένος.",
        en: "Deep specialist vs. generalist"
      },
      options: [
        { id: "a", label: { el: "Πολύ ειδικός", en: "Deep specialist" }, c: { security: 20, ml: 16, research: 14 } },
        { id: "b", label: { el: "Κυρίως ειδικός", en: "Mostly specialist" }, c: { security: 16, ml: 14, embedded: 12, research: 8 } },
        { id: "c", label: { el: "Ισορροπία", en: "Balanced" }, c: { backend: 12, frontend: 10, dataeng: 10, devops: 8 } },
        { id: "d", label: { el: "Κυρίως γενικός", en: "Mostly generalist" }, c: { frontend: 12, mobile: 12, product: 10, backend: 8 } },
        { id: "e", label: { el: "Pure generalist", en: "Pure generalist" }, c: { product: 18, frontend: 14, mobile: 10 } }
      ]
    },
    {
      id: "q30",
      section: 3,
      text: {
        el: "Στη δική μου ιδανική καριέρα, θέλω μεγάλη επιρροή και καινοτομία, όχι σταθερότητα και υψηλό μισθό.",
        en: "Career goal: impact and innovation vs. stability and salary"
      },
      options: [
        { id: "a", label: { el: "Μόνο impact", en: "Only impact" }, c: { research: 20, product: 16, ml: 12 } },
        { id: "b", label: { el: "Κυρίως impact", en: "Mostly impact" }, c: { research: 16, product: 14, ml: 12, backend: 8 } },
        { id: "c", label: { el: "Ισορροπία", en: "Balanced" }, c: { backend: 12, product: 10, frontend: 10, devops: 10 } },
        { id: "d", label: { el: "Κυρίως σταθερότητα", en: "Mostly stability" }, c: { backend: 14, devops: 12, mobile: 10, security: 8 } },
        { id: "e", label: { el: "Σταθερότητα και μισθός", en: "Stability and salary" }, c: { backend: 16, devops: 14, security: 10 } }
      ]
    }
  ]
};
