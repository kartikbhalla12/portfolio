import { FC } from 'react';
import classNames from 'classnames';
import Head from 'next/head';

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
			<Head>
				<title>Kartik Bhalla</title>
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
				<link rel='icon' href='/logo.svg' />
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
