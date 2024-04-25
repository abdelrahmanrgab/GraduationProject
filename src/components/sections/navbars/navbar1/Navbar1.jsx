import React, { useState, useRef, useEffect } from "react";
import "./navbar1.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const Navbar1 = () => {
  const { pathname } = useLocation();
  const navbar = useSelector((state) => {
    if (pathname.includes("own-page")) {
      return state.ownTemplate.navbar;
    } else {
      return state.template1.navbar;
    }
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 667);
  const menuRef = useRef(null);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains("toggle-menu")) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="Nav-container design-1">
        <a href=" #" className="logo">
          <img src={navbar.imgUrl} alt="Logo" />
        </a>
        <nav>
          {isSmallScreen && (
            <div ref={menuRef} className={`toggle-menu ${openMenu ? "open" : ""}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
          <ul className={isSmallScreen && openMenu ? "show" : ""}>
            {/* Map over navbar.links to dynamically generate links */}
            {navbar.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} onClick={() => setOpenMenu(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar1;
