const debounce = function (fn: Function, d: number) {
	let timer: any;

	return function () {
		let args = arguments;
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn.apply(args);
		}, d);
	};
};

export default debounce;
