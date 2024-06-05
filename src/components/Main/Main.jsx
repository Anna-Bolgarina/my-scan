import React from "react";
import style from "./Main.module.scss";
import { Description } from "../Main/Description/Description";
import { Advantages } from "./Advantages/Advantages";
import { RatesPrograms } from "./RatesPrograms/RatesPrograms";
import MainImg from "../../img/img-main/main-img.svg";

function Main() {
  return (
    <main>
      <div className={style.container}>
        <Description />
        <Advantages />
        <img className={style.main__img} src={MainImg} alt="main-img"></img>
        <RatesPrograms />
      </div>
    </main>
  );
}

export { Main };
