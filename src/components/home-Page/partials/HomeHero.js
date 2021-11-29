import React from "react";
import { HeroImg_Main, HeroImg_Accent } from "../../../assets";

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
          <div className="hero-content-btns">
            <button>Explore</button>
            <button>Learn More</button>
          </div>
          <p>By signing up, you agree with the Terms of Service</p>
        </article>
        <article className="hero-content-images">
          <img src={HeroImg_Main} alt="" />
          <img src={HeroImg_Accent} alt="" />
        </article>
      </div>
    </section>
  );
};

export default HomeHero;
