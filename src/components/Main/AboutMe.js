import React from "react";
import Portfolio from "./Portfolio";
import MyFoto from "../../images/myfoto.jpg";

function AboutMe() {
  return (
    <>
      <section className="aboutMe">
        <h3 className="title">Студент</h3>
        <div className="aboutMe__info">
          <div className="aboutMe__paragraph">
            <h2 className="aboutMe__name">Наталья</h2>
            <h4 className="aboutMe__description">
              Фронтенд-разработчик, 40 лет
            </h4>
            <p className="aboutMe__text">
              Я родилась и живу в Москве, закончила факультет менеджмента МГИУ.
              Я замужем, воспитываю двух дочек. Люблю смотреть фильмы, гулять в
              парке, а ещё увлекаюсь плаванием. Год назад уволилась с работы и
              решила сменить профориентацию. Прошла курс веб-разработчика в
              Яндекс.Практикуме. И надеюсь в ближайшее время смогу применить
              свои знания на практике.
            </p>
            <div className="aboutMe__links">
              <a
                className="aboutMe__link"
                href="https://vk.com/nata.radina"
                target="blank"
              >
                ВКонтакте
              </a>
              <a
                className="aboutMe__link"
                href="https://github.com/igronat"
                target="blank"
              >
                Github
              </a>
            </div>
          </div>

          <img className="aboutMe__img" alt="мое фото" src={MyFoto}></img>
        </div>

        <Portfolio />
      </section>
    </>
  );
}

export default AboutMe;
