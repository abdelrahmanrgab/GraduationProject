
import Logo from '../../../../images/Logo.jpg';
import React, { useState, useRef, useEffect } from 'react';
import './navbar1.css'; // Import your CSS file
// ... (other imports and code)

const Navbar1 = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.classList.contains('toggle-menu')) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src={Logo} alt="Logo" />
          </a>
          <nav>
            {isSmallScreen && (
              <div ref={menuRef} className={`toggle-menu ${openMenu ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            )}
            <ul className={isSmallScreen && openMenu ? 'show' : ''}>
              <li><a href="#" onClick={() => setOpenMenu(false)}>Home</a></li>
              <li><a href="#" onClick={() => setOpenMenu(false)}>Pages</a></li>
              <li><a href="#" onClick={() => setOpenMenu(false)}>Services</a></li>
              <li><a href="#" onClick={() => setOpenMenu(false)}>Project</a></li>
              <li><a href="#" onClick={() => setOpenMenu(false)}>Blog</a></li>
              <li><a href="#" onClick={() => setOpenMenu(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar1;


