import * as types from './actionTypes';
import {
	fetchPhones as fetchPhonesApi,
	fetchPhonesById as fetchPhoneByIdApi,
	fetchCategories as fetchCategotiresAPI
	//
} from '../api/index';

export const fetchPhones = () => async (dispatch) => {
	try {
		dispatch({ type: types.FETCH_PHONE_START });

		const phones = await fetchPhonesApi();
		dispatch({
			type: types.FETCH_PHONE_SUCCESS,
			payload: phones
		});
	} catch (error) {
		dispatch({ type: types.FETCH_PHONE_FAIL, payload: error, error: true });
	}
};

export const loadMorePhones = () => async (dispatch) => {
	try {
		dispatch({ type: types.LOAD_MORE_PHONES_START });

		const phones = await fetchPhonesApi();
		dispatch({
			type: types.LOAD_MORE_PHONES_SUCCESS,
			payload: phones
		});
	} catch (error) {
		dispatch({
			type: types.LOAD_MORE_PHONES_FAIL,
			payload: error
		});
	}
};

export const fetchPhoneById = (id) => async (dispatch) => {
	dispatch({ type: types.FETCH_PHONE_BY_ID_START });

	try {
		const phone = await fetchPhoneByIdApi(id);
		dispatch({
			type: types.FETCH_PHONE_BY_ID_SUCCESS,
			payload: phone
		});
	} catch (error) {
		dispatch({
			type: types.FETCH_PHONE_BY_ID_FAIL,
			payload: error,
			error: true
		});
	}
};

export const addPhoneToBasket = (id, price) => (dispatch) => {
	dispatch({
		type: types.ADD_PHONE_TO_BASKET,
		payload: id,
		payload2: price
	});
};

export const searchPhone = (value) => (dispatch) => {
	console.log('action', value);
	dispatch({
		type: types.SEARCH_PHONE,
		payload: value
	});
};

export const fetchCategories = () => async (dispatch) => {
	dispatch({ type: types.FETCH_CATEGORIES_START });

	try {
		const categories = await fetchCategotiresAPI();
		dispatch({
			type: types.FETCH_CATEGORIES_SUCCESS,
			payload: categories
		});
	} catch (error) {
		dispatch({
			type: types.FETCH_CATEGORIES_FAIL,
			payload: error,
			error: true
		});
	}
};
