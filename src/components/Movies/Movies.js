import React from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import More from "./More";
import Footer from "../Footer";


function Movies({ active, setActive }) {


  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active} />

        <SearchForm />
        <MoviesCardList 
        isButton="likes"
        inputButton="input"
        spanButton="button"/>
        <More />
        <Footer />
      </div>
    </>
  );
}

export default Movies;
