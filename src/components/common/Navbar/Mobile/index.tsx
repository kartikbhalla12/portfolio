import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';

import ThemeSlider from '@components/common/ThemeSlider';
import { navbarLinks } from '@components/common/Navbar';

import useNavScroll from '@hooks/useNavScroll';
import useBlur from '@hooks/useBlur';

import { ThemeProps } from '@interfaces/theme';

import Logo from '@icons/logo.svg';
import styles from './mobileNavbar.module.scss';

const MobileNavbar: FC<ThemeProps> = props => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { hideNavbar, isTop } = useNavScroll(45);
	const router = useRouter();
	const NavHandler = useSwipeable({
		onSwipedRight: () => setIsMenuOpen(false),
	});
	useBlur(isMenuOpen);

	return (
		<div className={styles.container}>
			<div
				className={`${styles.topNavbarContainer} 
					${isMenuOpen ? styles.transparent : ''} 
					${hideNavbar ? styles.hide : ''} 
					${isTop ? styles.top : ''}`}>
				<Link href='/' passHref>
					<a className={styles.logo}>
						<Logo alt='kb-logo' className={styles.icon} />
					</a>
				</Link>

				<div
					className={`${styles.menuButtonContainer} ${
						isMenuOpen ? styles.isMenuOpen : ''
					}`}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div className={styles.menuButtonBurger} />
				</div>
			</div>
			<div
				className={`
					${styles.sideNavbarContainer}
					${isMenuOpen ? styles.isMenuOpen : ''}
				`}
				onClick={() => setIsMenuOpen(false)}
				{...NavHandler}>
				<div className={styles.sideNavbar} onClick={e => e.stopPropagation()}>
					<div className={styles.linksContainer}>
						{navbarLinks.map(link => (
							<Link key={link.title} href={link.href} passHref>
								<a
									target={link.target || ''}
									rel={link.rel || ''}
									className={`${
										router.asPath === link.href ? styles.active : ''
									} ${link.title === 'Resume' ? styles.accentButton : ''}`}>
									{link.title}
								</a>
							</Link>
						))}
					</div>

					<div className={styles.themeSliderContainer}>
						<ThemeSlider {...props} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
