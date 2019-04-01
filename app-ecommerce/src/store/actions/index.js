import * as types from './actionTypes';
import {
	fetchPhones as fetchPhonesApi,
	fetchPhonesById as fetchPhoneByIdApi
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
