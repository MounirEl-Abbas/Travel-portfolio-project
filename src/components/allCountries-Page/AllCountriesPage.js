import React, { useEffect } from "react";
/* Redux */
import { useSelector, useDispatch } from "react-redux";
import { apiActions, countriesActions } from "../../redux";
/* Components */
import FilterButtons from "./partials/FilterButtons";
import AllCountriesContainer from "./partials/AllCountriesContainer";

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
      <FilterButtons />

      {api.loading || countries.data.length === 0 ? (
        <h2>Loading...</h2>
      ) : !api.loading && countriesToDisplay.length === 0 ? (
        <h2> No Countries match your search criteria</h2>
      ) : countries.error ? (
        <h2>Error, could not get countries...</h2>
      ) : (
        <AllCountriesContainer countries={countriesToDisplay} />
      )}
    </main>
  );
};

export default AllCountriesPage;

// import { bindActionCreators } from "redux";

// const {
//   fetchCountriesRequest,
//   fetchCountriesSuccess,
//   fetchCountriesFailure,
// } = bindActionCreators(countriesActions, dispatch);
