import * as types from '../actions/actionTypes';

const initialState = {
	phones: []
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
		default:
			return state;
	}
};
