import { NavLink } from "react-router-dom";
import { NavList } from "./NavList";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const navList = NavList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="header">
      <div className="logo">CityMove</div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{navList}</ul>
    </nav>
  );
};

export default Header;
