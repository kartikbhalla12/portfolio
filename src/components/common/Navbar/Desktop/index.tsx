'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import ThemeSlider from '@components/common/ThemeSlider';

import useNavScroll from '@hooks/useNavScroll';
import { isActiveNavLink, resolveNavHref } from '@utils/navHref';

import { ThemeProps } from '@interfaces/theme';
import type { NavLink } from 'src/sanity/types';

import Logo from '@icons/logo.svg';
import styles from './desktopNavbar.module.scss';

const DesktopNavbar: FC<ThemeProps & { navLinks: NavLink[] }> = ({
	navLinks,
	...props
}) => {
	const pathname = usePathname();
	const { hideNavbar, isTop, activeSection } = useNavScroll(65, navLinks);
	const homeHref = pathname === '/' ? '#home' : '/';

	return (
		<div
			className={classNames(styles.container, {
				[styles.hide]: hideNavbar,
				[styles.top]: isTop,
			})}>
			<a href={homeHref} className={styles.logo} aria-label='Go to homepage'>
				<Logo alt='kb-logo' className={styles.icon} aria-hidden='true' />
			</a>

			<nav className={styles.linksContainer} aria-label='Main navigation'>
				{navLinks.map(link => {
					const href = resolveNavHref(link, pathname);
					const className = classNames({
						[styles.active]: isActiveNavLink(link, pathname, activeSection),
						[styles.accent]: link.title === 'Resume',
					});
					const ariaLabel =
						link.target === '_blank'
							? `${link.title} (opens in new tab)`
							: link.title;

					if (href.startsWith('#')) {
						return (
							<a key={link.title} href={href} className={className} aria-label={ariaLabel}>
								{link.title}
							</a>
						);
					}

					return (
						<Link
							key={link.title}
							href={href}
							target={link.target}
							rel={link.rel}
							className={className}
							aria-label={ariaLabel}>
							{link.title}
						</Link>
					);
				})}
			</nav>
			<ThemeSlider {...props} />
		</div>
	);
};

export default DesktopNavbar;
