import React,{useEffect} from "react";
import "./feature5_1.css";
import { useSelector } from "react-redux";

import Aos from 'aos'
import "aos/dist/aos.css"

const Feature5 = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])


  const { feature5_1 } = useSelector((state) => state.template5);

  return (
    <div className="feature5_1 design5-section">
      <div className="feature5_1-mainSection">
        <div data-aos="fade-down" data-aos-duration="2500" className="feature5_1-title">
          <small>{feature5_1.smallTitle}</small>
          <h2>{feature5_1.title}</h2>
          <p>{feature5_1.description}</p>
        </div>

        <div className="feature5_1-info">
          <div className="feature5_1-info-text">
            {feature5_1.blocks.map((content, index) => (
              <div key={index} data-aos="fade-down" data-aos-duration={content.duration} className="feature5_1-singleInfo">
                <span className={`feature5_1-number${index}`}>{content.number}</span>
                <h4>{content.title}</h4>
                <p>{content.description}</p>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="feature5_1-info-imgDiv">
            <img src={feature5_1.imgUrl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature5;
