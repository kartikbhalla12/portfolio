import { MetadataRoute } from 'next';

import { siteMetadata } from '@constants/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteMetadata.baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	];
}

