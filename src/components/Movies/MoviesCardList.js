import React, { useState, useEffect, useCallback } from "react";
import MoviesCard from "./MoviesCard";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import More from "./More";
import FilterCheckbox from "./FilterCheckbox";

function MoviesCardList({
  isLoading,
  findMovies,
  error,
  searchResults,
  addSavedMovies,
  savedMovies,
  deleteSavedMovie,
  checkbox,
  clickCheckbox,
}) {
  const [moviesCount, setMoviesCount] = useState(
    JSON.parse(localStorage.getItem("moviesCount")) || 0
  );

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
    localStorage.setItem("moviesCount", JSON.stringify(moviesCount));
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
    if (moviesCount === 0) {
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
    } else {
      return setMoviesCount(moviesCount);
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
      {/* {SearchForm({
        findMovies: findMovies,
      })} */}

<SearchForm findMovies={findMovies} />

      <FilterCheckbox clickCheckbox={clickCheckbox} checkbox={checkbox} />

      <section className="moviesCardList">
        {isLoading && <Preloader />}
        {!isLoading && (!checkbox ? hadleResults() : hadleShotFilmsResults())}
      </section>
      <More
        handleClickMore={handleClickMore}
        searchResults={searchResults}
        isLodingMovies={isLodingMovies}
        checkbox={checkbox}
        shortFilms={shortFilms}
        hadleShotFilmsResults={hadleShotFilmsResults}
      />
    </>
  );
}

export default MoviesCardList;
