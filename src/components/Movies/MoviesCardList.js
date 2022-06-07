import React from "react";
import MoviesCard from "./MoviesCard";

function MoviesCardList({isButton, inputButton,spanButton}) {

  return (
    <section className="moviesCardList">
      <MoviesCard 
      isButton={isButton}
      inputButton={inputButton}
      spanButton={spanButton}/>
    </section>
    
  );
  
}

export default MoviesCardList;
