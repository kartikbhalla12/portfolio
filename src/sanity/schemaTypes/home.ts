import { defineField, defineType } from 'sanity';

export const homeType = defineType({
	name: 'home',
	title: 'Home',
	type: 'document',
	fields: [
		defineField({ name: 'greeting', title: 'Greeting', type: 'string' }),
		defineField({ name: 'name', title: 'Name', type: 'string' }),
		defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
		defineField({ name: 'about', title: 'About', type: 'text' }),
		defineField({ name: 'companyName', title: 'Company name', type: 'string' }),
		defineField({ name: 'companyUrl', title: 'Company URL', type: 'url' }),
		defineField({ name: 'email', title: 'Email', type: 'string' }),
		defineField({ name: 'ctaLabel', title: 'CTA label', type: 'string' }),
		defineField({ name: 'ctaHref', title: 'CTA href', type: 'string' }),
		defineField({
			name: 'photo',
			title: 'Photo',
			type: 'image',
			options: { hotspot: true },
		}),
		defineField({ name: 'photoAlt', title: 'Photo alt', type: 'string' }),
	],
	preview: { select: { title: 'name', media: 'photo' } },
});
