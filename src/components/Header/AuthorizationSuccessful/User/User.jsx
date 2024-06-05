import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./User.module.scss";
import { exit } from "../../../../store/slices/account";
import avatar from "../../../../img/img-main/avatar.png";

function ButtonExit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("/login");
    dispatch(exit());
    
  }
  return (
    <button
      className={style.user__buttonExit}
      type="button"
      onClick={handleClick}>
      Выйти
    </button>
  );
}

function User() {
  return (
    <div className={style.user}>
      <div className={style.user__content}>
        <span className={style.user__name}>Алексей А.</span>
        <ButtonExit />
      </div>
      <div>
        <img src={avatar} alt="аватарка" />
      </div>
    </div>
  );
}
export { User };
