import {
  ADD_CHOSEN_COUNTRY,
  GET_COUNTRY_INFO,
  SET_CURRENT_CITY,
  GET_CURRENT_CITY_INFO,
} from "./singleCountryTypes";

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

export const setCurrentCity = (cityObj) => {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_CITY,
      payload: cityObj,
    });
  };
};

export const getCurrentCityInfo = (cityName) => {
  return (dispatch) => {
    dispatch({
      type: GET_CURRENT_CITY_INFO,
      payload: cityName,
    });
  };
};
