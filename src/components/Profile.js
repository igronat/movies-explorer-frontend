import React, { useState, useEffect, useContext } from "react";
import HeaderMovies from "./HeaderMovies";
import { Link } from "react-router-dom";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Profile({ active, setActive, handleProfile, userData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);



  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    handleProfile({
      name,
      email,
    });
  }

  return (
    <>
      <div className="backgroundColor_grey size">
        <HeaderMovies setActive={setActive} active={active}/>
        <section className="profile">
          <form className="profile__form" onSubmit={handleSubmit}>
            <p className="profile__header">{`Привет, ${userData.name}!`}</p>
            <div className="profile__rows">
              <div className="profile__row">
                <p className="profile__nameRow">Имя</p>
                <input
                  className="profile__name "
                  placeholder="Имя"
                  id="name"
                  value={userData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  required
                  minLength="2"
                  maxLength="40"
                />
              </div>
              <div className="profile__row">
                <p className="profile__nameRow">E-mail</p>
                <input
                  className="profile__name "
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  value={userData.email}
                  onChange={handleChangeEmail}
                  name="email"
                  required
                  minLength="2"
                  maxLength="40"
                />
              </div>
            </div>
          </form>
          <div className="profile__menu">
            <Link to="/profile" className="profile__edit">
              Редактировать
            </Link>
            <Link to="/" className="profile__exit">
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
