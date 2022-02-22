import '@theme/globals.scss';
import Layout from '@components/Layout';
import type { AppContext, AppProps } from 'next/app';
import isMobile from '@utils/isMobile';
import App from 'next/app';

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
