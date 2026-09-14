import type { Metadata } from 'next';

import { createMetadata, siteMetadata } from '@constants/metadata';
import type { SiteSettings } from './types';

export const metadataFromSettings = (
	settings: SiteSettings,
	options?: { title?: string; description?: string; canonical?: string },
): Metadata => {
	const name = `${settings.firstName} ${settings.lastName}`.trim();

	return createMetadata({
		title: options?.title || settings.title,
		description: options?.description || settings.description,
		image: {
			url: `${siteMetadata.baseUrl}/kartik-bhalla-og.jpg`,
			width: 1200,
			height: 1200,
			alt: name || 'Kartik Bhalla',
		},
		canonical: options?.canonical || siteMetadata.baseUrl,
		siteName: settings.siteName,
	});
};
