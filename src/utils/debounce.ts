const debounce = function (fn: Function, d: number) {
	let timer: any;

	return function () {
		//@ts-ignore
		let context = this;
		let args = arguments;
		clearTimeout(timer);

		timer = setTimeout(() => {
			fn.apply(context, args);
		}, d);
	};
};

export default debounce;
