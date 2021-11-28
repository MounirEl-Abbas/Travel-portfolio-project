import {
  FETCH_API_REQUEST,
  FETCH_COUNTRIES_API_SUCCESS,
  FETCH_MAPS_API_SUCCESS,
  FETCH_WEATHER_CURRENT_API_SUCCESS,
  FETCH_WEATHER_FORECAST_API_SUCCESS,
  TOGGLE_WEATHER_FORECAST_VIEW,
  FETCH_TICKETMASTER_API_SUCCESS,
  FETCH_API_FAILURE,
} from "./apiTypes";

const initialState = {
  loading: false,
  isForecast: false,
  countriesData: [],
  mapsData: "",
  currentWeather: {},
  forecastWeather: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    /* FETCHING API API */
    case FETCH_API_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_API_SUCCESS:
      return {
        ...state,
        loading: false,
        countriesData: action.payload,
        error: "",
      };
    case FETCH_MAPS_API_SUCCESS:
      return {
        ...state,
        loading: false,
        mapsData: action.payload,
        error: "",
      };
    case FETCH_WEATHER_CURRENT_API_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWeather: action.payload,
        error: "",
      };
    case FETCH_WEATHER_FORECAST_API_SUCCESS:
      return {
        ...state,
        loading: false,
        forecastWeather: action.payload,
        error: "",
      };
    case TOGGLE_WEATHER_FORECAST_VIEW:
      if (state.isForecast === true) {
        return {
          ...state,
          isForecast: false,
        };
      }
      if (state.isForecast === false) {
        return {
          ...state,
          isForecast: true,
        };
      }
      return state;

    case FETCH_TICKETMASTER_API_SUCCESS:
      return state;
    case FETCH_API_FAILURE:
      return {
        loading: false,
        isForecast: false,
        countriesData: [],
        mapsData: "",
        currentWeather: {},
        forecastWeather: [],
        error: "",
      };
    /***************************/

    default:
      return state;
  }
};

export default reducer;
