import type { Metadata } from 'next';

import keywords from './keywords';

const baseUrl = 'https://www.kartikbhalla.dev';
const siteName = 'Kartik Bhalla Portfolio';
const defaultTitle = 'Kartik Bhalla - Full Stack Web Developer Portfolio';
const defaultDescription =
	'Full-stack web developer specializing in React.js, Next.js, Node.js, MongoDB, Docker, and Kubernetes. Software Development Engineer at upGrad. Building modern web applications with cutting-edge technologies.';

const defaultImage = {
	url: 'https://www.kartikbhalla.dev/kartik.png',
	width: 1200,
	height: 630,
	alt: 'Kartik Bhalla - Full Stack Web Developer',
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
		linkedin: 'https://www.linkedin.com/in/kartikbhalla12',
		twitter: 'https://twitter.com/kartikbhalla12',
		instagram: 'https://www.instagram.com/kartikbhalla12',
		facebook: 'https://www.facebook.com/kartikbhalla12',
	},
};

export const createMetadata = (options?: {
	title?: string | Metadata['title'];
	description?: string;
	image?: typeof defaultImage;
	canonical?: string;
	noindex?: boolean;
}): Metadata => {
	const {
		title: titleOption = defaultTitle,
		description = defaultDescription,
		image = defaultImage,
		canonical = baseUrl,
		noindex = false,
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
			siteName,
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
			images: [image.url],
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
			icon: '/logo-light.svg',
			shortcut: '/logo-light.svg',
			apple: '/logo-light.svg',
		},
		alternates: {
			canonical,
		},
		verification: {
			// Add your verification codes here when available
			// google: 'your-google-verification-code',
			// yandex: 'your-yandex-verification-code',
		},
	};
};

export const rootMetadata = createMetadata();

