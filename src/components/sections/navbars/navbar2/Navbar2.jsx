import React, { useState } from "react";
import "./navbar2.css";
import { useSelector } from "react-redux";

const Navbar2 = () => {
  const [activeNav, setActiveNav] = useState("#");
  const { navbar } = useSelector((state) => state.template2);
  return (
    <nav className="nav2">
      {navbar.map((item) => (
        <a key={item.url} href={`#${item.url}`} onClick={() => setActiveNav(`#${item.url}`)} className={activeNav === `#${item.url}` ? "active" : ""}>
          <img src={item.imgUrl} alt="" />

          {item.url === "home"}
          {item.url === "services2"}
          {item.url === "projects2"}
          {item.url === "testimonials2"}
          {item.url === "contactUs2"}
        </a>
      ))}
    </nav>
  );
};

export default Navbar2;
