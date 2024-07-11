import React, { useState } from "react";
import "./navbar16.css";
import { useSelector } from "react-redux";

const Navbar16 = ({ template }) => {
  const ownNavbar = useSelector((state) => state.ownTemplate.navbar);
  const navbar = template ? template.navbar : ownNavbar;
  const [showMenu, setShowMenu] = useState(false);
  console.log(ownNavbar);
  // Remove the changeHeader function and the useEffect block

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header16">
      <nav className="nav16 container16">
        <a href="/" onClick={scrollTop} className="nav__logo16">
          <img src={navbar.imgUrl} alt="" className="nav__logo-img16" />
        </a>
        <div className={`${showMenu ? "show-menu16" : ""} nav__menu16`}>
          <ul className="nav__list16">
            {navbar.links.map((link, index) => (
              <li className="nav__item16">
                <a key={index} href={`#${link.url}`} className="nav__link16" onClick={() => setShowMenu(!showMenu)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__toggle16" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </div>
      </nav>
    </header>
  );
};

export default Navbar16;
