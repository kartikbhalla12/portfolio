import App from 'next/app';
import type { AppContext, AppProps } from 'next/app';

import Layout from '@components/Layout';

import isMobile from '@utils/isMobile';
import { getDefaultThemeCookie } from '@utils/theme';

import { Theme } from '@interfaces/theme';
import '@styles/globals.scss';

interface MyAppProps extends AppProps {
	isMobile: boolean;
	theme: Theme;
}

function MyApp({ Component, pageProps, isMobile, theme }: MyAppProps) {
	return (
		<Layout isMobile={isMobile} theme={theme}>
			<Component {...pageProps} isMobile={isMobile} />
		</Layout>
	);
}

MyApp.getInitialProps = async (appContext: AppContext) => {
	const appProps = await App.getInitialProps(appContext);
	const themeCookie = getDefaultThemeCookie(appContext.ctx);

	return {
		...appProps,
		isMobile: isMobile(appContext.ctx),
		theme: themeCookie,
	};
};

export default MyApp;
