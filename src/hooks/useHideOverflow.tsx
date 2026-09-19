import { useEffect } from 'react';

import useMobileWidth from '@hooks/useMobileWidth';

const useHideOverflow = (hideOverflow: boolean) => {
	const { isMobileWidth } = useMobileWidth();

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.toggle('hideOverflow', hideOverflow && isMobileWidth);
	}, [hideOverflow, isMobileWidth]);
};

export default useHideOverflow;
