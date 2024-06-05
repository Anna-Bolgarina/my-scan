import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import style from "./Description.module.scss";
import mainMenuImg from "../../../img/img-main/main-menu.svg";

function Description() {
  const companyInfo = useSelector((state) => state.account.companyInfo);
  const navigate = useNavigate();
  return (
    <div className={style.description}>
      <div>
        <h1 className={style.description__title}>
          сервис по поиску публикаций<br></br> о компании <br></br>по его ИНН
        </h1>
        <p className={style.description__text}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        {companyInfo && (
          <button className={style.description__button} onClick={() => navigate("/request")}>
            Запросить данные
          </button>
        )}
      </div>
      <img
        className={style.description__img}
        src={mainMenuImg}
        alt="картинка главного меню"></img>
    </div>
  );
}

export { Description };
