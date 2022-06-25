import React, {useState} from "react";
import HeaderMovies from "../HeaderMovies";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import More from "./More";
import Footer from "../Footer";
import moviesApi from "../../utils/MoviesApi";


function Movies({ active, setActive, addSavedMovies, searchResults, setValue, error, preloader, findMovies, movies, savedMovies, deleteSavedMovie}) {

//   const [movies, setMovies] = useState([]);
//   const [preloader, setPreloader] = useState(undefined); 
//   const [error, setError] = useState(''); 
//   const [value, setValue] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//  // const [savedMovies, setSavedMovies] = useState([]);

//   const findMovies = () => {
//     setPreloader(true);
//     moviesApi
//         .getInitialMovies()
//         .then( (res) => {
//           setMovies(res);
//           localStorage.setItem('movies', JSON.stringify(res))
//           setPreloader(false)
//           setSearchResults(res.filter((movie) => {
//             return movie.nameRU.toLowerCase().includes(value.toLowerCase());
            
//          }))
//         })
//         .catch((err) => {
//           setPreloader(false)
//           setError(err)
//           console.log(`Ошибка при получении фильмов: ${err}`)});
//       }
      // // console.log(savedMovies)
      // const addSavedMovies = (movie) => {
      //   setSavedMovies([...savedMovies, movie]);
       
      // }

      // const likesMovies = (data) => {
      //   let movie 
      //   movie = {
      //     nameRU: data.nameRU,
      //     duration: data.duration,
      //     image: `https://api.nomoreparties.co/${data.image.url}`,
      //     movieId: data.id,
      //   }
      //   moviesApi
      //   .addSavedMovies(movie)
      //   .then((res) => {
      //     setSavedMovies(res, ...savedMovies);
      //     localStorage.setItem('saved-movies', JSON.stringify(savedMovies))
          
      //     // setSearchResults(res.filter((movie) => {
      //     //   return movie.nameRU.toLowerCase().includes(value.toLowerCase());
            
      //    })
      //   .catch((err) => {
          
      //     setError(err)
      //     console.log(`Ошибка при сохранении фильма: ${err}`)});
      // }
      
  return (
    <>
      <div className="backgroundColor_grey">
        <HeaderMovies setActive={setActive} active={active} />
        
        <MoviesCardList 
        deleteSavedMovie={deleteSavedMovie}
        addSavedMovies={addSavedMovies}
        searchResults={searchResults}
        setValue={setValue}
        error={error}
        preloader={preloader}
        findMovies={findMovies}
        movies={movies}
        savedMovies={savedMovies}
       
        />
        
        <Footer />
      </div>
    </>
  );
}

export default Movies;
