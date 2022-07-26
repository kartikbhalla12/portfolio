import { useEffect } from 'react';

import useMobileWidth from '@hooks/useMobileWidth';

const useHideOverflow = (hideOverflow: boolean, isMobile: boolean) => {
	const { isMobileWidth } = useMobileWidth();

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.toggle('hideOverflow', hideOverflow && isMobileWidth);
		root.classList.toggle('mobile', isMobile);
	}, [hideOverflow, isMobileWidth, isMobile]);
};

export default useHideOverflow;
