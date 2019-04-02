import * as types from '../actions/actionTypes';

const initialState = {
	basket: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.ADD_PHONE_TO_BASKET:
			return {
				...state,
				basket: state.basket.concat(action.payload)
			};
		default:
			return state;
	}
};
