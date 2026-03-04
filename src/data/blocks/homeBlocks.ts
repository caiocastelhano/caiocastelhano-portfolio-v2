import type { HomeBlock } from "./types";

export const homeBlocks: HomeBlock[] = [
  { id: "about", type: "about", colSpan: 6, rowSpan: 3, label: "about" },

  { id: "p1", type: "project", colSpan: 4, rowSpan: 2, label: "projeto" },
  { id: "sp-1", type: "spacer", colSpan: 2, rowSpan: 2 },

  { id: "p2", type: "project", colSpan: 4, rowSpan: 2, label: "projeto" },
  { id: "p3", type: "project", colSpan: 4, rowSpan: 3, label: "projeto" },

  { id: "contact", type: "contact", colSpan: 4, rowSpan: 2, label: "contact" },
  { id: "social", type: "social", colSpan: 4, rowSpan: 1, label: "social links" },
  { id: "toggle", type: "toggle", colSpan: 2, rowSpan: 1, label: "pt/en" },
];