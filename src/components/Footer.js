import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <h5 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h5>
      <div className="footer__paragraph">
        <p className="footer__copyright">&copy; 2022</p>
        <nav className="footer__list">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className="footer__link"
            href="https://github.com/igronat"
            target="_blank"
          >
            Github
          </a>
          <a
            className="footer__link"
            href="https://vk.com/nata.radina"
            target="_blank"
          >
            ВКонтакте
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
