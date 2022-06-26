import React from "react";

function FilterCheckbox({ clickCheckbox, shortFilm }) {
  return (
    <div className="filterCheckbox">
      <label
        className="filterCheckbox__label"
        onChange={clickCheckbox}
        checked={shortFilm}
      >
        <input type="checkbox" className="filterCheckbox__input"></input>
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
