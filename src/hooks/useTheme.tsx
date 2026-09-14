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

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
