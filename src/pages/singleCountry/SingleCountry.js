import React, { useEffect } from "react";
import { useLocation } from "react-router";
import EachCountry from "../allCountries/EachCountry";
const SingleCountry = () => {
  const location = useLocation(); // pathname:'/countries/COUNTY'
  useEffect(() => {
    const countrySelected = location.pathname.split("/")[2]; // COUNTRY
    console.log(`location`, location);
  }, []);

  return (
    <main>
      <header>HERO</header>
      {/* <EachCountry country={countrySelected} /> */}
      <section className="country-trends">Trends</section>
      <section className="country-cities">
        <article>city</article>
        <article>city</article>
        <article>city</article>
      </section>
    </main>
  );
};

export default SingleCountry;

/* 
HEADER - HERO
COUNTRY CARD FROM ALL COUNTRIES
GOOGLE TRENDS
CITIES
*/
