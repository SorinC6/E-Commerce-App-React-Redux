import * as types from '../actions/actionTypes';

const initialState = {
	basket: [],
	totalPrice: ''
};

export default (state = initialState, action) => {
	console.log(action.payload2);
	switch (action.type) {
		case types.ADD_PHONE_TO_BASKET:
			return {
				...state,
				basket: state.basket.concat(action.payload),
				totalPrice: Number(state.totalPrice) + Number(action.payload2)
			};
		default:
			return state;
	}
};
