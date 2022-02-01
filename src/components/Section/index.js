import React from "react";
import mission from "../../assets/mission.png";
import vision from "../../assets/vision.png";
import './index.css';

const infoData = [
  {
    id: 1,
    sectionImage: mission,
    title: "Mission",
    body: "Our mission is to provide a blockchain crowdfunding platform in an open financial system where everyone can achieve financial freedom.",
  },
  {
    id: 2,
    sectionImage: vision,
    title: "Vision",
    body: "Our vision is to accelerate and educate the global community into adapting and migrating towards decentralized finance for an access to equal economic opportunities.",
  },
];

const Section = () => {
  return <div className="section">
      {infoData.map((item) => {
      return (
        <div key={item.id} className="section-item">
          <div className="section-icon">
            <img src={item.sectionImage} alt="sectionimage" />
          </div>
          <div className="section-data">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </div>
      );
    })}
  </div>;
};

export default Section;
