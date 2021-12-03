import React from "react";

const CityInfo = ({ info }) => {
  return (
    <article className="city-info">
      <h4>{info.cityName}</h4>
      <p>
        <span>Population:</span> {info.population.toLocaleString()}
      </p>
      <p>{info.description}</p>
    </article>
  );
};

export default CityInfo;
