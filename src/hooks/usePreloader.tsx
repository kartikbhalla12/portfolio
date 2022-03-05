import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const usePreloader = () => {
	const [loading, setLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => setLoading(false), 3000);
	});

	useEffect(() => {
		if (router.asPath.split('/#')[1] && !loading) router.replace(router.asPath);
	}, [loading]);

	return {
		loading,
	};
};

export default usePreloader;
