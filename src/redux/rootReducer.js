import { combineReducers } from "redux";
import singleCountryReducer from "./singleCountry/singleCountryReducer";
import countriesReducer from "./countries/countriesReducer";
import apiReducer from "./api/apiReducer";

const rootReducer = combineReducers({
  singleCountry: singleCountryReducer,
  countries: countriesReducer,
  api: apiReducer,
});

export default rootReducer;
