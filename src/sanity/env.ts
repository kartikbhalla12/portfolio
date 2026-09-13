export const projectId =
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion =
	process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01';

export const hasSanityConfig = Boolean(
	process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);
