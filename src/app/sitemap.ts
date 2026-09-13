import { MetadataRoute } from 'next';

import { siteMetadata } from '@constants/metadata';
import { PORTRAIT_PATH } from 'src/sanity/getContent';

export default function sitemap(): MetadataRoute.Sitemap {
	const portrait = `${siteMetadata.baseUrl}${PORTRAIT_PATH}`;

	return [
		{
			url: siteMetadata.baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
			images: [portrait],
		},
		{
			url: `${siteMetadata.baseUrl}/resume`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	];
}

