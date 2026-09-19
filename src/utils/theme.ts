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

export const isTheme = (value: string | null | undefined): value is Theme =>
	value === 'light' || value === 'dark';

const themeFromCookie = (): string | undefined => {
	const match = document.cookie.match(
		new RegExp(`(?:^|; )${cookieName}=([^;]*)`),
	);
	return match ? decodeURIComponent(match[1]).replace(/['"]/g, '') : undefined;
};

export const readStoredTheme = (): Theme => {
	const fromDom = document.documentElement.getAttribute('data-theme');
	if (isTheme(fromDom)) return fromDom;

	try {
		const fromStorage = window.localStorage.getItem(cookieName);
		if (isTheme(fromStorage)) return fromStorage;
	} catch {
		// Ignore private-mode storage access errors.
	}

	const fromCookie = themeFromCookie();
	return isTheme(fromCookie) ? fromCookie : 'dark';
};

export const applyTheme = (theme: Theme) => {
	const root = document.documentElement;
	root.dataset.theme = theme;
	root.classList.toggle('theme-dark', theme === 'dark');
	root.classList.toggle('theme-light', theme === 'light');
	root.style.colorScheme = theme;
	root.classList.add('theme-ready');
	try {
		window.localStorage.setItem(cookieName, theme);
	} catch {
		// Ignore private-mode storage access errors.
	}
};

export const themeFromDocument = (): Theme => readStoredTheme();

// Blocking inline script: must stay in <head> so the stored theme is applied
// before first paint. data-theme survives React hydration; class names may not.
export const THEME_BOOTSTRAP_SCRIPT = `(function(){try{var t=null;try{t=localStorage.getItem("${cookieName}");}catch(e){}if(t!=="light"&&t!=="dark"){var m=document.cookie.match(/(?:^|; )${cookieName}=([^;]*)/);t=m?decodeURIComponent(m[1]).replace(/['"]/g,""):"dark";}if(t!=="light"&&t!=="dark")t="dark";var r=document.documentElement;r.setAttribute("data-theme",t);r.classList.remove("theme-dark","theme-light");r.classList.add("theme-"+t,"preloader-lock");r.style.colorScheme=t;}catch(e){}})();`;
