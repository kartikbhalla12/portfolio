import { FC } from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import Script from 'next/script';

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
						});
				`}
			</Script>

			<Head>
				<title>Kartik Bhalla</title>
				<meta name='description' content='Kartik Bhalla - Portfolio Website' />
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='author' content='Kartik Bhalla' />
				<meta charSet='utf-8' />
				<meta
					name='keywords'
					content="
						kartik Bhalla, 
						kartik bhalla dev, 
						kartik bhalla, 
						kartik dev, 
						bhalla dev, 
						Kartik, 
						Bhalla, 
						thedemon12, 
						kartikbhalla, 
						kartikbhalla.dev, 
						thedemon, 
						kartik's, 
						kartik bhalla's, 
						kartik bhalla's portfolio, 
						kartik's portfolio, 
						Kartik Bhalla Website, 
						upgrad,
						upgrad abroad,
						software developer upgrad,
						software developer,
						noida, 
						study abroad,
						technology,
						nsut, 
						netaji subhas university of technology, 
						netaji subhas university of technology east campus, 
						netaji subhas,
						aiactr,
						ait,
						ambedkar institute,
						ambedkar institute of advanced communication technologies and research,
						nsut east campus, 
						east, 
						east campus, 
						training and placement,
						placement coordinator,
						tnp,
						training, 
						placement, 
						react,
						reactjs,
						next,
						nextjs,
						New Delhi, 
						MERN Stack, 
						Full Stack Dev, 
						Full Stack Developer, 
						Cloud"
				/>
				<meta property='og:type' content='profile' />
				<meta property='og:title' content='Kartik Bhalla' />
				<meta
					property='og:description'
					content='Kartik Bhalla - Portfolio Website'
				/>
				<meta property='og:url' content='https://www.kartikbhalla.dev' />
				<meta
					property='og:image'
					content='https://www.kartikbhalla.dev/kartik.png'
				/>
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content='@kartikbhalla12' />
				<meta name='twitter:title' content='Kartik Bhalla' />
				<meta
					name='twitter:description'
					content='Kartik Bhalla - Portfolio Website'
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
				{children}
				<Footer />
			</div>
			{!isMobile && <CustomCursor />}
		</>
	);
};

export default Layout;
