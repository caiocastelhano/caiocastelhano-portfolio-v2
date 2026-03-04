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

  colSpan: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  rowSpan: 1 | 2 | 3 | 4 | 5 | 6;

  label?: string;

  projectSlug?: string;
};
