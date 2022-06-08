import React from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";

import Footer from "../Footer";

function SavedMovies({ active, setActive}) {
  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active}/>

        <SearchForm />
        <MoviesCardList 
        isButton="delete"
        inputButton="input_type_delete"
        spanButton="button_type_delete"/>
        <div className="margin-bottom"></div>
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;
