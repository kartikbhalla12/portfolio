import React from 'react';
import socialIcons from '@constants/socials';
import styles from './sideElements.module.scss';
import Link from 'next/link';

const SideElements = () => (
	<div className={styles.container}>
		<div className={styles.socialContainer}>
			<div className={styles.iconsContainer}>
				{socialIcons.map(icon => (
					<Link
						key={icon.alt}
						href={icon.url}
						prefetch={false}
						className={styles.iconLink}
						target='_blank'
						rel='noreferrer'
						aria-label={`Visit ${icon.alt} profile (opens in new tab)`}>
						<icon.Component className={styles.icon} aria-hidden='true' />
					</Link>
				))}
			</div>
		</div>
		<div className={styles.email}>
			<p>
				<Link
					href='mailto:contact@kartikbhalla.dev'
					prefetch={false}
					target='_blank'
					rel='noreferrer'
					aria-label='Send email to contact@kartikbhalla.dev (opens email client)'>
					<span>contact</span>@kartikbhalla.dev
				</Link>
			</p>
		</div>
	</div>
);

export default SideElements;
