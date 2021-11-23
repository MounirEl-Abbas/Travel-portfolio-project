import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SEARCH_COUNTRIES,
  SORT_BY,
} from "./countriesTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
  searchTerm: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
        searchTerm: "",
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        searchTerm: action.payload,
      };

    case SORT_BY:
      if (action.payload === "alpha-ascending") {
        let sortedData = state.data.sort((a, b) => {
          let textA = a.name.common.toUpperCase();
          let textB = b.name.common.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        return {
          ...state,
          data: sortedData,
        };
      }
      if (action.payload === "alpha-descending") {
        let sortedData = state.data.sort((a, b) => {
          let textA = a.name.common.toUpperCase();
          let textB = b.name.common.toUpperCase();
          return textA > textB ? -1 : textA < textB ? 1 : 0;
        });
        return {
          ...state,
          data: sortedData,
        };
      }
      if (action.payload === "pop-ascending") {
        let sortedData = state.data.sort((a, b) => a.population - b.population);
        return {
          ...state,
          data: sortedData,
        };
      }
      if (action.payload === "pop-descending") {
        let sortedData = state.data.sort((a, b) => b.population - a.population);
        return {
          ...state,
          data: sortedData,
        };
      }

      return state;

    default:
      return state;
  }
};

export default reducer;
