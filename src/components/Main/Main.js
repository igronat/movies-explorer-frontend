import React from "react";
import Header from "../Header";
import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";

function Main() {
  
    return (
        <>
        <Header 
        tema="header header__main"
        link="/signup"
        menu="Регистрация"
        menu2="Войти"
        link2="/signin"
        name2="button"
        />
       <Promo />
       <AboutProject />
       <Techs />

        </>
    )
  }
  
  export default Main;