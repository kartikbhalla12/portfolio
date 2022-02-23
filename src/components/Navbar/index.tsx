import { FC } from 'react';

import DesktopNavbar from '@components/Navbar/Desktop';
import MobileNavbar from '@components/Navbar/Mobile';

import { NavbarProps } from './navbar.interface';

export const navbarLinks = [
	{ href: '/', title: 'Home' },
	{ href: '/#skills', title: 'Skills' },
	{ href: '/#experience', title: 'Experience' },
	{ href: '/#projects', title: 'Projects' },
	{ href: '/blogs', title: 'Blogs' },
	{
		href: '/kartik-bhalla-resume.pdf',
		title: 'Resume',
		rel: 'noreferrer',
		target: '_blank',
	},
];

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
