import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import ThemeSlider from '@components/common/ThemeSlider';
import navbarLinks from '@constants/navbarLinks';

import useNavScroll from '@hooks/useNavScroll';

import { ThemeProps } from '@interfaces/theme';

import Logo from '@icons/logo.svg';
import styles from './desktopNavbar.module.scss';

const DesktopNavbar: FC<ThemeProps> = props => {
	const { hideNavbar, isTop, activeSection } = useNavScroll(65);

	return (
		<div
			className={classNames(styles.container, {
				[styles.hide]: hideNavbar,
				[styles.top]: isTop,
			})}>
			<Link href='/' className={styles.logo}>
				<Logo alt='kb-logo' className={styles.icon} />
			</Link>

			<div className={styles.linksContainer}>
				{navbarLinks.map(link => (
					<Link
						key={link.title}
						href={link.href}
						target={link.target || ''}
						rel={link.rel || ''}
						className={classNames({
							[styles.active]: activeSection === link.id,
							[styles.accent]: link.title === 'Resume',
						})}>
						{link.title}
					</Link>
				))}
			</div>
			<ThemeSlider {...props} />
		</div>
	);
};

export default DesktopNavbar;
