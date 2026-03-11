import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/data/blocks/types";
import type { Locale } from "@/data/dictionaries/types";

type ProjectBlockProps = {
  project: Project;
  locale: Locale;
};

export function ProjectBlock({ project, locale }: ProjectBlockProps) {
  return <ProjectCard project={project} locale={locale} />;
}