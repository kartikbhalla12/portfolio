import { FC } from 'react';
import Image from 'next/image';

import styles from './footer.module.scss';

const Footer: FC = () => {
	const socialIcons = [
		{
			src: '/icons/github-2.svg',
			alt: 'github',
			url: 'https://github.com/thedemon12',
		},
		{
			src: '/icons/linkedin-2.svg',
			alt: 'linkedin',
			url: 'https://www.linkedin.com/in/kartikbhalla/',
		},
		{
			src: '/icons/instagram-2.svg',
			alt: 'instagram',
			url: 'https://www.instagram.com/_kartikbhalla/',
		},
		{
			src: '/icons/facebook-2.svg',
			alt: 'facebook',
			url: 'https://www.facebook.com/kbhalla12',
		},
		{
			src: '/icons/twitter-2.svg',
			alt: 'twitter',
			url: 'https://twitter.com/kartikbhalla12',
		},
		{
			src: '/icons/email.svg',
			alt: 'email',
			url: 'mailto:contact@kartikbhalla.dev',
		},
	];

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src='/icons/logo.svg' layout='fill' alt='kb-logo' />
			</div>
			<div className={styles.socialContainer}>
				{socialIcons.map(icon => (
					<div key={icon.alt}>
						<a href={icon.url} target='_blank' rel='noreferrer'>
							<Image src={icon.src} layout='fill' alt={icon.alt} />
						</a>
					</div>
				))}
			</div>
			<div>© 2022 Kartik Bhalla</div>
		</div>
	);
};

export default Footer;
