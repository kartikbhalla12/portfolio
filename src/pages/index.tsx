import { useEffect, useState } from 'react';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import Home from '@components/Home';
import Footer from '@components/Footer';
import Navbar from '@components/Navbar';

import isMobile from '@utils/isMobile';

import styles from './index.module.scss';

interface LandingPageProps {
	isMobile: boolean;
}

type Theme = 'light' | 'dark';

const LandingPage: NextPage<LandingPageProps> = ({ isMobile }) => {
	const [isBlur, setIsBlur] = useState(false);
	const handleBlur = (blur: boolean) => {
		setIsBlur(blur);
	};

	const [theme, setTheme] = useState<Theme>('dark');

	const handleThemeChange = (theme: Theme) => {
		setTheme(theme);
	};

	useEffect(() => {
		async function init() {
			const theme = await localStorage.getItem('theme');
			if (theme) setTheme(theme as Theme);
		}
		init();
	}, []);

	useEffect(() => {
		window.localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<div className={theme}>
			<Head>
				<title>Kartik Bhalla</title>
				<meta name='description' content='Kartik Bhalla - Portfolio Website' />
				<link rel='icon' href='/icons/logo.svg' />
			</Head>

			<Navbar
				isMobile={isMobile}
				onBlur={handleBlur}
				theme={theme}
				onThemeChange={handleThemeChange}
			/>

			<main className={`${styles.main} ${isBlur ? styles.blur : ''} `}>
				<Home isMobile={isMobile} />
				<Footer />
			</main>
		</div>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	return {
		props: { isMobile: isMobile(context) },
	};
}

export default LandingPage;
