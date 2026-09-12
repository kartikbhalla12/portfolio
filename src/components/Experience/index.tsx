import experiences from "@constants/experiences";

import ExperienceCard from "./ExperienceCard";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <div id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2>My Experience</h2>

        <div className={styles.innerContainer}>
          {experiences.map((exp) => (
            <ExperienceCard
              key={`${exp.companyName}-${exp.position}-${exp.duration.from}`}
              {...exp}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
