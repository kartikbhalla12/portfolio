import Image from 'next/image';
import { FC } from 'react';
import styles from './index.module.scss';

const DesktopNavbar: FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src='/logo.svg' layout='fill' alt='kb-logo' />
			</div>
			<div className={styles.linksContainer}>
				<div className={`${styles.link} ${styles.active}`}>Home</div>
				<div className={styles.link}>About</div>
				<div className={styles.link}>Experience</div>
				<div className={styles.link}>Projects</div>
				<div className={styles.link}>Blogs</div>
				<div className={`${styles.link} ${styles.resume}`}>Resume</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;
