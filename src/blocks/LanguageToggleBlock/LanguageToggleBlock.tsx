import styles from "./LanguageToggleBlock.module.css";
import { useI18n } from "@/components/i18n/I18nProvider";

type Language = "en" | "pt";

type LanguageToggleBlockProps = {
  currentLanguage: Language;
  onLanguageChange: (next: Language) => void;
};

export function LanguageToggleBlock({
  currentLanguage,
  onLanguageChange,
}: LanguageToggleBlockProps) {
  const { dict } = useI18n();
  return (
    <div className={styles.container}>
      <div
        className={styles.toggle}
        role="group"
        aria-label={dict.languageToggle.selectorAriaLabel}
      >
        <button
          type="button"
          className={`${styles.button} ${
            currentLanguage === "pt" ? styles.active : ""
          }`}
          aria-pressed={currentLanguage === "pt"}
          aria-label={dict.languageToggle.portugueseAriaLabel}
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
          aria-label={dict.languageToggle.englishAriaLabel}
          onClick={() => onLanguageChange("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}