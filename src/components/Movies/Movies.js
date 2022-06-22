import React, {useState} from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import More from "./More";
import Footer from "../Footer";
import moviesApi from "../../utils/MoviesApi";


function Movies({ active, setActive }) {

  const [movies, setMovies] = useState([]);
  const [preloader, setPreloader] = useState(undefined); 
  const [error, setError] = useState(''); 
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const findMovies = () => {
    setPreloader(true);
    moviesApi
        .getInitialMovies()
        .then( (res) => {
          setMovies(res);
          localStorage.setItem('movies', JSON.stringify(res))
          setPreloader(false)
          setSearchResults(res.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(value.toLowerCase());
         }))
        })
        .catch((err) => {
          setPreloader(false)
          setError(err)
          console.log(`Ошибка при получении фильмов: ${err}`)});
      }
      
    
  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active} />
        
        <MoviesCardList 
        searchResults={searchResults}
        setValue={setValue}
        error={error}
        preloader={preloader}
        findMovies={findMovies}
        movies={movies}
        isButton="likes"
        inputButton="input"
        spanButton="button"/>
        {/* <More handleClickMore={handleClickMore}/> */}
        <Footer />
      </div>
    </>
  );
}

export default Movies;
