import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MIN_PRELOADER_TIME = 500;
const MAX_PRELOADER_TIME = 2000;

const usePreloader = () => {
	const [loading, setLoading] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		let cancelled = false;
		let finished = false;
		const startTime = Date.now();
		const timers = new Set<number>();

		const finish = () => {
			if (cancelled || finished) return;
			finished = true;
			const remaining = Math.max(
				0,
				MIN_PRELOADER_TIME - (Date.now() - startTime),
			);
			timers.add(
				window.setTimeout(() => {
					if (!cancelled) setLoading(false);
				}, remaining),
			);
		};

		const onPageShow = (event: PageTransitionEvent) => {
			if (event.persisted) finish();
		};

		if (document.readyState === 'complete') {
			finish();
		} else {
			window.addEventListener('load', finish, { once: true });
			window.addEventListener('pageshow', onPageShow);
		}

		timers.add(window.setTimeout(finish, MAX_PRELOADER_TIME));

		return () => {
			cancelled = true;
			timers.forEach((timer) => window.clearTimeout(timer));
			window.removeEventListener('load', finish);
			window.removeEventListener('pageshow', onPageShow);
		};
	}, []);

	useEffect(() => {
		if (loading) return;

		const id = decodeURIComponent(window.location.hash.replace(/^#/, ''));
		if (!id) return;

		const element = document.getElementById(id);
		if (!element) return;

		element.scrollIntoView({ block: 'start' });
	}, [loading, pathname]);

	return {
		loading,
	};
};

export default usePreloader;
