import * as types from '../actions/actionTypes';

const initialState = {
	phones: [],
	phone: [],
	searchResult: []
};

export default (state = initialState, action) => {
	//console.log('reducersssss: ', action.payload);

	switch (action.type) {
		case types.FETCH_PHONE_SUCCESS:
			//console.log('reducersssss: ', action.payload);
			return {
				...state,
				phones: action.payload
			};
		case types.LOAD_MORE_PHONES_SUCCESS:
			return {
				...state,
				phones: state.phones.concat(action.payload)
			};
		case types.FETCH_PHONE_BY_ID_SUCCESS:
			return {
				...state,
				phone: action.payload
			};
		case types.SEARCH_PHONE:
			//console.log('reducer',action.payload);
			return {
				...state,
				searchResult: state.phones.filter((phone) => phone.name.toLowerCase().includes(action.payload))
			};
		default:
			return state;
	}
};
