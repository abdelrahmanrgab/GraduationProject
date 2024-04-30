import React from "react";
import { useSelector } from "react-redux";
import styles, { layout } from "../../heros/hero7/styles7/style";
import Button7 from "../feature7/Button7";

const CardDeal = () => {
  const { paymentMethods } = useSelector((state) => state.template7);
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {paymentMethods.title} <br className="sm:block hidden" /> {paymentMethods.subtitle}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-5)" }}>
          {paymentMethods.content}
        </p>
        <Button7 text="Find a Deal" styles={`px-4 py-5 mt-6 text-[var(--website-7-color-2)] rounded-full bg-[var(--website-7-color-5)]`} />
      </div>
      <div className={layout.sectionImg}>
        <img src={paymentMethods.imgUrl} alt="billing" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;