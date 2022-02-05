import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import styles from './index.module.scss';

interface MobileNavbarProps {
	onBlur?: (a: boolean) => void;
	onThemeChange: (theme: string) => void;
	theme: string;
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

	const debounce = function (fn: Function, d: number) {
		let timer: any;

		return function () {
			let args = arguments;
			clearTimeout(timer);

			timer = setTimeout(() => {
				fn.apply(args);
			}, d);
		};
	};

	const [isTop, setIsTop] = useState(true);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		if (window.scrollY === 0) {
			setIsTop(true);
		} else setIsTop(false);
	}, []);

	const [oldScrollY, setOldScrollY] = useState(0);

	const handleScroll = debounce(() => {
		console.log('called');
		if (window.scrollY < 5) {
			setIsTop(true);
		} else setIsTop(false);

		if (window.scrollY > oldScrollY) {
			if (window.scrollY > 45) setHide(true);
			else setHide(false);
		} else {
			setHide(false);
		}
		setOldScrollY(window.scrollY);
	}, 100);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	return (
		<div className={styles.container}>
			<div
				className={`${styles.topNavbarContainer} 
					${menuOpen && styles.transparent} 
					${hide && styles.hide} 
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
			</div>
		</div>
	);
};

export default MobileNavbar;
