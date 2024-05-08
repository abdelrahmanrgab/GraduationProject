/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Cta21 = () => {
  const { pathname } = useLocation();
  const cta2 = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta2;
    } else {
      return state.template18.cta2;
    }
  });
  // const { cta2 } = useSelector((state) => state.template18);
  return (
    <>
      <span id="contact"></span>
      <div className="bg-[--website-18-color-6] dark:bg-black dark:text-white py-14 ">
        <div className="container18">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">{cta2.title}</h1>
              <p className="text-gray-400">{cta2.description} </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <a
                href={cta2.url}
                className="inline-block font-semibold py-2 px-6 bg-[--website-18-color-1] text-white hover:opacity-[0.8] duration-200 tracking-widest uppercase "
              >
                {cta2.linkText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta21;
