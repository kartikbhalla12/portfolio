'use client';

import { FC } from 'react';
import Link from 'next/link';

import Logo from '@icons/logo.svg';
import { sanityIconSrc } from 'src/sanity/iconUrl';
import type { SiteSettings, SocialLink } from 'src/sanity/types';

import styles from './footer.module.scss';

const footerIcon = (social: SocialLink) =>
	sanityIconSrc(social.footerIcon) || sanityIconSrc(social.sidebarIcon);

const Footer: FC<{ settings: SiteSettings }> = ({ settings }) => {
	const links = (settings.socials || []).filter(
		(social) => social.url && footerIcon(social),
	);

	return (
		<div className={styles.container}>
			<Link href='/' aria-label='Go to homepage'>
				<Logo alt='kb-logo' aria-hidden='true' className={styles.logo} />
			</Link>
			<div className={styles.socialContainer}>
				{links.map(social => {
					const src = footerIcon(social);
					if (!src) return null;
					return (
						<Link
							key={social._key || social.name}
							href={social.url}
							prefetch={false}
							className={styles.iconLink}
							target='_blank'
							rel='noreferrer'
							aria-label={`Visit ${social.name} (opens in new tab)`}>
							<span
								className={styles.icon}
								aria-hidden='true'
								style={{
									maskImage: `url(${src})`,
									WebkitMaskImage: `url(${src})`,
								}}
							/>
						</Link>
					);
				})}
			</div>
			<div>© {new Date().getFullYear()} {settings.firstName} {settings.lastName}</div>
		</div>
	);
};

export default Footer;
