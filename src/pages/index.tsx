import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import Home from '@components/Home';

import isMobile from '@utils/isMobile';

interface LandingPageProps {
	isMobile: boolean;
}

const LandingPage: NextPage<LandingPageProps> = ({ isMobile }) => {
	return (
		<>
			<Head>
				<title>Kartik Bhalla</title>
				<meta name='description' content='Kartik Bhalla - Portfolio Website' />
				<link rel='icon' href='/icons/logo.svg' />
			</Head>

			<Home isMobile={isMobile} />
		</>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	return {
		props: { isMobile: isMobile(context) },
	};
}

export default LandingPage;
