import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm() {
  return (
    <>
      <div className="searchForm">
        <input className="searchForm__input" placeholder="Фильм" required></input>
        <button className="searchForm__button">Найти</button>
      </div>

      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
