import React from "react";
import Film from "../../images/film.jpg";

function MoviesCard({isButton, inputButton, spanButton}) {
  return (
    <>
      <article className="moviesCard">
        <img alt="Фото фильма" className="moviesCard__image" src={Film} />

        <div className="moviesCard__description">
          <div>
            <h2 className="moviesCard__title">Властелин колец</h2>
            <p className="moviesCard__time">200 min</p>
          </div>

          <label className={`moviesCard__${isButton}`}>
            <input type="checkbox" className={`moviesCard__${inputButton}`}></input>
            <span className={`moviesCard__${spanButton}`}></span>
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

          <label className={`moviesCard__${isButton}`}>
            <input type="checkbox" className={`moviesCard__${inputButton}`}></input>
            <span className={`moviesCard__${spanButton}`}></span>
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

          <label className={`moviesCard__${isButton}`}>
            <input type="checkbox" className={`moviesCard__${inputButton}`}></input>
            <span className={`moviesCard__${spanButton}`}></span>
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

          <label className={`moviesCard__${isButton}`}>
            <input type="checkbox" className={`moviesCard__${inputButton}`}></input>
            <span className={`moviesCard__${spanButton}`}></span>
          </label>
        </div>
      </article>

      
    </>
  );
}

export default MoviesCard;
