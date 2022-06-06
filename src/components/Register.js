import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Register() {
  
    return (
        <>
      
          
        <section className="register">
            <div className="position">
            <Link to="/">
        <img className="logo" alt="логотип" src={logo} />
        </Link>
          <form className="form">
            <p className="form__header">Добро пожаловать!</p>
            <div className="form__inputs">
              <div className="form__element">
                <p className="form__nameRow">Имя</p>
                <input className="form__input"/>
                <span className="form__validation"/>
              </div>
              <div className="form__element">
                <p className="form__nameRow">E-mail</p>
                <input className="form__input" type="email"/>
                <span className="form__validation"/>
              </div>
              <div className="form__element">
                <p className="form__nameRow">Пароль</p>
                <input className="form__input" type="password"/>
                <span className="form__validation"/>
              </div>
            </div>
          </form>
          <div className="form__menu">
            <button className="form__button">
              Зарегистрироваться
            </button>
            <p className="form__text">Уже зарегистрированы?
            <Link to="/signin" className="form__link">
              Войти
            </Link>
            </p>
          </div>
          </div>
        </section>
      
    </>
    )
  }
  
export default Register;
