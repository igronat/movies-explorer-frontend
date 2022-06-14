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
// import api from "../../utils/Api";
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
  const [isError, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [movies, setMovies] = useState([]);
  // const [value, setValue] = useState('')
  const history = useHistory();

  const token = localStorage.getItem("jwt");

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getContent(token)
        .then((user) => {
          setCurrentUser(user);
        })
        .catch((err) => console.log(`Ошибка профиля: ${err}`));

        moviesApi
        .getInitialMovies(token)
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => console.log(`Ошибка при добавлении фильмов: ${err}`));
    }
       
    
  }, [loggedIn]);

  const handleRegister = (name, email, password) => {
    return mainApi
      .register(name, email, password)
      .then((res) => {
        console.log(res)
        if (res) {
          handleLogin(email, password)
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

  // const handleProfile = (email, name) => {
  //   return mainApi
  //     .getContent(token)
  //     .then((res) => {
  //       const userData = { email, name };
  //       setUserData(userData);
  //     })

  //     .catch((err) => {
  //       handleFailure();
  //       console.log(`Ошибка авторизации пользователя: ${err}`);
  //     });
  // };

  function tokenCheck() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      mainApi.getContent(token).then(({ data }) => {
        if (data) {
          let userData = {
            email: data.email,
            id: data._id,
          };
          setUserData(userData);
          setLoggedIn({
            loggedIn: true,
          });
          history.push("/");
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
    setError(true);
  };

  const closeAllPopups = () => {
    setSuccess(false);
    setFailure(false);
    setError(false)
  };

  function componentMovies() {
    return (
      <>
        <Movies active={menuActive} setActive={handleBurgerClick} movies={movies} />
      </>
    );
  }

  function componentSavedMovies() {
    return (
      <>
        <SavedMovies active={menuActive} setActive={handleBurgerClick} />
      </>
    );
  }

  function componentProfile() {
    return (
      <>
        <Profile active={menuActive} setActive={handleBurgerClick} userData={currentUser} signOut={signOut} onUpdateUser={handleUpdateUser}/>
      </>
    );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main />
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
    </CurrentUserContext.Provider>
  );
}

export default App;
