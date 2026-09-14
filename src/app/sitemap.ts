import { MetadataRoute } from 'next';

import { siteMetadata } from '@constants/metadata';
import { PORTRAIT_OG_PATH, PORTRAIT_PATH } from 'src/sanity/getContent';

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date();
	const portrait = `${siteMetadata.baseUrl}${PORTRAIT_PATH}`;
	const portraitOg = `${siteMetadata.baseUrl}${PORTRAIT_OG_PATH}`;

	return [
		{
			url: siteMetadata.baseUrl,
			lastModified,
			changeFrequency: 'weekly',
			priority: 1,
			images: [portrait, portraitOg],
		},
		{
			url: `${siteMetadata.baseUrl}/archive`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${siteMetadata.baseUrl}/blogs`,
			lastModified,
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${siteMetadata.baseUrl}/resume.pdf`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${siteMetadata.baseUrl}/resume`,
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	];
}
