import React from "react";
import HeaderMain from "../Header";
import Promo from "./Promo";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Footer from "../Footer";

function Main() {
  return (
    <>
      <HeaderMain ability="disability" />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;
