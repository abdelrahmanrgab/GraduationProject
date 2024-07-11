import React from "react";
import "./hero2.css";
import { useSelector } from "react-redux";

const Hero2 = ({ template }) => {
  const ownHero = useSelector((state) => state.ownTemplate.hero);
  const hero = template ? template.hero : ownHero;
  return (
    <section id={hero.sectionId} className="pb-24 section2 hero2">
      <h5>{hero.title}</h5>
      <h2>{hero.subtitle}</h2>
      <div className="container2 hero2__container">
        <div className="hero2__me">
          <div className="hero2__me-image">
            <img src={hero.imgUrl} alt="" />
          </div>
        </div>

        <div className="hero2__content">
          <div className="hero2__cards">
            {hero.heros.map((heros, index) => (
              <article className="hero2__card" key={index}>
                <img className="hero2__icon" src={heros.icon} alt={heros.title} />
                <h5>{heros.title}</h5>
                <small>{heros.description}</small>
              </article>
            ))}
          </div>
          <p>{hero.description}</p>
          <a  href={`#${hero.linkText}`}className="a2 btn2 btn-primary2">
           {hero.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
