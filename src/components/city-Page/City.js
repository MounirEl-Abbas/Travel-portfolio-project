import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { singleCountryActions, apiActions } from "../../redux";
import CityInfo from "./partials/CityInfo";
import CitySlider from "./partials/CitySlider";
import CityWeather from "./partials/CityWeather";

const City = () => {
  const location = useLocation();
  const singleCountry = useSelector((state) => state.singleCountry);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  /* If user navigates manually by URL */
  useEffect(() => {
    if (Object.keys(singleCountry.currentCityObj).length) return;

    let citySelected = location.pathname.split("/")[3];
    /* If the country name has a space E.G. New York */
    if (citySelected.indexOf("%") !== -1) {
      citySelected = citySelected.split("%20").join(" ");
    }
    dispatch(singleCountryActions.getCurrentCityInfo(citySelected));
    // singleCountry.currentCityObj = singleCountry.currentCityObj[0];
  }, []);

  useEffect(() => {
    console.log("maps/weather use effect");
    /******************** GET GOOGLE MAPS OF CITY *********************/
    const mapsAPIKey = process.env.REACT_APP_GOOGLEMAPS_API_KEY;
    const cityName = singleCountry.currentCityObj.cityName;
    const countryName = singleCountry.countryObj.name.common;

    dispatch(apiActions.fetchMapsAPI(countryName, cityName, mapsAPIKey));
    /********************************************************************/
    /********************* GET WEATHER OF CITY ************************/
    const weatherAPIKey = process.env.REACT_APP_WEATHER_API_KEY;

    dispatch(apiActions.fetchCurrentWeather(cityName, weatherAPIKey));
    dispatch(apiActions.fetchForecastWeather(cityName, weatherAPIKey));

    /********************************************************************/
  }, []);

  return (
    <>
      {api.loading && singleCountry.loading ? (
        <h2>Loading......</h2>
      ) : (
        <main className="city-page">
          <header>HERO</header>
          <section className="city-info">
            <CityInfo info={singleCountry.currentCityObj} />
            <CitySlider images={singleCountry.currentCityObj.images} />
          </section>
          <section>
            <img src={api.mapsData} alt="" />
          </section>
          {!Object.keys(api.currentWeather).length &&
          !api.forecastWeather.length ? (
            <h2>Loading...</h2>
          ) : (
            <CityWeather
              api={api}
              apiActions={apiActions}
              dispatch={dispatch}
            />
          )}
          <section>FLIGHT API</section>
          <section>HOTEL API</section>
        </main>
      )}
    </>
  );
};

export default City;

/*
*********Hotel API************
https://rapidapi.com/apidojo/api/hotels4


*********Flights API************
https://rapidapi.com/Travelpayouts/api/flight-data


*********Weather API************
https://www.weatherapi.com/docs/

MAP
`https://maps.googleapis.com/maps/api/staticmap?center=${cityName},${countryCode}&zoom=5&size=600x400&markers=color:red|${cityName},${countryCode}&key=${mapsAPIKey}`;

 const getCountryCode = (country) => {
    let countryCode;
    switch (country) {
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
    return countryCode;
  };
*/
