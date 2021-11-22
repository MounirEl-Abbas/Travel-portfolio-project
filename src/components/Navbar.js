import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LogoIpsum } from "../assets/";

const Navbar = () => {
  return (
    <nav>
      <img src={LogoIpsum} alt="" />
      <section className="nav-routes-container">
        <Link to="/">Home</Link>
        <Link to="/countries">Explore</Link>
        <HashLink to="/#pricing-section">Pricing</HashLink>
        <Link to="/about">About</Link>
      </section>
      <section className="user-btns">
        <button>Login</button>
        <button>Sign Up</button>
      </section>
    </nav>
  );
};

export default Navbar;
