import React from "react";
import style from "../ResultTab/ResultTab.module.scss";

function Period({ date, risk, total, ...rest }) {
  const dateObj = new Date(date);
  const customDate = `${dateObj.getDate()}.${
    dateObj.getMonth() + 1
  }.${dateObj.getFullYear()}`;
  return (
    <div {...rest}>
      <div className={style.item}>{customDate}</div>
      <div className={style.item}>{total}</div>
      <div className={style.item}>{risk}</div>
    </div>
  );
}

export { Period };
