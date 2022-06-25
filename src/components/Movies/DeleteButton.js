import React from "react";

function DeleteButton({movie, deleteSavedMovie}) {

  const handleClickDeleteSavedMovies = () => {
    deleteSavedMovie(movie)
  }

  return (
    <label className="moviesCard__delete" >
    <input type="checkbox" className="moviesCard__input_type_delete" onClick={handleClickDeleteSavedMovies}></input>
    <span className="moviesCard__button_type_delete" ></span>
  </label>
  );
}

export default DeleteButton;
