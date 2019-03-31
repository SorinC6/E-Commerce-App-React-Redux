import * as types from './actionTypes';
import { fetchPhones as fetchPhonesApi } from '../api/index';

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
