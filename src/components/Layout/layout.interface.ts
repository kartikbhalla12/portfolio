import { Theme } from '@interfaces/theme';
import type { SiteSettings } from 'src/sanity/types';

export interface LayoutProps {
	children: React.ReactNode;
	isMobile: boolean;
	theme: Theme;
	settings: SiteSettings;
}
