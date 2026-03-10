export type Locale = "pt" | "en";

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

export type Dictionary = {
  nav: {
    projects: string;
    about: string;
    contact: string;
  };
  stackBlock: StackBlockDictionary;
  contactBlock: ContactBlockDictionary;
};