import React from "react";
import { useSelector } from "react-redux";
import "../../../../assets/css/globals10.css";
import DarkMode from "./DarkMode";
import { useLocation } from "react-router";

const Navbar10 = ({ handleOrderPopup }) => {
  const { pathname } = useLocation();
  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template10.navbar;
    }
  });
  return (
    <>
      <div className="shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200 ">
        <div className="items-center p-10 sm:p-30 py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div className="font-bold text-2xl sm:text-3xl flex gap-2">
              <a href="# ">
                <img src={navbar.imgUrl} alt="" className="w-10" />
              </a>
              {navbar.logo}
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="items-center gap-4 hidden sm:flex">
                {navbar.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="textHover10 inline-block py-4 px-4 duration-200">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="btnBg10 btnTxt10 hover:scale-105 duration-200 py-1 px-4 rounded-full flex items-center gap-3"
                onClick={() => handleOrderPopup()}
              >
                {navbar.buttonText}
                <a href="/#">
                  <img src={navbar.icons[0]} alt="" className="w-7 drop-shadow-sm cursor-pointer" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar10;
