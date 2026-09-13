import type { Metadata } from 'next';

export { viewport } from 'next-sanity/studio';

export const metadata: Metadata = {
	robots: {
		index: false,
		follow: false,
	},
};

export default function StudioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<style>{`
				html, body {
					cursor: auto !important;
					overflow: auto !important;
				}

				body a,
				body button,
				body [role='button'],
				body [role='menuitem'],
				body [role='tab'],
				body label,
				body select,
				body summary {
					cursor: pointer !important;
				}
			`}</style>
			{children}
		</>
	);
}
