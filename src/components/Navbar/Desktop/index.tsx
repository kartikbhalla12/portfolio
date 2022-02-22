import { FC } from 'react';
import Link from 'next/link';

import ThemeSlider from '@components/common/ThemeSlider';
import useNavScroll from '@hooks/useNavScroll';
import { ThemeProps } from '@interfaces/theme';

import Logo from '@icons/logo.svg';
import styles from './desktopNavbar.module.scss';

const DesktopNavbar: FC<ThemeProps> = props => {
	const { hideNavbar, isTop } = useNavScroll(65);

	return (
		<div
			className={`${styles.container} 	
				${hideNavbar && styles.hide} 
				${isTop && styles.top}`}>
			<Link href='/' passHref>
				<a className={styles.logo}>
					<Logo alt='kb-logo' className={styles.icon} />
				</a>
			</Link>

			<div className={styles.linksContainer}>
				<div className={`${styles.link} ${styles.active}`}>Home</div>
				<div className={styles.link}>About</div>
				<div className={styles.link}>Experience</div>
				<div className={styles.link}>Projects</div>
				<div className={styles.link}>Blogs</div>
				<div className={`${styles.link} ${styles.resume}`}>
					<a href='/kartik-bhalla-resume.pdf' target='_blank' rel='noreferrer'>
						Resume
					</a>
				</div>
			</div>
			<ThemeSlider {...props} themeSelf />
		</div>
	);
};

export default DesktopNavbar;
