import Link from "next/link";
import classNames from "classnames";

import { SkillComponentProps } from "../skills.interface";
import styles from "../skills.module.scss";

const SkillIcon = ({
  url,
  alt,
  fillMode,
  animate,
  name,
  Component,
}: SkillComponentProps) => {
  return (
    <div className={styles.skillItem}>
      <Link
        href={url}
        key={alt}
        prefetch={false}
        className={classNames({
          [styles.fill]: fillMode,
          [styles.animate]: animate,
        })}
        target="_blank"
        rel="noreferrer"
        aria-label={`Learn more about ${name} (opens in new tab)`}
      >
        <Component aria-hidden="true" />
      </Link>
      <span>{name}</span>
    </div>
  );
};

export default SkillIcon;
