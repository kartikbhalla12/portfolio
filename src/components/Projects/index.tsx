import projects from "@constants/projects";

import ProjectCard from "./ProjectCard";
import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.headingContainer}>
          <h2>My Projects</h2>
          <p>
            All the images included with the projects can be scrolled through.
          </p>
        </div>

        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
