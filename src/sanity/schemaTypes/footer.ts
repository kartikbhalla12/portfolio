import { defineField, defineType } from 'sanity';

import { socialLinkFields } from './fields';

export const footerType = defineType({
	name: 'footer',
	title: 'Footer',
	type: 'document',
	fields: [
		defineField({
			name: 'socials',
			title: 'Social links',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: socialLinkFields,
					preview: {
						select: { title: 'name', subtitle: 'url', media: 'sidebarIcon' },
					},
				},
			],
		}),
	],
	preview: { prepare: () => ({ title: 'Footer' }) },
});
