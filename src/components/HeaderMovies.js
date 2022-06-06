import React from "react";
import logo from "../images/logo.svg";
import Navigation from "./Navigation";
import Account from "./Account";
import { Link } from "react-router-dom";

export function HeaderMovies({ active, setActive }) {
    
  return (
    <header className="header header__movies">
       <Link to="/">
        <img className="logo logo__margin" alt="логотип" src={logo} />
        </Link>
      <div className={active ? `hamburger__close` : `hamburger`} onClick={setActive}>
        <span></span>
      </div >
      
      <div className={active ? `header__menu hamburger__menu hamburger__menu_type_active` : `header__menu hamburger__menu`}>
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
