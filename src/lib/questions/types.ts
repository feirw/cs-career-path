import type { CareerId } from "../careers";
import type { LS } from "../i18n";
import type { TraitId } from "../traits";

/** Βάρη προς καριέρες. Weights toward careers. */
export type CareerWeights = Partial<Record<CareerId, number>>;
/** Βάρη προς διαστάσεις προφίλ. Weights toward profile traits. */
export type TraitWeights = Partial<Record<TraitId, number>>;

export type Option = {
  /** "a" | "b" | "c" | … — σταθερό, το αποθηκεύουμε στη βάση. */
  id: string;
  label: LS;
  c: CareerWeights;
  t: TraitWeights;
};

export type Question = {
  /** q01 … q100 (πλήρες), s01 … s20 (σύντομο) — σταθερό ID, μη το αλλάξεις μετά την πρώτη υποβολή. */
  id: string;
  section: number;
  /**
   * Οι ερωτήσεις είναι καθημερινές καταστάσεις, όχι τεχνικά ερωτήματα, και δεν
   * χωρίζονται σε κατηγορίες μπροστά στον χρήστη: η ετικέτα «τεχνική» ή
   * «προσωπικότητας» έλεγε στον απαντώντα τι μετράμε και αλλοίωνε την απάντηση.
   */
  text: LS;
  /** 4 έως 6 επιλογές — όσες χρειάζεται η ερώτηση, όχι σταθερός αριθμός. */
  options: Option[];
};

export type Section = {
  index: number;
  title: LS;
  subtitle: LS;
  questions: Question[];
};
