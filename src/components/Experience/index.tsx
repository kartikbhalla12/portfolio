import ExperienceCard from "./ExperienceCard";
import styles from "./experience.module.scss";
import type { ExperienceContent } from "src/sanity/types";

const Experience = ({ experiences }: { experiences: ExperienceContent[] }) => {
  return (
    <div id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2>My Experience</h2>

        <div className={styles.innerContainer}>
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp._id}
              {...exp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
