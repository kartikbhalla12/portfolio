/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compress: true,
	productionBrowserSourceMaps: false,
	turbopack: {
		rules: {
		  "*.svg": {
			loaders: ["@svgr/webpack"],
			as: "*.js",
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
