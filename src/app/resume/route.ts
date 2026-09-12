import { redirect } from 'next/navigation';

import { getSiteSettings } from 'src/sanity/getContent';

export async function GET() {
	const settings = await getSiteSettings();
	redirect(settings.resumeUrl);
}
