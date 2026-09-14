import { isSanityImage } from './CmsImage';
import { sanityFetch } from './client';
import { hasSanityConfig } from './env';
import { getFallbackPageContent, getFallbackSiteSettings } from './fallback';
import { urlFor } from './image';
import {
	experiencesQuery,
	footerQuery,
	headerQuery,
	homeQuery,
	projectsQuery,
	projectsSectionQuery,
	siteSettingsQuery,
	skillsQuery,
	skillsSectionQuery,
} from './queries';
import type {
	ExperienceContent,
	HomeContent,
	NavLink,
	PageContent,
	ProjectContent,
	SiteSettings,
	SkillContent,
	SocialLink,
} from './types';

type SanityExperience = {
	_id: string;
	position: string;
	from: string;
	to: string;
	companyName: string;
	companyUrl?: string;
	tasks?: { detail: string; url?: string }[];
};

const PUBLIC_RESUME_HREF = '/resume.pdf';
const PUBLIC_BLOGS_HREF = '/blogs';
const IN_PAGE_HREFS: Record<string, string> = {
	'/skills': '/#skills',
	'/experience': '/#experience',
	'/projects': '/#projects',
	'/resume': PUBLIC_RESUME_HREF,
	'/kartik-bhalla-resume.pdf': PUBLIC_RESUME_HREF,
	'https://devdispatch.kartikbhalla.dev': PUBLIC_BLOGS_HREF,
	'https://devdispatch.kartikbhalla.dev/': PUBLIC_BLOGS_HREF,
};

const toInPageHref = (href?: string) =>
	href ? IN_PAGE_HREFS[href] || href : href;

const withInPageHrefs = (navLinks: NavLink[]): NavLink[] =>
	navLinks
		.filter((link) => link.title !== 'Archive' && link.href !== '/archive')
		.map((link) => {
			const href = toInPageHref(link.href) || link.href;
			if (href === PUBLIC_RESUME_HREF || link.title === 'Resume') {
				return { ...link, href: PUBLIC_RESUME_HREF };
			}
			if (link.title === 'Blogs') {
				return { ...link, href: PUBLIC_BLOGS_HREF, target: undefined, rel: undefined };
			}
			return { ...link, href };
		});

type SanitySiteSettings = Omit<SiteSettings, 'socials' | 'navLinks' | 'resumeUrl'> & {
	resume?: { asset?: { url?: string } };
};

type SanityProject = {
	_id: string;
	name: string;
	description: string;
	keywords?: string[];
	projectUrl?: string;
	githubUrl?: string;
	desktopImage?: ProjectContent['images']['desktop'];
	mobileImage?: ProjectContent['images']['mobile'];
};

const mapExperiences = (items: SanityExperience[]): ExperienceContent[] =>
	items.map((item) => ({
		_id: item._id,
		position: item.position,
		duration: { from: item.from, to: item.to },
		companyName: item.companyName,
		companyUrl: item.companyUrl,
		tasks: item.tasks,
	}));

const resumeUrlFrom = (
	resume?: { asset?: { url?: string } },
	fallback = PUBLIC_RESUME_HREF,
) => resume?.asset?.url || fallback;

const mapProjects = (items: SanityProject[]): ProjectContent[] =>
	items.map((item) => ({
		_id: item._id,
		name: item.name,
		description: item.description,
		keywords: item.keywords || [],
		links: {
			project: item.projectUrl,
			github: item.githubUrl,
		},
		images: {
			desktop: item.desktopImage,
			mobile: item.mobileImage,
		},
	}));

export const getSiteSettings = async (): Promise<SiteSettings> => {
	const fallback = getFallbackSiteSettings();
	if (!hasSanityConfig) {
		return {
			...fallback,
			navLinks: withInPageHrefs(fallback.navLinks),
		};
	}

	try {
		const [settings, header, footer] = await Promise.all([
			sanityFetch<SanitySiteSettings | null>(siteSettingsQuery, [
				'sanity',
				'settings',
			]),
			sanityFetch<{ navLinks?: NavLink[] } | null>(headerQuery, [
				'sanity',
				'header',
			]),
			sanityFetch<{ socials?: SocialLink[] } | null>(footerQuery, [
				'sanity',
				'footer',
			]),
		]);

		if (!settings && !header && !footer) {
			return {
				...fallback,
				navLinks: withInPageHrefs(fallback.navLinks),
			};
		}

		const { resume, ...restSettings } = settings || {};
		const resumeUrl = resumeUrlFrom(resume, fallback.resumeUrl);
		const navLinks = header?.navLinks?.length
			? header.navLinks
			: fallback.navLinks;

		return {
			...fallback,
			...restSettings,
			resumeUrl,
			socials:
				Array.isArray(footer?.socials) && footer.socials.length
					? footer.socials
					: fallback.socials,
			navLinks: withInPageHrefs(navLinks),
		};
	} catch {
		return {
			...fallback,
			navLinks: withInPageHrefs(fallback.navLinks),
		};
	}
};

export const getPageContent = async (): Promise<PageContent> => {
	const fallback = getFallbackPageContent();
	if (!hasSanityConfig) return fallback;

	try {
		const [home, skillsSection, skills, experiences, projectsSection, projects] =
			await Promise.all([
				sanityFetch<HomeContent | null>(homeQuery, ['sanity', 'home']),
				sanityFetch<{ intro?: string } | null>(skillsSectionQuery, [
					'sanity',
					'skills',
				]),
				sanityFetch<SkillContent[]>(skillsQuery, ['sanity', 'skills']),
				sanityFetch<SanityExperience[]>(experiencesQuery, [
					'sanity',
					'experience',
				]),
				sanityFetch<{ intro?: string } | null>(projectsSectionQuery, [
					'sanity',
					'projects',
				]),
				sanityFetch<SanityProject[]>(projectsQuery, ['sanity', 'projects']),
			]);

		const nextHome = home || fallback.home;

		return {
			home: {
				...nextHome,
				ctaHref: toInPageHref(nextHome.ctaHref) || nextHome.ctaHref,
			},
			skillsIntro: skillsSection?.intro || fallback.skillsIntro,
			projectsIntro: projectsSection?.intro || fallback.projectsIntro,
			skills: skills?.length
				? skills.map((skill) => ({
						...skill,
						icon:
							skill.icon && typeof skill.icon === 'object'
								? skill.icon
								: undefined,
					}))
				: fallback.skills,
			experiences: experiences?.length
				? mapExperiences(experiences)
				: fallback.experiences,
			projects: projects?.length ? mapProjects(projects) : fallback.projects,
		};
	} catch {
		return fallback;
	}
};

export const PORTRAIT_PATH = '/kartik-bhalla.jpg';
export const PORTRAIT_OG_PATH = '/kartik-bhalla-og.jpg';

export const getHomePortraitUrl = async (options?: { square?: boolean }) => {
	if (!hasSanityConfig) return null;

	try {
		const home = await sanityFetch<HomeContent | null>(homeQuery, [
			'sanity',
			'home',
		]);

		if (!home?.photo || !isSanityImage(home.photo) || !home.photo.asset) {
			return null;
		}

		const image = urlFor(home.photo).format('jpg').quality(85);
		return options?.square
			? image.width(1200).height(1200).fit('crop').url()
			: image.width(1600).url();
	} catch {
		return null;
	}
};
