import Link from "next/link";
import classNames from "classnames";

import { sanityIconSrc } from "src/sanity/iconUrl";
import { SkillComponentProps } from "../skills.interface";
import styles from "../skills.module.scss";

const SkillIcon = ({ url, fillMode, animate, name, icon }: SkillComponentProps) => {
  const src = sanityIconSrc(icon);

  return (
    <div className={styles.skillItem}>
      <Link
        href={url}
        prefetch={false}
        className={classNames({
          [styles.fill]: fillMode,
          [styles.animate]: animate,
        })}
        target="_blank"
        rel="noreferrer"
        aria-label={`Learn more about ${name} (opens in new tab)`}
      >
        {src ? (
          <span
            className={styles.icon}
            aria-hidden="true"
            style={{ backgroundImage: `url("${src}")` }}
          />
        ) : null}
      </Link>
      <span>{name}</span>
    </div>
  );
};

export default SkillIcon;
