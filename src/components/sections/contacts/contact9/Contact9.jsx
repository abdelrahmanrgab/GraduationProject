import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Contact9 = () => {
  const { imgUrl, title, description ,button} = useSelector((state) => state.template9.contact);

  const renderImage = imgUrl ? <img src={imgUrl} alt="" className="h-15 w-60 sm:h-27 sm:w-24 lg:h-40 lg:w-40 mr-40 img-9" /> : null;

  return (
    <main className="container mx-auto mt-32 mb-24 px-3  pb-6 pt-8">
      <div className="bg-gradient-to-b from-[var(--website-9-color-6)] to-[var(--website-9-color-1)] rounded-3xl flex items-center lg:flex-row flex-col-reverse lg:pl-16 lg:h-60 relative z-20">
        {renderImage}
        <div className="flex items-center w-full lg:flex-row flex-col lg:pt-0 pt-12">
          <span className="lg:w-2/5 lg:text-left text-center">
            <h1
              className="lg:text-4xl text-3xl font-medium py-3 uppercase"
              style={{ color: "[var(--website-9-color-3)]", fontSize: "[var(--font-size-lg)]" }}
            >
              {title}
            </h1>
            <p className="text-[var(--website-9-color-3)] text-sm lg:w-11/12">{description}</p>
          </span>
          <button className="bg-[var(--website-9-color-6)] text-[var(--website-9-color-3)] px-8 py-3 rounded-full lg:mt-0 mt-8">
            {button.title}{" "} 
            <a href={button.url}></a>
          </button>
        </div>
        <button className="bg-gradient-to-b from-[var(--website-9-color-1)] to-[var(--button-hover-bg-color)] opacity-40 rounded-full h-20 w-20 cursor-auto absolute -top-6 right-10 z-10"></button>
        <button className="bg-gradient-to-r from-[var(--website-9-color-6)] to-[var(--website-9-color-6)] w-20 cursor-auto absolute xl:bottom-10 bottom-20 lg:left-[19rem] left-8 z-10"></button>
      </div>
    </main>
  );
};

export default Contact9;
