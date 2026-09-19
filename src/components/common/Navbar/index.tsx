'use client';

import { FC } from 'react';

import DesktopNavbar from '@components/common/Navbar/Desktop';
import MobileNavbar from '@components/common/Navbar/Mobile';
import useTheme from '@hooks/useTheme';

import { NavbarProps } from './navbar.interface';

const Navbar: FC<NavbarProps> = ({ navLinks }) => {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<MobileNavbar theme={theme} onThemeChange={setTheme} navLinks={navLinks} />
			<DesktopNavbar theme={theme} onThemeChange={setTheme} navLinks={navLinks} />
		</>
	);
};

export default Navbar;
