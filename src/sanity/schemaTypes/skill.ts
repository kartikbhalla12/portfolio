import { defineField, defineType } from 'sanity';

export const skillType = defineType({
	name: 'skill',
	title: 'Skill',
	type: 'document',
	fields: [
		defineField({ name: 'name', title: 'Name', type: 'string' }),
		defineField({ name: 'url', title: 'URL', type: 'url' }),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'image',
			options: { accept: 'image/svg+xml,image/png,image/webp,image/jpeg' },
			description: 'SVG or PNG. Use Fill mode for monochrome logos that should follow the theme.',
		}),
		defineField({ name: 'fillMode', title: 'Fill mode', type: 'boolean' }),
		defineField({ name: 'animate', title: 'Animate', type: 'boolean' }),
		defineField({ name: 'order', title: 'Order', type: 'number' }),
	],
	orderings: [
		{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
	],
	preview: { select: { title: 'name', media: 'icon' } },
});
