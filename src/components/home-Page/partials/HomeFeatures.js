import React from "react";

//Images
import { FeaturesImg } from "../../../assets";

//Icons
import {
  GiCompass,
  GiStairsGoal,
  GiArchiveRegister,
  AiOutlineStar,
} from "../../../assets";

const HomeFeatures = () => {
  return (
    <section className="home-page-features">
      <article className="features-title" data-aos="fade-down">
        <h2>Travel Plans Built Only For You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maxime
          dolor est earum tempora, totam blanditiis repellat perspiciatis ipsa
          qui!
        </p>
      </article>
      <div className="features-img" data-aos="zoom-in">
        <img src={FeaturesImg} alt="" />
      </div>
      <section className="features-container">
        <article
          className="feature"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <GiCompass />
          <h4>Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            perferendis aperiam numquam qui, odit, alias voluptate, nisi
            distinctio ad quidem a omnis tempora corrupti soluta.
          </p>
        </article>
        <article
          className="feature"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <AiOutlineStar />
          <h4>Happy Customers</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            perferendis aperiam numquam qui, odit, alias voluptate, nisi
            distinctio ad quidem a omnis tempora corrupti soluta!
          </p>
        </article>
        <article
          className="feature"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <GiStairsGoal />
          <h4>Vision</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure
            expedita dolorem cum natus harum facere! Doloremque ducimus
            voluptatem fugiat?
          </p>
        </article>
        <article
          className="feature"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <GiArchiveRegister />
          <h4>Guarantee</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            veritatis error deleniti corporis pariatur nam facere repudiandae
            est repellendus consequatur laudantium doloribus ab labore a minus
            placeat quos, amet adipisci!
          </p>
        </article>
      </section>
    </section>
  );
};

export default HomeFeatures;
