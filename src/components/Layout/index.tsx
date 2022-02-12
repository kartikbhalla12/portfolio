import { FC } from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import useTheme from '@hooks/useTheme';

interface LayoutProps {
	isMobile: boolean;
}

const Layout: FC<LayoutProps> = ({ children, isMobile }) => {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Navbar isMobile={isMobile} theme={theme} onThemeChange={setTheme} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
