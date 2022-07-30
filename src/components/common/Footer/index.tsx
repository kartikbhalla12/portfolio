import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Logo from '@icons/logo.svg';
import Facebook from '@icons/facebook-2.svg';
import Github from '@icons/github-2.svg';
import Linkedin from '@icons/linkedin-2.svg';
import Instagram from '@icons/instagram-2.svg';
import Twitter from '@icons/twitter-2.svg';
import Email from '@icons/email.svg';

import styles from './footer.module.scss';

const Footer: FC = () => {
	const router = useRouter();

	const socialIcons = [
		{
			Component: Github,
			alt: 'github',
			url: 'https://github.com/thedemon12',
		},
		{
			Component: Linkedin,
			alt: 'linkedin',
			url: 'https://www.linkedin.com/in/kartikbhalla/',
		},
		{
			Component: Instagram,
			alt: 'instagram',
			url: 'https://www.instagram.com/_kartikbhalla/',
		},
		{
			Component: Facebook,
			alt: 'facebook',
			url: 'https://www.facebook.com/kbhalla12',
		},
		{
			Component: Twitter,
			alt: 'twitter',
			url: 'https://twitter.com/kartikbhalla12',
		},
		{
			Component: Email,
			alt: 'email',
			url: 'mailto:contact@kartikbhalla.dev',
		},
	];

	return (
		<div className={styles.container}>
			<Logo
				className={styles.logo}
				onClick={() => router.push('/')}
				alt='kb-logo'
			/>
			<div className={styles.socialContainer}>
				{socialIcons.map(icon => (
					<Link key={icon.alt} href={icon.url} passHref prefetch={false}>
						<a className={styles.iconLink} target='_blank' rel='noreferrer'>
							<icon.Component className={styles.icon} alt={icon.alt} />
						</a>
					</Link>
				))}
			</div>
			<div>© 2022 Kartik Bhalla</div>
		</div>
	);
};

export default Footer;
