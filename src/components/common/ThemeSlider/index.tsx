import Image from 'next/image';
import { FC } from 'react';

import styles from './index.module.scss';

type Theme = 'light' | 'dark';

interface ThemeSliderProps {
	theme: Theme;
	onThemeChange: (theme: Theme) => void;
	themeSelf: boolean;
}

const ThemeSlider: FC<ThemeSliderProps> = ({
	theme,
	onThemeChange,
	themeSelf,
}) => {
	return (
		<div
			className={`${styles.themeSlider} ${themeSelf ? styles.themeSelf : ''}`}>
			<div className={styles.iconContainer}>
				<Image src='/icons/moon.svg' layout='fill' alt='moon' />
			</div>
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
			<div className={styles.iconContainer}>
				<Image src='/icons/sun.svg' layout='fill' alt='sun' />
			</div>
		</div>
	);
};

export default ThemeSlider;
