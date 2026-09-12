import { ThemeProps } from '@interfaces/theme';
import type { NavLink } from 'src/sanity/types';

export interface MobileNavbarProps extends ThemeProps {
	isMobile?: boolean;
	navLinks: NavLink[];
}
