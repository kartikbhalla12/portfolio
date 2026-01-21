import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { socialIconsAlt } from '@constants/socials';
import Logo from '@icons/logo.svg';

import styles from './footer.module.scss';

const Footer: FC = () => {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Logo
				className={styles.logo}
				onClick={() => router.push('/')}
				alt='kb-logo'
			/>
			<div className={styles.socialContainer}>
				{socialIconsAlt.map(icon => (
					<Link key={icon.alt} href={icon.url} prefetch={false} className={styles.iconLink} target='_blank' rel='noreferrer'>
						<icon.Component className={styles.icon} alt={icon.alt} />
					</Link>
				))}
			</div>
			<div>© 2022 Kartik Bhalla</div>
		</div>
	);
};

export default Footer;
