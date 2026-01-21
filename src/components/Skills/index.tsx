import { FC, memo } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import withToolTip from '@components/common/WithTooltip';
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
								<Link
									href={icon.url}
									key={icon.alt}
									prefetch={false}
									className={classNames({
										[styles.fill]: icon.fillMode,
										[styles.animate]: icon.animate,
									})}
									target='_blank'
									rel='noreferrer'>
									<icon.Component alt={icon.alt} />
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
						{`I'm always eager to expand my knowledge and explore emerging
						technologies. I frequently incorporate the latest tools and
						frameworks into my work to create exceptional software for the web.`}
					</p>
				</div>
			</div>
		</div>
	);
};

export default memo(
	Skills,
	(prevProps, nextProps) => prevProps.theme === nextProps.theme
);
