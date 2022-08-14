import { useEffect, useState } from 'react';
import debounce from '@utils/debounce';

const useMobileWidth = () => {
	const [isMobileWidth, setIsMobileWidth] = useState(false);

	const handleResize = debounce(() => {
		setIsMobileWidth(window.innerWidth < 750);
	}, 100);

	useEffect(() => {
		setIsMobileWidth(window.innerWidth < 750);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('scroll', handleResize);
	}, []);

	return { isMobileWidth };
};

export default useMobileWidth;
