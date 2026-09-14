import type { NavLink } from 'src/sanity/types';

const PATH_TO_HASH: Record<string, string> = {
	'/skills': '#skills',
	'/experience': '#experience',
	'/projects': '#projects',
};

export const toHashHref = (href: string) => {
	if (href.startsWith('/#')) return href.slice(1);
	return PATH_TO_HASH[href] || href;
};

export const isInPageHash = (href: string) => toHashHref(href).startsWith('#');

export const resolveNavHref = (link: NavLink, pathname: string) => {
	if (link.id === 'home' || link.href === '/') {
		return pathname === '/' ? '#home' : '/';
	}

	const hash = toHashHref(link.href);
	if (hash.startsWith('#')) {
		return pathname === '/' ? hash : `/${hash}`;
	}

	return link.href;
};

export const isActiveNavLink = (
	link: NavLink,
	pathname: string,
	activeSection: string,
) => {
	if (!link.href || link.href.startsWith('http')) return false;

	const path = link.href.startsWith('/#')
		? '/'
		: link.href.split('#')[0] || '/';

	if (path !== '/' && pathname === path) return true;
	return pathname === '/' && Boolean(link.id) && activeSection === link.id;
};
