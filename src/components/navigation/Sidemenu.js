import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { LogoIpsum } from "../../assets";
import {
  GiPlanetConquest,
  FaPlane,
  MdAttachMoney,
  FaUsers,
} from "../../assets";

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
          <Link to="/">
            <GiPlanetConquest />
            <span>Home</span>
          </Link>
          <Link to="/countries">
            <FaPlane />
            <span>Explore</span>
          </Link>
          <HashLink to="/#pricing-section">
            <MdAttachMoney />
            <span>Pricing</span>
          </HashLink>
          <Link to="/about">
            <FaUsers />
            <span>About</span>
          </Link>
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
