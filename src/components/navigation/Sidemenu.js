import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LogoIpsum } from "../../assets";

const Sidemenu = ({ isMenuOpen }) => {
  return (
    <div
      className={`${
        isMenuOpen
          ? "sidemenu-container sidemenu-container-open"
          : "sidemenu-container"
      }`}
    >
      <nav className={`${isMenuOpen ? "sidemenu sidemenu-open" : "sidemenu"}`}>
        <section className="sidemenu-logo-container">
          <img src={LogoIpsum} alt="" />
        </section>
        <section className="sidemenu-routes-container">
          <Link to="/">Home</Link>
          <Link to="/countries">Explore</Link>
          <HashLink to="/#pricing-section">Pricing</HashLink>
          <Link to="/about">About</Link>
        </section>
        <section className="sidemenu-log-btns">
          <button>Try for free!</button>
          <button>Sign Up</button>
        </section>
      </nav>
    </div>
  );
};

export default Sidemenu;
