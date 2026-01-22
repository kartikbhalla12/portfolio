'use client';

import { FC } from 'react';

import { ThemeProps } from '@interfaces/theme';

import Sun from '@icons/sun.svg';
import Moon from '@icons/moon.svg';

import styles from './index.module.scss';

const ThemeSlider: FC<ThemeProps> = ({ theme, onThemeChange }) => {
	const toggleTheme = () => {
		if (theme === 'light') onThemeChange('dark');
		else onThemeChange('light');
	};

	return (
		<div className={styles.themeSlider} role='group' aria-label='Theme selector'>
			<button
				className={styles.iconButton}
				onClick={() => onThemeChange('dark')}
				aria-label='Switch to dark theme'
				aria-pressed={theme === 'dark'}>
				<Moon className={styles.icon} aria-hidden='true' />
			</button>
			<button
				className={styles.switchButton}
				onClick={toggleTheme}
				aria-label={`Toggle theme, currently ${theme} mode`}
				aria-pressed={theme === 'light'}>
				<label className={styles.switch}>
					<input
						type='checkbox'
						checked={theme === 'light'}
						readOnly
						aria-label='Theme toggle switch'
						tabIndex={-1}
					/>
					<span className={styles.slider} aria-hidden='true' />
				</label>
			</button>

			<button
				className={styles.iconButton}
				onClick={() => onThemeChange('light')}
				aria-label='Switch to light theme'
				aria-pressed={theme === 'light'}>
				<Sun className={styles.icon} aria-hidden='true' />
			</button>
		</div>
	);
};

export default ThemeSlider;
