import { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const Footer: FC = () => {
	const socialIcons = [
		{ src: '/icons/github-2.svg', alt: 'github' },
		{ src: '/icons/linkedin-2.svg', alt: 'linkedin' },
		{ src: '/icons/instagram-2.svg', alt: 'instagram' },
		{ src: '/icons/facebook-2.svg', alt: 'facebook' },
		{ src: '/icons/twitter-2.svg', alt: 'twitter' },
		{ src: '/icons/email.svg', alt: 'email' },
	];

	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src='/icons/footer-logo.svg' layout='fill' alt='kb-logo' />
			</div>
			<div className={styles.socialContainer}>
				{socialIcons.map(icons => (
					<div key={icons.alt}>
						<Image src={icons.src} layout='fill' alt={icons.alt} />
					</div>
				))}
			</div>
			<div>© 2022 Kartik Bhalla</div>
		</div>
	);
};

export default Footer;
