import React from "react";
import {
  HeroImg_Main,
  HeroImg_Accent,
  airCanada,
  canadianNorth,
  westJet,
  expedia,
} from "../../../assets";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="home-page-hero">
      <div className="hero-content">
        <article className="hero-content-title">
          <h1>Experience the Potentiality of Travel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ab
            molestiae deleniti facere dignissimos numquam quaerat eligendi? Ex
            corrupti dolorum modi quaerat, facere consequuntur explicabo!
          </p>
          <article className="hero-content-call-to-action">
            <div className="hero-content-btns">
              <Link to="/countries">
                <button>Explore</button>
              </Link>
            </div>
          </article>
        </article>
        <article className="hero-content-images">
          <img src={HeroImg_Main} alt="" />
          <img src={HeroImg_Accent} alt="" />
        </article>
      </div>
      <div className="hero-companies">
        <img src={airCanada} alt="" />
        <img src={westJet} alt="" />
        <img src={canadianNorth} alt="" />
        <img src={expedia} alt="" />
      </div>
    </section>
  );
};

export default HomeHero;
