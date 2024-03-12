import React from "react";
import "../assets/css/globals8.css";
import Navbar8 from "../components/sections/navbars/navbar8/Navbar8";
import Hero8 from "../components/sections/heros/hero8/Hero8";
import About8 from "../components/sections/AboutMe/About8";
import Services8 from "../components/sections/services/services8/Services8";
import Work8 from "../components/sections/teams/items8/item8";
import Contact8 from "../components/sections/contacts/contact8/Contact8";

const TrialDesign8 = () => {
  return (
    <div className="site-container8">
      <Hero8 />
      <Navbar8 />
      <About8 />
      <Services8 />
      <Work8 />
      <Contact8 />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default TrialDesign8;
