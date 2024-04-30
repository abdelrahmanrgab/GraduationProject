import { useLocation } from "react-router";
import styles from "../../../sections/heros/hero7/styles7/style";
import Button7 from "../../features/feature7/Button7";
import { useSelector } from "react-redux";

const Cta7 = () => {
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template7.cta;
    }
  });
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  rounded-[20px] box-shadow`} style={{ backgroundColor: "var(--website-7-color-5)" }}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{cta.subtitle}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--website-7-color-6)" }}>
          {cta.content}
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button7 styles={`px-4 py-5 mt-6  text-[var(--website-7-color-3)] rounded-full bg-[var(--website-7-color-1)] `} />
      </div>
    </section>
  );
};
export default Cta7;
