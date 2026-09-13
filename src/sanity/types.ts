import type { StaticImageData } from 'next/image';

export type SanityImage = {
	asset?: {
		_id?: string;
		url?: string;
		metadata?: {
			lqip?: string;
			dimensions?: { width: number; height: number };
		};
	};
	crop?: unknown;
	hotspot?: unknown;
};

export type SocialLink = {
	_key?: string;
	name: string;
	url: string;
	sidebarIcon?: SanityImage;
	footerIcon?: SanityImage;
};

export type NavLink = {
	title: string;
	href: string;
	id?: string;
	target?: string;
	rel?: string;
};

export type SiteSettings = {
	siteName: string;
	title: string;
	description: string;
	ogImage?: SanityImage;
	resumeUrl: string;
	email: string;
	firstName: string;
	lastName: string;
	username: string;
	twitterHandle: string;
	jobTitle: string;
	companyName: string;
	companyUrl: string;
	socials: SocialLink[];
	navLinks: NavLink[];
};

export type HomeContent = {
	greeting: string;
	name: string;
	subtitle: string;
	about: string;
	companyName: string;
	companyUrl: string;
	email: string;
	ctaLabel: string;
	ctaHref: string;
	photo?: SanityImage;
	photoAlt: string;
};

export type SkillContent = {
	_id: string;
	name: string;
	url: string;
	icon?: SanityImage;
	fillMode?: boolean;
	animate?: boolean;
};

export type ExperienceContent = {
	_id: string;
	position: string;
	duration: { from: string; to: string };
	companyName: string;
	companyUrl?: string;
	tasks?: { detail: string; url?: string }[];
};

export type ProjectContent = {
	_id: string;
	name: string;
	description: string;
	keywords: string[];
	links: { project?: string; github?: string };
	images: {
		desktop?: SanityImage | StaticImageData;
		mobile?: SanityImage | StaticImageData;
	};
};

export type PageContent = {
	home: HomeContent;
	skillsIntro?: string;
	skills: SkillContent[];
	experiences: ExperienceContent[];
	projectsIntro?: string;
	projects: ProjectContent[];
};
