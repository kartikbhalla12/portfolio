'use client';

import { FC, useEffect } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import classNames from 'classnames';

import usePreloader from '@hooks/usePreloader';
import Logo from '@icons/logo.svg';
import styles from './preloader.module.scss';

const Preloader: FC<{ isMobile: boolean }> = ({ isMobile }) => {
	const { loading } = usePreloader();

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle('preloader-lock', loading);
		root.classList.toggle('preloader-lock-mobile', loading && isMobile);

		return () => {
			root.classList.remove('preloader-lock', 'preloader-lock-mobile');
		};
	}, [isMobile, loading]);

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
