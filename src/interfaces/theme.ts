export type Theme = 'light' | 'dark';

export interface ThemeProps {
	theme: Theme;
	onThemeChange: (theme: Theme) => void;
}
