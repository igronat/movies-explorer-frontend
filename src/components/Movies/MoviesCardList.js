import React, { useState, useEffect, useCallback } from "react";
import MoviesCard from "./MoviesCard";
import SearchForm from "./SearchForm";
import Preloader from "./Preloader";
import More from "./More";


function MoviesCardList({ findMovies, preloader, error, setValue, searchResults, addSavedMovies, savedMovies, deleteSavedMovie }) {
 
 const [moviesCount, setMoviesCount] = useState(0);

  useEffect(() => {
    handleMoviesCount()
    
  }, [window.innerWidth])

  const timeout = useCallback(() => {
   const timer = setTimeout(() => {
    handleMoviesCount()
  }, 2000);
  return () => {
    clearTimeout(timer)
  }
}, [])

  useEffect(() => {
    
    window.addEventListener('resize', timeout)
    return () => {
      window.removeEventListener('resize', () => timeout)
    }
  }, [timeout])


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
    addSavedMovies={addSavedMovies}
      movie={movie}
      key={`movie${movie.id}`}
      savedMovies={savedMovies}
      deleteSavedMovie={deleteSavedMovie}
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

  const handleClickMore = () => {
    if (window.innerWidth >= 320) {
      setMoviesCount(moviesCount + 5)
    }
    if (window.innerWidth >= 768) {
      setMoviesCount(moviesCount + 2)
    }
    if (window.innerWidth >= 1028) {
      setMoviesCount(moviesCount + 3)
    }
    if (window.innerWidth >= 1280) {
      setMoviesCount(moviesCount + 4)
    }
  }


  return (
    <>
      <SearchForm setValue={setValue} findMovies={findMovies}/>
     
      <section className="moviesCardList">
  
        {preloader ? <Preloader/> : hadleResults()}

      </section>
      <More handleClickMore={handleClickMore} searchResults={searchResults} isLodingMovies={isLodingMovies}/>
    </>
  );
}

export default MoviesCardList;
