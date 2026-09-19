import { useLayoutEffect, useRef, useState } from 'react';

import { applyTheme, readStoredTheme, setThemeCookie } from '@utils/theme';
import { Theme } from '@interfaces/theme';

const useTheme = () => {
	const [theme, setTheme] = useState<Theme>('dark');
	const initialized = useRef(false);

	useLayoutEffect(() => {
		if (!initialized.current) {
			initialized.current = true;
			const current = readStoredTheme();
			setTheme(current);
			applyTheme(current);
			setThemeCookie(current);
			return;
		}

		applyTheme(theme);
		setThemeCookie(theme);
	}, [theme]);

	return {
		theme,
		setTheme,
	};
};

export default useTheme;
