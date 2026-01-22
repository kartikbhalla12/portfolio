'use server';

import { cookies } from 'next/headers';

import { Theme } from '@interfaces/theme';

const cookieName = 'theme';

const validateThemeCookie = (theme: string): theme is Theme =>
	theme === 'dark' || theme === 'light';

const getThemeCookie = async (): Promise<string | undefined> => {
	const cookieStore = await cookies();
	return cookieStore.get(cookieName)?.value;
};

const setThemeCookie = async (theme: Theme): Promise<void> => {
	const cookieStore = await cookies();
	cookieStore.set(cookieName, theme, {
		sameSite: 'none',
		secure: true,
		maxAge: 31 * 24 * 60 * 60,
	});
};

export const getDefaultThemeCookie = async (): Promise<Theme> => {
	const defaultTheme: Theme = 'dark';
	const themeCookie = await getThemeCookie();

	if (themeCookie && validateThemeCookie(themeCookie)) {
		return themeCookie as Theme;
	}

	// Don't set cookie here - cookies can only be modified in Server Actions or Route Handlers
	// The cookie will be set on the client side by useTheme hook
	return defaultTheme;
};

