import { FC } from 'react';

import Footer from '@components/common/Footer';
import Navbar from '@components/common/Navbar';
import CustomCursor from '@components/common/CustomCursor';
import Preloader from '@components/common/Preloader';

import useTheme from '@hooks/useTheme';
import usePreloader from '@hooks/usePreloader';

import { LayoutProps } from './layout.interface';

import styles from './layout.module.scss';

const Layout: FC<LayoutProps> = ({ children, isMobile }) => {
	const { theme, setTheme } = useTheme();
	const { loading } = usePreloader();

	return (
		<>
			<Preloader isMobile={isMobile} loading={loading} />
			<Navbar isMobile={isMobile} theme={theme} onThemeChange={setTheme} />
			<div className={`${styles.layout} ${loading ? styles.preloader : ''}`}>
				{children}
				<Footer />
			</div>
			{!isMobile && <CustomCursor />}
		</>
	);
};

export default Layout;
