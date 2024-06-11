import React from "react";
import PropTypes from "prop-types"; // Import for prop type validation
import { useSelector } from "react-redux";

const Navbar17 = ({ HandlePopup }) => {
  const navbar = useSelector((state) => state.template17.navbar);
  const navbarIcons = navbar.icons || [];
  const links = navbar.links || [];
  const dropDownLinks = navbar.dropDownLinks || [];

  return (
    <>
      <div className="container17   bg-[var(--website-17-color-2)] shadow-sm">
        <div className="flex justify-between py-4 sm:py-3">
          {/* logo section */}
          <div className="font-bold text-3xl text-[var(--website-17-color-4)]">{navbar.title}</div>
          {/* navlinks */}
          <div className="font-bold">
            <ul className="flex items-center gap-10">
              {links.map(({ id, name, link }) => (
                <li key={id}>
                  <a href={link} className="hidden sm:inline-block text-[var(--website-17-color-4)] hover:text-[var(--website-17-color-1)] text-xl font-semibold">
                    {name}
                  </a>{" "}
                </li>
              ))}
              {/* simple dropdown and links */}
              <li className="hidden md:block cursor-pointer group">
                <a href="/#" className="inline-block text-[var(--website-17-color-1)] hover:text-[var(--website-17-color-2)] text-xl font-semibold">
                  <div className="flex items-center gap-[2px] py-2">
                    {navbar.description}
                    <span>
                      <img src={navbarIcons[1]?.title} className="group-hover:rotate-180 duration-300 icon-17" alt="Dropdown Icon" />
                    </span>
                  </div>
                </a>{" "}
                {/* dropdown section */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-[var(--website-17-color-3)] text-[var(--website-17-color-4)] shadow-md p-2">
                  <ul>
                    {dropDownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a href={link} className="text-xl inline-block w-full rounded-md p-2 hover:bg-[var(--website-17-color-1)]">
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* login button section */}
              <li>
                <button
                  onClick={HandlePopup}
                  className="flex justify-center items-center gap-2 bg-[var(--website-17-color-3)] text-xl h-[40px] text-[var( --website-17-color-4)] px-2 md:px-5 py-2 hover:scale-105 duration-300"
                >
                  <img src={navbarIcons[0]?.title} className="icon-177" alt="User Icon" />
                  {navbar.subtitle}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

Navbar17.propTypes = {
  HandlePopup: PropTypes.func.isRequired, // Ensure `HandlePopup` is a function and required
};

export default Navbar17;
