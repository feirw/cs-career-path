import type { CareerId } from "../careers";
import type { LS } from "../i18n";
import type { TraitId } from "../traits";

/** Βάρη προς καριέρες. Weights toward careers. */
export type CareerWeights = Partial<Record<CareerId, number>>;
/** Βάρη προς διαστάσεις προφίλ. Weights toward profile traits. */
export type TraitWeights = Partial<Record<TraitId, number>>;

export type Option = {
  /** "a" | "b" | "c" | "d" — σταθερό, το αποθηκεύουμε στη βάση. */
  id: string;
  label: LS;
  c: CareerWeights;
  t: TraitWeights;
};

export type QuestionKind = "technical" | "personality";

export type Question = {
  /** q01 … q50 — σταθερό ID, μη το αλλάξεις μετά την πρώτη υποβολή. */
  id: string;
  section: number;
  kind: QuestionKind;
  text: LS;
  options: Option[];
};

export type Section = {
  index: number;
  title: LS;
  subtitle: LS;
  questions: Question[];
};
