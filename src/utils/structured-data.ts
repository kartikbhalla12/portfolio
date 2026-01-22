import { siteMetadata } from '@constants/metadata';

export const getPersonStructuredData = () => {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: siteMetadata.author.name,
		url: siteMetadata.baseUrl,
		image: siteMetadata.defaultImage.url,
		sameAs: [
			siteMetadata.social.github,
			siteMetadata.social.linkedin,
			siteMetadata.social.twitter,
			siteMetadata.social.instagram,
			siteMetadata.social.facebook,
		],
		jobTitle: 'Software Development Engineer',
		worksFor: {
			'@type': 'Organization',
			name: 'upGrad',
			url: 'https://upgradabroad.com',
		},
		alumniOf: [
			{
				'@type': 'EducationalOrganization',
				name: 'Netaji Subhas University of Technology',
				url: 'https://www.nsut.ac.in',
			},
		],
		knowsAbout: [
			'React.js',
			'Next.js',
			'React Native',
			'Redux',
			'Node.js',
			'MongoDB',
			'Docker',
			'Serverless Architecture',
			'Kubernetes',
			'Full Stack Web Development',
			'JavaScript',
			'TypeScript',
		],
		description:
			'Full-stack web developer specializing in React.js, Next.js, Node.js, and modern cloud technologies. Software Development Engineer at upGrad.',
	};
};

export const getWebsiteStructuredData = () => {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: siteMetadata.siteName,
		url: siteMetadata.baseUrl,
		description: siteMetadata.defaultDescription,
		author: {
			'@type': 'Person',
			name: siteMetadata.author.name,
		},
	};
};

