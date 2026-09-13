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

const PUBLIC_RESUME_HREF = '/resume';
const RESUME_HREFS = new Set(['/resume', '/kartik-bhalla-resume.pdf']);

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

const withResumeHref = (navLinks: NavLink[]): NavLink[] =>
	navLinks.map((link) =>
		RESUME_HREFS.has(link.href) || link.title === 'Resume'
			? { ...link, href: PUBLIC_RESUME_HREF }
			: link,
	);

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
			navLinks: withResumeHref(fallback.navLinks),
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
				navLinks: withResumeHref(fallback.navLinks),
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
			navLinks: withResumeHref(navLinks),
		};
	} catch {
		return {
			...fallback,
			navLinks: withResumeHref(fallback.navLinks),
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

		return {
			home: home || fallback.home,
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

export const getHomePortraitUrl = async () => {
	if (!hasSanityConfig) return null;

	try {
		const home = await sanityFetch<HomeContent | null>(homeQuery, [
			'sanity',
			'home',
		]);

		if (!home?.photo || !isSanityImage(home.photo) || !home.photo.asset) {
			return null;
		}

		return urlFor(home.photo).width(1600).format('jpg').quality(85).url();
	} catch {
		return null;
	}
};
