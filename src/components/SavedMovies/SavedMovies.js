import React, { useState, useEffect } from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "../Movies/SearchForm";
import MoviesCard from "../Movies/MoviesCard";
import Preloader from "../Movies/Preloader";
import FilterCheckbox from "../Movies/FilterCheckbox";

import Footer from "../Footer";

function SavedMovies({
  active,
  setActive,
  savedMovies,
  deleteSavedMovie,
  isLoading,
  error,
  clickCheckbox,
  checkbox,
  search,
  findSavedMovies,
  searchResults
}) {

  const shortFilms = savedMovies
    .filter((i) => i.duration <= 40)
    .map((movie) => (
      <MoviesCard
        movie={movie}
        key={movie._id}
        deleteSavedMovie={deleteSavedMovie}
      />
    ));

  const searchShortFilms = searchResults
    .filter((i) => i.duration <= 40)
    .map((movie) => (
      <MoviesCard
        movie={movie}
        key={movie._id}
        deleteSavedMovie={deleteSavedMovie}
      />
    ));

  const isSearchSavedMovies = searchResults
  .map((movie) => (
    <MoviesCard
      movie={movie}
      key={movie._id}
      deleteSavedMovie={deleteSavedMovie}
    />
  ));
 

  const isSavedMovies = savedMovies.map((movie) => (
    <MoviesCard
      deleteSavedMovie={deleteSavedMovie}
      movie={movie}
      key={movie._id}
    />
  ));

  const hadleSavedResults = () => {
    if (error) {
      return (
        <p className="moviesCardList__message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      );
    }
    if (isSavedMovies.length === 0) {
      return <p className="moviesCardList__message">Ничего не найдено</p>;
    }
    return isSavedMovies;
  };

  const hadleSearchSavedResults = () => {
    if (isSearchSavedMovies.length === 0) {
      return <p className="moviesCardList__message">Ничего не найдено</p>;
    }
    return isSearchSavedMovies;
  };

  const hadleShotFilmsResults = () => {
    if (shortFilms.length === 0) {
      return <p className="moviesCardList__message">Ничего не найдено</p>;
    }

    return shortFilms;
  };

  const hadleSearchShotFilmsResults = () => {
    if (searchShortFilms.length === 0) {
      return <p className="moviesCardList__message">Ничего не найдено</p>;
    }

    return searchShortFilms;
  };

  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active} />
        <SearchForm
          findMovies={findSavedMovies}
          clickCheckbox={clickCheckbox}

        />
        
        <FilterCheckbox clickCheckbox={clickCheckbox} checkbox={checkbox} />
        <section className="moviesCardList">
          {isLoading && <Preloader />}
          {!isLoading &&
            (!search
              ? !checkbox
                ? hadleSavedResults()
                : hadleShotFilmsResults()
              : !checkbox
              ? hadleSearchSavedResults()
              : hadleSearchShotFilmsResults())}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;
