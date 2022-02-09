import Image from 'next/image';
import { FC } from 'react';
import useNavScroll from '../../../hooks/useNavScroll';
import styles from './index.module.scss';

interface DesktopNavbarProps {
	onThemeChange: (theme: string) => void;
	theme: string;
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
			<div className={styles.toggleTheme}>
				<div className={styles.moonContainer}>
					<Image src='/icons/moon-dark.svg' layout='fill' alt='kb-logo' />
				</div>
				<label className={styles.switch}>
					<input
						type='checkbox'
						checked={theme === 'light'}
						onChange={e => {
							const checked = e.currentTarget.checked;
							if (checked) onThemeChange('light');
							else onThemeChange('dark');
						}}
					/>

					<span className={styles.slider} />
				</label>
				<div className={styles.sunContainer}>
					<Image src='/icons/sun-dark.svg' layout='fill' alt='kb-logo' />
				</div>
			</div>
		</div>
	);
};

export default DesktopNavbar;
