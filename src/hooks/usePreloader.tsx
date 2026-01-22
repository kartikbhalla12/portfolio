import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

const usePreloader = () => {
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const loadEventFiredRef = useRef(false);

	useEffect(() => {
		// Maximum preloader display time (fallback)
		const MAX_PRELOADER_TIME = 3000;
		// Minimum preloader display time for smooth UX
		const MIN_PRELOADER_TIME = 500;

		const handleLoad = () => {
			loadEventFiredRef.current = true;
			const elapsed = Date.now() - startTime;
			const remainingTime = Math.max(0, MIN_PRELOADER_TIME - elapsed);

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			// Ensure minimum display time for smooth transition
			timeoutRef.current = setTimeout(() => {
				setLoading(false);
			}, remainingTime);
		};

		const startTime = Date.now();

		// Listen for window load event
		if (typeof window !== 'undefined') {
			// Check if page is already loaded
			if (document.readyState === 'complete') {
				handleLoad();
			} else {
				window.addEventListener('load', handleLoad, { once: true });

				// Fallback timeout if load event doesn't fire
				timeoutRef.current = setTimeout(() => {
					if (!loadEventFiredRef.current) {
						setLoading(false);
					}
				}, MAX_PRELOADER_TIME);
			}
		}

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			if (typeof window !== 'undefined') {
				window.removeEventListener('load', handleLoad);
			}
		};
	}, []);

	useEffect(() => {
		// Handle hash navigation in App Router
		if (typeof window !== 'undefined' && window.location.hash && !loading) {
			const hash = window.location.hash;
			window.location.hash = '';
			setTimeout(() => {
				window.location.hash = hash;
			}, 0);
		}
	}, [loading, pathname]);

	return {
		loading,
	};
};

export default usePreloader;
