const BLOGS_FEED = 'https://devdispatch.kartikbhalla.dev/rss/';

export type BlogPost = {
	title: string;
	url: string;
	date: string;
	excerpt: string;
};

const decode = (value: string) =>
	value
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#x2019;/g, '’')
		.replace(/&#39;/g, "'")
		.trim();

const tagValue = (block: string, tag: string) => {
	const match = block.match(
		new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'),
	);
	return match ? decode(match[1]) : '';
};

const excerptFrom = (html: string) =>
	html
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, 180);

const formatDate = (value: string) => {
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return value;
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}).format(date);
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
	try {
		const response = await fetch(BLOGS_FEED, {
			next: { revalidate: 3600 },
		});
		if (!response.ok) return [];

		const rss = await response.text();
		return [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gi)].flatMap((match) => {
			const block = match[1];
			const title = tagValue(block, 'title');
			const url = tagValue(block, 'link');
			if (!title || !url) return [];

			return [
				{
					title,
					url,
					date: formatDate(tagValue(block, 'pubDate')),
					excerpt: excerptFrom(tagValue(block, 'description')),
				},
			];
		});
	} catch {
		return [];
	}
};
