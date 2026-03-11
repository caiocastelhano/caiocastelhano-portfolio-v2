import type { HomeBlock } from "./types";

export const homeBlocks: HomeBlock[] = [
  { id: "about", type: "about", colSpan: 6, rowSpan: 3, label: "about" },

  { id: "sp-top-right-gap", type: "spacer", colSpan: 5, rowSpan: 1, variant: "b" }, 

  { id: "toggle", type: "toggle", colSpan: 1, rowSpan: 1, label: "toggle" },

  { id: "museu", type: "project", colSpan: 6, rowSpan: 3, projectSlug: "museu-autobiografico" },

  { id: "sp-left-empty-row", type: "spacer", colSpan: 6, rowSpan: 1, variant: "a" }, 

  { id: "stack", type: "stack", colSpan: 6, rowSpan: 1, label: "stack" },

  { id: "sp-stack-right", type: "spacer", colSpan: 6, rowSpan: 1, variant: "b" }, 

  { id: "sp-gisele-left", type: "spacer", colSpan: 1, rowSpan: 2, variant: "a" }, 

  { id: "gisele", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "gisele-sartini" },

  { id: "sp-between-gisele-renata", type: "spacer", colSpan: 1, rowSpan: 2, variant: "a" }, 

  { id: "renata", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "renata-lage" },

  { id: "sp-renata-right", type: "spacer", colSpan: 2, rowSpan: 2, variant: "a" }, 

  { id: "giggoers", type: "project", colSpan: 3, rowSpan: 2, projectSlug: "giggoers" },

  { id: "sp-before-fabio", type: "spacer", colSpan: 5, rowSpan: 2, variant: "b" }, 

  { id: "fabio", type: "project", colSpan: 4, rowSpan: 3, projectSlug: "fabio-montanari" },

  { id: "sp-under-fabio-left", type: "spacer", colSpan: 8, rowSpan: 1, variant: "a" }, 

  { id: "sp-before-portv1", type: "spacer", colSpan: 6, rowSpan: 1, variant: "b" }, 

  { id: "portv1", type: "project", colSpan: 3, rowSpan: 2, projectSlug: "portfolio-v1" },

  { id: "sp-after-portv1", type: "spacer", colSpan: 3, rowSpan: 2, variant: "b" }, 

  { id: "sp-before-contact", type: "spacer", colSpan: 1, rowSpan: 2, variant: "a" }, 

  { id: "contact", type: "contact", colSpan: 5, rowSpan: 2, label: "contact" },

  { id: "sp-after-contact-row", type: "spacer", colSpan: 6, rowSpan: 1, variant: "a" }, 

  { id: "sp-last-row-col1", type: "spacer", colSpan: 1, rowSpan: 1, variant: "a" },

  { id: "sp-before-social", type: "spacer", colSpan: 6, rowSpan: 1, variant: "b" }, 

  { id: "social", type: "social", colSpan: 5, rowSpan: 1, label: "social" },
];