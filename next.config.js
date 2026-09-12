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
	redirects: async () => [
		{
			source: '/resume',
			destination: '/kartik-bhalla-resume.pdf',
			permanent: true,
		},
	],
};

module.exports = nextConfig;
