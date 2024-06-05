import React from "react";
import { useSelector } from "react-redux";
import style from "./CompanyInfo.module.scss";

function CompanyInfo() {
  const companyQuantity = useSelector((state) => state.account.companyInfo);
  return (
    <div className={style.company}>
      <div className={style.company__quantity}>
        <span className={style.company__quantity__text}>
          Использовано компаний{" "}
        </span>
        <span className={style.company__count_black}>
          {companyQuantity.eventFiltersInfo.usedCompanyCount}
        </span>
      </div>
      <div className={style.company__quantity}>
        <span className={style.company__quantity__text}>
          Лимит по компаниям{" "}
        </span>
        <span className={style.company__count_green}>
          {companyQuantity.eventFiltersInfo.companyLimit}
        </span>
      </div>
    </div>
  );
}

export { CompanyInfo };
