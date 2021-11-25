import React, { useEffect } from "react";
import { useLocation } from "react-router";
import EachCountry from "../allCountries/EachCountry";
import { useSelector, useDispatch } from "react-redux";
import {
  singleCountryActions,
  countriesActions,
  apiActions,
} from "../../redux";

const SingleCountry = () => {
  const location = useLocation(); // pathname:'/countries/COUNTY'
  const singleCountry = useSelector((state) => state.singleCountry);
  const countries = useSelector((state) => state.countries);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();
  console.log(location);

  /* If the user navigates to countries/:countryName in the URL  */

  useEffect(() => {
    if (countries.data.length) return;
    dispatch(apiActions.fetchCountries());
  }, []);

  useEffect(() => {
    if (!api.data.length || countries.data.length) return;
    dispatch(countriesActions.getCountries(api.data));
  }, [api.data]);

  /*******************************************/

  useEffect(() => {
    if (!countries.data.length) return;
    let countrySelected = location.pathname.split("/")[2]; // COUNTRY NAME: String

    /* If the country name has a space E.G. United States */
    if (countrySelected.indexOf("%") !== -1) {
      countrySelected = countrySelected.split("%20").join(" ");
    }

    const countrySelectedObj = countries.data.filter(
      (country) => country.name.common === countrySelected
    );
    /* 
    We Got country Obj - Now: dispatch the obj to state, get country information from data.js (cities, trends)
    */
    dispatch(countriesActions.handleToggleLayout("alternative")); //On single country page, always alternative view of country card
    dispatch(singleCountryActions.addCountryChosenToState(countrySelectedObj)); //Pass obj to state
    dispatch(singleCountryActions.getCountryInfo(countrySelected)); //Pass countryName:string, then iterate assets/data.js based on country name, to find additional country info (cities, trends)

    //Now Loading is false
  }, [countries.data]);

  return (
    <>
      {singleCountry.loading ? (
        <h2>Loading...</h2>
      ) : (
        <main>
          <header>HERO</header>
          <EachCountry country={singleCountry.countryObj[0]} />
          <section className="country-trends">
            <img
              src={singleCountry.countryInfo[0].trends.frameworkTrend}
              alt=""
            />
            <img
              src={singleCountry.countryInfo[0].trends.languageTrend}
              alt=""
            />
          </section>
          <section className="country-cities">
            {singleCountry.countryInfo[0].cities.map((city) => {
              return (
                <article>
                  <h4>{city.cityName}</h4>
                  <img src={city.images[0]} alt="" />
                </article>
              );
            })}
          </section>
        </main>
      )}
    </>
  );
};

export default SingleCountry;

/* 
HEADER - HERO
COUNTRY CARD FROM ALL COUNTRIES
GOOGLE TRENDS
CITIES
*/
