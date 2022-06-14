import React from "react";
import Film from "../../images/film.jpg";

function MoviesCard({movie, isButton, inputButton, spanButton}) {

  function getTime(duration) {
    let hours = Math.trunc(duration/60);
    let minutes = duration % 60;
    return hours + 'ч' + minutes + 'м';
};

  return (
    <>
      <article className="moviesCard">
        <img alt={`фото ${movie.name}`} className="moviesCard__image" src={`https://api.nomoreparties.co/${movie.image.url}`} />

        <div className="moviesCard__description">
          <div>
            <h2 className="moviesCard__title">{movie.nameRU}</h2>
            <p className="moviesCard__time">{getTime(movie.duration)}</p>
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
