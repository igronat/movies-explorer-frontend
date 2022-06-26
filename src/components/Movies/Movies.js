import React from "react";
import HeaderMovies from "../HeaderMovies";
import MoviesCardList from "./MoviesCardList";
import Footer from "../Footer";

function Movies({
  value,
  isLoading,
  active,
  setActive,
  addSavedMovies,
  searchResults,
  setValue,
  error,
  preloader,
  findMovies,
  movies,
  savedMovies,
  deleteSavedMovie,
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
          setValue={setValue}
          value={value}
        />

        <Footer />
      </div>
    </>
  );
}

export default Movies;
