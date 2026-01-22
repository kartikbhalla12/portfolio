import { useEffect, useState, useMemo, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';

import debounce from '@utils/debounce';
import navbarLinks from '@constants/navbarLinks';

const useNavScroll = (hideNavbarY: number) => {
	const pathname = usePathname();
	const previousScrollYRef = useRef(0);
	const rafIdRef = useRef<number | null>(null);
	const sectionElementsRef = useRef<HTMLElement[]>([]);

	const [hideNavbar, setHideNavbar] = useState(false);
	const [isTop, setIsTop] = useState(true);
	const [activeSection, setActiveSection] = useState('');

	// Calculate and memoize section elements when route changes
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const elements: HTMLElement[] = [];
		navbarLinks.forEach(link => {
			if (link.id) {
				const section = document.getElementById(link.id);
				if (section) elements.push(section);
			}
		});

		sectionElementsRef.current = elements;
		if (elements.length > 0) {
			setActiveSection(elements[0]?.getAttribute('id') || '');
		}
	}, [pathname]);

	const debouncedActiveSectionChange = useMemo(
		() =>
			debounce(() => {
				let current: string | null = null;

				sectionElementsRef.current.forEach(section => {
					const sectionTop = section.offsetTop;
					if (window.scrollY >= sectionTop - 300) {
						current = section.getAttribute('id');
					}
				});
				if (current) setActiveSection(current);
			}, 100),
		[]
	);

	const handleScroll = useCallback(() => {
		// Cancel any pending RAF
		if (rafIdRef.current !== null) {
			cancelAnimationFrame(rafIdRef.current);
		}

		// Use requestAnimationFrame for smooth scroll calculations
		rafIdRef.current = requestAnimationFrame(() => {
			const currentScrollY = window.scrollY;
			setIsTop(currentScrollY < 5);
			setHideNavbar(
				currentScrollY > previousScrollYRef.current && currentScrollY > hideNavbarY
			);
			previousScrollYRef.current = currentScrollY;

			debouncedActiveSectionChange();
		});
	}, [hideNavbarY, debouncedActiveSectionChange]);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		if (window.scrollY === 0) {
			setIsTop(true);
		} else {
			setIsTop(false);
		}
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		// Add passive event listener for better scroll performance
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', handleScroll);
			if (rafIdRef.current !== null) {
				cancelAnimationFrame(rafIdRef.current);
			}
		};
	}, [handleScroll]);

	return {
		isTop,
		hideNavbar,
		activeSection,
	};
};

export default useNavScroll;
