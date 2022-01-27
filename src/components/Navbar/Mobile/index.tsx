import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './index.module.scss';

interface MobileNavbarProps {
	onBlur?: (a: boolean) => void;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ onBlur }) => {
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

	return (
		<div className={styles.container}>
			<div className={styles.topNavbarContainer}>
				<div className={styles.logoContainer}>
					<Image src='/logo.svg' layout='fill' alt='kb-logo' />
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
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
