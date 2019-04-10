import phones from './dummyData';
import categories from './dummyCategories';

export const fetchPhones = (async) => {
	return new Promise((resolve) => {
		resolve(phones);
	});
};

export const fetchPhonesById = async (id) => {
	return new Promise((resolve, reject) => {
		const phone = phones.filter((phone) => phone.id === id);
		resolve(phone);
	});
};

export const fetchCategories = (async) => {
	return new Promise((resolve) => {
		resolve(categories);
	});
};
