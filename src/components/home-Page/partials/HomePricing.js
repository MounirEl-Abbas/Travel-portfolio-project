import React from "react";

import {
  BsLightningFill,
  FiUser,
  FaHeart,
  IoIosBusiness,
} from "../../../assets";

const HomePricing = () => {
  return (
    <section className="home-page-pricing" id="pricing-section">
      <header className="pricing-title" data-aos="fade-down">
        <p>Pricing Plan</p>
        <h2>Clear & Simple</h2>
      </header>
      <main className="home-pricing-container">
        <article data-aos="fade-up" data-aos-duration="2000">
          <h4>Free</h4>
          <p>$0/month</p>
          <i>
            <BsLightningFill />
          </i>
          <button>Get Started</button>
          <ul>
            <li>Up to 5 Members</li>
            <li className="not-offered">Earn Points</li>
            <li className="not-offered">Express Check-in</li>
            <li className="not-offered">Flight Amenities</li>
          </ul>
        </article>
        <article data-aos="fade-up" data-aos-duration="2000">
          <h4>Starter</h4>
          <p>$9.99/month</p>
          <i>
            <FiUser />
          </i>
          <button>Get Started</button>
          <ul>
            <li>Up to 10 Members</li>
            <li>Earn Points</li>
            <li className="not-offered">Express Check-in</li>
            <li className="not-offered">Flight Amenities</li>
          </ul>
        </article>
        <article data-aos="fade-up" data-aos-duration="2000">
          <h4>Standard</h4>
          <p>$19.99/month</p>
          <i>
            <FaHeart />
          </i>
          <button id="accent-btn">Get Started</button>
          <ul>
            <li>Up to 20 Members</li>
            <li>Earn 2x Points</li>
            <li>Express Check-in</li>
            <li className="not-offered">Flight Amenities</li>
          </ul>
        </article>
        <article data-aos="fade-up" data-aos-duration="2000">
          <h4>Enterprise</h4>
          <p>$49.99/month</p>
          <i>
            <IoIosBusiness />
          </i>
          <button>Get Started</button>
          <ul>
            <li>Up to 50 Members</li>
            <li>Earn 2x Points</li>
            <li>Express Check-in</li>
            <li>Flight Amenities</li>
          </ul>
        </article>
      </main>
    </section>
  );
};

export default HomePricing;
