import phones from './dummyData';

export const fetchPhones = (async) => {
	return new Promise((resolve) => {
		resolve(phones);
	});
};
