import React, { useEffect } from "react";
/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { apiActions, countriesActions } from "../../redux";
/* Components */
import Logo from "../Logo";
import FilterButtons from "./partials/FilterButtons";
import AllCountriesContainer from "./partials/AllCountriesContainer";
import AllCountriesHeader from "./partials/AllCountriesHeader";

const AllCountriesPage = () => {
  const countries = useSelector((state) => state.countries);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  //Initial Render, get countries
  useEffect(() => {
    dispatch(apiActions.fetchCountriesAPI());
  }, []);
  //Once Fetch API is completed, get Countries in Countries Reducer
  useEffect(() => {
    if (!api.countriesData.length) return;
    dispatch(countriesActions.getCountries(api.countriesData));
  }, [api.countriesData]);

  //Search Bar Functionality
  let countriesToDisplay = countries.data;
  //If search bar is NOT empty, filter countries
  if (countries.searchTerm) {
    countriesToDisplay = countries.data.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(countries.searchTerm) !== -1
    );
  } else {
    //Seach bar empty, use all countries data
    countriesToDisplay = countries.data;
  }

  return (
    <main className="all-countries-page">
      <Logo />
      <AllCountriesHeader />
      <FilterButtons />

      {api.loading || countries.data.length === 0 ? (
        <h2 className="all-countries-page-response">Loading...</h2>
      ) : !api.loading && countriesToDisplay.length === 0 ? (
        <h2 className="all-countries-page-response">
          No Countries match your search criteria
        </h2>
      ) : (
        <AllCountriesContainer countriesToDisplay={countriesToDisplay} />
      )}
    </main>
  );
};

export default AllCountriesPage;
