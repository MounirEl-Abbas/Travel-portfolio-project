import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../CountryCard";
import { useSelector } from "react-redux";

const AllCountriesContainer = ({ countriesToDisplay }) => {
  const countries = useSelector((state) => state.countries);

  return (
    <section className="all-countries-page-countries" id="countries-container">
      <div
        className={`${
          countries.defaultLayout
            ? "countries-flex-container"
            : "countries-flex-container countries-alternative-layout"
        }`}
      >
        {countriesToDisplay.map((country) => {
          return (
            <Link
              to={`${country.name.common}`}
              className="country"
              data-aos="fade-right"
            >
              <CountryCard country={country} />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default AllCountriesContainer;
