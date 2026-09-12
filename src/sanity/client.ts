import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from './env';

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
});

export const sanityFetch = <T>(
	query: string,
	tags: string[] = ['sanity'],
): Promise<T> =>
	client.fetch<T>(
		query,
		{},
		{
			next: {
				tags,
				revalidate: 60,
			},
		},
	);
