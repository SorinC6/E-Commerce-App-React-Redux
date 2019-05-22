import * as types from "./actionTypes";
import {
  fetchPhones as fetchPhonesApi,
  fetchPhonesById as fetchPhoneByIdApi,
  fetchCategories as fetchCategotiresAPI
  //
} from "../api/index";

export const fetchPhones = () => async dispatch => {
  try {
    dispatch({ type: types.FETCH_PHONE_START });

    const phones = await fetchPhonesApi();
    //console.log(phones);
    dispatch({
      type: types.FETCH_PHONE_SUCCESS,
      payload: phones
    });
  } catch (error) {
    dispatch({ type: types.FETCH_PHONE_FAIL, payload: error, error: true });
  }
};

export const loadMorePhones = () => async dispatch => {
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

export const fetchPhoneById = id => async dispatch => {
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

export const addPhoneToBasket = (id, price, phone) => dispatch => {
  dispatch({
    type: types.ADD_PHONE_TO_BASKET,
    payload: id,
    payload2: price,
    payload3: phone
  });
};

export const searchPhone = value => dispatch => {
  dispatch({
    type: types.SEARCH_PHONE,
    payload: value
  });
};

export const fetchCategories = () => async dispatch => {
  dispatch({ type: types.FETCH_CATEGORIES_START });

  try {
    const categories = await fetchCategotiresAPI();

    dispatch({
      type: types.FETCH_CATEGORIES_SUCCESS,
      payload: categories
    });
  } catch (error) {
    dispatch({
      type: types.FETCH_CATEGORIES_FAIL,
      payload: error,
      error: true
    });
  }
};

export const showCategories = id => dispatch => {
  dispatch({ type: types.SHOW_CATEGORIES_SUCCESS, payload: id });
};

export const getCategoryById = id => dispatch => {
  dispatch({ type: types.GET_CATEGORY_BY_ID_START });

  if (id == -1) {
    dispatch({ type: types.GET_ALL_CATEGORIES });
  } else {
    try {
      dispatch({ type: types.GET_CATEGORY_BY_ID_SUCCESS, payload: id });
    } catch (err) {
      dispatch({
        type: types.GET_CATEGORY_BY_ID_FAIL,
        payload: "Error trying to get categoryes by id"
      });
    }
  }
};

export const removePhoneFromBasket = (id, price) => dispatch => {
  dispatch({ type: types.REMOVE_PHONE_FROM_BASKET_START });

  try {
    dispatch({
      type: types.REMOVE_PHONE_FROM_BASKET_SUCCESS,
      payload: id,
      payload2: price
    });
  } catch (error) {
    dispatch({
      type: types.REMOVE_PHONE_FROM_BASKET_FAIL,
      payload: "Error trying to remove phone from basket"
    });
  }
};
