// import React from "react";
// import "./pricing3.css";

// const Pricing3 = ({ template }) => {
//   return (
//     <div className="plans-container3" id={template.pricing.sectionId}>
//       <div className="blur3 plans-blur-1"></div>
//       <div className="blur3 plans-blur-2"></div>
//       <div className="plans-header3">
//         <span className="stroke-text">{template.pricing.title}</span>
//         <span>{template.pricing.subtitle}</span>
//         <span className="stroke-text">{template.pricing.text}</span>
//       </div>

//       <div className="plans3">
//         {template.pricing.plans.map((plan, i) => (
//           <div className="plan3" key={i}>
//             <span>{plan.title}</span>
//             <span>$ {plan.price}</span>

//             <div className="features3">
//               {plan.features.map((feature, j) => (
//                 <div className="feature3" key={j}>
//                   <img src={template.pricing.imgUrl} alt="" />
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <span>{template.pricing.description}</span>
//             </div>
//             <button className="btn3">{template.pricing.buttonText}</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Pricing3;
import React from "react";
import "./pricing3.css";

const Pricing3 = ({ template }) => {
  const { sectionId, title, subtitle, text, description, buttonText, imgUrl, plans } = template.pricing;

  return (
    <div className="plans-container3" id={sectionId}>
      <div className="blur3 plans-blur-1"></div>
      <div className="blur3 plans-blur-2"></div>
      <div className="plans-header3">
        <span className="stroke-text">{title}</span>
        <span>{subtitle}</span>
        <span className="stroke-text">{text}</span>
      </div>

      <div className="plans3">
        {plans.map((plan, i) => (
          <div className="plan3" key={i}>
            <span>{plan.title}</span>
            <span>$ {plan.price}</span>

            <div className="features3">
              {plan.features.map((feature, j) => (
                <div className="feature3" key={j}>
                  <img src={imgUrl} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>{description}</span>
            </div>
            <button className="btn3">{buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing3;
