import * as types from "../actions/actionTypes";

const initialState = {
  phones: [],
  phone: [],
  searchResult: [],
  categories: [],
  showCategories: [],
  categoriesData: [],
  categoryPressed: false
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
        categoryPressed: false,
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
      //console.log(state.phones);
      //console.log("reducer ", action.payload);
      return {
        ...state,
        categoryPressed: true,
        categoriesData: state.phones.filter(ph => {
          return ph.categoryId === action.payload;
        })
      };
    case types.GET_ALL_CATEGORIES:
      return {
        ...state,
        categoryPressed: false
      };
    default:
      return state;
  }
};
