import React from "react";
import { useSelector } from "react-redux";
import style from "./QueryResult.module.scss";
import imgResult from "../../../img/img-result/result.svg";
import { ResultTab } from "../QueryResult/ResultTab/ResultTab";
import { Loader } from "../../Header/AuthorizationSuccessful/Loader/Loader";
import { PublicationCards } from "./PublicationCards/PublicationCards";

function QueryResult() {
  let foundData = useSelector((state) => state.histograms.histogramData);

  const summaryTab = !foundData ? <Loader /> : <ResultTab />;

  return (
    <main className={style.container}>
      <div className={style.queryResult}>
        <div className={style.queryResult__title}>
          <h3>
            Ищем. Скоро<br></br> будут результаты
          </h3>
          <p className={style.queryResult__text}>
            Поиск может занять некоторое время,<br></br> просим сохранять
            терпение.
          </p>
        </div>
        <img
          className={style.queryResult__img}
          src={imgResult}
          alt="картинка женщины"
        />
      </div>
      <div className={style.resultTab}>
        <div className={style.resultTab__title}>
          <h4>Общая сводка</h4>
          <p className={style.resultTab__text}>
            Найдено {foundData?.length || 0} варианта(ов)
          </p>
        </div>
        <div className={style.resultTab__slider}>{summaryTab}</div>
      </div>
      <div className={style.resultList}>
        <h4>cписок документов</h4>
        <PublicationCards />
      </div>
    </main>
  );
}

export { QueryResult };
