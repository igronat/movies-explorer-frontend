import React from "react";
import HeaderMain from "../Header";
import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Footer from "../Footer";
import HeaderMovies from "../HeaderMovies";

function Main({active, setActive, loggedIn}) {
  return (
    <>
    {loggedIn ? <HeaderMovies setActive={setActive} active={active} /> : <HeaderMain ability="disability" />}
      
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;
