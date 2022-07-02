import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

function SearchForm({ findMovies }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/movies") {
    setValue(JSON.parse(localStorage.getItem("value")));
   
    }
  }, []);

  const [value, setValue] = useState('');

  const seachMovies = (event) => {
    setValue(event.target.value);
  };

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    findMovies(value);
   
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          
          onChange={seachMovies}
          value={value || ''}
          className="searchForm__input"
          placeholder="Фильм"
          required
        ></input>
        <button type="submit" className="searchForm__button">
          Найти
        </button>
      </form>
    </>
  );
}

export default SearchForm;
