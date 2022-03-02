import { useEffect, useState } from 'react';

const usePreloader = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 3000);
	});

	return {
		loading,
	};
};

export default usePreloader;
