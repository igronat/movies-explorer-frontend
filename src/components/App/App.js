import React, { useState } from "react";
import { Route, Switch} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile";
import Register from "../Register";
import Login from "../Login";
// import Footer from "../Footer";
// import ImagePopup from "../ImagePopup";
// import api from "../../utils/Api";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
// import { EditProfilePopup } from "../EditProfilePopup";
// import { EditAvatarPopup } from "../EditAvatarPopup";
// import { AddPlacePopup } from "../AddPlacePopup";
// import Login from "../Login";
// import Register from "../Register";
// import ProtectedRoute from "../ProtectedRoute";
// import InfoTooltip from "../InfoTooltip";
// import * as auth from "../../utils/Auth.js";
// import ok from "../images/ok.jpg";
// import bad from "../images/bad.jpg";

function App() {
  const [menuActive, setMenuActive] = useState(false);


  const handleBurgerClick = () => {
    setMenuActive(!menuActive)
  }



 return (
    
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/movies">
          <Movies 
          active={menuActive}
          setActive={handleBurgerClick}
          />
        </Route>

        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/signin">
          <Login  />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>

    
 );
}

export default App;

