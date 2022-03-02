import { FC } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { css } from '@emotion/react';

import { PreloaderProps } from './preloader.interface';

import Logo from '@icons/logo.svg';

import styles from './preloader.module.scss';

const Preloader: FC<PreloaderProps> = ({ isMobile, loading }) => {
	return (
		<div
			className={`${styles.preloader} ${loading ? styles.visible : ''} ${
				isMobile ? styles.mobile : ''
			}`}>
			<div className={styles.logoContainer}>
				<Logo alt='kb-logo' className={styles.logo} />
			</div>
			<BarLoader
				loading={loading}
				color='#fa8b00'
				css={css`
					border-radius: 8px;
				`}
			/>
		</div>
	);
};

export default Preloader;
