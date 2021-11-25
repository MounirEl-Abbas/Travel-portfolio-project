import { ADD_CHOSEN_COUNTRY, GET_COUNTRY_INFO } from "./singleCountryTypes";
import data from "../../assets/data";
const initialState = {
  loading: true,
  countryObj: [],
  countryInfo: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHOSEN_COUNTRY:
      return {
        ...state,
        countryObj: action.payload,
      };

    case GET_COUNTRY_INFO:
      const countryAdditionalInfo = data.filter(
        (countries) => countries.country === action.payload
      );
      return {
        ...state,
        countryInfo: countryAdditionalInfo,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
