import Link from "next/link";

import ProjectCard from "./ProjectCard";
import styles from "./projects.module.scss";
import type { ProjectContent } from "src/sanity/types";

const Projects = ({
  projects,
  intro,
}: {
  projects: ProjectContent[];
  intro?: string;
}) => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h2>My Projects</h2>
          <p>
            {intro ||
              "All the images included with the projects can be scrolled through."}
          </p>
        </div>

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>

        <Link href="/archive" className={styles.archiveLink}>
          View full project archive
        </Link>
      </div>
    </div>
  );
};

export default Projects;
