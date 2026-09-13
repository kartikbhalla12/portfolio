import { defineField, defineType } from 'sanity';

import { navLinkFields } from './fields';

export const headerType = defineType({
	name: 'header',
	title: 'Header',
	type: 'document',
	fields: [
		defineField({
			name: 'navLinks',
			title: 'Nav links',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: navLinkFields,
				},
			],
		}),
	],
	preview: { prepare: () => ({ title: 'Header' }) },
});
