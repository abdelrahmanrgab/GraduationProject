import React from "react";
import "./hero16.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Hero16 = () => {
  // const { hero } = useSelector((state) => state.template16);
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template16.hero;
    }
  });
  return (
    <section className="home16" id="home">
      <div className="home__container16 container16">
        <div className="home__content16">
          <span className="home__sub_title16">{hero.sub_title}</span>
          <h1 className="home__title16">{hero.title}</h1>
          <p className="home__description16">{hero.description}</p>
          <div className="home__btns16">
            <a href="#menu16" className="btn16">
              {hero.Link1}
            </a>
            <a href="#reservation16" className="btn16 home__btn16">
              {hero.Link2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero16;
