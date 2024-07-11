import React from "react";
import styles, { layout } from "../../heros/hero7/styles7/style";

const Billing = ({ template }) => {
  const items = template.items;

  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id={items.sectionId} className={layout.sectionReverse}>
          <div className={layout.sectionImgReverse}>
            <img src={items.imgs[2]} alt="billing" className="w-[85%] h-[100%] relative z-[0]" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
          </div>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              {items.title} <br className="sm:block hidden" /> {items.subtitle}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-5)" }}>
              {items.description}
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
              <img src={items.imgs[0]} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
              <img src={items.imgs[1]} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Billing;
