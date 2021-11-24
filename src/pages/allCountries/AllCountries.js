import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { countriesActions } from "../../redux";
import FilterButtons from "./FilterButtons";

const AllCountries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => dispatch(countriesActions.fetchCountries()), []);

  /* Countries are Rendered conditionally */
  let countriesDisplayed;

  if (countries.searchTerm) {
    //Search bar NOT empty
    countriesDisplayed = countries.data.filter(
      (country) =>
        country.name.common.toLowerCase().indexOf(countries.searchTerm) !== -1
    );
  } else {
    //Seach bar empty
    countriesDisplayed = countries.data;
  }
  return (
    <main className="all-countries-page">
      <FilterButtons />

      {countries.loading ? (
        <h2>Loading...</h2>
      ) : countries.error ? (
        <h2>Error, could not get countries...</h2>
      ) : countriesDisplayed.length === 0 ? (
        <h2> No Countries match your search criteria</h2>
      ) : (
        <section className="all-countries">
          {countriesDisplayed.map((country) => {
            return countries.defaultLayout ? (
              <article className="country">
                <img src={country.flags.png} alt="" />
                <h3>{country.name.common}</h3>
              </article>
            ) : (
              <article className="country">
                <img src={country.flags.png} alt="" />
                <h3>{country.name.common}</h3>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population.toLocaleString()}</p>
              </article>
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
