import axios from "axios";

import {
  FETCH_API_REQUEST,
  FETCH_COUNTRIES_API_SUCCESS,
  FETCH_MAPS_API_SUCCESS,
  FETCH_WEATHER_CURRENT_API_SUCCESS,
  FETCH_WEATHER_FORECAST_API_SUCCESS,
  TOGGLE_WEATHER_FORECAST_VIEW,
  FETCH_API_FAILURE,
} from "./apiTypes";

export const fetchAPIRequest = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_API_REQUEST,
    });
  };
};

//Countries API
export const fetchCountriesAPISuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_COUNTRIES_API_SUCCESS,
      payload: data,
    });
  };
};

//Maps API
export const fetchMapsAPISuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_MAPS_API_SUCCESS,
      payload: data,
    });
  };
};

//Weather API
export const fetchWeatherCurrentAPISuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WEATHER_CURRENT_API_SUCCESS,
      payload: data,
    });
  };
};
export const fetchWeatherForecastAPISuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_WEATHER_FORECAST_API_SUCCESS,
      payload: data,
    });
  };
};

export const toggleForecastView = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_WEATHER_FORECAST_VIEW,
    });
  };
};

export const fetchAPIFailure = (error) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_API_FAILURE,
      payload: error,
    });
  };
};

//Func
export const fetchCountriesAPI = () => {
  return async (dispatch) => {
    dispatch(fetchAPIRequest());
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=USA,CAN,FRA,DEU,AUT,CHE,ITA,&fields=name,capital,population,flags`
      );

      dispatch(fetchCountriesAPISuccess(response.data));
    } catch (error) {
      fetchAPIFailure(error.message);
    }
  };
};

export const fetchMapsAPI = (countryName, cityName, mapsAPIKey) => {
  let countryCode;
  switch (countryName) {
    case "Italy":
      countryCode = "IT";
      break;
    case "Germany":
      countryCode = "DE";
      break;
    case "France":
      countryCode = "FR";
      break;
    case "Austria":
      countryCode = "AT";
      break;
    case "Switzerland":
      countryCode = "CH";
      break;
    case "United States":
      countryCode = "US";
      break;
    case "Canada":
      countryCode = "CA";
      break;
    default:
      countryCode = "";
      break;
  }
  return async (dispatch) => {
    dispatch(fetchAPIRequest());
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/staticmap?center=${cityName},${countryCode}&zoom=5&size=600x400&markers=color:red|${cityName},${countryCode}&key=${mapsAPIKey}`
      );
      dispatch(fetchMapsAPISuccess(response.url));
    } catch (error) {
      fetchAPIFailure(error.message);
    }
  };
};

export const fetchCurrentWeather = (cityName, weatherAPIKey) => {
  return async (dispatch) => {
    dispatch(fetchAPIRequest());
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?q=${cityName}&key=${weatherAPIKey}`
      );
      const {
        current: { condition, temp_c, temp_f },
        location: { localtime },
      } = response.data;

      const weatherCurrentData = { condition, temp_c, temp_f, localtime };
      dispatch(fetchWeatherCurrentAPISuccess(weatherCurrentData));
    } catch (error) {
      fetchAPIFailure(error.message);
    }
  };
};
export const fetchForecastWeather = (cityName, weatherAPIKey) => {
  return async (dispatch) => {
    dispatch(fetchAPIRequest());
    try {
      const response = await axios.get(
        `    http://api.weatherapi.com/v1/forecast.json?q=${cityName}&days=3&key=${weatherAPIKey}
`
      );
      const {
        forecast: { forecastday },
      } = response.data;
      let threeDayForecast = [];

      forecastday.forEach((eachDay) => {
        const {
          date,
          day: { condition, avgtemp_c, avgtemp_f },
        } = eachDay;
        const day = { date, condition, avgtemp_c, avgtemp_f };
        threeDayForecast.push(day);
      });
      dispatch(fetchWeatherForecastAPISuccess(threeDayForecast));
    } catch (error) {
      fetchAPIFailure(error.message);
    }
  };
};
