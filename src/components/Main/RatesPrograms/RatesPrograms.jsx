import React from "react";
import { useSelector } from "react-redux";
import style from "./RatesPrograms.module.scss";
import { RateCard } from "../RatesPrograms/RateCard/RateCard";
import rateData from "../../../data/rateData";

const RatesPrograms = () => {
  const enterState = useSelector((state) => state.account.status);

  let active;

  if (enterState === "done") {
    active = 1;
  } else active = 0;

  return (
    <div className={style.rates}>
      <h2 className={style.rates__title}>наши тарифы</h2>
      <ul className={style.rates__cards}>
        {rateData.map((item, index) => {
          return (
            <li key={item.id}>
              <RateCard
                display={index === active - 1 ? "block" : "none"}
                none
                content={item}
                border={index === active - 1 ? "" : "none"}
                btnBgColor={index === active - 1 ? `#d2d2d2` : ""}
                fontColor={index === active - 1 ? `#000000` : ""}
                text={
                  index === active - 1
                    ? "Перейти в личный кабинет"
                    : "Подробнее"
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { RatesPrograms };
