import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { useSwipeable } from 'react-swipeable';

import ThemeSlider from '@components/common/ThemeSlider';
import useNavScroll from '@hooks/useNavScroll';
import useBlur from '@hooks/useBlur';
import { ThemeProps } from '@interfaces/theme';

import Logo from '@icons/logo.svg';
import styles from './mobileNavbar.module.scss';

const MobileNavbar: FC<ThemeProps> = props => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { hideNavbar, isTop } = useNavScroll(45);
	const NavHandler = useSwipeable({
		onSwipedRight: () => setIsMenuOpen(false),
	});
	const router = useRouter();
	useBlur(isMenuOpen);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.topNavbarContainer} 
					${isMenuOpen ? styles.transparent : ''} 
					${hideNavbar ? styles.hide : ''} 
					${isTop ? styles.top : ''}`}>
				<Logo
					className={styles.logo}
					onClick={() => router.push('/')}
					alt='kb-logo'
				/>
				<div
					className={`${styles.menuButtonContainer} ${
						isMenuOpen ? styles.isMenuOpen : ''
					}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div className={styles.menuButtonBurger}></div>
				</div>
			</div>
			<div
				className={`${styles.sideNavbarContainer} ${
					isMenuOpen ? styles.isMenuOpen : ''
				}`}
				onClick={() => setIsMenuOpen(false)}
				{...NavHandler}>
				<div className={styles.sideNavbar} onClick={e => e.stopPropagation()}>
					<div className={`${styles.link} ${styles.active}`}>Home</div>
					<div className={styles.link}>About</div>
					<div className={styles.link}>Experience</div>
					<div className={styles.link}>Projects</div>
					<div className={styles.link}>Blogs</div>
					<div className={`${styles.link} ${styles.resume}`}>Resume</div>
					<div className={styles.themeSliderContainer}>
						<ThemeSlider {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
