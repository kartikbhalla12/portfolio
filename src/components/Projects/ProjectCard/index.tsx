import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import Github from "@icons/tech/github.svg";
import LinkIcon from "@icons/link.svg";
import { CmsImage } from "src/sanity/CmsImage";

import { ProjectCardProps } from "../projects.interface";
import styles from "../projects.module.scss";

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div
      className={classNames(styles.project, {
        [styles.left]: index % 2 !== 0,
      })}
    >
      <h3 className={styles.heading}>{project.name}</h3>
      <div className={styles.content}>
        <p className={styles.contentHeading} aria-hidden="true">
          {project.name}
        </p>
        <div className={styles.keywords}>
          {project.keywords.map((keyword) => (
            <p key={`${project.name}-${keyword}`} className={styles.keyword}>
              {keyword}
            </p>
          ))}
        </div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.links}>
          {project.links.github && (
            <Link
              href={project.links.github}
              prefetch={false}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
            >
              <Github className={styles.github} aria-hidden="true" />
            </Link>
          )}
          {project.links.project && (
            <Link
              href={project.links.project}
              prefetch={false}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.name} project website (opens in new tab)`}
            >
              <LinkIcon className={styles.link} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.desktopContainer}>
          <div className={styles.desktopMockupContainer}>
            <Image
              src="/mockups/desktop/light.png"
              className={styles.mockupLight}
              alt={`${project.name} desktop browser mockup, light theme`}
              width={500}
              height={27}
              unoptimized
              aria-hidden="true"
              draggable={false}
            />
            <Image
              src="/mockups/desktop/dark.png"
              className={styles.mockupDark}
              alt={`${project.name} desktop browser mockup, dark theme`}
              width={500}
              height={27}
              unoptimized
              aria-hidden="true"
              draggable={false}
            />
          </div>
          <div className={styles.desktopImageContainer}>
            <div className={styles.desktopImageInnerContainer}>
              {project.images.desktop && (
                <CmsImage
                  image={project.images.desktop}
                  className={styles.desktopImage}
                  alt={`${project.name} desktop screenshot`}
                  sizes="(max-width: 1024px) 90vw, 500px"
                  draggable={false}
                />
              )}
            </div>
          </div>
        </div>
        {project.images.mobile && (
          <div className={styles.mobileContainer}>
            <div className={styles.mobileMockupContainer}>
              <Image
                src="/mockups/mobile/light.png"
                className={styles.mockupLight}
                alt={`${project.name} mobile device mockup, light theme`}
                width={125}
                height={253}
                unoptimized
                aria-hidden="true"
                draggable={false}
              />
              <Image
                src="/mockups/mobile/dark.png"
                className={styles.mockupDark}
                alt={`${project.name} mobile device mockup, dark theme`}
                width={125}
                height={253}
                unoptimized
                aria-hidden="true"
                draggable={false}
              />
            </div>
            <div className={styles.mobileImageContainer}>
              <div className={styles.mobileImageInnerContainer}>
                <CmsImage
                  image={project.images.mobile}
                  alt={`${project.name} mobile screenshot`}
                  sizes="125px"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
