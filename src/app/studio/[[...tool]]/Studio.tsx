'use client';

import { useEffect, useState, type ComponentType } from 'react';

import config from '../../../../sanity.config';

type StudioApp = ComponentType<{ config: typeof config }>;

export default function Studio() {
	const [StudioApp, setStudioApp] = useState<StudioApp | null>(null);

	useEffect(() => {
		let cancelled = false;

		import('next-sanity/studio').then((mod) => {
			if (!cancelled) setStudioApp(() => mod.NextStudio);
		});

		return () => {
			cancelled = true;
		};
	}, []);

	if (!StudioApp) {
		return (
			<main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
				Loading Studio…
			</main>
		);
	}

	return <StudioApp config={config} />;
}
