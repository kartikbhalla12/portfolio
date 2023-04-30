/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: { images: { allowFutureImage: true } },
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

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
