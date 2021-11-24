import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
} from "./apiTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* FETCHING COUNTRIES API */
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    /***************************/

    default:
      return state;
  }
};

export default reducer;
