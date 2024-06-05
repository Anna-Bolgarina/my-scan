import React from "react";
import { useSelector } from "react-redux";
import style from "./FormAuthorization.module.scss";
import { Form } from "./Form/Form";
import lockImg from "../../../img/img-authorization/img-lock.svg";
import lock from "../../../img/img-authorization/lock.svg";

function FormAuthorization() {
  const newWidth = useSelector((state) => state.app.width);

  const isShown = newWidth < 1150 ? true : false;

  return (
    <main className={style.container}>
      <div className={style.formAuthorization}>
        <div className={style.formAuthorization__left}>
          <h3>Для оформления подписки на тариф, необходимо авторизоваться.</h3>
          <img
            className={style.formAuthorization__lockImg}
            src={lockImg}
            alt="замок"
            hidden={isShown}
          />
        </div>
        <div className={style.formAuthorization__right}>
          <img
            className={style.formAuthorization__lock}
            src={lock}
            alt="замок"
          />
          <Form />
        </div>
        <img
          className={style.formAuthorization__lockImg}
          src={lockImg}
          alt="замок"
          hidden={!isShown}
        />
      </div>
    </main>
  );
}

export { FormAuthorization };
