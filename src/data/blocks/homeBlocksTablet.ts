import type { HomeBlock } from "./types";

export const homeBlocksTablet: HomeBlock[] = [
  { id: "about", type: "about", colSpan: 4, rowSpan: 4, label: "about" },

  { id: "sp-top-right-gap", type: "spacer", colSpan: 2, rowSpan: 2, variant: "b" },

  { id: "toggle", type: "toggle", colSpan: 2, rowSpan: 2, label: "toggle" },

  { id: "museu", type: "project", colSpan: 4, rowSpan: 3, projectSlug: "museu-autobiografico" },

  { id: "sp-left-empty-row", type: "spacer", colSpan: 8, rowSpan: 1, variant: "a" },

  { id: "stack", type: "stack", colSpan: 8, rowSpan: 1, label: "stack" },

  { id: "gisele", type: "project", colSpan: 3, rowSpan: 2, projectSlug: "gisele-sartini" },

  { id: "sp-between-projects", type: "spacer", colSpan: 1, rowSpan: 2, variant: "a" },

  { id: "renata", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "renata-lage" },

  { id: "giggoers", type: "project", colSpan: 3, rowSpan: 2, projectSlug: "giggoers" },

  { id: "sp-before-fabio", type: "spacer", colSpan: 1, rowSpan: 2, variant: "b" },

  { id: "fabio", type: "project", colSpan: 4, rowSpan: 3, projectSlug: "fabio-montanari" },

  { id: "sp-before-portv1", type: "spacer", colSpan: 4, rowSpan: 1, variant: "a" },

  { id: "portv1", type: "project", colSpan: 3, rowSpan: 2, projectSlug: "portfolio-v1" },

  { id: "contact", type: "contact", colSpan: 5, rowSpan: 2, label: "contact" },

  { id: "sp-between-contact-social", type: "spacer", colSpan: 8, rowSpan: 1, variant: "b" },

  { id: "social", type: "social", colSpan: 8, rowSpan: 1, label: "social" },
];