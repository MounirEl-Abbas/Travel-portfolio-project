import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Home from "./components/home-Page/Home";
import AllCountries from "./components/allCountries-Page/AllCountriesPage";
import SingleCountry from "./components/singleCountry-Page/SingleCountry";
import City from "./components/city-Page/City";
import NotFound from "./components/error-Page/NotFound";

//components
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/Footer";

import ScrollToTop from "./utils/ScrollToTop";

import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div className="pages">
          <ScrollToTop>
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="/countries" element={<AllCountries />} />
              <Route
                path="/countries/:countryName"
                element={<SingleCountry />}
              />
              <Route path="/countries/:countryName/:city" element={<City />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ScrollToTop>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
