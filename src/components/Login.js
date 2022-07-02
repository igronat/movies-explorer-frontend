import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Login({ handleLogin }) {
  // const [data, setData] = useState({
  //   email: "",
  //   password: "",
  // });

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
  const [formValid, setformValid] = useState(false)


  useEffect(() => {
if (emailError || passwordError) {
  setformValid(false)
} else {
  setformValid(true)
}
  }, [emailError, passwordError])

  const handlerBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

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

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 7) {
      setPasswordError("Пароль не может быть меньше 3 и больше 7 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    handleLogin(email, password);
  }

  return (
    <>
      <section className="register">
        <div className="position">
          <Link to="/">
            <img className="logo" alt="логотип" src={logo} />
          </Link>
          <form className="form" onSubmit={handleSubmit}>
            <p className="form__header">Рады видеть!</p>
            <div className="form__inputs">
              <div className="form__element">
                <p className="form__nameRow">E-mail</p>
                <input
                onBlur={handlerBlur}
                  className="form__input"
                  type="email"
                  required
                  id="email"
                  value={email}
                  onChange={handleChangeEmail}
                  name="email"
                />
                {emailDirty && emailError && (
                  <div className="form__validation">{emailError}</div>
                )}
              </div>
              <div className="form__element">
                <p className="form__nameRow">Пароль</p>
                <input
                onBlur={handlerBlur}
                  className="form__input"
                  type="password"
                  required
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChangePassword}
                />
                {passwordDirty && passwordError && (
                  <div className="form__validation">{passwordError}</div>
                )}
              </div>
            </div>
            <button disabled={!formValid} className="form__button">Войти</button>
          </form>
          <div className="form__menu">
            <p className="form__text">
              Еще не зарегистрированны?
              <Link to="/signup" className="form__link">
                Регистрация
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
