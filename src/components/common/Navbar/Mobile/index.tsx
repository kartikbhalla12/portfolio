'use client';

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
				<Link href='/' className={styles.logo} aria-label='Go to homepage'>
					<Logo alt='kb-logo' className={styles.icon} aria-hidden='true' />
				</Link>

				<button
					className={classNames(styles.menuButtonContainer, {
						[styles.isMenuOpen]: isMenuOpen,
					})}
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label='Toggle navigation menu'
					aria-expanded={isMenuOpen}
					aria-controls='mobile-navigation'>
					<div className={styles.menuButtonBurger} aria-hidden='true' />
				</button>
			</div>
			<div
				id='mobile-navigation'
				className={classNames(styles.sideNavbarContainer, {
					[styles.isMenuOpen]: isMenuOpen,
				})}
				onClick={() => setIsMenuOpen(false)}
				{...NavHandler}
				role='dialog'
				aria-modal='true'
				aria-label='Navigation menu'>
				<div className={styles.sideNavbar} onClick={e => e.stopPropagation()}>
					<nav className={styles.linksContainer} aria-label='Main navigation'>
						{navbarLinks.map(link => (
							<Link
								key={link.title}
								href={link.href}
								target={link.target || ''}
								rel={link.rel || ''}
								className={classNames({
									[styles.active]: activeSection === link.id,
									[styles.accentButton]: link.title === 'Resume',
								})}
								onClick={() => setIsMenuOpen(false)}
								aria-label={
									link.target === '_blank'
										? `${link.title} (opens in new tab)`
										: link.title
								}>
								{link.title}
							</Link>
						))}
					</nav>

					<div className={styles.themeSliderContainer}>
						<ThemeSlider {...rest} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
