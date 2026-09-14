import type { Metadata } from 'next';

import Archive from '@components/Archive';
import SiteChrome from '@components/Layout/SiteChrome';
import { siteMetadata } from '@constants/metadata';
import { getPageContent, getSiteSettings } from 'src/sanity/getContent';
import { metadataFromSettings } from 'src/sanity/metadata';

export async function generateMetadata(): Promise<Metadata> {
	const settings = await getSiteSettings();
	const name = `${settings.firstName} ${settings.lastName}`.trim();

	return metadataFromSettings(settings, {
		title: 'Archive',
		description: `Project archive for ${name || 'Kartik Bhalla'} — selected web and mobile work, stacks, and live links.`,
		canonical: `${siteMetadata.baseUrl}/archive`,
	});
}

export default async function ArchivePage() {
	const content = await getPageContent();

	return (
		<SiteChrome>
			<main id="main-content" tabIndex={-1}>
				<Archive projects={content.projects} />
			</main>
		</SiteChrome>
	);
}
