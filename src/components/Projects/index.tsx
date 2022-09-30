import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/future/image';
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
	return (
		<div id='projects' className={styles.projects}>
			<div className={styles.container}>
				<h1>My Projects</h1>
				<div className={styles.projectsContainer}>
					{projects.map((project, i) => (
						<div
							key={project.name}
							className={classNames(styles.project, {
								[styles.left]: i % 2 !== 0,
							})}>
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
									<Github className={styles.github} />
									<LinkIcon className={styles.link} />
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
										/>
										<Image
											src={DesktopMockupDarkImage}
											className={classNames({
												[styles.active]: theme === 'light',
											})}
											alt='desktop-mockup-dark'
										/>
									</div>
									<div className={styles.desktopImageContainer}>
										<Image
											src={project.images.desktop}
											className={styles.desktopImage}
											alt={`${project.name}-desktop`}
										/>
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
										/>
									</div>
									<div className={styles.mobileImageContainer}>
										<Image
											src={project.images.mobile}
											alt={`${project.name}-mobile`}
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
