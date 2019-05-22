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
    case types.REMOVE_PHONE_FROM_BASKET_SUCCESS:
      return {
        ...state,
        totalPrice: state.totalPrice - action.payload2,
        phonesInBasket: state.phonesInBasket.filter(phone => {
          return !(phone.id == action.payload.toString());
        })
      };
    default:
      return state;
  }
};
