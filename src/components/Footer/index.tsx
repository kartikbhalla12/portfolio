import { FC } from 'react';
import Image from 'next/image';

import styles from './index.module.scss';

const Footer: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src='/footer-logo.svg' layout='fill' alt='kb-logo' />
			</div>
			<div className={styles.socialContainer}>
				<div className={`${styles.socialIcon} ${styles.active}`}>
					<Image src='/social-github.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={`${styles.socialIcon} ${styles.active}`}>
					<Image src='/social-linkedin.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={`${styles.socialIcon} ${styles.active}`}>
					<Image src='/social-instagram.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={`${styles.socialIcon} ${styles.active}`}>
					<Image src='/social-facebook.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={`${styles.socialIcon} ${styles.active}`}>
					<Image src='/social-twitter.svg' layout='fill' alt='kb-logo' />
				</div>
				<div className={`${styles.socialIcon} ${styles.active}`}>
					<Image src='/social-email.svg' layout='fill' alt='kb-logo' />
				</div>
			</div>
			<div>© 2022 Kartik Bhalla</div>
		</div>
	);
};

export default Footer;
