import React from "react";

function LikesButton() {
  return (
    <label className="moviesCard__delete">
    <input type="checkbox" className="moviesCard__input_type_delete"></input>
    <span className="moviesCard__button_type_delete"></span>
  </label>
  );
}

export default LikesButton;
