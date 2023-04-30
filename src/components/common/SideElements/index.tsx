import React from 'react';
import socialIcons from '@constants/socials';
import styles from './sideElements.module.scss';
import Link from 'next/link';

const SideElements = () => (
	<div className={styles.container}>
		<div className={styles.socialContainer}>
			<div className={styles.iconsContainer}>
				{socialIcons.map(icon => (
					<Link key={icon.alt} href={icon.url} passHref prefetch={false}>
						<a className={styles.iconLink} target='_blank' rel='noreferrer'>
							<icon.Component className={styles.icon} alt={icon.alt} />
						</a>
					</Link>
				))}
			</div>
		</div>
		<div className={styles.email}>
			<p>
				<Link href='mailto:contact@kartikbhalla.dev' passHref prefetch={false}>
					<a target='_blank' rel='noreferrer'>
						<span>contact</span>@kartikbhalla.dev
					</a>
				</Link>
			</p>
		</div>
	</div>
);

export default SideElements;
