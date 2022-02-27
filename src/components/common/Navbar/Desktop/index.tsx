import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ThemeSlider from '@components/common/ThemeSlider';
import { navbarLinks } from '@components/common/Navbar';

import useNavScroll from '@hooks/useNavScroll';

import { ThemeProps } from '@interfaces/theme';

import Logo from '@icons/logo.svg';
import styles from './desktopNavbar.module.scss';

const DesktopNavbar: FC<ThemeProps> = props => {
	const { hideNavbar, isTop } = useNavScroll(65);
	const router = useRouter();

	return (
		<div
			className={`${styles.container} ${hideNavbar ? styles.hide : ''} ${
				isTop ? styles.top : ''
			}`}>
			<Link href='/' passHref>
				<a className={styles.logo}>
					<Logo alt='kb-logo' className={styles.icon} />
				</a>
			</Link>

			<div className={styles.linksContainer}>
				{navbarLinks.map(link => (
					<Link key={link.title} href={link.href} passHref>
						<a
							target={link.target || ''}
							rel={link.rel || ''}
							className={`${router.asPath === link.href ? styles.active : ''} ${
								link.title === 'Resume' ? styles.accent : ''
							}`}>
							{link.title}
						</a>
					</Link>
				))}
			</div>
			<ThemeSlider {...props} themeSelf />
		</div>
	);
};

export default DesktopNavbar;
