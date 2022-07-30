import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePreloader = () => {
	const [timerOut, setTimerOut] = useState(false);
	const [pageLoaded, setPageLoaded] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => setTimerOut(true), 2000);
	}, []);

	useEffect(() => {
		window.onload = () => setPageLoaded(true);
	}, []);

	let loading = !(timerOut && pageLoaded);
	useEffect(() => {
		if (router.asPath.split('/#')[1] && !loading) router.replace(router.asPath);
	}, [loading]);

	return {
		loading,
	};
};

export default usePreloader;
