import { Theme } from '@interfaces/theme';
import type { NavLink } from 'src/sanity/types';

export interface NavbarProps {
	isMobile: boolean;
	navLinks: NavLink[];
	theme: Theme;
}
