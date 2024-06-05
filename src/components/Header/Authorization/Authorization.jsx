import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Authorization.module.scss";
import delimiter from "../../../img/img-main/delimiter.svg";

function LoginToButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <button
      className={style.authorization__button_login}
      type="button"
      onClick={handleClick}>
      Войти
    </button>
  );
}

function Authorization() {
  return (
    <div className={style.authorization}>
      <a className={style.authorization__link} href="n">
        Зарегистрироваться
      </a>
      <img className={style.delimiter} src={delimiter} alt="delimiter" />
      <LoginToButton />
    </div>
  );
}

export { Authorization };
