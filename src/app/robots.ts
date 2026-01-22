import { MetadataRoute } from 'next';

import { siteMetadata } from '@constants/metadata';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/api/', '/_next/'],
			},
		],
		sitemap: `${siteMetadata.baseUrl}/sitemap.xml`,
	};
}

