import debounce from '@utils/debounce';
import { useEffect, useState } from 'react';

const useBlur = (isOpen: boolean) => {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = debounce(() => {
		setIsMobile(window.innerWidth < 750);
	}, 100);

	useEffect(() => {
		setIsMobile(window.innerWidth < 750);

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('scroll', handleResize);
	}, []);

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.toggle('blur', isOpen && isMobile);
	}, [isOpen, isMobile]);
};

export default useBlur;
