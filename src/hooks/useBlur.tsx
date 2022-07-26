import { useEffect } from 'react';

import useMobileWidth from '@hooks/useMobileWidth';

const useBlur = (isOpen: boolean) => {
	const { isMobileWidth } = useMobileWidth();

	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.toggle('blur', isOpen && isMobileWidth);
	}, [isOpen, isMobileWidth]);
};

export default useBlur;
