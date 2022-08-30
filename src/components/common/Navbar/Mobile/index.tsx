import { FC, useState } from 'react';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';

import ThemeSlider from '@components/common/ThemeSlider';
import navbarLinks from '@constants/navbarLinks';

import useNavScroll from '@hooks/useNavScroll';
import useBlur from '@hooks/useBlur';
import useHideOverflow from '@hooks/useHideOverflow';

import { MobileNavbarProps } from './mobileNavbar.interface';

import Logo from '@icons/logo.svg';
import styles from './mobileNavbar.module.scss';

const MobileNavbar: FC<MobileNavbarProps> = ({ isMobile = false, ...rest }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { hideNavbar, isTop, activeSection } = useNavScroll(45);

	const NavHandler = useSwipeable({
		onSwipedRight: () => setIsMenuOpen(false),
	});
	useBlur(isMenuOpen);
	useHideOverflow(isMenuOpen, isMobile);

	return (
		<div className={styles.container}>
			<div
				className={classNames(styles.topNavbarContainer, {
					[styles.transparent]: isMenuOpen,
					[styles.hide]: hideNavbar,
					[styles.top]: isTop,
				})}>
				<Link href='/' passHref>
					<a className={styles.logo}>
						<Logo alt='kb-logo' className={styles.icon} />
					</a>
				</Link>

				<div
					className={classNames(styles.menuButtonContainer, {
						[styles.isMenuOpen]: isMenuOpen,
					})}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<div className={styles.menuButtonBurger} />
				</div>
			</div>
			<div
				className={classNames(styles.sideNavbarContainer, {
					[styles.isMenuOpen]: isMenuOpen,
				})}
				onClick={() => setIsMenuOpen(false)}
				{...NavHandler}>
				<div className={styles.sideNavbar} onClick={e => e.stopPropagation()}>
					<div className={styles.linksContainer}>
						{navbarLinks.map(link => (
							<Link key={link.title} href={link.href} passHref>
								<a
									target={link.target || ''}
									rel={link.rel || ''}
									className={classNames({
										[styles.active]: activeSection === link.id,
										[styles.accentButton]: link.title === 'Resume',
									})}
									onClick={() => setIsMenuOpen(false)}>
									{link.title}
								</a>
							</Link>
						))}
					</div>

					<div className={styles.themeSliderContainer}>
						<ThemeSlider {...rest} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
