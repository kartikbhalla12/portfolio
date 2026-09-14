import type { Metadata } from 'next';

import keywords from './keywords';

const baseUrl = 'https://www.kartikbhalla.dev';
const siteName = 'Kartik Bhalla';
const defaultTitle = 'Kartik Bhalla | Frontend Software Engineer';
const defaultDescription =
	'Kartik Bhalla is a Frontend Software Engineer building web and mobile apps with React, Next.js, React Native, and TypeScript. Personal portfolio and resume.';

const defaultImage = {
	url: 'https://www.kartikbhalla.dev/kartik-bhalla-og.jpg',
	width: 1200,
	height: 1200,
	alt: 'Kartik Bhalla',
};

export const siteMetadata = {
	baseUrl,
	siteName,
	defaultTitle,
	defaultDescription,
	defaultImage,
	author: {
		name: 'Kartik Bhalla',
		url: baseUrl,
		firstName: 'Kartik',
		lastName: 'Bhalla',
		username: 'kartikbhalla12',
		twitter: '@kartikbhalla12',
	},
	social: {
		github: 'https://github.com/kartikbhalla12',
		linkedin: 'https://www.linkedin.com/in/kartikbhalla/',
		twitter: 'https://twitter.com/kartikbhalla12',
		instagram: 'https://www.instagram.com/_kartikbhalla/',
		facebook: 'https://www.facebook.com/kbhalla12',
	},
};

export const createMetadata = (options?: {
	title?: string | Metadata['title'];
	description?: string;
	image?: typeof defaultImage;
	canonical?: string;
	noindex?: boolean;
	siteName?: string;
}): Metadata => {
	const {
		title: titleOption = defaultTitle,
		description = defaultDescription,
		image = defaultImage,
		canonical = baseUrl,
		noindex = false,
		siteName: siteNameOption = siteName,
	} = options || {};

	const finalTitle: Metadata['title'] =
		typeof titleOption === 'string' && titleOption === defaultTitle
			? { default: titleOption, template: '%s | Kartik Bhalla' }
			: titleOption;

	const titleString =
		typeof finalTitle === 'string'
			? finalTitle
			: typeof finalTitle === 'object' && finalTitle !== null && 'default' in finalTitle
				? finalTitle.default || defaultTitle
				: defaultTitle;

	return {
		metadataBase: new URL(baseUrl),
		title: finalTitle,
		description,
		keywords,
		authors: [{ name: siteMetadata.author.name, url: siteMetadata.author.url }],
		creator: siteMetadata.author.name,
		publisher: siteMetadata.author.name,
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		openGraph: {
			type: 'profile',
			locale: 'en_US',
			url: canonical,
			siteName: siteNameOption,
			title: titleString,
			description,
			images: [image],
			firstName: siteMetadata.author.firstName,
			lastName: siteMetadata.author.lastName,
			username: siteMetadata.author.username,
		},
		twitter: {
			card: 'summary_large_image',
			site: siteMetadata.author.twitter,
			creator: siteMetadata.author.twitter,
			title: titleString,
			description,
			images: [{ url: image.url, alt: image.alt }],
		},
		robots: {
			index: !noindex,
			follow: !noindex,
			googleBot: {
				index: !noindex,
				follow: !noindex,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		icons: {
			icon: [
				{ url: '/favicon.ico', sizes: '48x48' },
				{ url: '/favicon-48.png', type: 'image/png', sizes: '48x48' },
				{ url: '/favicon-96.png', type: 'image/png', sizes: '96x96' },
				{ url: '/favicon-192.png', type: 'image/png', sizes: '192x192' },
			],
			apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
			shortcut: '/favicon.ico',
		},
		alternates: {
			canonical,
		},
		verification: {
			// Add your verification codes here when available
			// google: 'your-google-verification-code',
			yandex: "2edb248b34c004fa"
		},
	};
};

export const rootMetadata = createMetadata();

