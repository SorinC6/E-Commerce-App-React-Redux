import * as types from "../actions/actionTypes";

const initialState = {
  basket: [],
  totalPrice: "",
  phonesInBasket: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PHONE_TO_BASKET:
      return {
        ...state,
        basket: state.basket.concat(action.payload),
        totalPrice: Number(state.totalPrice) + Number(action.payload2),
        phonesInBasket: state.phonesInBasket.concat(action.payload3)
      };
    default:
      return state;
  }
};
