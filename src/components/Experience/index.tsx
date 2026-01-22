'use client';

import { FC, memo, useMemo } from 'react';
import Link from 'next/link';

import experiences from '@constants/experiences';

import { ExperienceProps } from './experience.interface';

import LinkIcon from '@icons/link.svg';

import styles from './experience.module.scss';

const Experience: FC<ExperienceProps> = ({ isMobile }) => {
	const memoizedExperiences = useMemo(
		() =>
			experiences.map((exp, i) => (
				<div key={i} className={styles.experienceCard}>
					<div className={styles.experienceDetails}>
						<h2 className={styles.position}>{exp.position}</h2>
						<p className={styles.duration}>
							{exp.duration.from} - {exp.duration.to}
						</p>
					</div>
					{exp.companyUrl ? (
						<Link
							href={exp.companyUrl}
							prefetch={false}
							target='_blank'
							rel='noreferrer'
							aria-label={`Visit ${exp.companyName} website (opens in new tab)`}>
							<h3 className={styles.companyName}>{exp.companyName}</h3>
						</Link>
					) : (
						<h3 className={styles.companyName}>{exp.companyName}</h3>
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
												target='_blank'
												rel='noreferrer'
												className={styles.iconLink}
												aria-label={`View more details about ${task.detail} (opens in new tab)`}>
												<LinkIcon className={styles.icon} aria-hidden='true' />
											</Link>
										)}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			)),
		[]
	);
	return (
		<div id='experience' className={styles.experience}>
			<div className={styles.container}>
				<h1>My Experience</h1>

				<div className={styles.innerContainer}>{memoizedExperiences}</div>
			</div>
		</div>
	);
};

export default memo(Experience, (prevProps, nextProps) => prevProps.isMobile === nextProps.isMobile);
