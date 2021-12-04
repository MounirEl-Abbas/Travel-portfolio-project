import React, { useEffect } from "react";
import { useLocation } from "react-router";
import CountryCard from "../CountryCard";
import { useSelector, useDispatch } from "react-redux";
import CountryCities from "./partials/CountryCities";
import { getCountryCode } from "../../utils/getCountryCode";
import Logo from "../Logo";

import {
  singleCountryActions,
  countriesActions,
  apiActions,
} from "../../redux";
import CountryTicketMaster from "./partials/CountryTicketMaster";

const SingleCountry = () => {
  const location = useLocation(); // pathname:'/countries/COUNTY'
  const singleCountry = useSelector((state) => state.singleCountry);
  const countries = useSelector((state) => state.countries);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  /* If the user navigates to countries/:countryName in the URL  */

  useEffect(() => {
    if (countries.data.length) return;
    dispatch(apiActions.fetchCountriesAPI());
  }, []);

  useEffect(() => {
    if (!api.countriesData.length) return;

    dispatch(countriesActions.getCountries(api.countriesData));
  }, [api.countriesData]);

  /*******************************************/
  /* 
if countries.data.length is full, return
if !countries.data.length (empty) continue
*/

  useEffect(() => {
    if (!countries.data.length) return;
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

    //On single country page, always alternative view of country card
    dispatch(countriesActions.handleToggleLayout("alternative"));
    //Pass obj to state
    dispatch(singleCountryActions.addCountryChosenToState(countrySelectedObj));
    //Pass countryName:string, then iterate assets/data.js based on country name, to find additional country info (cities, trends)
    dispatch(singleCountryActions.getCountryInfo(countrySelected));

    //Now Loading is false
  }, [countries.data]);

  useEffect(() => {
    if (!Object.keys(singleCountry.countryObj).length) return;
    const countryName = singleCountry.countryObj.name.common;
    const countryCode = getCountryCode(countryName);
    const ticketMasterAPIKey = process.env.REACT_APP_TICKET_MASTER_API_KEY;
    dispatch(apiActions.fetchTicketMasterAPI(countryCode, ticketMasterAPIKey));
  }, [singleCountry.countryObj]);

  return (
    <>
      {singleCountry.loading ? (
        <h2 className="response">Loading...</h2>
      ) : (
        <main className="single-country-page">
          <Logo />
          <header>
            <div className="img-opacity-container">
              <CountryCard country={singleCountry.countryObj} />
            </div>
          </header>
          <CountryTicketMaster
            events={api.ticketMasterData}
            isLoading={api.loading}
            countryName={singleCountry.countryObj.name.common}
          />
          <CountryCities
            cities={singleCountry.countryInfo.cities}
            setCurrentCity={singleCountryActions.setCurrentCity}
            countryName={singleCountry.countryObj.name.common}
          />
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
