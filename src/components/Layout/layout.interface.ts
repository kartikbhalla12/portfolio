import { Theme } from '@interfaces/theme';

export interface LayoutProps {
	children: JSX.Element;
	isMobile: boolean;
	theme: Theme;
}
