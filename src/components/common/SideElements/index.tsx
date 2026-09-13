import Link from 'next/link';

import { sanityIconSrc } from 'src/sanity/iconUrl';
import type { SiteSettings } from 'src/sanity/types';
import styles from './sideElements.module.scss';

const SideElements = ({ settings }: { settings: SiteSettings }) => {
	const links = (settings.socials || []).filter(
		(social) =>
			social.url &&
			!social.url.startsWith('mailto:') &&
			sanityIconSrc(social.sidebarIcon || social.footerIcon),
	);

	const [local, domain] = (settings.email || '@').split('@');

	return (
		<div className={styles.container}>
			<div className={styles.socialContainer}>
				<div className={styles.iconsContainer}>
					{links.map(social => {
						const src = sanityIconSrc(
							social.sidebarIcon || social.footerIcon,
						);
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
			</div>
			<div className={styles.email}>
				<p>
					<Link
						href={`mailto:${settings.email}`}
						prefetch={false}
						target='_blank'
						rel='noreferrer'
						aria-label={`Send email to ${settings.email} (opens email client)`}>
						<span>{local}</span>@{domain}
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SideElements;
