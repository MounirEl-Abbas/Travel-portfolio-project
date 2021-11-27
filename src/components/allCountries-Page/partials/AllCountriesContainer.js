import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../CountryCard";

const AllCountriesContainer = ({ countries }) => {
  return (
    <section className="all-countries">
      {countries.map((country) => {
        return (
          <Link to={`${country.name.common}`}>
            <CountryCard country={country} />
          </Link>
        );
      })}
    </section>
  );
};

export default AllCountriesContainer;
