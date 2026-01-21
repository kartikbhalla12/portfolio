import Document, {
	DocumentContext,
	DocumentInitialProps,
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';
import { getDefaultThemeCookie } from '@utils/theme';

import { Theme } from '@interfaces/theme';

interface DocumentProps extends DocumentInitialProps {
	theme: Theme;
}

class MyDocument extends Document<DocumentProps> {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
		const initialProps = await Document.getInitialProps(ctx);
		const themeCookie = getDefaultThemeCookie(ctx);

		return {
			...initialProps,
			theme: themeCookie,
		};
	}

	render() {
		return (
			<Html className={`theme-${this.props.theme}`} lang='en'>
				<Head>
					{/* Preconnect to Google Analytics for faster loading */}
					<link rel='preconnect' href='https://www.googletagmanager.com' />
					<link rel='preconnect' href='https://www.google-analytics.com' />
					<link rel='dns-prefetch' href='https://www.googletagmanager.com' />
					<link rel='dns-prefetch' href='https://www.google-analytics.com' />

					{/* DNS prefetch for external social media domains */}
					<link rel='dns-prefetch' href='https://github.com' />
					<link rel='dns-prefetch' href='https://www.linkedin.com' />
					<link rel='dns-prefetch' href='https://www.instagram.com' />
					<link rel='dns-prefetch' href='https://www.facebook.com' />
					<link rel='dns-prefetch' href='https://twitter.com' />
					<link rel='dns-prefetch' href='https://upgradabroad.com' />

					{/* Preload critical font files */}
					<link
						rel='preload'
						href='/fonts/cerapro-regular.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
					<link
						rel='preload'
						href='/fonts/cerapro-medium.woff2'
						as='font'
						type='font/woff2'
						crossOrigin='anonymous'
					/>
				</Head>
				<body>
					<script>0</script>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
