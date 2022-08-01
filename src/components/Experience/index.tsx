import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { ExperienceProps } from './experience.interface';

import styles from './experience.module.scss';

const Experience: FC<ExperienceProps> = ({ isMobile }) => {
	const experienceDetails = [
		{
			position: 'Software Development Engineer',
			duration: {
				from: 'July 2022',
				to: 'Present',
			},
			companyName: 'upGrad Education Pvt. Ltd.',
			// tasks: [
			// 	'Working with different clients like acko, fsm in adding features to their website',
			// 	'Responsible for optimizing client pages',
			// 	'Technologies used - ReactJs, NextJs, React Native',
			// ],
		},
		{
			position: 'Software Development Engineer Intern',
			duration: {
				from: 'May 2022',
				to: 'July 2022',
			},
			companyName: 'upGrad Education Pvt. Ltd.',
			tasks: [
				'Working on different projects based on Next, React',
				'Developed and deployed upGrad GlobalUniExpo, a React-Native application on play store and app store from ground up.',
			],
		},
		{
			position: 'React Developer Intern',
			duration: {
				from: 'August 2021',
				to: 'November 2021',
			},
			companyName: 'TDG Labs',
			tasks: [
				'Working with different clients like acko, fsm in adding features to their website',
				'Responsible for optimizing client pages',
				'Technologies used - ReactJs, NextJs, React Native',
			],
		},
		{
			position: 'React Web Developer Intern',
			duration: {
				from: 'June 2020',
				to: 'November 2020',
			},
			companyName: 'Circular Leaf Ventures Ltd.',
			tasks: [
				"Developed front-end application for their product 'LenDen' using React, Redux & Typescript.",
				'Launched first MVP of the product.',
				'Completed the Mobile implementation of the second MVP.',
			],
		},
		{
			position: 'Front-end Web Developer',
			duration: {
				from: 'June 2020',
				to: 'July 2020',
			},
			companyName: 'Diligent Learning Pvt. Ltd.',
			tasks: [
				'Created front-end web application using vanilla HTML, CSS, JS.',
				'Migrated data from the former website to the new one.',
			],
		},
	];

	return (
		<div id='experience' className={styles.experience}>
			<div className={styles.container}>
				<h1>My Experience</h1>

				<div className={styles.innerContainer}>
					{experienceDetails.map((exp, i) => (
						<div key={i} className={styles.experienceCard}>
							<div className={styles.experienceDetails}>
								<h3 className={styles.position}>{exp.position}</h3>
								<h3 className={styles.duration}>
									{exp.duration.from} - {exp.duration.to}
								</h3>
							</div>
							<h3 className={styles.companyName}>{exp.companyName}</h3>
							{exp.tasks && (
								<div className={styles.tasks}>
									{exp.tasks.map((task, i) => (
										<p key={i}>{task}</p>
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
