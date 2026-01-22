import { Theme } from '@interfaces/theme';

export interface LayoutClientProps {
	children: React.ReactNode;
	isMobile: boolean;
	theme: Theme;
}