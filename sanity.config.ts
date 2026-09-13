import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schemaTypes } from './src/sanity/schemaTypes';

export default defineConfig({
	name: 'default',
	title: 'Kartik Bhalla Portfolio',
	projectId,
	dataset,
	basePath: '/studio',
	plugins: [
		structureTool({
			structure: (S) =>
				S.list()
					.title('Content')
					.items([
						S.listItem()
							.title('Site settings')
							.child(
								S.document()
									.schemaType('siteSettings')
									.documentId('siteSettings'),
							),
						S.listItem()
							.title('Header')
							.child(S.document().schemaType('header').documentId('header')),
						S.listItem()
							.title('Footer')
							.child(S.document().schemaType('footer').documentId('footer')),
						S.listItem()
							.title('Home')
							.child(S.document().schemaType('home').documentId('home')),
						S.listItem()
							.title('Skills')
							.child(
								S.list()
									.title('Skills')
									.items([
										S.listItem()
											.title('Intro')
											.child(
												S.document()
													.schemaType('skillsSection')
													.documentId('skillsSection'),
											),
										S.documentTypeListItem('skill').title('Skills'),
									]),
							),
						S.documentTypeListItem('experience').title('Experience'),
						S.listItem()
							.title('Projects')
							.child(
								S.list()
									.title('Projects')
									.items([
										S.listItem()
											.title('Intro')
											.child(
												S.document()
													.schemaType('projectsSection')
													.documentId('projectsSection'),
											),
										S.documentTypeListItem('project').title('Projects'),
									]),
							),
					]),
		}),
		visionTool({ defaultApiVersion: apiVersion }),
	],
	schema: {
		types: schemaTypes,
	},
	document: {
		newDocumentOptions: (prev) =>
			prev.filter(
				(item) =>
					![
						'siteSettings',
						'header',
						'footer',
						'home',
						'skillsSection',
						'projectsSection',
					].includes(item.templateId),
			),
	},
});
