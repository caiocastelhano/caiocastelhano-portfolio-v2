import styles from "./AboutBlock.module.css";
import type { AboutBlockDictionary } from "@/data/dictionaries/types";

type AboutBlockProps = {
  dictionary: AboutBlockDictionary;
};

export function AboutBlock({ dictionary }: AboutBlockProps) {
  return (
    <section className={styles.container} aria-labelledby="about-heading">
        <h2 id="about-heading" className={styles.visuallyHidden}>
            {dictionary.title}
        </h2>

        <p className={styles.name}>
            <strong>{dictionary.name}</strong>
        </p>

        <div className={styles.content}>
            <p className={styles.lead}>
            {dictionary.lead}
            </p>

            <p className={styles.supportingText}>
            {dictionary.supportingText}
            </p>

            <div className={styles.body}>
            <p className={styles.paragraph}>
                {dictionary.paragraphOne}
            </p>

            <p className={styles.paragraph}>
                {dictionary.paragraphTwoPartOne}{" "}
                <a
                    href="https://www.lewagon.com/pt-BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    Le Wagon
                </a>
                , {dictionary.paragraphTwoPartTwo}
            </p>
            </div>
        </div>
        </section>
  );
}