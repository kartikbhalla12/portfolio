import { NextResponse } from 'next/server';

import { getHomePortraitUrl } from 'src/sanity/getContent';

export const servePortrait = async (square = false) => {
	const portraitUrl = await getHomePortraitUrl({ square });
	if (!portraitUrl) {
		return new NextResponse('Not found', { status: 404 });
	}

	const upstream = await fetch(portraitUrl, {
		next: { revalidate: 60, tags: ['sanity', 'home'] },
	});

	if (!upstream.ok || !upstream.body) {
		return new NextResponse('Not found', { status: 404 });
	}

	return new NextResponse(upstream.body, {
		headers: {
			'Content-Type': 'image/jpeg',
			'Cache-Control':
				'public, max-age=2592000, s-maxage=2592000, stale-while-revalidate=604800',
		},
	});
};
