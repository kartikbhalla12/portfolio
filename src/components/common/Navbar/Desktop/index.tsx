import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';

import ThemeSlider from '@components/common/ThemeSlider';
import { navbarLinks } from '@components/common/Navbar';

import useNavScroll from '@hooks/useNavScroll';

import { ThemeProps } from '@interfaces/theme';

import Logo from '@icons/logo.svg';
import styles from './desktopNavbar.module.scss';

const DesktopNavbar: FC<ThemeProps> = props => {
	const { hideNavbar, isTop } = useNavScroll(65);
	const router = useRouter();

	const [currPath, setCurrPath] = useState('/');

	useEffect(() => {
		setCurrPath(router.asPath);
	}, [router.asPath]);

	return (
		<div
			className={classNames(styles.container, {
				[styles.hide]: hideNavbar,
				[styles.top]: isTop,
			})}>
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
							className={classNames({
								[styles.active]: currPath === link.href,
								[styles.accent]: link.title === 'Resume',
							})}>
							{link.title}
						</a>
					</Link>
				))}
			</div>
			<ThemeSlider {...props} />
		</div>
	);
};

export default DesktopNavbar;
