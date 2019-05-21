import * as types from "../actions/actionTypes";

const initialState = {
  phones: [],
  phone: [],
  searchResult: [],
  categories: [],
  showCategories: []
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
        searchResult: state.phones.filter(phone =>
          phone.name.toLowerCase().includes(action.payload)
        )
      };
    case types.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload
      };
    case types.SHOW_CATEGORIES_SUCCESS:
      return {
        ...state
      };
    case types.GET_CATEGORY_BY_ID_SUCCESS:
      console.log(state.phones);
      return {
        ...state,
        phones: state.phones.map(ph => {
          if (ph.categoryId === action.payload) {
            return ph;
          }
        })
      };
    default:
      return state;
  }
};
