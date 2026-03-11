export type BlockType =
  | "about"
  | "project"
  | "contact"
  | "social"
  | "toggle"
  | "stack"
  | "spacer";

export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type RowSpan = 1 | 2 | 3 | 4 | 5 | 6;
export type SpacerVariant = "a" | "b";

export type LocalizedText = {
  pt: string;
  en: string;
};

export type ProjectType = "freelancer" | "academic" | "personal";

export type Project = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  stackTags: string[];
  projectType: ProjectType;
  liveUrl: string;
  backgroundImage: string;
};

type BaseBlock = {
  id: string;
  colSpan: ColSpan;
  rowSpan: RowSpan;
};

type AboutBlock = BaseBlock & {
  type: "about";
  label: "about";
};

type ProjectBlock = BaseBlock & {
  type: "project";
  projectSlug: string;
};

type ContactBlock = BaseBlock & {
  type: "contact";
  label: "contact";
};

type SocialBlock = BaseBlock & {
  type: "social";
  label: "social";
};

type ToggleBlock = BaseBlock & {
  type: "toggle";
  label: "toggle";
};

type StackBlock = BaseBlock & {
  type: "stack";
  label: "stack";
};

type SpacerBlock = BaseBlock & {
  type: "spacer";
  variant: SpacerVariant;
};

export type HomeBlock =
  | AboutBlock
  | ProjectBlock
  | ContactBlock
  | SocialBlock
  | ToggleBlock
  | StackBlock
  | SpacerBlock;