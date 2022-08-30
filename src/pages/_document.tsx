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
				<Head />
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
