import type { HomeBlock } from "./types";

export const homeBlocks: HomeBlock[] = [

  { id: "about", type: "about", colSpan: 6, rowSpan: 3, label: "about" },

  { id: "sp-top-right-gap", type: "spacer", colSpan: 5, rowSpan: 1 },

  { id: "toggle", type: "toggle", colSpan: 1, rowSpan: 1, label: "toggle" },

  { id: "museu", type: "project", colSpan: 6, rowSpan: 3, label: "projeto: museu", projectSlug: "museu" },

  { id: "sp-left-empty-row", type: "spacer", colSpan: 6, rowSpan: 1 },

  { id: "stack", type: "stack", colSpan: 6, rowSpan: 1, label: "stack" },

  { id: "sp-stack-right", type: "spacer", colSpan: 6, rowSpan: 1 },

  { id: "sp-gisele-left", type: "spacer", colSpan: 1, rowSpan: 1 },

  { id: "gisele", type: "project", colSpan: 4, rowSpan: 2, label: "projeto: gisele", projectSlug: "gisele" },

  { id: "sp-between-gisele-renata", type: "spacer", colSpan: 1, rowSpan: 2 },

  { id: "renata", type: "project", colSpan: 4, rowSpan: 2, label: "projeto: renata", projectSlug: "renata" },

  { id: "sp-renata-right", type: "spacer", colSpan: 2, rowSpan: 2 },

  { id: "giggoers", type: "project", colSpan: 3, rowSpan: 1, label: "projeto: giggoers", projectSlug: "giggoers" },

  { id: "sp-before-fabio", type: "spacer", colSpan: 5, rowSpan: 1 },

  { id: "fabio", type: "project", colSpan: 4, rowSpan: 2, label: "projeto: fabio", projectSlug: "fabio" },

  { id: "sp-under-fabio-left", type: "spacer", colSpan: 8, rowSpan: 1 },

  { id: "sp-before-portv1", type: "spacer", colSpan: 6, rowSpan: 1 },

  { id: "portv1", type: "project", colSpan: 3, rowSpan: 1, label: "projeto: port v1", projectSlug: "portfolio-v1" },

  { id: "sp-after-portv1", type: "spacer", colSpan: 3, rowSpan: 1 },

  { id: "sp-before-contact", type: "spacer", colSpan: 1, rowSpan: 1 },

  { id: "contact", type: "contact", colSpan: 4, rowSpan: 2, label: "contact" },

  { id: "sp-after-contact-row", type: "spacer", colSpan: 7, rowSpan: 1 },

  { id: "sp-last-row-col1", type: "spacer", colSpan: 1, rowSpan: 1 },

  { id: "sp-before-social", type: "spacer", colSpan: 4, rowSpan: 1 },

  { id: "social", type: "social", colSpan: 3, rowSpan: 1, label: "social" },
];
