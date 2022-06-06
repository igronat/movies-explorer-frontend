import React from "react";
import Arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__element">
          <a
            href="https://igronat.github.io/mesto/"
            target="blanc"
            className="portfolio__link"
          >
            Статичный сайт<img src={Arrow} className="portfolio__arrow"></img>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            href="https://igronat.github.io/russian-travel/"
            target="blanc"
            className="portfolio__link"
          >
            Адаптивный сайт<img src={Arrow} className="portfolio__arrow"></img>
          </a>
        </li>
        <li className="portfolio__element">
          <a
            href="http://domainname.igronat.nomoredomains.xyz/"
            target="blanc"
            className="portfolio__link"
          >
            Одностраничное приложение
            <img src={Arrow} className="portfolio__arrow"></img>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
