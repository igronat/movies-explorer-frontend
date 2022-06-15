import React, { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import SearchForm from "./SearchForm";

function MoviesCardList({ isButton, inputButton, spanButton, movies, findMovies }) {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(filteredMovies)
  }, [findMovies]);

  // const filteredMovies = movies.filter((movie) => {
  //   return movie.nameRU.toLowerCase().includes(value.toLowerCase());
  // });

  return (
    <>
      <SearchForm setValue={setValue} findMovies={findMovies}/>
      <section className="moviesCardList">
        {searchResults.map((movie) => (
          <MoviesCard
            movie={movie}
            isButton={isButton}
            inputButton={inputButton}
            spanButton={spanButton}
            key={`movie${movie.id}`}
          />
        ))}
      </section>
    </>
  );
}

export default MoviesCardList;
