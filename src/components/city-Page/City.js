import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { singleCountryActions, apiActions } from "../../redux";
import CityInfo from "./partials/CityInfo";
import CitySlider from "./partials/CitySlider";
import CityWeather from "./partials/CityWeather";
import { getCountryCode } from "../../utils/getCountryCode";
import Logo from "../Logo";

const City = () => {
  const location = useLocation();
  const singleCountry = useSelector((state) => state.singleCountry);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    /* Get country and city name from url */
    let countryName = location.pathname.split("/")[2];
    if (countryName.indexOf("%") !== -1) {
      countryName = countryName.split("%20").join(" ");
    }
    let cityName = location.pathname.split("/")[3];
    if (cityName.indexOf("%") !== -1) {
      cityName = cityName.split("%20").join(" ");
    }

    dispatch(singleCountryActions.getCurrentCityInfo(cityName));

    /******************** GET GOOGLE MAPS OF CITY *********************/
    const mapsAPIKey = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
    const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;
    const countryCode = getCountryCode(countryName);
    dispatch(apiActions.fetchMapsAPI(countryCode, cityName, mapsAPIKey));
    dispatch(apiActions.fetchCurrentWeather(cityName, weatherAPIKey));
    dispatch(apiActions.fetchForecastWeather(cityName, weatherAPIKey));
  }, []);

  return (
    <>
      <main className="city-page">
        <Logo />
        <header>
          <h2>{singleCountry.currentCityObj.cityName}</h2>
        </header>
        <section className="city-page-city-info">
          {!Object.keys(singleCountry.currentCityObj).length ? (
            <h2 className="response">Loading City Info...</h2>
          ) : (
            <>
              <CitySlider images={singleCountry.currentCityObj.images} />
              <CityInfo info={singleCountry.currentCityObj} />
            </>
          )}
        </section>
        <section className="city-page-location-info">
          <figure>
            {api.mapsData ? (
              <img src={api.mapsData} alt="" />
            ) : (
              <h2 className="response">Locating City...</h2>
            )}
          </figure>

          {!Object.keys(api.currentWeather).length ||
          !Object.keys(api.forecastWeather.length) ? (
            <h2 className="response">Loading Weather...</h2>
          ) : (
            <CityWeather />
          )}
        </section>
      </main>
    </>
  );
};

export default City;
