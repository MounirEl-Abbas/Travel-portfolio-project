import axios from "axios";

import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "./apiTypes";

export const fetchCountriesRequest = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_COUNTRIES_REQUEST,
    });
  };
};
export const fetchCountriesSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_COUNTRIES_SUCCESS,
      payload: data,
    });
  };
};
export const fetchCountriesFailure = (error) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_COUNTRIES_FAILURE,
      payload: error,
    });
  };
};

export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());

    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=USA,CAN,FRA,DEU,AUT,CHE,ITA,&fields=name,capital,population,flags`
      );
      dispatch(fetchCountriesSuccess(response.data));
    } catch (error) {
      fetchCountriesFailure(error.message);
    }
  };
};
