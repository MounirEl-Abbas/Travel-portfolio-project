import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  TOGGLE_LAYOUT,
  SORT_BY,
} from "./countriesTypes";

export const getCountries = (countries) => {
  return (dispatch) => {
    dispatch({
      type: GET_COUNTRIES,
      payload: countries,
    });
  };
};

export const handleSearch = (searchInput) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_COUNTRIES,
      payload: searchInput,
    });
  };
};

export const handleToggleLayout = (type) => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_LAYOUT,
      payload: type,
    });
  };
};

export const handleSortBy = (value) => {
  return (dispatch) => {
    dispatch({
      type: SORT_BY,
      payload: value,
    });
  };
};
