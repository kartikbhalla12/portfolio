import { FC } from 'react';
import DesktopNavbar from './Desktop';
import MobileNavbar from './Mobile';

interface NavbarProps {
	isMobile: boolean;
	onBlur?: (a: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ isMobile, onBlur }) => {
	if (isMobile) return <MobileNavbar onBlur={onBlur} />;
	return (
		<>
			<MobileNavbar />
			<DesktopNavbar />
		</>
	);
};

export default Navbar;
