import { isSanityImage } from './CmsImage';
import { urlFor } from './image';
import type { SanityImage } from './types';

export const sanityIconSrc = (icon?: SanityImage) => {
	if (!icon || !isSanityImage(icon) || !icon.asset) return null;
	if (icon.asset.url) return icon.asset.url;
	return urlFor(icon).width(160).url();
};
