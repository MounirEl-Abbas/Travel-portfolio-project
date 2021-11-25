import { ADD_CHOSEN_COUNTRY, GET_COUNTRY_INFO } from "./singleCountryTypes";

export const addCountryChosenToState = (countryObj) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CHOSEN_COUNTRY,
      payload: countryObj,
    });
  };
};

export const getCountryInfo = (countryName) => {
  return (dispatch) => {
    dispatch({
      type: GET_COUNTRY_INFO,
      payload: countryName,
    });
  };
};
