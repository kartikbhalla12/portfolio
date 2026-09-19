import Script from 'next/script';

import Footer from '@components/common/Footer';
import Navbar from '@components/common/Navbar';
import CustomCursor from '@components/common/CustomCursor';
import Preloader from '@components/common/Preloader';
import SideElements from '@components/common/SideElements';
import styles from '@components/Layout/layout.module.scss';
import type { LayoutProps } from '@components/Layout/layout.interface';

const GA_ID = 'G-YEL83ZW0WZ';

const Layout = ({ children, settings }: LayoutProps) => {
	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
			/>
			<Script id='google-analytics-script' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_ID}', {
						page_path: window.location.pathname,
						cookie_flags: 'SameSite=None;Secure',
						cookie_domain: '.kartikbhalla.dev',
					});
				`}
			</Script>

			<Preloader />
			<Navbar navLinks={settings.navLinks} />
			<div id='layout' className={styles.layout}>
				{children}
				<SideElements settings={settings} />
				<Footer settings={settings} />
			</div>
			<CustomCursor />
		</>
	);
};

export default Layout;
