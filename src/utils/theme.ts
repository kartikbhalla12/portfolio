import { getCookie, setCookie } from 'cookies-next';

import { Theme } from '@interfaces/theme';
import { NextPageContext } from 'next';

export const cookieName = 'theme';
type OptionalThemeType = Theme | undefined;

export const setThemeCookie = (theme: Theme, ctx?: NextPageContext) => {
	setCookie(cookieName, theme, { ...ctx, sameSite: true });
};

export const getThemeCookie = (ctx?: NextPageContext): OptionalThemeType =>
	getCookie(cookieName, ctx) as OptionalThemeType;

export const getDefaultThemeCookie = (ctx?: NextPageContext) => {
	const defaultTheme: Theme = 'dark';
	const themeCookie = getThemeCookie(ctx);

	if (!themeCookie) setThemeCookie(defaultTheme, ctx);

	return themeCookie || defaultTheme;
};
