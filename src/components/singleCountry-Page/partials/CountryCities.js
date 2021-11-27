import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CountryCities = ({ cities, setCurrentCity }) => {
  const dispatch = useDispatch();
  return (
    <section className="country-cities">
      {cities.map((city) => {
        return (
          <Link
            to={`${city.cityName}`}
            onClick={() => dispatch(setCurrentCity(city))}
          >
            <article>
              <h4>{city.cityName}</h4>
              <img src={city.images[0]} alt="" />
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default CountryCities;
