'use server';

import { headers } from 'next/headers';

export const isMobile = async (): Promise<boolean> => {
	const headersList = await headers();
	const userAgent = headersList.get('user-agent') || '';

	if (!userAgent) return false;

	return /iPhone|iPad|iPod|Android/i.test(userAgent);
};

