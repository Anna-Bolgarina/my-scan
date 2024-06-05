import React from "react";
import style from "./Navigation.module.scss";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className={style.navigation}>
      <Link className={style.navigation__link} to="/">
        Главная
      </Link>
      <Link className={style.navigation__link} to="/">
        Тарифы
      </Link>
      <Link className={style.navigation__link} to="/">
        FAQ
      </Link>
    </div>
  );
}

export { Navigation };
