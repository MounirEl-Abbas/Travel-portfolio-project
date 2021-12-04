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
  // const countries = useSelector((state) => state.countries);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  /* Get all Countries */
  useEffect(() => {
    console.log("getting countries");
    dispatch(apiActions.fetchCountriesAPI());
  }, []);

  useEffect(() => {
    if (!api.countriesData.length) return;
    /* Once we have all countries */
    //Get name of country selected from url
    let countrySelected = location.pathname.split("/")[2];
    if (countrySelected.indexOf("%") !== -1) {
      countrySelected = countrySelected.split("%20").join(" ");
    }
    //Find the country we are on's object from all countries data
    const selectedCountry = api.countriesData.find(
      (country) => country.name.common === countrySelected
    );
    //Add country to state
    dispatch(singleCountryActions.addCountryChosenToState(selectedCountry));
    //Get additional info on the country
    dispatch(singleCountryActions.getCountryInfo(countrySelected));
    //Toggle countryCard layout to alternative
    dispatch(countriesActions.handleToggleLayout("alternative"));
    //Get county's ticketMaster events
    const countryCode = getCountryCode(countrySelected);
    const ticketMasterAPIKey = process.env.REACT_APP_TICKET_MASTER_API_KEY;
    dispatch(apiActions.fetchTicketMasterAPI(countryCode, ticketMasterAPIKey));
  }, [api.countriesData.length]);

  return (
    <>
      <main className="single-country-page">
        <Logo />
        <header>
          <div className="img-opacity-container">
            {Object.keys(singleCountry.countryObj).length ? (
              <CountryCard country={singleCountry.countryObj} />
            ) : (
              <h2 className="response">Loading Country...</h2>
            )}
          </div>
        </header>
        {Object.keys(singleCountry.countryObj).length ? (
          <CountryTicketMaster
            events={api.ticketMasterData}
            isLoading={api.loading}
            countryName={singleCountry.countryObj.name.common}
          />
        ) : (
          <h2 className="response">Getting Ticket Master Events...</h2>
        )}
        {Object.keys(singleCountry.countryObj).length ? (
          <CountryCities
            cities={singleCountry.countryInfo.cities}
            setCurrentCity={singleCountryActions.setCurrentCity}
            countryName={singleCountry.countryObj.name.common}
          />
        ) : (
          <h2 className="response">Loading Country Cities...</h2>
        )}
      </main>
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
