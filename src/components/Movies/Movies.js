import React, {useState} from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import More from "./More";
import Footer from "../Footer";
import moviesApi from "../../utils/MoviesApi";


function Movies({ active, setActive }) {

  const [movies, setMovies] = useState([]);

  const findMovies = () => {
  moviesApi
        .getInitialMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res))
        })
        .catch((err) => console.log(`Ошибка при добавлении фильмов: ${err}`));

      }
  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active} />

        <MoviesCardList 
        findMovies={findMovies}
        movies={movies}
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
