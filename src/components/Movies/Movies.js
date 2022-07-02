import React from "react";
import HeaderMovies from "../HeaderMovies";
import MoviesCardList from "./MoviesCardList";
import Footer from "../Footer";

function Movies({
  isLoading,
  active,
  setActive,
  addSavedMovies,
  searchResults,
  error,
  preloader,
  findMovies,
  movies,
  savedMovies,
  deleteSavedMovie,
  checkbox,
  clickCheckbox,
}) {
  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active} />

        <MoviesCardList
          deleteSavedMovie={deleteSavedMovie}
          addSavedMovies={addSavedMovies}
          searchResults={searchResults}
          error={error}
          preloader={preloader}
          findMovies={findMovies}
          movies={movies}
          savedMovies={savedMovies}
          isLoading={isLoading}
          checkbox={checkbox}
          clickCheckbox={clickCheckbox}
        />

        <Footer />
      </div>
    </>
  );
}

export default Movies;
