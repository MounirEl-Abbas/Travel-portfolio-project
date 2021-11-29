import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LogoIpsum } from "../../assets/";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="navbar-logo-container">
        <img src={LogoIpsum} alt="" />
      </section>
      <section className="navbar-routes-container">
        <Link to="/">Home</Link>
        <Link to="/countries">Explore</Link>
        <HashLink to="/#pricing-section">Pricing</HashLink>
        <Link to="/about">About</Link>
      </section>
      <section className="navbar-log-btns">
        <button>Try for free!</button>
        <button>Sign Up</button>
      </section>
    </nav>
  );
};

export default Navbar;
