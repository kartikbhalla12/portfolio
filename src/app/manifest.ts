import type { MetadataRoute } from 'next';

import { siteMetadata } from '@constants/metadata';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: siteMetadata.siteName,
		short_name: siteMetadata.author.firstName,
		description: siteMetadata.defaultDescription,
		start_url: '/',
		display: 'standalone',
		background_color: '#0e121a',
		theme_color: '#fa8b00',
		icons: [
			{
				src: '/favicon-192.png',
				sizes: '192x192',
				type: 'image/png',
				purpose: 'any',
			},
			{
				src: '/favicon-512.png',
				sizes: '512x512',
				type: 'image/png',
				purpose: 'any',
			},
		],
	};
}
