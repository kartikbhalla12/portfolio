import { getCookie, setCookie } from 'cookies-next';

import { Theme } from '@interfaces/theme';
import { NextPageContext } from 'next';

export const cookieName = 'theme';

export const setThemeCookie = (theme: Theme, ctx?: NextPageContext) => {
	setCookie(cookieName, theme, {
		...ctx,
		sameSite: 'none',
		secure: true,
		maxAge: 31 * 24 * 60 * 60,
	});
};

export const getThemeCookie = (ctx?: NextPageContext) =>
	getCookie(cookieName, ctx) as string | undefined;

export const validateThemeCookie = (theme: string) =>
	theme === 'dark' || theme === 'light';

export const getDefaultThemeCookie = (ctx?: NextPageContext) => {
	const defaultTheme: Theme = 'dark';
	const themeCookie = getThemeCookie(ctx);

	if (themeCookie && validateThemeCookie(themeCookie))
		return themeCookie as Theme;

	setThemeCookie(defaultTheme, ctx);
	return defaultTheme;
};
