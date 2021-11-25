import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countriesActions } from "../../redux";
import { apiActions } from "../../redux";
import FilterButtons from "./FilterButtons";
import { Link } from "react-router-dom";
import EachCountry from "./EachCountry";

const AllCountries = () => {
  const countries = useSelector((state) => state.countries);
  const api = useSelector((state) => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiActions.fetchCountries());
  }, []);
  useEffect(() => {
    api.data.length && dispatch(countriesActions.getCountries(api.data));
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
        <section className="all-countries">
          {countriesToDisplay.map((country) => {
            return (
              <Link to={`${country.name.common}`}>
                <EachCountry country={country} />
              </Link>
            );
          })}
        </section>
      )}
    </main>
  );
};

export default AllCountries;

// import { bindActionCreators } from "redux";

// const {
//   fetchCountriesRequest,
//   fetchCountriesSuccess,
//   fetchCountriesFailure,
// } = bindActionCreators(countriesActions, dispatch);
