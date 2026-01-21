import { useEffect, useState } from 'react';
import debounce from '@utils/debounce';

const useIsMobile = () => {
	const [isMobile, setIsMobile] = useState(false);

	const checkMobile = () => {
		if (typeof window === 'undefined') return false;

		// Check window width first (faster)
		if (window.innerWidth < 750) {
			return true;
		}

		// Fallback to user-agent detection
		const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
		return /iPhone|iPad|iPod|Android/i.test(userAgent);
	};

	const handleResize = debounce(() => {
		setIsMobile(checkMobile());
	}, 100);

	useEffect(() => {
		// Set initial value
		setIsMobile(checkMobile());

		// Listen for resize events
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};

export default useIsMobile;


