'use client';

import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import Script from 'next/script';

import Footer from '@components/common/Footer';
import Navbar from '@components/common/Navbar';
import CustomCursor from '@components/common/CustomCursor';
import Preloader from '@components/common/Preloader';
import SideElements from '@components/common/SideElements';
import styles from '@components/Layout/layout.module.scss';
import { LayoutClientProps } from '@components/Layout/layout.interface';

import useTheme from '@hooks/useTheme';
import usePreloader from '@hooks/usePreloader';

const LayoutClient = ({ children, isMobile, theme: initialTheme }: LayoutClientProps) => {
	const { theme, setTheme } = useTheme(initialTheme);
	const { loading } = usePreloader();

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=G-YEL83ZW0WZ`}
			/>
			<Script id='google-analytics-script' strategy='afterInteractive'>
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-YEL83ZW0WZ', {
						page_path: window.location.pathname,
						cookie_flags: 'SameSite=None;Secure',
						cookie_domain: '.kartikbhalla.dev',
					});
				`}
			</Script>

			<Preloader isMobile={isMobile} loading={loading} />
			<Navbar isMobile={isMobile} theme={theme} onThemeChange={setTheme} />
			<div
				id='layout'
				className={classNames(styles.layout, {
					[styles.preloader]: loading,
					[styles.mobile]: isMobile,
				})}>
				{Children.map(children, child =>
					cloneElement(child as React.ReactElement<any>, { theme } as any)
				)}
				<SideElements />
				<Footer />
			</div>
			{!isMobile && <CustomCursor />}
		</>
	);
};

export default LayoutClient;

