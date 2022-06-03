import React from "react";
import logo from "../images/logo.svg";
import Navigation from "./Navigation";
import Account from "./Account";

export function HeaderMovies() {
  return (
    <header className="header header__movies">
      <img className="logo" alt="логотип" src={logo} />
      <div className="hamburger">
        <span></span>
      </div>
      <div className="header__menu hamburger__menu">
        <div className="header__nav hamburger__nav">
          <Navigation
          hidden="noHidden"
            link="/movies"
            menu="Фильмы"
            menu2="Сохраненные фильмы"
            link2="/saved-movies"
            name="hamburger"
            name2="hamburger"
            burger="hamburger"
          />

          <Account />
        </div>
      </div>
    </header>
  )
}


  export default HeaderMovies
