import { defineField } from 'sanity';

export const socialLinkFields = [
	defineField({ name: 'name', title: 'Name', type: 'string' }),
	defineField({
		name: 'url',
		title: 'URL',
		type: 'string',
		description: 'https://… or mailto:…',
	}),
	defineField({
		name: 'sidebarIcon',
		title: 'Sidebar icon',
		type: 'image',
		options: { accept: 'image/svg+xml,image/png,image/webp' },
	}),
	defineField({
		name: 'footerIcon',
		title: 'Footer icon',
		type: 'image',
		options: { accept: 'image/svg+xml,image/png,image/webp' },
		description: 'Optional. Falls back to the sidebar icon.',
	}),
];

export const navLinkFields = [
	defineField({ name: 'title', type: 'string' }),
	defineField({ name: 'href', type: 'string' }),
	defineField({ name: 'id', type: 'string' }),
	defineField({ name: 'target', type: 'string' }),
	defineField({ name: 'rel', type: 'string' }),
];
