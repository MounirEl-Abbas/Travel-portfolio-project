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
      <article className="features-title">
        <h2>Travel Plans Built Only For You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum maxime
          dolor est earum tempora, totam blanditiis repellat perspiciatis ipsa
          qui, sint saepe, iure accusamus aliquam ut tenetur praesentium
          aliquid. Dignissimos eveniet et asperiores vel quam libero dicta
          officia, officiis dolorem!
        </p>
      </article>
      <div className="features-img">
        <img src={FeaturesImg} alt="" />
      </div>
      <article>
        <GiCompass />
        <h4>Mission</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          perferendis aperiam numquam qui, odit, alias voluptate, nisi
          distinctio ad quidem a omnis tempora corrupti soluta?
        </p>
      </article>
      <article>
        <AiOutlineStar />
        <h4>Happy Customers</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          perferendis aperiam numquam qui, odit, alias voluptate, nisi
          distinctio ad quidem a omnis tempora corrupti soluta?
        </p>
      </article>
      <article>
        <GiStairsGoal />
        <h4>Vision</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure
          expedita dolorem cum natus harum facere! Doloremque ducimus voluptatem
          fugiat?
        </p>
      </article>
      <article>
        <GiArchiveRegister />
        <h4>Guarantee</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          veritatis error deleniti corporis pariatur nam facere repudiandae est
          repellendus consequatur laudantium doloribus ab labore a minus placeat
          quos, amet adipisci?
        </p>
      </article>
    </section>
  );
};

export default HomeFeatures;
