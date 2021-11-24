import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";
import countriesReducer from "./countries/countriesReducer";

const rootReducer = combineReducers({
  API: apiReducer,
  countries: countriesReducer,
});

export default rootReducer;
