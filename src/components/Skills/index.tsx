"use client";

import { FC, memo, useMemo } from "react";
import Link from "next/link";
import classNames from "classnames";

import withToolTip from "@components/common/WithTooltip";
import skillIcons from "@constants/skills";

import { SkillsProps, SkillComponentProps } from "./skills.interface";
import styles from "./skills.module.scss";

const SkillComponent = ({
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

const Skills: FC<SkillsProps> = () => {
  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          {skillIcons.map((icon) => (
            <SkillComponent key={icon.alt} {...icon} />
          ))}
        </div>
        <div className={styles.description}>
          <h1>My Skills</h1>
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

export default memo(
  Skills,
  (prevProps, nextProps) => prevProps.isMobile === nextProps.isMobile,
);
