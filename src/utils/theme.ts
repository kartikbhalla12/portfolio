import { setCookie } from 'cookies-next';

import { Theme } from '@interfaces/theme';

export const cookieName = 'theme';

export const setThemeCookie = (theme: Theme) => {
	setCookie(cookieName, theme, {
		sameSite: 'none',
		secure: true,
		maxAge: 31 * 24 * 60 * 60,
	});
};
