import type { LS } from "./i18n";

/**
 * Οι 8 διαστάσεις που μετράει το τεστ. Κάθε επιλογή απάντησης δίνει βάρη
 * και σε καριέρες και σε traits — τα traits τροφοδοτούν το radar chart.
 */
export const TRAIT_IDS = [
  "analytical",
  "systems",
  "creative",
  "people",
  "research",
  "ops",
  "adversarial",
  "product",
] as const;

export type TraitId = (typeof TRAIT_IDS)[number];

export type Trait = {
  id: TraitId;
  name: LS;
  description: LS;
};

export const TRAITS: Trait[] = [
  {
    id: "analytical",
    name: { el: "Αναλυτική σκέψη", en: "Analytical" },
    description: {
      el: "Μαθηματικά, αλγόριθμοι, μοτίβα σε δεδομένα, τυπική απόδειξη.",
      en: "Math, algorithms, patterns in data, formal reasoning.",
    },
  },
  {
    id: "systems",
    name: { el: "Συστήματα", en: "Systems" },
    description: {
      el: "Χαμηλό επίπεδο, αρχιτεκτονική, επιδόσεις, το πώς δουλεύει από μέσα.",
      en: "Low level, architecture, performance, how things work under the hood.",
    },
  },
  {
    id: "creative",
    name: { el: "Δημιουργικότητα", en: "Creative" },
    description: {
      el: "Οπτικό αποτέλεσμα, interface, αισθητική, εμπειρία χρήστη.",
      en: "Visual output, interfaces, aesthetics, user experience.",
    },
  },
  {
    id: "people",
    name: { el: "Άνθρωποι", en: "People" },
    description: {
      el: "Επικοινωνία, ομάδα, παρουσιάσεις, συντονισμός, mentoring.",
      en: "Communication, teamwork, presenting, coordination, mentoring.",
    },
  },
  {
    id: "research",
    name: { el: "Έρευνα", en: "Research" },
    description: {
      el: "Βάθος, θεωρία, ανοιχτά προβλήματα, υπομονή με το άγνωστο.",
      en: "Depth, theory, open problems, patience with the unknown.",
    },
  },
  {
    id: "ops",
    name: { el: "Λειτουργία", en: "Operations" },
    description: {
      el: "Αξιοπιστία, αυτοματοποίηση, διαδικασία, τάξη στο χάος.",
      en: "Reliability, automation, process, order out of chaos.",
    },
  },
  {
    id: "adversarial",
    name: { el: "Αντιπαλική σκέψη", en: "Adversarial" },
    description: {
      el: "Τι μπορεί να σπάσει, πού είναι το κενό, σκέψη σαν επιτιθέμενος.",
      en: "What can break, where the gap is, thinking like an attacker.",
    },
  },
  {
    id: "product",
    name: { el: "Προϊόν", en: "Product" },
    description: {
      el: "Χρήστης, αξία, προτεραιότητες, επιχειρηματικό αποτέλεσμα.",
      en: "Users, value, prioritisation, business outcomes.",
    },
  },
];

export const TRAIT_BY_ID: Record<TraitId, Trait> = Object.fromEntries(
  TRAITS.map((tr) => [tr.id, tr]),
) as Record<TraitId, Trait>;
