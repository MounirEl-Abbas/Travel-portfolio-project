import {
  GET_COUNTRIES,
  SEARCH_COUNTRIES,
  TOGGLE_LAYOUT,
  SORT_BY,
} from "./countriesTypes";

const initialState = {
  loading: false,
  defaultLayout: true,
  searchTerm: "",
  data: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        data: action.payload,
      };
    //Filter search query
    case SEARCH_COUNTRIES:
      return {
        ...state,
        searchTerm: action.payload,
      };
    //Toggle country card layout
    case TOGGLE_LAYOUT:
      if (action.payload === "default") {
        return {
          ...state,
          defaultLayout: true,
        };
      }
      if (action.payload === "alternative") {
        return {
          ...state,
          defaultLayout: false,
        };
      }
      return state;

    /* 
      Sorting Countries
- Alphabetical 
- Reverse-alphabetical
- Increasing Pop. 
- Decreasing Pop.
    */
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
