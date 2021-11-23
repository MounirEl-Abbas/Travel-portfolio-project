import axios from "axios";
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SEARCH_COUNTRIES,
  SORT_BY,
} from "./countriesTypes";

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

export const handleSearch = (searchInput) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_COUNTRIES,
      payload: searchInput,
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

// export const fetchUsers = () => {
//   return (dispatch) => {
//     dispatch(fetchUsersRequest);
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         const users = response.data;
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUsersFailure(errorMsg));
//       });
//   };
// };
