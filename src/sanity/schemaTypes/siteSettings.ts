import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
	name: 'siteSettings',
	title: 'Site settings',
	type: 'document',
	fields: [
		defineField({ name: 'siteName', title: 'Site name', type: 'string' }),
		defineField({ name: 'title', title: 'SEO title', type: 'string' }),
		defineField({ name: 'description', title: 'SEO description', type: 'text' }),
		defineField({ name: 'ogImage', title: 'OG image', type: 'image' }),
		defineField({
			name: 'resume',
			title: 'Resume',
			type: 'file',
			options: { accept: 'application/pdf' },
			description: 'PDF used by the Resume nav link and /resume.',
		}),
		defineField({ name: 'email', title: 'Email', type: 'string' }),
		defineField({ name: 'firstName', title: 'First name', type: 'string' }),
		defineField({ name: 'lastName', title: 'Last name', type: 'string' }),
		defineField({ name: 'username', title: 'Username', type: 'string' }),
		defineField({ name: 'twitterHandle', title: 'Twitter handle', type: 'string' }),
		defineField({ name: 'jobTitle', title: 'Job title', type: 'string' }),
		defineField({ name: 'companyName', title: 'Employer name', type: 'string' }),
		defineField({ name: 'companyUrl', title: 'Employer URL', type: 'url' }),
	],
	preview: { select: { title: 'siteName' } },
});
