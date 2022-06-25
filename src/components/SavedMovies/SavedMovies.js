import React, {useState} from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "../Movies/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList";
import MoviesCard from "../Movies/MoviesCard";

import Footer from "../Footer";

function SavedMovies({ active, setActive, savedMovies, deleteSavedMovie}) {
  const [value, setValue] = useState("");
  const [movies, setMovies] = useState([]);

  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active}/>
        <SearchForm setValue={setValue} 
        // findMovies={findMovies}
        />
     
      <section className="moviesCardList">
      {savedMovies.map((movie) => (
    <MoviesCard
    deleteSavedMovie={deleteSavedMovie}
      movie={movie}
      isButton="delete"
      inputButton="input_type_delete"
      spanButton="button_type_delete"
     key={movie._id}
    />))}

      </section>

        {/* <MoviesCardList 
        isButton="delete"
        inputButton="input_type_delete"
        spanButton="button_type_delete"/>
        <div className="margin-bottom"></div> */}
        
        <Footer />
      </div>
    </>
  );
}

export default SavedMovies;
