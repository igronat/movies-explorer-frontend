import React from "react";
import Film from "../../images/film.jpg";
import LikesButton from "./LikesButton"
import DeleteButton from "./DeleteButton"
import { useLocation } from "react-router-dom";


function MoviesCard({movie, addSavedMovies, savedMovies, deleteSavedMovie}) {
  let location = useLocation()
  function getTime(duration) {
    let hours = Math.trunc(duration/60);
    let minutes = duration % 60;
    return hours + 'ч' + minutes + 'м';
};

  return (
    <>
      <article className="moviesCard">
        
        {location.pathname === "/movies" && <img alt={`фото ${movie.nameRU}`} className="moviesCard__image" src={`https://api.nomoreparties.co/${movie.image.url}`} />}
          {location.pathname === "/saved-movies" && <img alt={`фото ${movie.nameRU}`} className="moviesCard__image" src={movie.image} />}
        <div className="moviesCard__description">
          <div>
            <h2 className="moviesCard__title">{movie.nameRU}</h2>
            <p className="moviesCard__time">{getTime(movie.duration)}</p>
          </div>

          {location.pathname === "/movies" && <LikesButton addSavedMovies={addSavedMovies} savedMovies={savedMovies} movie={movie} deleteSavedMovie={deleteSavedMovie}/>}
          {location.pathname === "/saved-movies" && <DeleteButton  savedMovies={savedMovies} movie={movie} deleteSavedMovie={deleteSavedMovie}/>}
        </div>
      </article>
      
    </>
  );
}

export default MoviesCard;
