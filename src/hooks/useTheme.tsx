import { useEffect, useState } from 'react';
import { Theme } from 'interfaces/theme';

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
		if (theme === 'light') root.classList.add('light');
		else root.classList.remove('light');
	}, [theme]);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
