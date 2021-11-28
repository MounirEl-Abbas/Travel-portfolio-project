import React from "react";

const CityInfo = ({ info }) => {
  return (
    <article>
      <h1>{info.cityName}</h1>
      <p>Population: {info.population}</p>
      <p>{info.description}</p>
    </article>
  );
};

export default CityInfo;
