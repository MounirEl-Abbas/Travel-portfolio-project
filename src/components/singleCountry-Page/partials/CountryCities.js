import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CountryCities = ({ cities, setCurrentCity, countryName }) => {
  const dispatch = useDispatch();
  return (
    <section className="country-cities">
      <section className="cities-title" data-aos="fade-down">
        <h2>Choose a city to visit in {countryName}</h2>
      </section>
      <section className="cities-container">
        {cities.map((city) => {
          return (
            <article
              className="city"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Link
                to={`${city.cityName}`}
                onClick={() => dispatch(setCurrentCity(city))}
              >
                <h3>{city.cityName}</h3>
                <img src={city.images[0]} alt="" />
              </Link>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default CountryCities;
