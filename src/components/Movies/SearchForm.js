import React, { useState, useEffect } from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm({setValue, findMovies} ) {
 //const [value, setValue] = useState("");
  // const [searchTerm, setSearchTerm] = useState("");
  // const [searchResults, setSearchResults] = useState([]);

  const seachMovies = (event) => {
    setValue(event.target.value);
    
};

function handleSubmit(e) {
  // Запрещаем браузеру переходить по адресу формы
  e.preventDefault();

  // Передаём значения управляемых компонентов во внешний обработчик
  findMovies()

}

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input onChange={seachMovies} className="searchForm__input" placeholder="Фильм" required></input>
        <button type="submit" className="searchForm__button">Найти</button>
      </form>

      <FilterCheckbox />
      
    </> 
  );
}

export default SearchForm;
