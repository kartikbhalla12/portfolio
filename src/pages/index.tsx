import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import Home from '@components/Home';
import Skills from '@components/Skills';

import styles from './index.module.scss';

interface LandingPageProps {
	isMobile: boolean;
}

const LandingPage: NextPage<LandingPageProps> = ({ isMobile }) => {
	return (
		<>
			<Head>
				<title>Kartik Bhalla</title>
				<meta name='description' content='Kartik Bhalla - Portfolio Website' />
				<link rel='icon' href='/logo-light.svg' id='faviconTag' />
			</Head>
			<main tabIndex={-1}>
				<Home isMobile={isMobile} />
				<Skills isMobile={isMobile} />
			</main>
		</>
	);
};

export default LandingPage;
