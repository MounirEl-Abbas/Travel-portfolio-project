import React from "react";
import { useSelector } from "react-redux";

const EachCountry = ({ country }) => {
  const countries = useSelector((state) => state.countries);

  return (
    <article
      className={`${
        countries.defaultLayout ? "country" : "country alternative-layout"
      }`}
    >
      <img src={country.flags.png} alt="" />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString()}</p>
    </article>
  );
};

export default EachCountry;
