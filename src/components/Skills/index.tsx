import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import withToolTip from '@components/helpers/WithTooltip';
import skillIcons from '@constants/skills';

import { SkillsProps } from './skills.interface';
import styles from './skills.module.scss';

const Skills: FC<SkillsProps> = ({ isMobile }) => {
	return (
		<div id='skills' className={styles.skills}>
			<div className={styles.container}>
				<div className={styles.iconsContainer}>
					{skillIcons.map(icon => {
						const SkillComponent = () => {
							return (
								<Link href={icon.url} key={icon.alt} passHref prefetch={false}>
									<a
										className={classNames({
											[styles.fill]: icon.fillMode,
											[styles.animate]: icon.animate,
										})}
										target='_blank'
										rel='noreferrer'>
										<icon.Component alt={icon.alt} />
									</a>
								</Link>
							);
						};

						const ComponentWithToolTip = withToolTip<{ alt: string }>(
							SkillComponent,
							icon.name
						);

						return isMobile ? (
							<SkillComponent key={icon.alt} />
						) : (
							<ComponentWithToolTip alt={icon.alt} key={icon.alt} />
						);
					})}
				</div>
				<div className={styles.description}>
					<h1>My Skills</h1>
					<p>
						I love to learn new things and experiment with new technologies.
						These are the tech I use to on regular basis to build exceptional
						softwares on the web.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
