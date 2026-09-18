import Image, { type ImageProps, type StaticImageData } from 'next/image';

import { urlFor } from './image';
import type { SanityImage } from './types';

export const isSanityImage = (image: unknown): image is SanityImage =>
	Boolean(image && typeof image === 'object' && 'asset' in image);

export type CmsImageSource = SanityImage | StaticImageData | string;

export const resolveImage = (image?: CmsImageSource) => {
	if (!image) return null;

	if (typeof image === 'string') {
		return { src: image };
	}

	if (isSanityImage(image) && image.asset) {
		const originalWidth = image.asset.metadata?.dimensions?.width || 1400;
		const originalHeight = image.asset.metadata?.dimensions?.height || 900;
		const targetWidth = Math.min(800, originalWidth);
		const scale = targetWidth / originalWidth;

		return {
			src: urlFor(image).width(targetWidth).auto('format').url(),
			width: targetWidth,
			height: Math.max(1, Math.round(originalHeight * scale)),
		};
	}

	return { src: image as StaticImageData };
};

export const CmsImage = ({
	image,
	alt,
	...props
}: Omit<ImageProps, 'src'> & { image?: CmsImageSource; alt: string }) => {
	const resolved = resolveImage(image);
	if (!resolved) return null;

	const sizeProps = props.fill
		? {}
		: {
				width: resolved.width,
				height: resolved.height,
			};

	return (
		<Image
			src={resolved.src}
			alt={alt}
			placeholder={props.placeholder ?? 'empty'}
			{...sizeProps}
			{...props}
		/>
	);
};
