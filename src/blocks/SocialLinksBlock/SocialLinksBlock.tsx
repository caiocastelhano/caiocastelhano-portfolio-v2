import type { ReactNode } from "react";
import styles from "./SocialLinksBlock.module.css";
import { useI18n } from "@/components/i18n/I18nProvider";

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaVimeoV,
} from "react-icons/fa6";
import { SiLetterboxd } from "react-icons/si";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
};

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/caio-castelhano/",
    icon: <FaLinkedinIn aria-hidden="true" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/caiocastelhano",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/caiocastelhano",
    icon: <FaInstagram aria-hidden="true" />,
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com/caiocastelhano",
    icon: <FaVimeoV aria-hidden="true" />,
  },
  {
    label: "Letterboxd",
    href: "https://letterboxd.com/caiocastelhano/",
    icon: <SiLetterboxd aria-hidden="true" />,
  },
];

export function SocialLinksBlock() {
  const { dict } = useI18n();
  return (
    <nav className={styles.container} aria-label="Social links">
      <ul className={styles.list}>
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} (opens in new tab)`}
              className={styles.link}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.footerText}>
        {dict.socialLinksBlock.footerText}
      </p>
    </nav>
  );
}