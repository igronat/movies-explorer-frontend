import React from "react";
import LogoPromo from "../../images/text__COLOR_landing-logo.svg";
import NavTab from "./NavTab";

function Promo() {
  return (
    <>
      <section className="promo">
        <div className="promo__about">
          <div className="promo__paragraph">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__text">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img
            className="promo__logo"
            alt="Фото логотипа Промо"
            src={LogoPromo}
          ></img>
        </div>
        <NavTab />
      </section>
    </>
  );
}

export default Promo;
