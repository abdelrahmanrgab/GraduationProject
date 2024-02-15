import Navbar13 from "../../src/components/sections/navbars/navbar13/Navbar13";
import "../assets/css/globals13.css";
import About13 from "../components/sections/aboutUS/aboutUs9/aboutus13/About13";
import Footer13 from "../components/sections/footers/footer13/Footer13";
import Hero13 from "../components/sections/heros/hero13/Hero13";
import Projects13 from "../components/sections/projects/projects13/Projects13";
import Testimonials13 from "../components/sections/testimonials/testimonials13/Testimonials13";

const TrialDesign2 = () => {
  return (
    <div className="trialdesign13">
      <Navbar13 />
      <main>
        <Hero13 />
        <About13 />
        <Testimonials13 />
        <Projects13 />
      </main>
      <Footer13 />
    </div>
  );
};

export default TrialDesign2;
