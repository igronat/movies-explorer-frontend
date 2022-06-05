import React from "react";
import HeaderMovies from "./HeaderMovies";
import { Link } from "react-router-dom";

function Profile({ active, setActive }) {
  return (
    <>
      <div className="backgroundColor_grey size">
        <HeaderMovies setActive={setActive} active={active} />
        <section className="profile">
          <form className="profile__form">
            <p className="profile__header">Привет, Наталья!</p>
            <div className="profile__rows">
              <div className="profile__row">
                <p className="profile__nameRow">Имя</p>
                <input className="profile__name " placeholder="Имя"/>
              </div>
              <div className="profile__row">
                <p className="profile__nameRow">E-mail</p>
                <input className="profile__name " placeholder="E-mail"/>
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
