import { defineField, defineType } from 'sanity';

export const experienceType = defineType({
	name: 'experience',
	title: 'Experience',
	type: 'document',
	fields: [
		defineField({ name: 'position', title: 'Position', type: 'string' }),
		defineField({ name: 'from', title: 'From', type: 'string' }),
		defineField({ name: 'to', title: 'To', type: 'string' }),
		defineField({ name: 'companyName', title: 'Company', type: 'string' }),
		defineField({ name: 'companyUrl', title: 'Company URL', type: 'url' }),
		defineField({ name: 'order', title: 'Order', type: 'number' }),
		defineField({
			name: 'tasks',
			title: 'Tasks',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({ name: 'detail', type: 'text' }),
						defineField({ name: 'url', type: 'url' }),
					],
				},
			],
		}),
	],
	orderings: [
		{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
	],
	preview: { select: { title: 'position', subtitle: 'companyName' } },
});
