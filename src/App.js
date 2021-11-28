import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

//components
import Home from "./components/home-Page/Home";
import AllCountries from "./components/allCountries-Page/AllCountriesPage";
import SingleCountry from "./components/singleCountry-Page/SingleCountry";
import City from "./components/city-Page/City";
import About from "./components/about-Page/About";
import NotFound from "./components/error-Page/NotFound";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<AllCountries />} />
          <Route path="/countries/:countryName" element={<SingleCountry />} />
          <Route path="/countries/:countryName/:city" element={<City />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Switch>
    </div>
  );
};

export default App;
