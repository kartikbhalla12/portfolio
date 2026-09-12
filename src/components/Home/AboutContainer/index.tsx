import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";

import { AboutContainerProps } from "@components/Home/home.interface";
import styles from "@components/Home/home.module.scss";

const AboutContainer: FC<AboutContainerProps> = ({ className }) => {
  return (
    <div className={classNames(styles.aboutContainer, className)}>
      <p>
        Building scalable, high-performance web and mobile applications with a
        strong focus on clean UI architecture and performance optimization.
        Currently Software Engineer II at
        <Link
          href="https://upgrad.com"
          prefetch={false}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit upGrad website (opens in new tab)"
        >
          {" "}
          upGrad
        </Link>
        , delivering core product features used by thousands of learners.
        Passionate about writing maintainable frontend systems and creating
        smooth, reliable user experiences.
      </p>

      <p>
        You can reach out to me at{" "}
        <Link
          href="mailto:contact@kartikbhalla.dev"
          className={styles.emailLink}
        >
          contact@kartikbhalla.dev
        </Link>
      </p>

      <Link href={"#experience"} className={styles.ctaButton}>
        Explore more
      </Link>
    </div>
  );
};

export default AboutContainer;
