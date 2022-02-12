import { useEffect } from 'react';

const useBlur = (isOpen: boolean) => {
	useEffect(() => {
		const root = window.document.documentElement;
		if (isOpen) root.classList.add('blur');
		else root.classList.remove('blur');
	}, [isOpen]);
};

export default useBlur;
