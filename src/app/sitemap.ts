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
		{
			url: `${siteMetadata.baseUrl}/#skills`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${siteMetadata.baseUrl}/#experience`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${siteMetadata.baseUrl}/#projects`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	];
}

