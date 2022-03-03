import { FC, RefObject, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import styles from './customCursor.module.scss';

const CustomCursor: FC = () => {
	const [isLink, setIsLink] = useState(false);
	const [hideCursor, setHideCursor] = useState(false);

	const cursorDot = useRef<HTMLDivElement>(null);
	const cursorRing = useRef<HTMLDivElement>(null);

	const getElementTagName = (e: MouseEvent) => {
		return (e.target as HTMLElement).tagName.toLowerCase();
	};

	const setCursorCoordinates = (
		element: RefObject<HTMLElement>,
		left: number,
		top: number
	) => {
		element.current!.style.top = `${top}px`;
		element.current!.style.left = `${left}px`;
	};

	const handleMouseMove = (e: MouseEvent) => {
		setCursorCoordinates(cursorDot, e.clientX, e.clientY);
		setCursorCoordinates(cursorRing, e.clientX, e.clientY);

		const elementsList = ['a', 'button', 'img'];
		const tagName = getElementTagName(e);

		if (tagName) setIsLink(elementsList.includes(tagName));
	};

	const handleMouseLeave = (e: MouseEvent) => {
		if (getElementTagName(e) == 'html') setHideCursor(true);
	};

	const handleMouseEnter = (e: MouseEvent) => {
		if (getElementTagName(e) == 'html') setHideCursor(false);
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseleave', handleMouseLeave, true);
		window.addEventListener('mouseenter', handleMouseEnter, true);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseleave', handleMouseLeave, true);
			window.removeEventListener('mouseenter', handleMouseEnter, true);
		};
	}, []);

	return (
		<div
			className={classnames(
				styles.customCursor,
				{ [styles.link]: isLink },
				{ [styles.hidden]: hideCursor }
			)}>
			<div ref={cursorDot} className={styles.cursorDot} />
			<div ref={cursorRing} className={styles.cursorRing} />
		</div>
	);
};

export default CustomCursor;
