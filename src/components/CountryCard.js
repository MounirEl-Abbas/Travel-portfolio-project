import React from "react";
import { useSelector } from "react-redux";

const CountryCard = ({ country }) => {
  const countries = useSelector((state) => state.countries);
  console.log(`country`, country);
  return (
    <article
      className={`${
        countries.defaultLayout
          ? "country-card"
          : "country-card alternative-layout"
      }`}
    >
      <div className="country-img-division">
        <img src={country.flags.png} alt="" />
      </div>
      <div className="country-info-division">
        <h3>{country.name.common}</h3>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
        <p>
          <span>Population:</span> {country.population.toLocaleString()}
        </p>
      </div>
    </article>
  );
};

export default CountryCard;
