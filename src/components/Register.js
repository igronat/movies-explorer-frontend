import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

function Register({ handleRegister }) {
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState("Имя не может быть пустым");
  const [emailError, setEmailError] = useState("Почта не может быть пустой");
  const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
  //const {name, email, password} = data;
  const [formValid, setformValid] = useState(false)


  useEffect(() => {
if (nameError || emailError || passwordError) {
  setformValid(false)
} else {
  setformValid(true)
}
  }, [nameError, emailError, passwordError])

  const handlerBlur = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  // function handleChange(e) {
  //     const {name, value} = e.target;
  //     setData({
  //         ...data,
  //         [name]: value
  //     });
  // };

  function handleChangeName(e) {
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
    // const { name, email, password } = data;
    handleRegister(name, email, password);
  }
  return (
    <>
      <section className="register">
        <div className="position">
          <Link to="/">
            <img className="logo" alt="логотип" src={logo} />
          </Link>
          <form className="form" onSubmit={handleSubmit}>
            <p className="form__header">Добро пожаловать!</p>
            <div className="form__inputs">
              <div className="form__element">
                <p className="form__nameRow">Имя</p>
                <input
                  onBlur={(e) => handlerBlur(e)}
                  className="form__input"
                  required
                  value={name}
                  onChange={handleChangeName}
                  name="name"
                />
                {nameDirty && nameError && (
                  <div className="form__validation">{nameError}</div>
                )}
              </div>
              <div className="form__element">
                <p className="form__nameRow">E-mail</p>
                <input
                  onChange={handleChangeEmail}
                  onBlur={(e) => handlerBlur(e)}
                  className="form__input"
                  type="email"
                  required
                  value={email}
                  name="email"
                />
                {emailDirty && emailError && (
                  <div className="form__validation">{emailError}</div>
                )}
              </div>
              <div className="form__element">
                <p className="form__nameRow">Пароль</p>
                <input
                  onBlur={(e) => handlerBlur(e)}
                  className="form__input"
                  type="password"
                  required
                  value={password}
                  onChange={handleChangePassword}
                  name="password"
                />
                {passwordDirty && passwordError && (
                  <div className="form__validation">{passwordError}</div>
                )}
              </div>
            </div>
            <button disabled={!formValid} type="submit" className="form__button">
              Зарегистрироваться
            </button>
          </form>
          <div className="form__menu">
            <p className="form__text">
              Уже зарегистрированы?
              <Link to="/signin" className="form__link">
                Войти
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
