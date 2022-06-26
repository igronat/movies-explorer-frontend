import React, { useState, useEffect, useCallback } from "react";
import MoviesCard from "./MoviesCard";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import More from "./More";

function MoviesCardList({
  isLoading,
  findMovies,
  error,
  value,
  setValue,
  searchResults,
  addSavedMovies,
  savedMovies,
  deleteSavedMovie,
}) {
  const [moviesCount, setMoviesCount] = useState(0);
  const [checkbox, setCheckbox] = useState(false);
  const [isShortFilm, setIsShortFilm] = useState(false);

  useEffect(() => {
    handleMoviesCount();
  }, [window.innerWidth]);

  const timeout = useCallback(() => {
    const timer = setTimeout(() => {
      handleMoviesCount();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", timeout);
    return () => {
      window.removeEventListener("resize", () => timeout);
    };
  }, [timeout]);

  const hadleResults = () => {
    if (error) {
      return (
        <p className="moviesCardList__message">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      );
    }
    if (isLodingMovies.length === 0) {
      return <p className="moviesCardList__message">Ничего не найдено</p>;
    }

    return isLodingMovies;
  };

  const isLodingMovies = searchResults
    .map((movie) => (
      <MoviesCard
        addSavedMovies={addSavedMovies}
        movie={movie}
        key={`movie${movie.id}`}
        savedMovies={savedMovies}
        deleteSavedMovie={deleteSavedMovie}
      />
    ))
    .slice(0, moviesCount);

  const handleMoviesCount = () => {
    if (window.innerWidth >= 320) {
      setMoviesCount(5);
    }
    if (window.innerWidth >= 768) {
      setMoviesCount(2);
    }
    if (window.innerWidth >= 1028) {
      setMoviesCount(3);
    }
    if (window.innerWidth >= 1280) {
      setMoviesCount(4);
    }
  };

  const handleClickMore = () => {
    if (window.innerWidth >= 320) {
      setMoviesCount(moviesCount + 5);
    }
    if (window.innerWidth >= 768) {
      setMoviesCount(moviesCount + 2);
    }
    if (window.innerWidth >= 1028) {
      setMoviesCount(moviesCount + 3);
    }
    if (window.innerWidth >= 1280) {
      setMoviesCount(moviesCount + 4);
    }
  };

  const clickCheckbox = () => {
    setCheckbox(!checkbox);
    localStorage.setItem("checkBox", !checkbox);
  };

  const shortFilms = searchResults
    .filter((i) => i.duration <= 40)
    .map((movie) => (
      <MoviesCard
        addSavedMovies={addSavedMovies}
        movie={movie}
        key={`movie${movie.id}`}
        savedMovies={savedMovies}
        deleteSavedMovie={deleteSavedMovie}
      />
    ));

  const hadleShotFilmsResults = () => {
    if (shortFilms.length === 0) {
      return <p className="moviesCardList__message">Ничего не найдено</p>;
    }
    return shortFilms;
  };

  return (
    <>
      {SearchForm({
        setValue: setValue,
        value: value,
        findMovies: findMovies,
        clickCheckbox: clickCheckbox,
        shortFilms: isShortFilm,
      })}

      <section className="moviesCardList">
        {isLoading && <Preloader />}
        {!isLoading && (!checkbox ? hadleResults() : hadleShotFilmsResults())}
      </section>
      <More
        handleClickMore={handleClickMore}
        searchResults={searchResults}
        isLodingMovies={isLodingMovies}
        checkbox={checkbox}
      />
    </>
  );
}

export default MoviesCardList;
