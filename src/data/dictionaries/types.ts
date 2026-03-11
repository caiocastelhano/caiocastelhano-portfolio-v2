export type Locale = "pt" | "en";

export type ProjectType = "freelancer" | "academic" | "personal";

export type StackItemId =
  | "html"
  | "css"
  | "javascript"
  | "rails"
  | "typescript"
  | "figma"
  | "nextjs"
  | "react"
  | "sql"
  | "gitGithub"
  | "vscode";

export type StackBlockDictionary = {
  sentence: string;
  items: Record<StackItemId, string>;
};

export type ContactBlockDictionary = {
  title: string;
  text: string;
  email: string;
};

export type AboutBlockDictionary = {
  title: string;
  name: string;
  lead: string;
  supportingText: string;
  paragraphOne: string;
  paragraphTwoPartOne: string;
  paragraphTwoPartTwo: string;
};

export type Dictionary = {
  nav: {
    projects: string;
    about: string;
    contact: string;
  };
  stackBlock: StackBlockDictionary;
  contactBlock: ContactBlockDictionary;
  aboutBlock: AboutBlockDictionary;
  projectTypes: Record<ProjectType, string>;
  projectCard: {
    openProjectAriaLabel: string;
    technologiesAriaLabel: string;
  };
  languageToggle: {
    selectorAriaLabel: string;
    portugueseAriaLabel: string;
    englishAriaLabel: string;
  };
};