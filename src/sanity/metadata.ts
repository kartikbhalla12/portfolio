import type { Metadata } from 'next';

import { createMetadata } from '@constants/metadata';
import { urlFor } from './image';
import { isSanityImage } from './CmsImage';
import type { SiteSettings } from './types';

export const metadataFromSettings = (settings: SiteSettings): Metadata => {
	const ogImage =
		settings.ogImage && isSanityImage(settings.ogImage) && settings.ogImage.asset
			? {
					url: urlFor(settings.ogImage).width(1200).height(630).url(),
					width: 1200,
					height: 630,
					alt: settings.title,
				}
			: undefined;

	return createMetadata({
		title: settings.title,
		description: settings.description,
		image: ogImage,
		siteName: settings.siteName,
	});
};
