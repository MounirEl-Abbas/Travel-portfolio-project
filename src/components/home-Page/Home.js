import React from "react";

//Components
import HomeHero from "./partials/HomeHero";
import HomeFeatures from "./partials/HomeFeatures";
import HomePricing from "./partials/HomePricing";

const Home = () => {
  return (
    <main className="home-page">
      <HomeHero />
      <HomeFeatures />
      <HomePricing />
    </main>
  );
};

export default Home;
