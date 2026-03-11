import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/data/blocks/types";
import type { Dictionary, Locale } from "@/data/dictionaries/types";

type ProjectBlockProps = {
  project: Project;
  locale: Locale;
  dict: Dictionary;
};

export function ProjectBlock({ project, locale, dict }: ProjectBlockProps) {
  return <ProjectCard project={project} locale={locale} dict={dict} />;
}