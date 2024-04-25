import React from "react";
import { useSelector } from "react-redux";
import { Education, Experience } from "../cta15/Data15_1";
import { useLocation } from "react-router";

const Cta15 = () => {
  // const { cta } = useSelector((state) => state.template15);
  const { pathname } = useLocation();
  const cta = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.cta;
    } else {
      return state.template15.cta;
    }
  });

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen cta15" id="resume">
      <h1 className="sm:text-[44px] text-[26px] text-center m-0 cta15_1">{cta.title}</h1>
      <p className="font-bold text-sm flex items-center justify-center gap-x-4 cta15_2">{cta.subtitle}</p>
      <div className="w-full lg:flex gap-x-20 justify-center">
        <section className="lg:w-1/2 max-w-[500px]">
          <h1 className="mr-[20px] border-0 w-full border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center text-4xl cta15_5">Education</h1>
          <Education />
        </section>
        <section className="lg:w-1/2 max-w-[500px] mt-8 lg:mt-0">
          <h1 className="mr-[20px] border-0 w-full border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center text-4xl cta15_4">Experience</h1>
          <Experience />
        </section>
      </div>
    </main>
  );
};

export default Cta15;
