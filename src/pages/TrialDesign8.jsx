import React from "react";
import "../assets/css/globals8.css";
import Navbar8 from "../components/sections/navbars/navbar8/Navbar8";
import Hero8 from "../components/sections/heros/hero8/Hero8";
import Services8 from "../components/sections/services/services8/Services8";
import Contact8 from "../components/sections/contacts/contact8/Contact8";
import Project8 from "../components/sections/projects/project8/Project8";
import About8 from "../components/sections/abouts/about8/About8";
import TrialDesign from "./TrialDesign";
const TrialDesign8 = () => {
  const componentMapping = {
    services: Services8,
    projects: Project8,
    contact: Contact8,
    about: About8,
  };
  return <TrialDesign className="design-8 " componentMapping={componentMapping} HeroComponent={Hero8} NavbarComponent={Navbar8} template={8} />;
};

export default TrialDesign8;
