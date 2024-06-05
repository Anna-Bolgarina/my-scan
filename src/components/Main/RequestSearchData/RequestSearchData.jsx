import React from "react";
import style from "./RequestSearchData.module.scss";
import FormRequest from "./FormRequest/FormRequest";
import list from "../../../img/img-request/list.svg";
import folders from "../../../img/img-request/folders.svg";
import requestImg from "../../../img/img-request/img-request.svg";

function RequestSearchData() {
  return (
    <main className={style.container}>
      <div className={style.request}>
        <div>
          <h3>
            Найдите необходимые <br></br>данные в пару кликов.
          </h3>
          <p className={style.request__text}>
            Задайте параметры поиска.<br></br>
            Чем больше заполните, тем точнее поиск
          </p>
          <img className={style.listMobile} src={list} alt="лист бумаги" />
          <FormRequest />
        </div>
        <div className={style.request__img}>
          <div className={style.request__img_upper}>
            <img className={style.list} src={list} alt="лист бумаги" />
            <img className={style.folders} src={folders} alt="папки" />
          </div>
          <div>
            <img
              className={style.request__img_lower}
              src={requestImg}
              alt="картинка запроса"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export { RequestSearchData };
