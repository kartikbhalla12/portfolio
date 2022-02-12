import { FC } from 'react';

import DesktopNavbar from '@components/Navbar/Desktop';
import MobileNavbar from '@components/Navbar/Mobile';

import { NavbarProps } from './navbar.interface';

const Navbar: FC<NavbarProps> = ({ isMobile, ...props }) => {
	if (isMobile) return <MobileNavbar {...props} />;
	return (
		<>
			<MobileNavbar {...props} /> {/* can adjust according to height & width */}
			<DesktopNavbar {...props} />
		</>
	);
};

export default Navbar;
