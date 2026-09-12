import projects from "@constants/projects";

export type Project = (typeof projects)[number];

export interface ProjectCardProps {
  project: Project;
  index: number;
}
