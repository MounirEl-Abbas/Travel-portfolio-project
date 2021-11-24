import { BrowserRouter as Switch, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home/Home";
import AllCountries from "./pages/allCountries/AllCountries";
import SingleCountry from "./pages/singleCountry/SingleCountry";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Switch>
    </div>
  );
};

export default App;
