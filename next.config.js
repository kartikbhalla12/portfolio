/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
	productionBrowserSourceMaps: false,
	// CSS optimization is handled automatically by Next.js:
	// - CSS Modules are automatically purged (unused styles removed)
	// - CSS is minified in production builds
	// - CSS is code-split per page automatically
	// SWC minification is enabled by default in Next.js 15
	webpack(config, { dev, isServer }) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		// Optimize CSS in production
		if (!dev && !isServer) {
			// CSS is automatically optimized by Next.js
			// No additional configuration needed
		}

		return config;
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
