import React, { useEffect } from "react";
import { useLocation } from "react-router";
import EachCountry from "../allCountries/EachCountry";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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

  /* If the user navigates to countries/:countryName in the URL  */

  useEffect(() => {
    if (countries.data.length) return;
    console.log("useeffect 1");
    dispatch(apiActions.fetchCountries());
  }, []);

  useEffect(() => {
    if (!api.data.length) return;
    console.log("useeffect 2");

    dispatch(countriesActions.getCountries(api.data));
  }, [api.data]);

  /*******************************************/
  /* 
if countries.data.length is full, return
if !countries.data.length (empty) or countryInfo.length 
*/

  useEffect(() => {
    if (!countries.data.length) return;
    console.log("useeffect 3");
    // if (Object.keys(singleCountry.countryInfo).length)
    //   return;
    let countrySelected = location.pathname.split("/")[2]; // COUNTRY NAME: String

    /* If the country name has a space E.G. United States */
    if (countrySelected.indexOf("%") !== -1) {
      countrySelected = countrySelected.split("%20").join(" ");
    }

    const countrySelectedObj = countries.data.find(
      (country) => country.name.common === countrySelected
    );
    console.log(`countrySelectedObj`, countrySelectedObj);

    //On single country page, always alternative view of country card
    dispatch(countriesActions.handleToggleLayout("alternative"));
    //Pass obj to state
    dispatch(singleCountryActions.addCountryChosenToState(countrySelectedObj));
    //Pass countryName:string, then iterate assets/data.js based on country name, to find additional country info (cities, trends)
    dispatch(singleCountryActions.getCountryInfo(countrySelected));

    //Now Loading is false
  }, [countries.data]);

  return (
    <>
      {singleCountry.loading ? (
        <h2>Loading...</h2>
      ) : (
        <main>
          <header>HERO</header>
          <EachCountry country={singleCountry.countryObj} />
          <section className="country-trends">
            <img src={singleCountry.countryInfo.trends.frameworkTrend} alt="" />
            <img src={singleCountry.countryInfo.trends.languageTrend} alt="" />
          </section>
          <section className="country-cities">
            {singleCountry.countryInfo.cities.map((city) => {
              return (
                <Link
                  to={`${city.cityName}`}
                  onClick={() =>
                    dispatch(singleCountryActions.setCurrentCity(city))
                  }
                >
                  <article>
                    <h4>{city.cityName}</h4>
                    <img src={city.images[0]} alt="" />
                  </article>
                </Link>
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
