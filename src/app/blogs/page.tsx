import type { Metadata } from 'next';

import Blogs from '@components/Blogs';
import SiteChrome from '@components/Layout/SiteChrome';
import { siteMetadata } from '@constants/metadata';
import { getBlogPosts } from '@utils/blogs';
import { getSiteSettings } from 'src/sanity/getContent';
import { metadataFromSettings } from 'src/sanity/metadata';

export async function generateMetadata(): Promise<Metadata> {
	const settings = await getSiteSettings();
	const name = `${settings.firstName} ${settings.lastName}`.trim();

	return metadataFromSettings(settings, {
		title: 'Blogs',
		description: `Technical writing by ${name || 'Kartik Bhalla'} on React, frontend engineering, and infrastructure.`,
		canonical: `${siteMetadata.baseUrl}/blogs`,
	});
}

export default async function BlogsPage() {
	const posts = await getBlogPosts();

	return (
		<SiteChrome>
			<main id="main-content" tabIndex={-1}>
				<Blogs posts={posts} />
			</main>
		</SiteChrome>
	);
}
