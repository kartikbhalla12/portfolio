import App from 'next/app';
import type { AppContext, AppProps } from 'next/app';

import Layout from '@components/Layout';

import isMobile from '@utils/isMobile';

import '@styles/globals.scss';

interface MyAppProps extends AppProps {
	isMobile: boolean;
}

function MyApp({ Component, pageProps, isMobile }: MyAppProps) {
	return (
		<Layout isMobile={isMobile}>
			<Component {...pageProps} isMobile={isMobile} />
		</Layout>
	);
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps, isMobile: isMobile(appContext.ctx) };
};

export default MyApp;
