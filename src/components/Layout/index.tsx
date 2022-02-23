import { FC } from 'react';

import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import CustomCursor from '@components/common/CustomCursor';

import useTheme from '@hooks/useTheme';

import { LayoutProps } from './layout.interface';
import styles from './layout.module.scss';

const Layout: FC<LayoutProps> = ({ children, isMobile }) => {
	const { theme, setTheme } = useTheme();

	return (
		<>
			<Navbar isMobile={isMobile} theme={theme} onThemeChange={setTheme} />
			<div className={styles.layout}>
				{children}
				<Footer />
			</div>
			{!isMobile && <CustomCursor />}
		</>
	);
};

export default Layout;
