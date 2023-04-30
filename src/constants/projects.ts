import ShortlyDesktopImage from '@public/projects/shortly/desktop.webp';
import ShortlyMobileImage from '@public/projects/shortly/mobile.webp';

import JitterDesktopImage from '@public/projects/jitter/desktop.webp';
import JitterMobileImage from '@public/projects/jitter/mobile.webp';

import NsutDesktopImage from '@public/projects/nsut/desktop.webp';
import NsutMobileImage from '@public/projects/nsut/mobile.webp';

const projects = [
	{
		name: 'Shortly',
		description:
			'Shortly is a single-page web application that allows users to shorten long URL links into shorter, more manageable links. Created as part of an internship assignment, Shortly integrates with the Short.io API to generate custom short links using my own domain. The application is fully responsive, offering a seamless user experience on both desktop and mobile devices.',
		links: {
			project: 'https://shortly.kartikbhalla.dev',
			github: 'https://github.com/kartikbhalla12/shortly',
		},
		keywords: ['React', 'Styled Components'],
		images: {
			desktop: ShortlyDesktopImage,
			mobile: ShortlyMobileImage,
		},
	},
	{
		name: 'Jitter',
		description:
			'Jitter is a basic web page that uses Intersection Observer in JavaScript to enable infinite scrolling. It fetches data from the JSONPlaceholder API and renders it page-wise, automatically fetching the data for the next page as the user scrolls to the end. This approach optimizes resource management and improves performance, providing users with a seamless and uninterrupted browsing experience.',
		links: {
			project: 'https://jitter.kartikbhalla.dev',
			github: 'https://github.com/kartikbhalla12/tdg-assignment',
		},
		keywords: ['React', 'Intersection Observer'],
		images: {
			desktop: JitterDesktopImage,
			mobile: JitterMobileImage,
		},
	},
	{
		name: 'Training & Placement',
		description:
			"During my time at Netaji Subhas University of Technology, East Campus, I served as a core coordinator for the training and placement office. As part of my responsibilities, I played a key role in creating the first draft of the office's website. The website is a comprehensive resource that provides detailed information about our college, the placement process, and downloadable documents. It also features an overview of the entire training and placement team and a contact page for inquiries.",
		links: {
			project: 'https://nsut.kartikbhalla.dev',
			github: 'https://github.com/kartikbhalla12/NSUT-placement-portal/',
		},
		keywords: ['React', 'College'],
		images: {
			desktop: NsutDesktopImage,
			mobile: NsutMobileImage,
		},
	},
];

export default projects;
