import skillIcons from "@constants/skills";

import SkillIcon from "./SkillIcon";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          {skillIcons.map((icon) => (
            <SkillIcon key={icon.alt} {...icon} />
          ))}
        </div>
        <div className={styles.description}>
          <h2>My Skills</h2>
          <p>
            I work with a modern frontend stack focused on performance,
            scalability, and clean architecture. My core expertise includes
            React, Next.js, and React Native, along with TypeScript and API
            integrations. These tools help me build reliable, maintainable, and
            user-centric applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
