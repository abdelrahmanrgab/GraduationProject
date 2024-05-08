import "../assets/css/globals5.css";
import Navbar5 from "../components/sections/navbars/navbar5/Navbar5";
import Hero5 from "../components/sections/heros/hero5/Hero5";
import Feature5 from "../components/sections/features/feature5/Feature5";
import Services5 from "../components/sections/services/services5/Services5";
import Feature21 from "../components/sections/features/feature21/Feature21";
import Teams5 from "../components/sections/teams/teams5/Teams5";
import Cta5 from "../components/sections/ctas/cta5/Cta5";
import Footer5 from "../components/sections/footers/footer5/Footer5";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const TrialDesign5 = () => {
  const state = useSelector((state) => state.template5);

  const colors = state.colors;

  useEffect(() => {
    for (let index = 0; index < colors.templateColors.length; index++) {
      document.documentElement.style.setProperty(`color${index + 1}`, colors.templateColors[index]);
    }
  }, []);

  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    features1: Feature5,
    services: Services5,
    features2: Feature21,
    team: Teams5,
    cta: Cta5,
  };

  return (
    <div className="design5">
      <Navbar5 />
      <Hero5 />
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} />;
      })}
      <Footer5/>
    </div>
  );
};

export default TrialDesign5;
