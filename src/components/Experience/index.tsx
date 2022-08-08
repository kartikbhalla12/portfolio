import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import experiences from '@constants/experiences';

import { ExperienceProps } from './experience.interface';

import LinkIcon from '@icons/link.svg';

import styles from './experience.module.scss';

const Experience: FC<ExperienceProps> = ({ isMobile }) => {
	return (
		<div id='experience' className={styles.experience}>
			<div className={styles.container}>
				<h1>My Experience</h1>

				<div className={styles.innerContainer}>
					{experiences.map((exp, i) => (
						<div key={i} className={styles.experienceCard}>
							<div className={styles.experienceDetails}>
								<h3 className={styles.position}>{exp.position}</h3>
								<h3 className={styles.duration}>
									{exp.duration.from} - {exp.duration.to}
								</h3>
							</div>
							{exp.companyUrl ? (
								<Link href={exp.companyUrl} passHref prefetch={false}>
									<a target='_blank'>
										<h3 className={styles.companyName}>{exp.companyName}</h3>
									</a>
								</Link>
							) : (
								<h3 className={styles.companyName}>{exp.companyName}</h3>
							)}
							{exp.tasks && (
								<div className={styles.tasks}>
									{exp.tasks.map((task, i) => (
										<div className={styles.task} key={i}>
											<p>{task.detail}</p>
											{task.url && (
												<Link href={task.url} passHref prefetch={false}>
													<a target='_blank' className={styles.iconLink}>
														<LinkIcon className={styles.icon} />
													</a>
												</Link>
											)}
										</div>
									))}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
