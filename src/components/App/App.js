import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
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

import ok from "../../images/ok.jpg";
import bad from "../../images/bad.jpg";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSuccess, setSuccess] = useState(false);
  const [isFailure, setFailure] = useState(false);

  const handleBurgerClick = () => {
    setMenuActive(!menuActive);
  };

  const handleSuccess = () => {
    setSuccess(true);
  };
  const handleFailure = () => {
    setFailure(true);
  };

  const closeAllPopups = () => {
    setSuccess(false);
    setFailure(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/movies">
          <Movies active={menuActive} setActive={handleBurgerClick} />
        </Route>

        <Route exact path="/saved-movies">
          <SavedMovies active={menuActive} setActive={handleBurgerClick} />
        </Route>

        <Route exact path="/profile">
          <Profile active={menuActive} setActive={handleBurgerClick} />
        </Route>

        <Route exact path="/signin">
          <Login />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      {/* 
<InfoTooltip
name="ok"
img={ok}
title="Вы успешно зарегистрировались"
isOpen={isSuccess}
onClose={closeAllPopups}
/>

<InfoTooltip
name="bad"
img={bad}
title="Что-то пошло не так! Попробуйте еще раз."
isOpen={isFailure}
onClose={closeAllPopups}
/> */}
    </CurrentUserContext.Provider>
  );
}

export default App;
