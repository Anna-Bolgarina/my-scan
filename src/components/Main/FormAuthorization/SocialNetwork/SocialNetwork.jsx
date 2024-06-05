import React from "react";
import style from "./SocialNetwork.module.scss";
import google from "../../../../img/img-authorization/google.svg";
import facebook from "../../../../img/img-authorization/facebook.svg";
import yandex from "../../../../img/img-authorization/yandex.svg";

const SocialNetwork = () => {
  return (
    <div className={style.socialNetwork}>
      <span className={style.socialNetwork__title}>Войти через:</span>
      <div className={style.socialNetwork__content}>
        <a href="n">
          <img src={google} alt="google" />
        </a>
        <a href="n">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="n">
          <img src={yandex} alt="yandex" />
        </a>
      </div>
    </div>
  );
};

export { SocialNetwork };
