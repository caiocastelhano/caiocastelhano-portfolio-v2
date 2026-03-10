import styles from "./ContactBlock.module.css";
import type { ContactBlockDictionary } from "@/data/dictionaries/types";
import { FiMail } from "react-icons/fi";

type ContactBlockProps = {
  dictionary: ContactBlockDictionary;
};

export function ContactBlock({ dictionary }: ContactBlockProps) {
  return (
    <section
      className={styles.container}
      aria-labelledby="contact-heading"
    >
      <h1
        id="contact-heading"
        className={styles.visuallyHidden}
      >
        {dictionary.title}
      </h1>

      <FiMail className={styles.icon} aria-hidden="true" />

      <p className={styles.text}>
        {dictionary.text}
      </p>

      <a
        href={`mailto:${dictionary.email}`}
        className={styles.email}
        aria-label={`Email ${dictionary.email}`}
      >
        {dictionary.email}
      </a>
    </section>
  );
}