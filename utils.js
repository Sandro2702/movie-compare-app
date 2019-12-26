// Function which makes a pause .5 s before last pressup of the search terms
const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
