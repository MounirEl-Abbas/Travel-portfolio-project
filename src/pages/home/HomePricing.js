import React from "react";

import { BsLightningFill, FiUser, FaHeart, IoIosBusiness } from "../../assets";

const HomePricing = () => {
  return (
    <section className="home-page-pricing" id="pricing-section">
      <header className="pricing-title">
        <p>Pricing Plan</p>
        <h2>Clear & Simple</h2>
      </header>
      <main style={{ display: "flex", justifyContent: "space-around" }}>
        <article>
          <h4>Free</h4>
          <p>$0/month</p>
          <i>
            <BsLightningFill />
          </i>
          <button>Get Started</button>
          <ul>
            <li>Up to 5 Members</li>
            <li>Earn Points</li>
            <li>Express Check-in</li>
            <li>Flight Amenities</li>
          </ul>
        </article>
        <article>
          <h4>Starter</h4>
          <p>$9.99/month</p>
          <i>
            <FiUser />
          </i>
          <button>Get Started</button>
          <ul>
            <li>Up to 10 Members</li>
            <li>Earn Points</li>
            <li>Express Check-in</li>
            <li>Flight Amenities</li>
          </ul>
        </article>
        <article>
          <h4>Standard</h4>
          <p>$19.99/month</p>
          <i>
            <FaHeart />
          </i>
          <button>Get Started</button>
          <ul>
            <li>Up to 20 Members</li>
            <li>Earn 2x Points</li>
            <li>Express Check-in</li>
            <li>Flight Amenities</li>
          </ul>
        </article>
        <article>
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
