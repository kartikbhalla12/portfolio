import { FC } from 'react';
import Image from 'next/image';

import useNavScroll from '@hooks/useNavScroll';

import styles from './index.module.scss';
import ThemeSlider from '@components/common/ThemeSlider';

type Theme = 'light' | 'dark';
interface DesktopNavbarProps {
	theme: Theme;
	onThemeChange: (theme: Theme) => void;
}

const DesktopNavbar: FC<DesktopNavbarProps> = ({ onThemeChange, theme }) => {
	const { hideNavbar, isTop } = useNavScroll(65);

	return (
		<div
			className={`${styles.container} 	
				${hideNavbar && styles.hide} 
				${isTop && styles.top}`}>
			<div className={styles.imageContainer}>
				<Image src='/icons/logo.svg' layout='fill' alt='kb-logo' />
			</div>
			<div className={styles.linksContainer}>
				<div className={`${styles.link} ${styles.active}`}>Home</div>
				<div className={styles.link}>About</div>
				<div className={styles.link}>Experience</div>
				<div className={styles.link}>Projects</div>
				<div className={styles.link}>Blogs</div>
				<div className={`${styles.link} ${styles.resume}`}>Resume</div>
			</div>
			<ThemeSlider theme={theme} onThemeChange={onThemeChange} themeSelf />
		</div>
	);
};

export default DesktopNavbar;
