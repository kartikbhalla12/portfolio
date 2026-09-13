import { MetadataRoute } from 'next';

import { siteMetadata } from '@constants/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteMetadata.baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${siteMetadata.baseUrl}/resume`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	];
}

