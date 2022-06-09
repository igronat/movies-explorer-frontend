import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Login({ handleLogin }) {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = data;

  function handleChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
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
                  className="form__input"
                  type="email"
                  required
                  id="email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                />
                <span className="form__validation" />
              </div>
              <div className="form__element">
                <p className="form__nameRow">Пароль</p>
                <input
                  className="form__input"
                  type="password"
                  required
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <span className="form__validation" />
              </div>
            </div>
            <button className="form__button">Войти</button>
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
