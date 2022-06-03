import React from "react";
import Header from "../Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import More from "./More";
import Footer from "../Footer"

function Movies() {

    return (
    <>
    <div className="movies">
      <Header
        tema="header header__movies"
        link="/movies"
        menu="Фильмы"
        menu2="Сохраненные фильмы"
        link2="saved-movies"
       
        
      />
      <SearchForm />
     <MoviesCardList />
     <More />
     <Footer />
      
      </div>
    </>
    )

}

export default Movies;
