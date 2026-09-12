import { hasSanityConfig } from 'src/sanity/env';

import Studio from './Studio';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
	if (!hasSanityConfig) {
		return (
			<main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
				<h1>Sanity Studio</h1>
				<p>
					Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> to{' '}
					<code>.env.local</code> and restart the dev server. See the README
					for setup.
				</p>
			</main>
		);
	}

	return <Studio />;
}
