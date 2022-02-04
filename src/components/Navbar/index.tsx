import { FC } from 'react';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';

interface NavbarProps {
	isMobile: boolean;
	onBlur?: (a: boolean) => void;
	onThemeChange: (theme: string) => void;
	theme: string;
}

const Navbar: FC<NavbarProps> = ({
	isMobile,
	onBlur,
	onThemeChange,
	theme,
}) => {
	if (isMobile) return <MobileNavbar onBlur={onBlur} />;
	return (
		<>
			<MobileNavbar />
			<DesktopNavbar onThemeChange={onThemeChange} theme={theme} />
		</>
	);
};

export default Navbar;
