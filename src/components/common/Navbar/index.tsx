import { FC } from 'react';

import DesktopNavbar from '@components/common/Navbar/Desktop';
import MobileNavbar from '@components/common/Navbar/Mobile';

import { NavbarProps } from './navbar.interface';

const Navbar: FC<NavbarProps> = ({ isMobile, ...props }) => {
	if (isMobile) return <MobileNavbar {...props} isMobile />;
	return (
		<>
			<MobileNavbar {...props} /> {/* can adjust according to height & width */}
			<DesktopNavbar {...props} />
		</>
	);
};

export default Navbar;
