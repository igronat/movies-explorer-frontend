import React from "react";
import logo from "../images/logo.svg";
import Navigation from "./Navigation";


function HeaderMain({
    ability,
  }) {
    return (
      <header className="header header__main">
        <img className="logo" alt="логотип" src={logo} />
        
        <div className="header__menu">
          <div className="header__nav">
            <Navigation
            hidden="hidden"
               link="/signup"
               menu="Регистрация"
               menu2="Войти"
               link2="/signin"
               name2="button"
            />
  
            
          </div>
        </div>
      </header>
    )
  }

  export default HeaderMain
