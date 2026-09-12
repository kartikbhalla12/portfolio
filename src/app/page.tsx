import type { Metadata } from 'next';

import Home from '@components/Home';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Projects from '@components/Projects';
import SiteChrome from '@components/Layout/SiteChrome';
import { getPageContent, getSiteSettings } from 'src/sanity/getContent';
import { metadataFromSettings } from 'src/sanity/metadata';

export async function generateMetadata(): Promise<Metadata> {
	const settings = await getSiteSettings();
	return metadataFromSettings(settings);
}

export default async function HomePage() {
	const content = await getPageContent();

	return (
		<SiteChrome>
			<main id='main-content' tabIndex={-1}>
				<Home content={content.home} />
				<Skills skills={content.skills} intro={content.home.skillsIntro} />
				<Experience experiences={content.experiences} />
				<Projects
					projects={content.projects}
					intro={content.home.projectsIntro}
				/>
			</main>
		</SiteChrome>
	);
}
