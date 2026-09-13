import { defineField, defineType } from 'sanity';

export const projectsSectionType = defineType({
	name: 'projectsSection',
	title: 'Projects',
	type: 'document',
	fields: [
		defineField({ name: 'intro', title: 'Intro', type: 'text' }),
	],
	preview: { prepare: () => ({ title: 'Projects' }) },
});
