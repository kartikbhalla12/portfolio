import { useEffect, useState } from 'react';
import { Theme } from '@interfaces/theme';

const useTheme = () => {
	const [theme, setTheme] = useState<Theme>('dark');

	useEffect(() => {
		async function init() {
			const theme = await localStorage.getItem('theme');
			if (theme) setTheme(theme as Theme);
		}
		init();
	}, []);

	useEffect(() => {
		window.localStorage.setItem('theme', theme);
		const root = window.document.documentElement;

		root.classList.toggle('theme-dark', theme === 'dark');
		root.classList.toggle('theme-light', theme === 'light');
	}, [theme]);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
