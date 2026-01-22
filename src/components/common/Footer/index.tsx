'use client';

import { FC } from 'react';
import Link from 'next/link';

import { socialIconsAlt } from '@constants/socials';
import Logo from '@icons/logo.svg';

import styles from './footer.module.scss';

const Footer: FC = () => {
	return (
		<div className={styles.container}>
			<Link
				href='/'
				aria-label='Go to homepage'>
				<Logo alt='kb-logo' aria-hidden='true' className={styles.logo} />
			</Link>
			<div className={styles.socialContainer}>
				{socialIconsAlt.map(icon => (
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
			<div>© 2026 Kartik Bhalla</div>
		</div>
	);
};

export default Footer;
