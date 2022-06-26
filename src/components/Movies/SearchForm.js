import React from "react";
import FilterCheckbox from "./FilterCheckbox";

function SearchForm({ setValue, value, findMovies, clickCheckbox, shortFilm }) {
  const seachMovies = (event) => {
    setValue(event.target.value);
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    findMovies();
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          autoFocus="autoFocus"
          onChange={seachMovies}
          value={value}
          className="searchForm__input"
          placeholder="Фильм"
          required
        ></input>
        <button type="submit" className="searchForm__button">
          Найти
        </button>
      </form>

      <FilterCheckbox clickCheckbox={clickCheckbox} shortFilm={shortFilm} />
    </>
  );
}

export default SearchForm;
