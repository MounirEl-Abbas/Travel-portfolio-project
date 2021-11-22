import React from "react";

//Components
import HomeHero from "./HomeHero";
import HomeFeatures from "./HomeFeatures";
import HomePricing from "./HomePricing";

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
