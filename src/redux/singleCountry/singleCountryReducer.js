import {
  ADD_CHOSEN_COUNTRY,
  GET_COUNTRY_INFO,
  SET_CURRENT_CITY,
  GET_CURRENT_CITY_INFO,
} from "./singleCountryTypes";
import data from "../../assets/data";

const initialState = {
  loading: true,
  countryObj: {},
  countryInfo: {},
  currentCityObj: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHOSEN_COUNTRY:
      return {
        ...state,
        countryObj: action.payload,
      };

    case GET_COUNTRY_INFO:
      const countryAdditionalInfo = data.find(
        (countries) => countries.country === action.payload
      );
      console.log(`countryAdditionalInfo`, countryAdditionalInfo);
      return {
        ...state,
        countryInfo: countryAdditionalInfo,
        loading: false,
      };

    /* The following 2 cases essentially do the same thing
      The difference is whether the user navigated to this page by clicks or url
    */
    //Navigating the website by clicks
    case SET_CURRENT_CITY:
      return {
        ...state,
        currentCityObj: action.payload,
      };
    //Navigating manually by URL
    case GET_CURRENT_CITY_INFO:
      let cityInfo = {};
      for (const country of data) {
        country.cities.forEach((city) => {
          if (city.cityName === action.payload) {
            return (cityInfo = city);
          }
        });
      }

      return {
        ...state,
        loading: false,
        currentCityObj: cityInfo,
      };

    default:
      return state;
  }
};

export default reducer;
