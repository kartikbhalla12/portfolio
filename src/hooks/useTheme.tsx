import { useEffect, useState } from 'react';

import { setThemeCookie } from '@utils/theme';
import { Theme } from '@interfaces/theme';

const updateFavicon = (theme: Theme) => {
	const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
	if (!favicon) return;

	favicon.href = theme === 'dark' ? '/logo-light.svg' : '/logo-dark.svg';
};

const useTheme = (initialTheme: Theme) => {
	const [theme, setTheme] = useState<Theme>(initialTheme);

	useEffect(() => {
		setThemeCookie(theme);
		const root = window.document.documentElement;

		root.classList.toggle('theme-dark', theme === 'dark');
		root.classList.toggle('theme-light', theme === 'light');
		updateFavicon(theme);
	}, [theme]);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
