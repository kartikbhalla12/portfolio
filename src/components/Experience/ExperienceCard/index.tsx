import { FC } from "react";
import Link from "next/link";

import { ExperienceCardProps } from "../experience.interface";

import LinkIcon from "@icons/link.svg";

import styles from "../experience.module.scss";

const ExperienceCard: FC<ExperienceCardProps> = (exp) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.experienceDetails}>
        <h3 className={styles.position}>{exp.position}</h3>
        <p className={styles.duration}>
          {exp.duration.from} - {exp.duration.to}
        </p>
      </div>
      {exp.companyUrl ? (
        <Link
          href={exp.companyUrl}
          prefetch={false}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${exp.companyName} website (opens in new tab)`}
        >
          <p className={styles.companyName}>{exp.companyName}</p>
        </Link>
      ) : (
        <p className={styles.companyName}>{exp.companyName}</p>
      )}
      {exp.tasks && (
        <div className={styles.tasks}>
          {exp.tasks.map((task, i) => (
            <div className={styles.task} key={i}>
              <p>
                {task.detail}
                {task.url && (
                  <Link
                    href={task.url}
                    prefetch={false}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.iconLink}
                    aria-label={`View more details about ${task.detail} (opens in new tab)`}
                  >
                    <LinkIcon className={styles.icon} aria-hidden="true" />
                  </Link>
                )}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
