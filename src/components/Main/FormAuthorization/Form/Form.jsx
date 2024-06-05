import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./Form.module.scss";
import { dropStatus, enter } from "../../../../store/slices/account";
import { Input } from "../Input/Input";
import { SocialNetwork } from "../SocialNetwork/SocialNetwork";

const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const enterState = useSelector((state) => state.account.status);

  useEffect(() => {
    if (enterState === "done") {
      navigate("/");
      dispatch(dropStatus());
    }
    if (enterState === "error") {
      setError(true);
    }
  }, [error, enterState, navigate, dispatch]);

  const sendData = async () => {
    dispatch(
      enter({
        login,
        password,
      })
    );
  };

  const sendDisable = !(login && password);

  return (
    <div className={style.form}>
      <div className={style.form__content}>
        <a className={style.form__link_enter} href="n">
          <span className={style.form__link_enter__text}>Войти</span>
        </a>
        <a
          className={`${style.form__link_register} ${style.form__link_disable}`}
          href="n">
          <span className={style.form__link_register__text}>
            {" "}
            Зарегистрироваться
          </span>
        </a>
      </div>
      <Input
        login={login}
        password={password}
        setLogin={setLogin}
        setPassword={setPassword}
        error={error}
      />
      <div className={style.buttons}>
        <button
          className={style.buttons_enter}
          onClick={sendData}
          disabled={sendDisable}
          style={
            sendDisable ? { opacity: `${"50%"}` } : { opacity: `${"100%"}` }
          }>
          Войти
        </button>
        <a className={style.buttons_linkRestore} href="n">
          <span className={style.buttons_linkRestore__text}>
            Восстановить пароль
          </span>
        </a>
      </div>
      <SocialNetwork />
    </div>
  );
};

export { Form };
