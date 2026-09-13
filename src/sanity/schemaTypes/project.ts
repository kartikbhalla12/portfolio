import { defineField, defineType } from 'sanity';

export const projectType = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({ name: 'name', title: 'Name', type: 'string' }),
		defineField({ name: 'description', title: 'Description', type: 'text' }),
		defineField({
			name: 'keywords',
			title: 'Keywords',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({ name: 'projectUrl', title: 'Project URL', type: 'url' }),
		defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
		defineField({
			name: 'desktopImage',
			title: 'Desktop image',
			type: 'image',
		}),
		defineField({
			name: 'mobileImage',
			title: 'Mobile image',
			type: 'image',
		}),
		defineField({ name: 'order', title: 'Order', type: 'number' }),
	],
	orderings: [
		{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
	],
	preview: { select: { title: 'name', media: 'desktopImage' } },
});
