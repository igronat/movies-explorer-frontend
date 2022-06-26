import React from "react";

function LikesButton({ addSavedMovies, savedMovies, movie, deleteSavedMovie }) {
  const handleClickAddSavedMovies = () => {
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
      <span
        className={
          isLiked
            ? `moviesCard__button moviesCard__button_type_active`
            : `moviesCard__button`
        }
        onClick={handleClickAddSavedMovies}
      ></span>
    </label>
  );
}

export default LikesButton;
