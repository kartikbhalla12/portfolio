'use client';

import { FC, RefObject, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import styles from './customCursor.module.scss';

const CustomCursor: FC = () => {
	const [isLink, setIsLink] = useState(false);
	const [hideCursor, setHideCursor] = useState(false);

	const cursorDot = useRef<HTMLDivElement>(null);
	const cursorRing = useRef<HTMLDivElement>(null);

	const dotX = useRef(-50);
	const dotY = useRef(-50);

	const ringX = useRef(-50);
	const ringY = useRef(-50);
	const requestRef = useRef(0);

	const delay = 10;

	const getElementTagName = (e: MouseEvent) => {
		const tagName = (e.target as HTMLElement).tagName;

		if (tagName) return tagName.toLowerCase();
		return null;
	};

	const animateRing = () => {
		ringX.current += (dotX.current - ringX.current) / delay;
		ringY.current += (dotY.current - ringY.current) / delay;

		setCursorCoordinates(cursorRing, ringX.current, ringY.current);

		requestRef.current = requestAnimationFrame(animateRing);
	};

	const setCursorCoordinates = (
		element: RefObject<HTMLElement>,
		left: number,
		top: number
	) => {
		if (element.current) {
			element.current.style.top = `${top}px`;
			element.current.style.left = `${left}px`;
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		dotX.current = e.clientX;
		dotY.current = e.clientY;

		setCursorCoordinates(cursorDot, e.clientX, e.clientY);

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
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseleave', handleMouseLeave, true);
		document.addEventListener('mouseenter', handleMouseEnter, true);

		animateRing();

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseleave', handleMouseLeave, true);
			document.removeEventListener('mouseenter', handleMouseEnter, true);

			cancelAnimationFrame(requestRef.current);
		};
	}, []);

	return (
		<div
			className={classNames(styles.customCursor, {
				[styles.link]: isLink,
				[styles.hidden]: hideCursor,
			})}>
			<div ref={cursorDot} className={styles.cursorDot} />
			<div ref={cursorRing} className={styles.cursorRing} />
		</div>
	);
};

export default CustomCursor;
