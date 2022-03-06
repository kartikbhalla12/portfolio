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
		<div className={styles.themeSlider}>
			<button
				className={styles.iconButton}
				onClick={() => onThemeChange('dark')}>
				<Moon className={styles.icon} alt='moon' />
			</button>
			<button className={styles.switchButton} onClick={toggleTheme}>
				<label className={styles.switch}>
					<input type='checkbox' checked={theme === 'light'} readOnly />
					<span className={styles.slider} />
				</label>
			</button>

			<button
				className={styles.iconButton}
				onClick={() => onThemeChange('light')}>
				<Sun className={styles.icon} alt='sun' />
			</button>
		</div>
	);
};

export default ThemeSlider;
