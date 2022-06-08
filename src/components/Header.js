import React from "react";
import logo from "../images/logo.svg";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function HeaderMain({ ability }) {
  return (
    <header className="header header__main">
      <Link to="/">
        <img className="logo logo__margin" alt="логотип" src={logo} />
      </Link>

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
  );
}

export default HeaderMain;
