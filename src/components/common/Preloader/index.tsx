import { FC } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import classNames from 'classnames';

import { PreloaderProps } from './preloader.interface';

import Logo from '@icons/logo.svg';

import styles from './preloader.module.scss';

const Preloader: FC<PreloaderProps> = ({ isMobile, loading }) => {
	return (
		<div
			className={classNames(styles.preloader, {
				[styles.visible]: loading,
				[styles.mobile]: isMobile,
			})}
			role='status'
			aria-live='polite'
			aria-label={loading ? 'Page is loading' : 'Page loaded'}>
			<div className={styles.logoContainer}>
				<Logo alt='kb-logo' className={styles.logo} aria-hidden='true' />
			</div>
			<BarLoader
				color='#fa8b00'
				cssOverride={{
					borderRadius: '8px',
				}}
				aria-hidden='true'
			/>
		</div>
	);
};

export default Preloader;
