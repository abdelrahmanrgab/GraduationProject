import styles from "../../../sections/heros/hero7/styles7/style";
import Button7 from "../../features/feature7/feature7_1/Button7";
import { useSelector } from "react-redux";

const Cta7 = () => {
  const { cta } = useSelector((state) => state.template7);
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>{cta.titleA}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: "var(--color5)" }}>
          {cta.titleB}
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button7 styles={`px-4 py-5 mt-6  text-[var(--color5)] rounded-full bg-[var(--color3)] `} />
      </div>
    </section>
  );
};
export default Cta7;
