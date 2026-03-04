export type BlockType =
  | "about"
  | "project"
  | "contact"
  | "social"
  | "toggle"
  | "stack"
  | "spacer";

export type HomeBlock = {
  id: string;
  type: BlockType;

  /** spans do CSS Grid */
  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rowSpan: 1 | 2 | 3 | 4 | 5 | 6;

  /** útil para placeholder visual e debug */
  label?: string;

  /** opcional: quando for bloco de projeto */
  projectSlug?: string;
};