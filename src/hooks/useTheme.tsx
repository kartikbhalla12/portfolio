import { useEffect, useState } from 'react';

import { setThemeCookie } from '@utils/theme';
import { Theme } from '@interfaces/theme';

const useTheme = (initialTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const handleChange = (isDark: boolean) => {
		const faviconTag = window.document.getElementById('faviconTag');
		(faviconTag as HTMLLinkElement).href = isDark
			? './logo-light.svg'
			: './logo-dark.svg';
	};

	useEffect(() => {
		setThemeCookie(theme);
		const root = window.document.documentElement;

		root.classList.toggle('theme-dark', theme === 'dark');
		root.classList.toggle('theme-light', theme === 'light');
	}, [theme]);

	useEffect(() => {
		const isDark = window.matchMedia('(prefers-color-scheme: dark)');
		handleChange(isDark.matches);

		isDark.addEventListener('change', e => handleChange(e.matches));
		return () => {
			isDark.removeEventListener('change', e => handleChange(e.matches));
		};
	}, []);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
