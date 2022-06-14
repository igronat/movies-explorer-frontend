import React, { useState, useEffect }  from "react";
import MoviesCard from "./MoviesCard";
import SearchForm from "./SearchForm";

function MoviesCardList({isButton, inputButton,spanButton, movies,}) {

  const [value, setValue] = useState('')

  const filteredMovies = movies.filter(movie => {
    return movie.nameRU.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <>
    <SearchForm 
       setValue={setValue}
        
        />
    <section className="moviesCardList">
      {filteredMovies.map((movie) => (
        <MoviesCard 
        movie={movie}
      isButton={isButton}
      inputButton={inputButton}
      spanButton={spanButton}
      key={`movie${movie.id}`}/>
      ))}
      
    </section>

    </>
    
  );
  
}

export default MoviesCardList;
