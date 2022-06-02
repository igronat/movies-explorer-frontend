import React from "react";
import Header from "../Header";
import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe"
import Footer from "../Footer"

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
       <AboutMe />
       <Footer />

        </>
    )
  }
  
  export default Main;