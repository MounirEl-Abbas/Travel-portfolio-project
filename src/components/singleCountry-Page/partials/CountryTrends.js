import React from "react";

const CountryTrends = ({ trends }) => {
  return (
    <section className="country-trends">
      <img src={trends.frameworkTrend} alt="" />
      <img src={trends.languageTrend} alt="" />
    </section>
  );
};

export default CountryTrends;
