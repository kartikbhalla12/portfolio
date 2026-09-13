import SkillIcon from "./SkillIcon";
import styles from "./skills.module.scss";
import type { SkillContent } from "src/sanity/types";

const Skills = ({
  skills,
  intro,
}: {
  skills: SkillContent[];
  intro?: string;
}) => {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          {skills.map((skill) => (
            <SkillIcon
              key={skill._id}
              url={skill.url}
              fillMode={skill.fillMode}
              animate={skill.animate}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
        <div className={styles.description}>
          <h2>My Skills</h2>
          <p>
            {intro ||
              "I work with a modern frontend stack focused on performance, scalability, and clean architecture."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
