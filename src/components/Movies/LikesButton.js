import React, {useEffect, useState} from "react";

function LikesButton({ addSavedMovies, savedMovies, movie, deleteSavedMovie }) {

const handleClickAddSavedMovies = (e) => {
  e.preventDefault();
  if (isLiked) {
    deleteSavedMovie(savedMovies.filter((i) => i.movieId === movie.id)[0]);
  } else {
    addSavedMovies(movie);
  }
};

// Определяем, есть ли у фильма лайк
const isLiked = savedMovies.some((i) => i.movieId === movie.id);

  return (
    <label className="moviesCard__likes">
      <input type="checkbox" className="moviesCard__input"></input>
      <button
        className={
          isLiked
            ? `moviesCard__button moviesCard__button_type_active`
            : `moviesCard__button`
        }
        onClick={handleClickAddSavedMovies}
      ></button>
    </label>
  );
}

export default LikesButton;
