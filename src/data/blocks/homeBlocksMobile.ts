import type { HomeBlock } from "./types";

export const homeBlocksMobile: HomeBlock[] = [

  { id: "sp-about", type: "spacer", colSpan: 3, rowSpan: 1, variant: "a" },

  { id: "toggle", type: "toggle", colSpan: 1, rowSpan: 1, label: "toggle" },

  { id: "about", type: "about", colSpan: 4, rowSpan: 5, label: "about" },

  { id: "sp-divider", type: "spacer", colSpan: 4, rowSpan: 1, variant: "b" },

  { id: "stack", type: "stack", colSpan: 4, rowSpan: 2, label: "stack" },

  { id: "museu", type: "project", colSpan: 4, rowSpan: 3, projectSlug: "museu-autobiografico" },

  { id: "gisele", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "gisele-sartini" },

  { id: "fabio", type: "project", colSpan: 4, rowSpan: 3, projectSlug: "fabio-montanari" },

  { id: "renata", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "renata-lage" },

  { id: "portv1", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "portfolio-v1" },

  { id: "giggoers", type: "project", colSpan: 4, rowSpan: 2, projectSlug: "giggoers" },

  { id: "sp-before-contact", type: "spacer", colSpan: 4, rowSpan: 1, variant: "a" },

  { id: "contact", type: "contact", colSpan: 4, rowSpan: 2, label: "contact" },

  { id: "sp-before-social", type: "spacer", colSpan: 4, rowSpan: 1, variant: "b" },

  { id: "social", type: "social", colSpan: 4, rowSpan: 1, label: "social" },

];