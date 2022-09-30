import { useEffect, useState } from 'react';

import debounce from '@utils/debounce';
import navbarLinks from '@constants/navbarLinks';

const useNavScroll = (hideNavbarY: number) => {
	const [hideNavbar, setHideNavbar] = useState(false);
	const [isTop, setIsTop] = useState(true);
	const [sectionElements, setSectionElements] = useState<HTMLElement[]>([]);
	const [activeSection, setActiveSection] = useState('');

	useEffect(() => {
		let elements: HTMLElement[] = [];
		navbarLinks.forEach(link => {
			if (link.id) {
				const section = document.getElementById(link.id);
				if (section) elements.push(section);
			}
		});

		setSectionElements(elements);
		setActiveSection(elements[0].getAttribute('id') || '');
	}, []);

	let previousScrollY = 0;

	const handleScroll = () => {
		setIsTop(window.scrollY < 5);
		setHideNavbar(
			window.scrollY > previousScrollY && window.scrollY > hideNavbarY
		);
		previousScrollY = window.scrollY;

		handleActiveSectionChange();
	};

	const handleActiveSectionChange = debounce(() => {
		let current = null;

		sectionElements.forEach(section => {
			const sectionTop = section.offsetTop;
			if (scrollY >= sectionTop - 300) current = section.getAttribute('id');
		});
		if (current) setActiveSection(current);
	}, 100);

	useEffect(() => {
		if (window.scrollY === 0) {
			setIsTop(true);
		} else setIsTop(false);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [sectionElements]);

	return {
		isTop,
		hideNavbar,
		activeSection,
	};
};

export default useNavScroll;
