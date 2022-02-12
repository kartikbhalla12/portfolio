import '@theme/globals.scss';
import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import { NextPageContext } from 'next';
import isMobile from '@utils/isMobile';

interface MyAppProps extends AppProps {
	isMobile: boolean;
}

function MyApp({ Component, pageProps, isMobile }: MyAppProps) {
	return (
		<Layout isMobile={isMobile}>
			<Component {...pageProps} />
		</Layout>
	);
}

export async function getServerSideProps(context: NextPageContext) {
	return {
		props: { isMobile: isMobile(context) },
	};
}

export default MyApp;
