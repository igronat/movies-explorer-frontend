import React from "react";
import Film from "../../images/film.jpg";

function MoviesCard() {
  return (
    <>
    <article className="moviesCard">
          <img alt="Фото фильма" className="moviesCard__image" src={Film} />

          <div className="moviesCard__description">
              <div>
                  <h2 className="moviesCard__title">Властелин колец</h2>
                  <p className="moviesCard__time">200 min</p>
              </div>

              <label className="moviesCard__likes">
                  <input type="checkbox" className="moviesCard__input"></input>
                  <span className="moviesCard__button"></span>
              </label>
          </div>
      </article><article className="moviesCard">
              <img alt="Фото фильма" className="moviesCard__image" src={Film} />

              <div className="moviesCard__description">
                  <div>
                      <h2 className="moviesCard__title">Властелин колец</h2>
                      <p className="moviesCard__time">200 min</p>
                  </div>

                  <label className="moviesCard__likes">
                      <input type="checkbox" className="moviesCard__input"></input>
                      <span className="moviesCard__button"></span>
                  </label>
              </div>
          </article>

          <article className="moviesCard">
      <img alt="Фото фильма" className="moviesCard__image" src={Film} />

      <div className="moviesCard__description">
        <div>
          <h2 className="moviesCard__title">Властелин колец</h2>
          <p className="moviesCard__time">200 min</p>
        </div>

        <label className="moviesCard__likes">
          <input type="checkbox" className="moviesCard__input"></input>
          <span className="moviesCard__button"></span>
        </label>
      </div>
    </article>

    <article className="moviesCard">
      <img alt="Фото фильма" className="moviesCard__image" src={Film} />

      <div className="moviesCard__description">
        <div>
          <h2 className="moviesCard__title">Властелин колец</h2>
          <p className="moviesCard__time">200 min</p>
        </div>

        <label className="moviesCard__likes">
          <input type="checkbox" className="moviesCard__input"></input>
          <span className="moviesCard__button"></span>
        </label>
      </div>
    </article>

    <article className="moviesCard">
      <img alt="Фото фильма" className="moviesCard__image" src={Film} />

      <div className="moviesCard__description">
        <div>
          <h2 className="moviesCard__title">Властелин колец</h2>
          <p className="moviesCard__time">200 min</p>
        </div>

        <label className="moviesCard__likes">
          <input type="checkbox" className="moviesCard__input"></input>
          <span className="moviesCard__button"></span>
        </label>
      </div>
    </article>

    <article className="moviesCard">
      <img alt="Фото фильма" className="moviesCard__image" src={Film} />

      <div className="moviesCard__description">
        <div>
          <h2 className="moviesCard__title">Властелин колец</h2>
          <p className="moviesCard__time">200 min</p>
        </div>

        <label className="moviesCard__likes">
          <input type="checkbox" className="moviesCard__input"></input>
          <span className="moviesCard__button"></span>
        </label>
      </div>
    </article>

    <article className="moviesCard">
      <img alt="Фото фильма" className="moviesCard__image" src={Film} />

      <div className="moviesCard__description">
        <div>
          <h2 className="moviesCard__title">Властелин колец</h2>
          <p className="moviesCard__time">200 min</p>
        </div>

        <label className="moviesCard__likes">
          <input type="checkbox" className="moviesCard__input"></input>
          <span className="moviesCard__button"></span>
        </label>
      </div>
    </article>

    
          </>
    
  );
}

export default MoviesCard;
