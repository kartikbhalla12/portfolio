import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';

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

	const [currPath, setCurrPath] = useState('/');

	useEffect(() => {
		setCurrPath(router.asPath);
	}, [router.asPath]);

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
										[styles.active]: currPath === link.href,
										[styles.accentButton]: link.title === 'Resume',
									})}
									onClick={() => setIsMenuOpen(false)}>
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
