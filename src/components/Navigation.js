import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ link, link2, menu, menu2, name, name2, hidden, burger, setActive }) {
  return (
    <nav className={`navigation navigation__${burger}`}>
      <NavLink
        exact
        to="/"
        className={`navigation__link navigation__link_type_hamburger navigation__link_type_${hidden}`}
        activeClassName="navigation__link_active"
        onClick={setActive}
      >
        Главная
      </NavLink>
      <NavLink
        to={link}
        className={`navigation__link navigation__link_type_${name}`}
        activeClassName="navigation__link_active"
        onClick={setActive}
      >
        {menu}
      </NavLink>
      <NavLink
        to={link2}
        className={`navigation__link navigation__link_type_${name2}`}
        activeClassName="navigation__link_active"
        onClick={setActive}
      >
        {menu2}
      </NavLink>
    </nav>
  );
}

export default Navigation;
