import { FC } from 'react';

import { ThemeSliderProps } from './themeSlider.interface';
import Sun from '@icons/sun.svg';
import Moon from '@icons/moon.svg';

import styles from './index.module.scss';

const ThemeSlider: FC<ThemeSliderProps> = ({
	theme,
	onThemeChange,
	themeSelf,
}) => {
	const toggleTheme = () => {
		if (theme === 'light') onThemeChange('dark');
		else onThemeChange('light');
	};

	return (
		<div
			className={`${styles.themeSlider} ${themeSelf ? styles.themeSelf : ''}`}>
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
