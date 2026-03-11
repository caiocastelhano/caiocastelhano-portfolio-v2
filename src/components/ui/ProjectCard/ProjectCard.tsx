import styles from "./ProjectCard.module.css";
import type { Project } from "@/data/blocks/types";
import type { Dictionary, Locale } from "@/data/dictionaries/types";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  dict: Dictionary;
};

export function ProjectCard({ project, locale, dict }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        aria-label={`${dict.projectCard.openProjectAriaLabel} ${project.title[locale]}`}
      >
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${project.backgroundImage})` }}
          aria-hidden="true"
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <p className={styles.projectType}>
            {dict.projectTypes[project.projectType]}
          </p>

          <h2 className={styles.title}>{project.title[locale]}</h2>

          <p className={styles.description}>
            {project.description[locale]}
          </p>

          <ul
            className={styles.tags}
            aria-label={dict.projectCard.technologiesAriaLabel}
          >
            {project.stackTags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </article>
  );
}