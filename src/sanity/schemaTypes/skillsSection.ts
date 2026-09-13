import { defineField, defineType } from 'sanity';

export const skillsSectionType = defineType({
	name: 'skillsSection',
	title: 'Skills',
	type: 'document',
	fields: [
		defineField({ name: 'intro', title: 'Intro', type: 'text' }),
	],
	preview: { prepare: () => ({ title: 'Skills' }) },
});
