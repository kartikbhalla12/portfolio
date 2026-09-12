import type { ProjectContent } from "src/sanity/types";

export type Project = ProjectContent;

export interface ProjectCardProps {
  project: Project;
  index: number;
}
