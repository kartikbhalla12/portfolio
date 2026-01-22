import { useEffect, useState } from 'react';

import { setThemeCookie } from '@utils/theme';
import { Theme } from '@interfaces/theme';

const useTheme = (initialTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	const handleChange = (isDark: boolean) => {
		const faviconTag = window.document.getElementById('faviconTag');
		if (!faviconTag) return;

		(faviconTag as HTMLLinkElement).href = isDark
			? './logo-light.svg'
			: './logo-dark.svg';
	};

	useEffect(() => {
		// Set cookie on client side (this is safe in client components)
		// This will run on mount with initialTheme, setting the cookie if it doesn't exist
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
