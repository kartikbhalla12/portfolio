import { FC, Children, cloneElement } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Script from 'next/script';

import Footer from '@components/common/Footer';
import Navbar from '@components/common/Navbar';
import CustomCursor from '@components/common/CustomCursor';
import Preloader from '@components/common/Preloader';

import keywords from '@constants/keywords';

import useTheme from '@hooks/useTheme';
import usePreloader from '@hooks/usePreloader';

import { LayoutProps } from './layout.interface';

import styles from './layout.module.scss';
import SideElements from '@components/common/SideElements';

const Layout: FC<LayoutProps> = ({
	children,
	isMobile,
	theme: initialTheme,
}) => {
	const { theme, setTheme } = useTheme(initialTheme);
	const { loading } = usePreloader();
	return (
		<>
			<Script
				strategy='lazyOnload'
				src={`https://www.googletagmanager.com/gtag/js?id=G-YEL83ZW0WZ`}
			/>
			<Script id='google-analytics-script' strategy='lazyOnload'>
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

			<Head>
				<title>Kartik Bhalla - Portfolio Website</title>
				<meta
					name='description'
					content='As a passionate full-stack web developer, I create amazing websites and web apps to make the internet a better place. I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with modern practices like Serverless, Docker & Kubernetes for back-end.'
				/>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='author' content='Kartik Bhalla' />
				<meta charSet='utf-8' />
				<meta name='keywords' content={keywords.toString()} />
				<meta property='og:type' content='profile' />
				<meta property='og:title' content='Kartik Bhalla - Portfolio Website' />
				<meta
					property='og:description'
					content='As a passionate full-stack web developer, I create amazing websites and web apps to make the internet a better place. I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with modern practices like Serverless, Docker & Kubernetes for back-end.'
				/>
				<meta property='og:url' content='https://www.kartikbhalla.dev' />
				<meta
					property='og:image'
					content='https://www.kartikbhalla.dev/kartik.png'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@kartikbhalla12' />
				<meta
					name='twitter:title'
					content='Kartik Bhalla - Portfolio Website'
				/>
				<meta
					name='twitter:description'
					content='As a passionate full-stack web developer, I create amazing websites and web apps to make the internet a better place. I have experience working with the most advanced tools and libraries like React.js and Redux for front-end and using Node.js along with modern practices like Serverless, Docker & Kubernetes for back-end.'
				/>
				<meta
					name='twitter:image'
					content='https://www.kartikbhalla.dev/kartik.png'
				/>

				<link rel='icon' href='/logo-light.svg' id='faviconTag' />
			</Head>
			<Preloader isMobile={isMobile} loading={loading} />
			<Navbar isMobile={isMobile} theme={theme} onThemeChange={setTheme} />
			<div
				id='layout'
				className={classNames(styles.layout, {
					[styles.preloader]: loading,
					[styles.mobile]: isMobile,
				})}>
				<div className={styles.innerContainer}>
					{Children.map(children, child => cloneElement(child, { theme }))}
					<SideElements />
				</div>
				<Footer />
			</div>
			{!isMobile && <CustomCursor />}
		</>
	);
};

export default Layout;
