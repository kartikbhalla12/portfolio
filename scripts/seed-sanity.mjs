import { createReadStream, existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { createClient } from '@sanity/client';

const root = path.resolve(import.meta.dirname, '..');

const loadEnv = () => {
	for (const file of ['.env.local', '.env']) {
		const filePath = path.join(root, file);
		if (!existsSync(filePath)) continue;

		for (const line of readFileSync(filePath, 'utf8').split('\n')) {
			const match = line.match(/^([^#=]+)=(.*)$/);
			if (!match) continue;

			const key = match[1].trim();
			const value = match[2].trim().replace(/^['"]|['"]$/g, '');
			if (!process.env[key]) process.env[key] = value;
		}
	}
};

loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-01-01';

if (!projectId || projectId === 'placeholder') {
	console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID. See README.md.');
	process.exit(1);
}

if (!token) {
	console.error('Missing SANITY_API_WRITE_TOKEN. Create a write token in Sanity and add it to .env.local.');
	process.exit(1);
}

const client = createClient({
	projectId,
	dataset,
	apiVersion,
	token,
	useCdn: false,
});

const uploadImage = async (relativePath) => {
	const filePath = path.join(root, relativePath);
	if (!existsSync(filePath)) {
		console.warn(`Skipping missing file: ${relativePath}`);
		return undefined;
	}

	const asset = await client.assets.upload('image', createReadStream(filePath), {
		filename: path.basename(filePath),
		contentType: filePath.endsWith('.svg') ? 'image/svg+xml' : undefined,
	});

	return {
		_type: 'image',
		asset: { _type: 'reference', _ref: asset._id },
	};
};

const uploadFile = async (relativePath, contentType) => {
	const filePath = path.join(root, relativePath);
	if (!existsSync(filePath)) {
		console.warn(`Skipping missing file: ${relativePath}`);
		return undefined;
	}

	const asset = await client.assets.upload('file', createReadStream(filePath), {
		filename: path.basename(filePath),
		contentType,
	});

	return {
		_type: 'file',
		asset: { _type: 'reference', _ref: asset._id },
	};
};

const siteSettings = {
	_id: 'siteSettings',
	_type: 'siteSettings',
	siteName: 'Kartik Bhalla',
	title: 'Kartik Bhalla | Frontend Software Engineer',
	description:
		'Kartik Bhalla is a Frontend Software Engineer building web and mobile apps with React, Next.js, React Native, and TypeScript. Personal portfolio and resume.',
	email: 'contact@kartikbhalla.dev',
	firstName: 'Kartik',
	lastName: 'Bhalla',
	username: 'kartikbhalla12',
	twitterHandle: '@kartikbhalla12',
	jobTitle: 'Frontend Software Engineer',
	companyName: 'upGrad',
	companyUrl: 'https://www.upgrad.com',
};

const inPageHrefs = {
	'/skills': '/#skills',
	'/experience': '/#experience',
	'/projects': '/#projects',
	'/resume': '/resume.pdf',
	'/kartik-bhalla-resume.pdf': '/resume.pdf',
};

const toInPageHref = (href) => inPageHrefs[href] || href;

const headerNavLinks = [
	{ _key: 'home', href: '/', title: 'Home', id: 'home' },
	{ _key: 'skills', href: '/#skills', title: 'Skills', id: 'skills' },
	{ _key: 'experience', href: '/#experience', title: 'Experience', id: 'experience' },
	{ _key: 'projects', href: '/#projects', title: 'Projects', id: 'projects' },
	{ _key: 'blogs', href: '/blogs', title: 'Blogs' },
	{
		_key: 'resume',
		href: '/resume.pdf',
		title: 'Resume',
		rel: 'noreferrer',
		target: '_blank',
	},
];

const socialsSeed = [
	{
		_key: 'github',
		name: 'GitHub',
		url: 'https://github.com/kartikbhalla12',
		sidebarFile: 'src/icons/github-1.svg',
		footerFile: 'src/icons/github-2.svg',
	},
	{
		_key: 'linkedin',
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/kartikbhalla/',
		sidebarFile: 'src/icons/linkedin-1.svg',
		footerFile: 'src/icons/linkedin-2.svg',
	},
	{
		_key: 'instagram',
		name: 'Instagram',
		url: 'https://www.instagram.com/_kartikbhalla/',
		sidebarFile: 'src/icons/instagram-1.svg',
		footerFile: 'src/icons/instagram-2.svg',
	},
	{
		_key: 'facebook',
		name: 'Facebook',
		url: 'https://www.facebook.com/kbhalla12',
		sidebarFile: 'src/icons/facebook-1.svg',
		footerFile: 'src/icons/facebook-2.svg',
	},
	{
		_key: 'twitter',
		name: 'Twitter',
		url: 'https://twitter.com/kartikbhalla12',
		sidebarFile: 'src/icons/twitter-1.svg',
		footerFile: 'src/icons/twitter-2.svg',
	},
	{
		_key: 'email',
		name: 'Email',
		url: 'mailto:contact@kartikbhalla.dev',
		footerFile: 'src/icons/email.svg',
	},
];

const home = {
	_id: 'home',
	_type: 'home',
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
};

const skillsIntro =
	'I work with a modern frontend stack focused on performance, scalability, and clean architecture. My core expertise includes React, Next.js, and React Native, along with TypeScript and API integrations. These tools help me build reliable, maintainable, and user-centric applications.';

const projectsIntro =
	'All the images included with the projects can be scrolled through.';

const skills = [
	{ id: 'typescript', name: 'TypeScript', file: 'src/icons/tech/ts.svg', url: 'https://www.typescriptlang.org/' },
	{ id: 'javascript', name: 'JavaScript', file: 'src/icons/tech/js.svg', url: 'https://www.javascript.com/' },
	{ id: 'react', name: 'ReactJS', file: 'src/icons/tech/react.svg', url: 'https://reactjs.org/', animate: true },
	{ id: 'next', name: 'NextJS', file: 'src/icons/tech/next.svg', url: 'https://nextjs.org/', fillMode: true },
	{ id: 'react-native', name: 'React Native', file: 'src/icons/tech/react.svg', url: 'https://reactnative.dev/' },
	{ id: 'redux', name: 'ReduxJS', file: 'src/icons/tech/redux.svg', url: 'https://redux.js.org/' },
	{ id: 'graphql', name: 'GraphQL', file: 'src/icons/tech/graphql.svg', url: 'https://graphql.org/' },
	{ id: 'jest', name: 'Jest', file: 'src/icons/tech/jest.svg', url: 'https://jestjs.io/' },
	{ id: 'socket', name: 'Socket.IO', file: 'src/icons/tech/socket.svg', url: 'https://socket.io/', fillMode: true },
	{ id: 'html', name: 'HTML', file: 'src/icons/tech/html.svg', url: 'https://html.spec.whatwg.org/multipage/' },
	{ id: 'sass', name: 'Sass', file: 'src/icons/tech/sass.svg', url: 'https://sass-lang.com/' },
	{ id: 'bootstrap', name: 'Bootstrap', file: 'src/icons/tech/bootstrap.svg', url: 'https://getbootstrap.com/' },
	{ id: 'firebase', name: 'Firebase', file: 'src/icons/tech/firebase.svg', url: 'https://firebase.google.com/' },
	{ id: 'css', name: 'CSS', file: 'src/icons/tech/css.svg', url: 'https://www.w3.org/Style/CSS/Overview.en.html' },
	{ id: 'figma', name: 'Figma', file: 'src/icons/tech/figma.svg', url: 'https://www.figma.com' },
	{ id: 'node', name: 'NodeJS', file: 'src/icons/tech/nodejs.svg', url: 'https://nodejs.org/en/' },
	{ id: 'express', name: 'ExpressJS', file: 'src/icons/tech/express.svg', url: 'https://expressjs.com/', fillMode: true },
	{ id: 'mongodb', name: 'MongoDB', file: 'src/icons/tech/mongodb.svg', url: 'https://www.mongodb.com/' },
	{ id: 'git', name: 'Git', file: 'src/icons/tech/git.svg', url: 'https://git-scm.com/' },
];

const experiences = [
	{
		position: 'Software Engineer II',
		from: 'April 2025',
		to: 'Present',
		companyName: 'upGrad Education Pvt. Ltd.',
		companyUrl: 'https://www.upgrad.com',
		tasks: [
			{
				detail:
					'Leading React Native app development and owning delivery of core product features end to end.',
				url: 'https://play.google.com/store/apps/details?id=com.upgrad.student&hl=en_IN',
			},
			{
				detail:
					'Optimized key application modules by 50%+ using lazy loading, memoization, and bundle optimization techniques.',
			},
			{
				detail:
					'Mentoring and managing a junior developer, conducting detailed code reviews and enforcing best practices, resulting in a ~30% reduction in production bugs.',
			},
			{
				detail:
					'Providing technical solutioning and unblock support across teams to ensure scalable and maintainable implementations.',
			},
			{
				detail:
					'Collaborating closely with product and design teams to plan, estimate, and deliver high-impact releases on schedule.',
			},
		],
	},
	{
		position: 'Software Engineer I (Intern + Full-Time)',
		from: 'May 2022',
		to: 'March 2025',
		companyName: 'upGrad Education Pvt. Ltd.',
		companyUrl: 'https://www.upgrad.com',
		tasks: [
			{
				detail:
					'Designed and delivered 10+ major cross-functional features, improving engagement for 100K+ learners.',
				url: 'https://www.upgrad.com/study-abroad',
			},
			{
				detail:
					'Integrated 25+ REST and GraphQL APIs across React, React Native, and Next.js applications.',
			},
			{
				detail:
					'Improved React Native app performance by ~45% and reduced frontend load times by ~30% through optimized rendering, caching, and navigation.',
				url: 'https://play.google.com/store/apps/details?id=com.upgrad.studyabroad&hl=en_IN',
			},
			{
				detail:
					'Refactored large modules into modular, reusable components, enabling faster development and easier maintenance.',
			},
			{
				detail:
					'Conducted requirement analysis and technical feasibility assessments to ensure scalable and timely delivery.',
			},
			{
				detail:
					'Led the development and production deployment of the upGrad Global Uni Expo mobile application using the Expo framework.',
				url: 'https://play.google.com/store/apps/details?id=upgrad.uniexpo.com',
			},
		],
	},
	{
		position: 'React Developer Intern',
		from: 'Aug 2021',
		to: 'Nov 2021',
		companyName: 'TDG Labs',
		companyUrl: 'http://tdglabs.com/',
		tasks: [
			{
				detail: 'Worked on 4+ web and mobile projects using React, Next.js, and React Native.',
			},
			{
				detail:
					'Improved SEO scores by ~30-40% across multiple client websites through better page structure, metadata, and performance optimizations.',
			},
			{
				detail:
					'Delivered production-ready features for client projects including Acko Drive and FSM, collaborating closely with designers and backend teams.',
				url: 'http://ackodrive.com/',
			},
			{
				detail:
					'Contributed to the development of an in-house React Native product, implementing reusable UI components and API integrations.',
			},
			{
				detail: 'Reduced page load times by ~20% by optimizing component rendering and asset usage.',
			},
		],
	},
	{
		position: 'React Web Developer Intern',
		from: 'Jun 2020',
		to: 'Nov 2020',
		companyName: 'Circular Leaf Ventures Ltd.',
		tasks: [
			{
				detail:
					'Built the LenDen product frontend from scratch using React, Redux, and TypeScript, supporting core barter-based user flows.',
			},
			{
				detail:
					'Implemented product listing, valuation logic, and user interaction features used in the first MVP launch.',
				url: 'https://lenden-mvp1.kartikbhalla.dev/',
			},
			{
				detail:
					'Contributed to the second MVP, including mobile implementation, expanding the product to a wider user base.',
				url: 'https://link.kartikbhalla.dev/IrjETA',
			},
			{
				detail:
					'Integrated frontend with backend APIs and data models, handling 100+ daily user interactions during early adoption.',
			},
			{
				detail:
					'Collaborated with a cross-functional team of designers and backend engineers to ship features on tight timelines.',
			},
		],
	},
	{
		position: 'Front-end Web Developer Intern',
		from: 'Jun 2019',
		to: 'Jul 2019',
		companyName: 'Diligent Learning Pvt. Ltd.',
		tasks: [
			{
				detail:
					'Developed responsive web pages using HTML, CSS, and JavaScript, supporting multiple device breakpoints.',
				url: 'https://diligent.kartikbhalla.dev/',
			},
			{
				detail:
					'Migrated content and data from a legacy website to a new platform, improving maintainability and load performance.',
			},
			{
				detail:
					'Worked closely with designers to implement consistent UI across desktop, tablet, and mobile views.',
			},
			{
				detail: 'Helped improve overall website usability, reducing basic UI issues reported post-migration.',
			},
		],
	},
];

const projects = [
	{
		id: 'deposits',
		name: 'Deposits',
		description:
			'Deposits.live is a real-time fixed deposit rate comparison platform for India. It helps users compare FD interest rates across banks and NBFCs based on tenure and depositor category, making it easier to find the best savings options.',
		projectUrl: 'https://deposits.live/',
		keywords: ['React', 'Next.js', 'TypeScript', 'Finance', 'Data Aggregation', 'SEO'],
		desktop: 'public/projects/deposits/desktop.webp',
		mobile: 'public/projects/deposits/mobile.webp',
	},
	{
		id: 'precision',
		name: 'Precision AI',
		description:
			'Precision AI is an AI-powered platform offering face swap, image generation, video generation, and custom data generation services. It is designed as a scalable product with a polished landing experience, pricing tiers, and service-specific flows focused on creative and enterprise use cases.',
		projectUrl: 'https://dev-precision.kartikbhalla.dev/',
		keywords: ['Next.js', 'React', 'TypeScript', 'AI', 'SaaS', 'Tailwind CSS'],
		desktop: 'public/projects/precision/desktop.webp',
	},
	{
		id: 'diamond',
		name: 'Diamond Printers',
		description:
			'Diamond Printers is a business website built for a packaging and printing company. The platform showcases custom packaging solutions, printing services, testimonials, and company credibility, with a focus on lead generation and brand trust.',
		projectUrl: 'https://diamond.kartikbhalla.dev/',
		keywords: ['React', 'Next.js', 'TypeScript', 'Business Website', 'Landing Page', 'SEO'],
		desktop: 'public/projects/diamond/desktop.webp',
		mobile: 'public/projects/diamond/mobile.webp',
	},
	{
		id: 'shortly',
		name: 'Shortly',
		description:
			'Shortly is a single-page web application that allows users to shorten long URL links into shorter, more manageable links. Created as part of an internship assignment, Shortly integrates with the Short.io API to generate custom short links using my own domain. The application is fully responsive, offering a seamless user experience on both desktop and mobile devices.',
		projectUrl: 'https://shortly.kartikbhalla.dev',
		githubUrl: 'https://github.com/kartikbhalla12/shortly',
		keywords: ['React', 'Styled Components'],
		desktop: 'public/projects/shortly/desktop.webp',
		mobile: 'public/projects/shortly/mobile.webp',
	},
	{
		id: 'jitter',
		name: 'Jitter',
		description:
			'Jitter is a basic web page that uses Intersection Observer in JavaScript to enable infinite scrolling. It fetches data from the JSONPlaceholder API and renders it page-wise, automatically fetching the data for the next page as the user scrolls to the end. This approach optimizes resource management and improves performance, providing users with a seamless and uninterrupted browsing experience.',
		projectUrl: 'https://jitter.kartikbhalla.dev',
		githubUrl: 'https://github.com/kartikbhalla12/tdg-assignment',
		keywords: ['React', 'Intersection Observer'],
		desktop: 'public/projects/jitter/desktop.webp',
		mobile: 'public/projects/jitter/mobile.webp',
	},
	{
		id: 'nsut',
		name: 'Training & Placement',
		description:
			"During my time at Netaji Subhas University of Technology, East Campus, I served as a core coordinator for the training and placement office. As part of my responsibilities, I played a key role in creating the first draft of the office's website. The website is a comprehensive resource that provides detailed information about our college, the placement process, and downloadable documents. It also features an overview of the entire training and placement team and a contact page for inquiries.",
		projectUrl: 'https://nsut.kartikbhalla.dev',
		githubUrl: 'https://github.com/kartikbhalla12/NSUT-placement-portal/',
		keywords: ['React', 'College'],
		desktop: 'public/projects/nsut/desktop.webp',
		mobile: 'public/projects/nsut/mobile.webp',
	},
];

const withKeys = (items) =>
	items.map((item, index) => ({
		...item,
		_key: item.url ? `${index}-${item.url}` : `${index}`,
	}));

const seed = async () => {
	console.log(`Seeding Sanity project ${projectId} / ${dataset}`);

	const [
		ogImage,
		photo,
		existingSettings,
		existingHome,
		existingHeader,
		existingFooter,
		existingSkillsSection,
		existingProjectsSection,
	] = await Promise.all([
		uploadImage('public/kartik.png'),
		uploadImage('public/kartik-2.webp'),
		client.getDocument('siteSettings'),
		client.getDocument('home'),
		client.getDocument('header'),
		client.getDocument('footer'),
		client.getDocument('skillsSection'),
		client.getDocument('projectsSection'),
	]);

	const nextOgImage = ogImage || existingSettings?.ogImage;
	const nextPhoto = photo || existingHome?.photo;
	const nextResume =
		existingSettings?.resume ||
		(await uploadFile('src/data/kartik-bhalla-resume.pdf', 'application/pdf'));
	const socials =
		existingFooter?.socials?.length || existingSettings?.socials?.length
			? existingFooter?.socials || existingSettings?.socials
			: await Promise.all(
					socialsSeed.map(async (social) => ({
						_key: social._key,
						name: social.name,
						url: social.url,
						sidebarIcon: social.sidebarFile
							? await uploadImage(social.sidebarFile)
							: undefined,
						footerIcon: social.footerFile
							? await uploadImage(social.footerFile)
							: undefined,
					})),
				);

	await client.createOrReplace({
		...siteSettings,
		...(nextOgImage ? { ogImage: nextOgImage } : {}),
		...(nextResume ? { resume: nextResume } : {}),
	});
	console.log('Wrote siteSettings');

	const existingNavLinks = existingHeader?.navLinks?.length
		? existingHeader.navLinks
		: existingSettings?.navLinks?.length
			? existingSettings.navLinks
			: headerNavLinks;

	await client.createOrReplace({
		_id: 'header',
		_type: 'header',
		navLinks: existingNavLinks
			.filter((link) => link.title !== 'Archive' && link.href !== '/archive')
			.map((link) => {
				const href = toInPageHref(link.href);
				if (href === '/resume' || href === '/resume.pdf' || link.title === 'Resume') {
					return { ...link, href: '/resume.pdf' };
				}
				if (
					link.title === 'Blogs' ||
					href.includes('devdispatch.kartikbhalla.dev')
				) {
					return { ...link, href: '/blogs', target: undefined, rel: undefined };
				}
				return { ...link, href };
			}),
	});
	console.log('Wrote header');

	await client.createOrReplace({
		_id: 'footer',
		_type: 'footer',
		socials,
	});
	console.log('Wrote footer');

	if (existingSettings?.navLinks || existingSettings?.socials) {
		await client.patch('siteSettings').unset(['navLinks', 'socials']).commit();
	}

	await client.createOrReplace({
		...home,
		...(nextPhoto ? { photo: nextPhoto } : {}),
	});
	console.log('Wrote home');

	await client.createOrReplace({
		_id: 'skillsSection',
		_type: 'skillsSection',
		intro:
			existingSkillsSection?.intro || existingHome?.skillsIntro || skillsIntro,
	});
	await client.createOrReplace({
		_id: 'projectsSection',
		_type: 'projectsSection',
		intro:
			existingProjectsSection?.intro ||
			existingHome?.projectsIntro ||
			projectsIntro,
	});
	console.log('Wrote skills and projects sections');

	if (existingHome?.skillsIntro || existingHome?.projectsIntro) {
		await client.patch('home').unset(['skillsIntro', 'projectsIntro']).commit();
	}

	for (const [index, skill] of skills.entries()) {
		const icon = await uploadImage(skill.file);
		await client.createOrReplace({
			_id: `skill-${skill.id}`,
			_type: 'skill',
			name: skill.name,
			url: skill.url,
			icon,
			fillMode: skill.fillMode,
			animate: skill.animate,
			order: index,
		});
	}
	console.log(`Wrote ${skills.length} skills`);

	for (const [index, experience] of experiences.entries()) {
		await client.createOrReplace({
			_id: `experience-${index}`,
			_type: 'experience',
			...experience,
			tasks: withKeys(experience.tasks),
			order: index,
		});
	}
	console.log(`Wrote ${experiences.length} experiences`);

	for (const [index, project] of projects.entries()) {
		const existing = await client.getDocument(`project-${project.id}`);
		const desktopImage =
			(project.desktop && (await uploadImage(project.desktop))) ||
			existing?.desktopImage;
		const mobileImage =
			(project.mobile && (await uploadImage(project.mobile))) ||
			existing?.mobileImage;

		await client.createOrReplace({
			_id: `project-${project.id}`,
			_type: 'project',
			name: project.name,
			description: project.description,
			keywords: project.keywords,
			projectUrl: project.projectUrl,
			githubUrl: project.githubUrl,
			desktopImage,
			mobileImage,
			order: index,
		});
	}
	console.log(`Wrote ${projects.length} projects`);
	console.log('Seed complete.');
};

seed().catch((error) => {
	console.error(error);
	process.exit(1);
});
