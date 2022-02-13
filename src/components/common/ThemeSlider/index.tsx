import Image from 'next/image';
import { FC } from 'react';

import { ThemeSliderProps } from './themeSlider.interface';
import Sun from '@icons/test/sun.svg';
import Moon from '@icons/test/moon.svg';

import styles from './index.module.scss';

const ThemeSlider: FC<ThemeSliderProps> = ({
	theme,
	onThemeChange,
	themeSelf,
}) => {
	return (
		<div
			className={`${styles.themeSlider} ${themeSelf ? styles.themeSelf : ''}`}>
			<Moon className={styles.icon} alt='moon' />
			<label className={styles.switch}>
				<input
					type='checkbox'
					checked={theme === 'light'}
					onChange={e => {
						const checked = e.currentTarget.checked;
						if (checked) onThemeChange('light');
						else onThemeChange('dark');
					}}
				/>

				<span className={styles.slider} />
			</label>

			<Sun className={styles.icon} alt='sun' />
		</div>
	);
};

export default ThemeSlider;
