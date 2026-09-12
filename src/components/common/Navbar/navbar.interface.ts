import { ThemeProps } from '@interfaces/theme';
import type { NavLink } from 'src/sanity/types';

export interface NavbarProps extends ThemeProps {
	isMobile: boolean;
	navLinks: NavLink[];
}
