import React, { useState, useEffect } from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm({setValue} ) {

  


  const seachMovies = (event) => {
    setValue(event.target.value);
    
};

  return (
    <>
      <div className="searchForm">
        <input onChange={seachMovies} className="searchForm__input" placeholder="Фильм" required></input>
        <button className="searchForm__button">Найти</button>
      </div>

      <FilterCheckbox />
    </>
  );
}

export default SearchForm;
