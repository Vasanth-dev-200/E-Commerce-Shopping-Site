import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeLink, setActiveLink] = useState(3);
  const navbarHeadings = ["Home", "Men's", "Women's", "Kid's", "My carts"];

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClickLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="img-div">
          <img src="./src/assets/logo.png" alt="Logo" />
        </div>
      </Link>

      <div className={`flex-a ${isClicked ? "open" : ""}`}>
        {navbarHeadings.map((item, index) => (
          <Link
            key={index}
            to={index === 4 ? "/mycarts" : "/"}
            className={activeLink === index ? "pages a-link" : "pages"}
            onClick={() => handleClickLink(index)}
          >
            {item}
          </Link>
        ))}
      </div>
      <FontAwesomeIcon
        icon={faBars}
        size="2xl"
        className="menu-icon"
        onClick={handleClick}
      />
    </div>
  );
};

export default Navbar;
