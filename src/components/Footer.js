import React from "react";
import { LogoIpsum } from "../assets/";
import { Link } from "react-router-dom";
import { BsTwitter, BsFacebook, FaGooglePlusG } from "../assets";

const Footer = () => {
  return (
    <footer>
      <div className="footer-containers">
        <section className="footer-logo-container">
          <img src={LogoIpsum} alt="" />
        </section>
        <section className="footer-navigation-container">
          <article aria-label="About">
            <Link to="/about">About Us</Link>
            <button>Blog</button>
            <button>Team</button>
            <button>Career</button>
            <button>Contact</button>
          </article>
          <article aria-label="Company">
            <button>Privacy</button>
            <button>Support</button>
            <button>Help Desk</button>
            <button>FAQ</button>
          </article>
        </section>
        <section
          className="footer-socials-container"
          aria-label="Subscribe to our Newsletter"
        >
          <article className="newsletter">
            <input type="email" placeholder="Enter Email..." />
            <button id="newsletter-subscribe-btn">Subscribe</button>
          </article>
          <article className="socials">
            <i>
              <BsTwitter />
            </i>
            <i>
              <BsFacebook />
            </i>
            <i>
              <FaGooglePlusG />
            </i>
          </article>
        </section>
      </div>
      <div className="disclaimer">
        <p>Be sure to take a look at our Terms of Use and Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
