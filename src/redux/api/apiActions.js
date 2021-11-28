import axios from "axios";

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

//Fetch API trycatch
export const fetchAPIRequest = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_API_REQUEST,
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

//Countries API
export const fetchCountriesAPISuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_COUNTRIES_API_SUCCESS,
      payload: data,
    });
  };
};

//TicketMaster API
export const fetchTicketMasterApiSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: FETCH_TICKETMASTER_API_SUCCESS,
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

/*******************************************************/

//Try-Catch Fetch APIs
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

export const fetchTicketMasterAPI = (countryCode, ticketMasterAPIKey) => {
  return async (dispatch) => {
    dispatch(fetchAPIRequest());
    try {
      const response = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/suggest.json?countryCode=${countryCode}&apikey=${ticketMasterAPIKey}`
      );

      dispatch(fetchTicketMasterApiSuccess(response.data._embedded.events));
    } catch (error) {
      fetchAPIFailure(error.message);
    }
  };
};

export const fetchMapsAPI = (countryCode, cityName, mapsAPIKey) => {
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
