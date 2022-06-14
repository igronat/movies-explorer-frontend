import React, { useState, useEffect, useContext } from "react";
import HeaderMovies from "./HeaderMovies";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Profile({ active, setActive, userData, signOut, onUpdateUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [formValid, setformValid] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
    }
  }, [currentUser]);
 
  useEffect(() => {
    if (nameError || emailError) {
      setformValid(false);
      if (currentUser.name === name && currentUser.email === email) {
        setformValid(false);
      }
      if (currentUser.name !== name && currentUser.email === email) {
        setformValid(true);
      }
      if (currentUser.name === name && currentUser.email !== email) {
        setformValid(true);
      }
    } else {
      setformValid(true);
    }
  }, [nameError, emailError]);

  const handlerBlur = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
    }
  };

  function handleChange(e) {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 40) {
      setNameError("Имя не может быть меньше 2 и больше 40 символов");
      if (!e.target.value) {
        setNameError("Имя не может быть пустым");
      }
    } else {
      setNameError("");
    }
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(e.target.value)) {
      setEmailError("Некорректная почта");
      if (!e.target.value) {
        setEmailError("Почта не может быть пустой");
      }
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      email,
    });
  }

  return (
    <>
      <div className="backgroundColor_grey size">
        <HeaderMovies setActive={setActive} active={active} />
        <section className="profile">
          <form className="profile__form" onSubmit={handleSubmit}>
            <p className="profile__header">{`Привет, ${name}!`}</p>
            <div className="profile__rows">
              <div className="profile__row">
                <p className="profile__nameRow">Имя</p>
                <input
                  onBlur={handlerBlur}
                  className="profile__name"
                  placeholder="Имя"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  required
                  minLength="2"
                  maxLength="40"
                />
              </div>
              {nameDirty && nameError && (
                <div className="form__validation">{nameError}</div>
              )}
              <div className="profile__row">
                <p className="profile__nameRow">E-mail</p>
                <input
                  onBlur={handlerBlur}
                  className="profile__name "
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  value={email}
                  onChange={handleChangeEmail}
                  name="email"
                  required
                  minLength="2"
                  maxLength="40"
                />
              </div>
              {emailDirty && emailError && (
                <div className="form__validation">{emailError}</div>
              )}
            </div>
            <button
              disabled={!formValid}
              type="submit"
              to="/profile"
              className="profile__edit"
            >
              Редактировать
            </button>
          </form>
          <div className="profile__menu">
            <Link onClick={signOut} to="/" className="profile__exit">
              Выйти из аккаунта
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profile;
