import { FC, memo, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import projects from '@constants/projects';
import Github from '@icons/tech/github.svg';
import LinkIcon from '@icons/link.svg';

import MobileMockupDarkImage from '@public/mockups/mobile/dark.png';
import MobileMockupLightImage from '@public/mockups/mobile/light.png';
import DesktopMockupDarkImage from '@public/mockups/desktop/dark.png';
import DesktopMockupLightImage from '@public/mockups/desktop/light.png';

import { ProjectsProps } from './projects.interface';
import styles from './projects.module.scss';

const Projects: FC<ProjectsProps> = ({ isMobile, theme }) => {
	const memoizedProjects = useMemo(
		() =>
			projects.map((project, i) => (
				<div
					key={project.name}
					className={classNames(styles.project, {
						[styles.left]: i % 2 !== 0,
					})}>
					<h2 className={styles.heading}>{project.name}</h2>
					<div className={styles.content}>
						<h2>{project.name}</h2>
						<p className={styles.description}>{project.description}</p>
						<div className={styles.keywords}>
							{project.keywords.map(keyword => (
								<p
									key={`${project.name}-${keyword}`}
									className={styles.keyword}>
									{keyword}
								</p>
							))}
						</div>
						<div className={styles.links}>
							<Link href={project.links.github} prefetch={false} target='_blank'>
								<Github className={styles.github} />
							</Link>
							<Link href={project.links.project} prefetch={false} target='_blank'>
								<LinkIcon className={styles.link} />
							</Link>
						</div>
					</div>
					<div className={styles.images}>
						<div className={styles.desktopContainer}>
							<div className={styles.desktopMockupContainer}>
								<Image
									src={DesktopMockupLightImage}
									className={classNames({
										[styles.active]: theme === 'dark',
									})}
									alt='desktop-mockup-light'
									draggable={false}
								/>
								<Image
									src={DesktopMockupDarkImage}
									className={classNames({
										[styles.active]: theme === 'light',
									})}
									alt='desktop-mockup-dark'
									draggable={false}
								/>
							</div>
							<div className={styles.desktopImageContainer}>
								<div className={styles.desktopImageInnerContainer}>
									<Image
										src={project.images.desktop}
										className={styles.desktopImage}
										alt={`${project.name}-desktop`}
										draggable={false}
									/>
								</div>
							</div>
						</div>
						<div className={styles.mobileContainer}>
							<div className={styles.mobileMockupContainer}>
								<Image
									src={MobileMockupLightImage}
									className={classNames({
										[styles.active]: theme === 'dark',
									})}
									alt='mobile-mockup-light'
								/>
								<Image
									src={MobileMockupDarkImage}
									className={classNames({
										[styles.active]: theme === 'light',
									})}
									alt='mobile-mockup-dark'
									draggable={false}
								/>
							</div>
							<div className={styles.mobileImageContainer}>
								<div className={styles.mobileImageInnerContainer}>
									<Image
										src={project.images.mobile}
										alt={`${project.name}-mobile`}
										draggable={false}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)),
		[theme]
	);
	return (
		<div id='projects' className={styles.projects}>
			<div className={styles.container}>
				<div className={styles.headingContainer}>
					<h1>My Projects</h1>
					<p>
						All the images included with the projects can be scrolled through.
					</p>
				</div>

				<div className={styles.projectsContainer}>{memoizedProjects}</div>
			</div>
		</div>
	);
};

export default memo(Projects, (prevProps, nextProps) =>
	prevProps.isMobile === nextProps.isMobile && prevProps.theme === nextProps.theme
);
