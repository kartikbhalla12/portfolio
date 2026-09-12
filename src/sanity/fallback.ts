import experiences from '@constants/experiences';
import { siteMetadata } from '@constants/metadata';
import navbarLinks from '@constants/navbarLinks';
import projects from '@constants/projects';

import type { HomeContent, PageContent, SiteSettings } from './types';

export const getFallbackSiteSettings = (): SiteSettings => ({
	siteName: siteMetadata.siteName,
	title: siteMetadata.defaultTitle,
	description: siteMetadata.defaultDescription,
	email: 'contact@kartikbhalla.dev',
	firstName: siteMetadata.author.firstName,
	lastName: siteMetadata.author.lastName,
	username: siteMetadata.author.username,
	twitterHandle: siteMetadata.author.twitter,
	jobTitle: 'Frontend Software Engineer',
	companyName: 'upGrad',
	companyUrl: 'https://www.upgrad.com',
	socials: [
		{ name: 'GitHub', url: siteMetadata.social.github },
		{ name: 'LinkedIn', url: siteMetadata.social.linkedin },
		{ name: 'Instagram', url: siteMetadata.social.instagram },
		{ name: 'Facebook', url: siteMetadata.social.facebook },
		{ name: 'Twitter', url: siteMetadata.social.twitter },
		{ name: 'Email', url: 'mailto:contact@kartikbhalla.dev' },
	],
	navLinks: navbarLinks,
});

export const fallbackHome: HomeContent = {
	greeting: 'Hey, my name is',
	name: 'Kartik Bhalla.',
	subtitle: 'A Frontend Software Engineer.',
	about:
		'Building scalable, high-performance web and mobile applications with a strong focus on clean UI architecture and performance optimization. Currently Software Engineer II at upGrad, delivering core product features used by thousands of learners. Passionate about writing maintainable frontend systems and creating smooth, reliable user experiences.',
	companyName: 'upGrad',
	companyUrl: 'https://upgrad.com',
	email: 'contact@kartikbhalla.dev',
	ctaLabel: 'Explore more',
	ctaHref: '#experience',
	photoAlt: 'Kartik Bhalla - Frontend Software Engineer',
	skillsIntro:
		'I work with a modern frontend stack focused on performance, scalability, and clean architecture. My core expertise includes React, Next.js, and React Native, along with TypeScript and API integrations. These tools help me build reliable, maintainable, and user-centric applications.',
	projectsIntro: 'All the images included with the projects can be scrolled through.',
};

const fallbackSkills = [
	{ name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
	{ name: 'JavaScript', url: 'https://www.javascript.com/' },
	{ name: 'ReactJS', url: 'https://reactjs.org/', animate: true },
	{ name: 'NextJS', url: 'https://nextjs.org/', fillMode: true },
	{ name: 'React Native', url: 'https://reactnative.dev/' },
	{ name: 'ReduxJS', url: 'https://redux.js.org/' },
	{ name: 'GraphQL', url: 'https://graphql.org/' },
	{ name: 'Jest', url: 'https://jestjs.io/' },
	{ name: 'Socket.IO', url: 'https://socket.io/', fillMode: true },
	{ name: 'HTML', url: 'https://html.spec.whatwg.org/multipage/' },
	{ name: 'Sass', url: 'https://sass-lang.com/' },
	{ name: 'Bootstrap', url: 'https://getbootstrap.com/' },
	{ name: 'Firebase', url: 'https://firebase.google.com/' },
	{ name: 'CSS', url: 'https://www.w3.org/Style/CSS/Overview.en.html' },
	{ name: 'Figma', url: 'https://www.figma.com' },
	{ name: 'NodeJS', url: 'https://nodejs.org/en/' },
	{ name: 'ExpressJS', url: 'https://expressjs.com/', fillMode: true },
	{ name: 'MongoDB', url: 'https://www.mongodb.com/' },
	{ name: 'Git', url: 'https://git-scm.com/' },
];

export const getFallbackPageContent = (): PageContent => ({
	home: fallbackHome,
	skills: fallbackSkills.map((skill) => ({
		_id: skill.name,
		name: skill.name,
		url: skill.url,
		fillMode: skill.fillMode,
		animate: skill.animate,
	})),
	experiences: experiences.map((exp, index) => ({
		_id: `${exp.companyName}-${exp.position}-${index}`,
		position: exp.position,
		duration: exp.duration,
		companyName: exp.companyName,
		companyUrl: exp.companyUrl,
		tasks: exp.tasks,
	})),
	projects: projects.map((project) => ({
		_id: project.name,
		name: project.name,
		description: project.description,
		keywords: project.keywords,
		links: project.links,
		images: {},
	})),
});
