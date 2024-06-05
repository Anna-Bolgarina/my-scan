import React from "react";
import style from "./input.module.scss";

const Input = ({ setLogin, setPassword, error }) => {
  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  };
  const handleLogin = (evt) => {
    setLogin(evt.target.value);
  };
  const visibility = error ? "visible" : "hidden";
  const inputColor = error ? "#ff5959" : "#c7c7c7";

  return (
    <form className={style.input}>
      <label className={style.input__label} htmlFor="login">
        Логин или номер телефона:
      </label>
      <input
        className={style.input__login}
        onChange={handleLogin}
        id="login"
        type="text"
        style={{ borderColor: inputColor }}
      />
      <span className={style.input__error} style={{ visibility }}>
        Введите корректные данные
      </span>
      <label className={style.input__label} htmlFor="password">
        Пароль:
      </label>
      <input
        className={style.input__login}
        onChange={handlePassword}
        id="password"
        type="password"
        style={{ borderColor: inputColor }}
      />
      <span className={style.input__error} style={{ visibility }}>
        Неправильный пароль
      </span>
    </form>
  );
};

export { Input };
