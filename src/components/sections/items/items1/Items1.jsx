import React from "react";
import "./items1.css";
import {useSelector} from 'react-redux'
import { useLocation } from "react-router";



const Items1 = () => {
  const { pathname } = useLocation();
  const items = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.items;
    } else {
      return state.template1.items;
    }
  });

  return (
    <div className="items1 design-1">
      <div className="items1-header">
        <p className="title-1">{items.title}</p>
        <p className="description-1">{items.description}</p>
      </div>
      <div className="items1-cards">
        {items.items.map((cards) => (
          <div className="article1-card" key={cards.title}>
            <div className="article1-card-img">
              <img src={cards.imgUrl} alt="Article 1" />
              <p className="article1-card-caption">{cards.subtitle}</p>
            </div>
            <div className="article1-card-info">
              <h1>{cards.title}</h1>
              <div className="article1-card-foot">
                <p>{cards.description}</p>
                <a href={"#"} className="article1-card-link">
                  <span>
                    <img src={cards.icon} alt="icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items1;