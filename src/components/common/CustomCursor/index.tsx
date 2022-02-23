import { FC, useEffect, useState } from 'react';

import styles from './customCursor.module.scss';

const CustomCursor: FC = () => {
	const [top, setTop] = useState(-50);
	const [left, setLeft] = useState(-50);
	const [isLink, setIsLink] = useState(false);

	const handleMouseMove = (e: MouseEvent) => {
		setLeft(e.clientX);
		setTop(e.clientY);

		const tagName = (e.target as HTMLElement).tagName;
		if (tagName)
			setIsLink(
				tagName.toLowerCase() === 'a' || tagName.toLowerCase() === 'button'
			);
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const cursorPosition = { top, left };

	return (
		<div className={`${styles.customCursor} ${isLink ? styles.link : ''}`}>
			<div style={cursorPosition} className={styles.cursorDot} />
			<div style={cursorPosition} className={styles.cursorRing} />
		</div>
	);
};

export default CustomCursor;
