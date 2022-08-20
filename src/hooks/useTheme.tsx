import { useEffect, useState } from 'react';

import { setThemeCookie } from '@utils/theme';
import { Theme } from '@interfaces/theme';

const useTheme = (initialTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	useEffect(() => {
		setThemeCookie(theme);
		const root = window.document.documentElement;

		root.classList.toggle('theme-dark', theme === 'dark');
		root.classList.toggle('theme-light', theme === 'light');
	}, [theme]);

	useEffect(() => {
		const faviconTag = window.document.getElementById('faviconTag');
		const isDark = window.matchMedia('(prefers-color-scheme: dark)');

		const handleChange = (e: MediaQueryListEvent) => {
			if (e.matches) (faviconTag as HTMLLinkElement).href = './logo-light.svg';
			else (faviconTag as HTMLLinkElement).href = './logo-dark.svg';
		};

		isDark.addEventListener('change', handleChange);

		return () => {
			isDark.removeEventListener('change', handleChange);
		};
	}, []);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
