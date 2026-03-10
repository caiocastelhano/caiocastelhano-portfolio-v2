import type { IconType } from "react-icons";
import type { StackBlockDictionary, StackItemId } from "@/data/dictionaries/types";

import {
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiRubyonrails, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";

import styles from "./StackBlock.module.css";

type StackBlockProps = {
  dictionary: StackBlockDictionary;
};

const stackItems: StackItemId[] = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "rails",
  "sql",
  "figma",
  "gitGithub",
  "vscode",
];

const stackIcons: Record<StackItemId, IconType> = {
  html: FaHtml5,
  css: FaCss3Alt,
  javascript: FaJs,
  rails: SiRubyonrails,
  typescript: SiTypescript,
  figma: FaFigma,
  nextjs: RiNextjsLine,
  react: FaReact,
  sql: FaDatabase,
  gitGithub: FaGitAlt,
  vscode: VscVscode,
};

export function StackBlock({ dictionary }: StackBlockProps) {
  return (
    <section className={styles.container} aria-label="Technology stack">
      <p className={styles.sentence}>{dictionary.sentence}</p>

      <ul className={styles.list}>
        {stackItems.map((itemId) => {
          const Icon = stackIcons[itemId];
          const label = dictionary.items[itemId];

          return (
            <li key={itemId} className={styles.listItem}>
              <div
                className={styles.stackItem}
                aria-label={label}
                title={label}
              >
                <Icon aria-hidden="true" className={styles.icon} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}