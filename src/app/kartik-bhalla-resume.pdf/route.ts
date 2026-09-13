import { readFile } from 'node:fs/promises';
import path from 'node:path';

import { NextResponse } from 'next/server';

import { getSiteSettings } from 'src/sanity/getContent';

const FALLBACK_RESUME = path.join(
	process.cwd(),
	'src/data/kartik-bhalla-resume.pdf',
);

const pdfHeaders = {
	'Content-Type': 'application/pdf',
	'Content-Disposition': 'inline; filename="kartik-bhalla-resume.pdf"',
	'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=86400',
};

const servePdf = (body: BodyInit) =>
	new NextResponse(body, { headers: pdfHeaders });

export async function GET() {
	const { resumeUrl } = await getSiteSettings();

	if (resumeUrl.startsWith('https://')) {
		try {
			const upstream = await fetch(resumeUrl, {
				next: { revalidate: 60, tags: ['sanity', 'settings'] },
			});

			if (upstream.ok && upstream.body) {
				return servePdf(upstream.body);
			}
		} catch {
			// Fall through to the local PDF.
		}
	}

	const body = await readFile(FALLBACK_RESUME);
	return servePdf(body);
}
