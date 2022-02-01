import React from "react";

import "./index.css";

const Card = ({cardData=[], heading='Heading', arrow=''}) => {
    console.log('card',cardData)
  return (
    <div className="card">
        <h2 className="feature-heading">{heading}</h2>
     <div className="card-block">
     {cardData.map((card) => {
        return (
          <div key={card.id} className="card-cainter">
            <div className="card-logo">
              <img src={card.logo} alt="wallet" />
            </div>
            <div className="card-heading">{card.cardHeading}</div>
            <div className="card-text">{card.cardText}</div>
            <div className="card-arrow">
              {arrow}
            </div>
          </div>
        );
      })}
     </div>
    </div>
  );
};

export default Card;
