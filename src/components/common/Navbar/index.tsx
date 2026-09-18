'use client';

import { FC } from 'react';

import DesktopNavbar from '@components/common/Navbar/Desktop';
import MobileNavbar from '@components/common/Navbar/Mobile';
import useTheme from '@hooks/useTheme';

import { NavbarProps } from './navbar.interface';

const Navbar: FC<NavbarProps> = ({ isMobile, theme: initialTheme, navLinks }) => {
	const { theme, setTheme } = useTheme(initialTheme);

	if (isMobile) {
		return (
			<MobileNavbar
				isMobile
				theme={theme}
				onThemeChange={setTheme}
				navLinks={navLinks}
			/>
		);
	}

	return (
		<>
			<MobileNavbar theme={theme} onThemeChange={setTheme} navLinks={navLinks} />
			<DesktopNavbar theme={theme} onThemeChange={setTheme} navLinks={navLinks} />
		</>
	);
};

export default Navbar;
