import { Theme } from '@interfaces/theme';

export interface LayoutProps {
	children?: React.ReactNode;
	isMobile: boolean;
	theme: Theme;
}
