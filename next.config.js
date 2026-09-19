/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
	productionBrowserSourceMaps: false,
	reactCompiler: true,
	agentRules: false,
	serverExternalPackages: ['sanity', '@sanity/vision'],
	images: {
		formats: ['image/avif', 'image/webp'],
		minimumCacheTTL: 2678400,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
	async headers() {
		const longCache = [
			{
				key: 'Cache-Control',
				value: 'public, max-age=2592000, stale-while-revalidate=604800',
			},
		];

		return [
			{ source: '/manifest.webmanifest', headers: longCache },
			{ source: '/kartik-bhalla.jpg', headers: longCache },
			{ source: '/kartik-bhalla-og.jpg', headers: longCache },
		];
	},
};

module.exports = nextConfig;
