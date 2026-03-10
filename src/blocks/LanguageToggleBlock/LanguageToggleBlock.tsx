import styles from "./LanguageToggleBlock.module.css";

type Language = "en" | "pt";

type LanguageToggleBlockProps = {
  currentLanguage: Language;
  onLanguageChange: (next: Language) => void;
};

export function LanguageToggleBlock({
  currentLanguage,
  onLanguageChange,
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
          onClick={() => onLanguageChange("pt")}
        >
          PT
        </button>

        <button
          type="button"
          className={`${styles.button} ${
            currentLanguage === "en" ? styles.active : ""
          }`}
          aria-pressed={currentLanguage === "en"}
          onClick={() => onLanguageChange("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}