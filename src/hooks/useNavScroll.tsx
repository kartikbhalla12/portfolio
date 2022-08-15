import { useEffect, useState } from 'react';

const useNavScroll = (hideNavbarY: number) => {
	const [hideNavbar, setHideNavbar] = useState(false);
	const [isTop, setIsTop] = useState(true);

	let previousScrollY = 0;

	const handleScroll = () => {
		setIsTop(window.scrollY < 5);
		setHideNavbar(
			window.scrollY > previousScrollY && window.scrollY > hideNavbarY
		);
		previousScrollY = window.scrollY;
	};

	useEffect(() => {
		if (window.scrollY === 0) {
			setIsTop(true);
		} else setIsTop(false);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return {
		isTop,
		hideNavbar,
	};
};

export default useNavScroll;
