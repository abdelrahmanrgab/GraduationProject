import React from "react";
import { useSelector } from "react-redux";

const Button7 = ({ styles }) => {
  const { feature } = useSelector((state) => state.template7);
  return (
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-aqua-500 rounded-[10px] text-white outline-none ${styles}`}
    >
      {feature.text}
    </button>
  );
};
export default Button7;
