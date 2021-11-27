import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiActions, countriesActions } from "../../redux";
import FilterButtons from "./partials/FilterButtons";
import AllCountriesContainer from "./partials/AllCountriesContainer";

const AllCountriesPage = () => {
  const countries = useSelector((state) => state.countries);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiActions.fetchCountries());
  }, []);
  useEffect(() => {
    if (!api.data.length) return;

    dispatch(countriesActions.getCountries(api.data));
  }, [api.data]);

  /* Countries are Rendered conditionally */
  let countriesToDisplay = countries.data;

  if (countries.searchTerm) {
    //Search bar NOT empty
    countriesToDisplay = countries.data.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(countries.searchTerm) !== -1
    );
  } else {
    //Seach bar empty
    countriesToDisplay = countries.data;
  }
  return (
    <main className="all-countries-page">
      <FilterButtons />

      {countries.loading ? (
        <h2>Loading...</h2>
      ) : countries.error ? (
        <h2>Error, could not get countries...</h2>
      ) : countriesToDisplay.length === 0 ? (
        <h2> No Countries match your search criteria</h2>
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
