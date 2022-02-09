import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { useSwipeable } from 'react-swipeable';

import useNavScroll from '@hooks/useNavScroll';

import styles from './index.module.scss';
import ThemeSlider from '@components/common/ThemeSlider';

type Theme = 'light' | 'dark';
interface MobileNavbarProps {
	onBlur?: (a: boolean) => void;
	theme: Theme;
	onThemeChange: (theme: Theme) => void;
}

const MobileNavbar: FC<MobileNavbarProps> = ({
	onBlur,
	onThemeChange,
	theme,
}) => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		onBlur && onBlur(menuOpen);
	}, [menuOpen, onBlur]);

	useEffect(() => {
		if (menuOpen) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'unset';
	}, [menuOpen]);

	const NavHandler = useSwipeable({
		onSwipedRight: d => setMenuOpen(false),
	});

	const { hideNavbar, isTop } = useNavScroll(45);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.topNavbarContainer} 
					${menuOpen && styles.transparent} 
					${hideNavbar && styles.hide} 
					${isTop && styles.top}`}>
				<div className={styles.logoContainer}>
					<Image src='/icons/logo.svg' layout='fill' alt='kb-logo' />
				</div>
				<div
					className={`${styles.menuButtonContainer} ${
						menuOpen ? styles.menuOpen : ''
					}`}
					onClick={() => setMenuOpen(!menuOpen)}>
					<div className={styles.menuButtonBurger}></div>
				</div>
			</div>
			<div
				className={`${styles.sideNavbarContainer} ${
					menuOpen ? styles.menuOpen : ''
				}`}
				onClick={() => setMenuOpen(false)}
				{...NavHandler}>
				<div className={styles.sideNavbar} onClick={e => e.stopPropagation()}>
					<div className={`${styles.link} ${styles.active}`}>Home</div>
					<div className={styles.link}>About</div>
					<div className={styles.link}>Experience</div>
					<div className={styles.link}>Projects</div>
					<div className={styles.link}>Blogs</div>
					<div className={`${styles.link} ${styles.resume}`}>Resume</div>
					<div className={styles.themeSliderContainer}>
						<ThemeSlider
							theme={theme}
							onThemeChange={onThemeChange}
							themeSelf={false}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
