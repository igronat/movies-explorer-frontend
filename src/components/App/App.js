import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile";
import Register from "../Register";
import Login from "../Login";
import PageNotFound from "../PageNotFound";
import InfoTooltip from "../InfoTooltip";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import * as mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute";
import ok from "../../images/ok.jpg";
import bad from "../../images/bad.jpg";
import BlockRoute from "../BlockRouter";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [infoTooltip, setInfoTooltip] = useState(false);
  const [infoTooltipIMG, setInfoTooltipIMG] = useState(false);
  const [infoTooltipTitle, setInfoTooltipTitle] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [errorSavedMovies, setErrorSavedMovies] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsSavedMovies, setSearchResultsSavedMovies] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxSaveMovies, setCheckboxSaveMovies] = useState(false);
  const [search, setSearch] = useState(false);

  const history = useHistory();

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    tokenCheck();
  }, []);

  // загружаем данные последнего поиска при перезагрузки страницы
  useEffect(() => {
    setSearchResults(JSON.parse(localStorage.getItem("seach-movies")));
    setCheckbox(JSON.parse(localStorage.getItem("checkBox")));
    setSavedMovies(JSON.parse(localStorage.getItem("saved-movies")));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getContent(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Ошибка профиля: ${err}`));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      setIsLoading(true);
      moviesApi
        .getInitialMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          localStorage.setItem("checkBox", JSON.stringify(false));
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
          console.log(`Ошибка при получении фильмов: ${err}`);
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSavedMovies(token)
        .then((res) => {
          const userSavedMovie = res.filter(
            (movie) => movie.owner === currentUser._id
          );

          setSavedMovies(userSavedMovie);
          localStorage.setItem("saved-movies", JSON.stringify(userSavedMovie));
        })
        .catch((err) => {
          setErrorSavedMovies(err);
          console.log(`Ошибка загрузки сохраненных фильмов: ${err}`);
        });
    }
  }, [currentUser]);

  const handleRegister = (name, email, password) => {
    return mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password);
        }
        handleInfoTooltip({
          img: true,
          title: "Добро пожаловать",
        });
      })
      .catch((err) => {
        handleInfoTooltip({
          img: false,
          title: "Произошла ошибка",
        });
        console.log(`Ошибка регистрации пользователя: ${err}`);
      });
  };

  const handleLogin = (email, password) => {
    return mainApi
      .authorize(email, password)
      .then((res) => {
        if (res) {
          setLoggedIn({
            loggedIn: true,
          });
          handleInfoTooltip({
            img: true,
            title: "Добро пожаловать",
          });
          history.push("/movies");
        } else {
          handleInfoTooltip({
            img: false,
            title: "Произошла ошибка",
          });
        }
      })
      .catch((err) => {
        handleInfoTooltip({
          img: false,
          title: "Произошла ошибка",
        });
        console.log(`Ошибка авторизации пользователя: ${err}`);
      });
  };

  function tokenCheck() {
    let token = localStorage.getItem("jwt");
    if (token) {
      mainApi.getContent(token).then((data) => {
        if (data) {
          let userData = {
            email: data.email,
            id: data._id,
          };
          setUserData(userData);
          setLoggedIn(true);
        }
      });
    }
  }

  const handleUpdateUser = (user) => {
    mainApi
      .editProfile(user, token)
      .then((res) => {
        setCurrentUser(res);
        handleInfoTooltip({
          img: true,
          title: "Днные успешно изменены",
        });
      })
      .catch((err) => {
        console.log(`Ошибка обновления профиля: ${err}`);
        handleInfoTooltip({
          img: false,
          title: "Произошла ошибка",
        });
      });
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("saved-movies");
    localStorage.removeItem("saved-movie");
    localStorage.removeItem("seach-movies");
    localStorage.removeItem("value");
    localStorage.removeItem("checkBox");
    localStorage.removeItem("movies");
    localStorage.removeItem("jwt");
    localStorage.removeItem("token");
    localStorage.removeItem("moviesCount");
    setIsLoading(false);
    setMenuActive(false);
    setCurrentUser({
      name: "",
      email: "",
    });
    setLoggedIn(false);
    setUserData({});
    setSavedMovies([]);
    setIsLoading(false);
    setMovies([]);
    setError("");
    setSearchResults([]);
    setSearchResultsSavedMovies([]);
    history.push("/");
  };

  const handleBurgerClick = () => {
    setMenuActive(!menuActive);
  };

  function handleInfoTooltip({ title, img }) {
    setInfoTooltip(true);
    setInfoTooltipIMG(img);
    setInfoTooltipTitle(title);
  }

  const closeAllPopups = () => {
    setInfoTooltip(false);
  };

  function searchMovies(movies, value) {
    return movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(value.toLowerCase());
    });
  }

  const findMovies = (value) => {
    setIsLoading(true);
    const newSearchMovies = searchMovies(movies, value);
    setSearchResults(newSearchMovies);
    localStorage.setItem("seach-movies", JSON.stringify(newSearchMovies));
    localStorage.setItem("value", JSON.stringify(value));
    localStorage.setItem("checkBox", JSON.stringify(checkbox));
    localStorage.setItem("moviesCount", JSON.stringify(0));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const savedNewMovies = (movie) => {
    mainApi
      .addSavedMovies(movie, token)
      .then((data) => {
        setSavedMovies([...savedMovies, data]);
        localStorage.setItem(
          "saved-movies",
          JSON.stringify([...savedMovies, data])
        );
        handleInfoTooltip({
          img: true,
          title: "Фильм успешно сохранен",
        });
      })
      .catch((err) => {
        console.log(`Ошибка при сохранении фильма: ${err}`);
        handleInfoTooltip({
          img: false,
          title: "Этот фильм нельзя сохранить",
        });
      });
  };

  const findSavedMovies = (value) => {
    setIsLoading(true);
    const newSearchMovies = searchMovies(savedMovies, value);
    setSearchResultsSavedMovies(newSearchMovies);
    setSearch(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const deleteSavedMovie = (movie) => {
    const deleteMovie = savedMovies.find((i) => i.movieId === movie.movieId);

    mainApi
      .deleteSavedMovie(deleteMovie._id, token)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i._id !== deleteMovie._id));
        setSearchResultsSavedMovies(
          savedMovies.filter((i) => i._id !== deleteMovie._id)
        );
        localStorage.setItem("saved-movies", JSON.stringify(savedMovies));
        localStorage.setItem(
          "saved-movies",
          JSON.stringify(searchResultsSavedMovies)
        );
        handleInfoTooltip({
          img: true,
          title: "Фильм удален",
        });
      })
      .catch((err) => {
        console.log(`Ошибка при удалении фильма: ${err}`);
      });
  };

  const clickCheckbox = () => {
    setCheckbox(!checkbox);
    localStorage.setItem("checkBox", !checkbox);
  };

  const clickCheckboxSaveMovies = () => {
    setCheckboxSaveMovies(!checkboxSaveMovies);
  };

  function componentMovies() {
    return (
      <>
        <Movies
          active={menuActive}
          setActive={handleBurgerClick}
          addSavedMovies={savedNewMovies}
          searchResults={searchResults || []}
          error={error}
          findMovies={findMovies}
          movies={movies}
          savedMovies={savedMovies}
          deleteSavedMovie={deleteSavedMovie}
          isLoading={isLoading}
          clickCheckbox={clickCheckbox}
          checkbox={checkbox}
        />
      </>
    );
  }

  function componentSavedMovies() {
    return (
      <>
        <SavedMovies
          active={menuActive}
          setActive={handleBurgerClick}
          savedMovies={savedMovies}
          deleteSavedMovie={deleteSavedMovie}
          isLoading={isLoading}
          error={errorSavedMovies}
          clickCheckbox={clickCheckboxSaveMovies}
          checkbox={checkboxSaveMovies}
          setIsLoading={setIsLoading}
          findSavedMovies={findSavedMovies}
          search={search}
          searchResults={searchResultsSavedMovies}
        />
      </>
    );
  }

  function componentProfile() {
    return (
      <>
        <Profile
          active={menuActive}
          setActive={handleBurgerClick}
          userData={currentUser}
          signOut={signOut}
          onUpdateUser={handleUpdateUser}
        />
      </>
    );
  }

  function componentLogin() {
    return <Login handleLogin={handleLogin} />;
  }

  function componentRegister() {
    return <Register handleRegister={handleRegister} />;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main
            active={menuActive}
            setActive={handleBurgerClick}
            loggedIn={loggedIn}
          />
        </Route>

        <ProtectedRoute
          exact
          path="/movies"
          component={componentMovies}
          loggedIn={loggedIn}
        />

        <ProtectedRoute
          exact
          path="/saved-movies"
          component={componentSavedMovies}
          loggedIn={loggedIn}
        />

        <ProtectedRoute
          exact
          path="/profile"
          component={componentProfile}
          loggedIn={loggedIn}
        />

        <BlockRoute
          exact
          path="/signin"
          loggedIn={loggedIn}
          component={componentLogin}
        />

        <BlockRoute
          exact
          path="/signup"
          loggedIn={loggedIn}
          component={componentRegister}
        />

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <InfoTooltip
        img={infoTooltipIMG ? ok : bad}
        title={infoTooltipTitle}
        isOpen={infoTooltip}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
