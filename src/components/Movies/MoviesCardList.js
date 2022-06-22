import React, { useState, useEffect } from "react";
import MoviesCard from "./MoviesCard";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import More from "./More";

function MoviesCardList({ isButton, inputButton, spanButton, movies, findMovies, preloader, error, setValue, searchResults }) {
 
 const [moviesCount, setMoviesCount] = useState(0);

  useEffect(() => {
    handleMoviesCount()
  }, [window.innerWidth])

  useEffect(() => {
    
    window.addEventListener('resize', handleMoviesCount)
    return () => {
      window.removeEventListener('resize', handleMoviesCount)
    }
  })


  const hadleResults = () => {
    if (error) {
      return <p className="moviesCardList__message">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
    }
      if (isLodingMovies.length === 0) {
        return <p className="moviesCardList__message">Ничего не найдено</p>
      } 
      return isLodingMovies
  }
  
  
  const isLodingMovies = searchResults.map((movie) => (
    <MoviesCard
      movie={movie}
      isButton={isButton}
      inputButton={inputButton}
      spanButton={spanButton}
      key={`movie${movie.id}`}
    />
  )).slice(0, moviesCount)

// console.log(moviesCount)

  const handleMoviesCount = () => {
    if (window.innerWidth >= 320) {
      setMoviesCount(5)
    }
    if (window.innerWidth >= 768) {
      setMoviesCount(2)
    }
    if (window.innerWidth >= 1028) {
      setMoviesCount(3)
    }
    if (window.innerWidth >= 1280) {
      setMoviesCount(4)
    }
  }


  return (
    <>
      <SearchForm setValue={setValue} findMovies={findMovies}/>
      {/* <Preloader preloader={preloader}/> */}
      <section className="moviesCardList">
  
        {preloader ? <Preloader/> : hadleResults()}

      </section>
      <More />
    </>
  );
}

export default MoviesCardList;
