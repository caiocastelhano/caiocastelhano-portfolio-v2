import styles from "./ProjectCard.module.css";
import type { Project } from "@/data/blocks/types";
import type { Locale } from "@/data/dictionaries/types";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
        aria-label={`Open project ${project.title[locale]}`}
      >
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${project.backgroundImage})` }}
          aria-hidden="true"
        />

        <div className={styles.overlay} />

        <div className={styles.content}>
          <p className={styles.projectType}>{project.projectType}</p>

          <h2 className={styles.title}>{project.title[locale]}</h2>

          <p className={styles.description}>
            {project.description[locale]}
          </p>

          <ul className={styles.tags} aria-label="Technologies used">
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