import React from "react";

function FilterCheckbox({ clickCheckbox, checkbox }) {
  
  return (
    <div className="filterCheckbox">
      <label
        className="filterCheckbox__label"
        onChange={clickCheckbox}
        checked={checkbox}
      >
        <input
          type="checkbox"
          className="filterCheckbox__input"
          onChange={clickCheckbox}
          checked={checkbox}
        ></input>
        <span className="filterCheckbox__slider"></span>
      </label>
      <p className="filterCheckbox__name">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;
