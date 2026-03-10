import styles from "./LanguageToggleBlock.module.css";

type Language = "en" | "pt";

type LanguageToggleBlockProps = {
  currentLanguage: Language;
};

export function LanguageToggleBlock({
  currentLanguage,
}: LanguageToggleBlockProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.toggle}
        role="group"
        aria-label="Language selector"
      >

        <button
          type="button"
          className={`${styles.button} ${
            currentLanguage === "pt" ? styles.active : ""
          }`}
          aria-pressed={currentLanguage === "pt"}
        >
          PT
        </button>

        <button
          type="button"
          className={`${styles.button} ${
            currentLanguage === "en" ? styles.active : ""
          }`}
          aria-pressed={currentLanguage === "en"}
        >
          EN
        </button>
      </div>
    </div>
  );
}