const debounce = <T extends (...args: any[]) => any>(
	fn: T,
	delay: number
): ((...args: Parameters<T>) => void) => {
	let timer: NodeJS.Timeout | null = null;

	return function (this: any, ...args: Parameters<T>) {
		if (timer) {
		clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay);
	};
};

export default debounce;
