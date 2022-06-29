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

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [isSuccess, setSuccess] = useState(false);
  const [isFailure, setFailure] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isErrorSaveMovie, setIsErrorSaveMovie] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [errorSavedMovies, setErrorSavedMovies] = useState("");
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxSaveMovies, setCheckboxSaveMovies] = useState(false);

  const history = useHistory();

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    tokenCheck();
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
          localStorage.setItem("checkBox", JSON.stringify(true));
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
          localStorage.setItem("saved-movie", JSON.stringify(userSavedMovie));
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
      })
      .catch((err) => {
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
          handleSuccess();
          history.push("/movies");
        } else {
          handleError();
        }
      })
      .catch((err) => {
        handleFailure();
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
      })
      .catch((err) => console.log(`Ошибка обновления профиля: ${err}`));
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
    setIsLoading(false);
    setMenuActive(false);
    setCurrentUser({
      name: "",
      email: "",
    });
    setSuccess(false);
    setFailure(false);
    setIsError(false);
    setLoggedIn(false);
    setUserData({});
    setSavedMovies([]);
    setIsLoading(false);
    setMovies([]);
    setError("");
    setValue("");
    setSearchResults([]);
    history.push("/");
  };

  const handleBurgerClick = () => {
    setMenuActive(!menuActive);
  };

  const handleSuccess = () => {
    setSuccess(true);
  };
  const handleFailure = () => {
    setFailure(true);
  };

  const handleError = () => {
    setIsError(true);
  };

  const handleErrorSaveMovie = () => {
    setIsErrorSaveMovie(true);
  };

  const closeAllPopups = () => {
    setSuccess(false);
    setFailure(false);
    setIsError(false);
    setIsErrorSaveMovie(false);
  };

  const findMovies = () => {
    setSearchResults(
      movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase());
      })
    );
    localStorage.setItem("seach-movies", JSON.stringify(searchResults));
    localStorage.setItem("value", JSON.stringify(value));
    localStorage.setItem("checkBox", JSON.stringify(checkbox));
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
      })
      .catch((err) => {
        console.log(`Ошибка при сохранении фильма: ${err}`);
        handleErrorSaveMovie();
      });
  };

  const deleteSavedMovie = (movie) => {
    const deleteMovie = savedMovies.find((i) => i.movieId === movie.movieId);

    mainApi
      .deleteSavedMovie(deleteMovie._id, token)
      .then(() => {
        setSavedMovies(savedMovies.filter((i) => i._id !== deleteMovie._id));
        localStorage.setItem("saved-movies", JSON.stringify(savedMovies));
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
          searchResults={searchResults}
          setValue={setValue}
          value={value}
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

        <Route exact path="/signin">
          <Login handleLogin={handleLogin} />
        </Route>

        <Route exact path="/signup">
          <Register handleRegister={handleRegister} />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>

      <InfoTooltip
        name="ok"
        img={ok}
        title="Добро пожаловать!"
        isOpen={isSuccess}
        onClose={closeAllPopups}
      />

      <InfoTooltip
        name="bad"
        img={bad}
        title="Что-то пошло не так! Попробуйте еще раз."
        isOpen={isFailure}
        onClose={closeAllPopups}
      />

      <InfoTooltip
        name="error"
        img={bad}
        title="Почта и/или пароль неверные"
        isOpen={isError}
        onClose={closeAllPopups}
      />

      <InfoTooltip
        name="errorSaveMovie"
        img={bad}
        title="Этот фильм нельзя сохранить"
        isOpen={isErrorSaveMovie}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
