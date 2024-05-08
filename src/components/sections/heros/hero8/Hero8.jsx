import Header from "./Header";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

// ... other imports ...

const Hero8 = () => {
  const { pathname } = useLocation();
  const hero = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.hero;
    } else {
      return state.template8.hero;
    }
  });
  const scrollDirection = useRef("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        if (scrollDirection.current === "down") {
          scrollDirection.current = "up";
          animateOnScrollUp();
        }
      } else {
        scrollDirection.current = "down";
      }
    };

    const animateOnScrollUp = () => {
      // Add your custom animation logic here
      console.log("Scrolling up, add your animations here");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-14 lg:items-center">
            <div className="flex-1 text-center font-secondary lg:text-left">
              <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
                {hero.Name[0]} <span>{hero.Name[1]}</span>
              </h1>
              <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                <span className="text-white mr-4">{hero.sub_title[0]} </span>
                <span className="text-accent">
                  <span>{hero.sub_title[1]}</span>
                </span>
              </div>
              <p className="mb-8 max-w-lg mx-auto lg:mx-0">{hero.description}</p>
              <div className="flex max-w-max items-center gap-x-6 mb-12 mx-auto lg:mx-0">
                <button className="btn btn-lg">{hero.buttonText}</button>
                <a href="#" className="text-gradient btn-link">
                  {hero.linktext}
                </a>
              </div>
              <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                {hero.soialContact.map((socialContact, index) => (
                  <a key={index} href="#" style={{ cursor: "pointer" }}>
                    {socialContact}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
              <img src={hero.imgUrl} alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero8;
