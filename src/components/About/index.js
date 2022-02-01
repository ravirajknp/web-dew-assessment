import React from "react";
import aboutimg from "../../assets/features_img.png";
import "./index.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-words">
        <h2>Few Words About Us</h2>
        <p>
          Trio Ace is a decentralized community ecosystem system that began with
          an idea in 2020 to resolve public monetary challenges via a
          combination of blockchain technology and crowdfunding system.
        </p>
        <p>
          A transparent and secure platform was created with the goal of giving
          a positive impact to the global community in terms of funds and
          education to explore the cryptocurrency market.
        </p>
        <h3>Ecosystem for the Future</h3>
        <p>
          Build your capital and store your cryptocurrencies privately with the
          Trio Ace wallet. With the instant distribution of payments and online
          ledgers, you can confidently work towards achieving your financial
          freedom.
        </p>
      </div>
      <div className="about-feature">
        <div className="feature-bg"></div>
        <div className="feature-bg-2"></div>
        <img src={aboutimg} alt="aboutimg" />
      </div>
    </div>
  );
};

export default About;
