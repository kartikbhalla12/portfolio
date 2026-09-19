import type { SiteSettings } from 'src/sanity/types';

export interface LayoutProps {
	children: React.ReactNode;
	settings: SiteSettings;
}
