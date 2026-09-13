import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";

import { AboutContainerProps } from "@components/Home/home.interface";
import styles from "@components/Home/home.module.scss";

const AboutContainer: FC<AboutContainerProps> = ({
  className,
  about,
  companyName,
  companyUrl,
  email,
  ctaLabel,
  ctaHref,
}) => {
  const [before, after] = companyName
    ? about.split(companyName)
    : [about, ""];

  return (
    <div className={classNames(styles.aboutContainer, className)}>
      <p>
        {before}
        {companyName && companyUrl ? (
          <Link
            href={companyUrl}
            prefetch={false}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${companyName} website (opens in new tab)`}
          >
            {companyName}
          </Link>
        ) : (
          companyName
        )}
        {after}
      </p>

      <p>
        You can reach out to me at{" "}
        <Link href={`mailto:${email}`} className={styles.emailLink}>
          {email}
        </Link>
      </p>

      <Link href={ctaHref} className={styles.ctaButton}>
        {ctaLabel}
      </Link>
    </div>
  );
};

export default AboutContainer;
