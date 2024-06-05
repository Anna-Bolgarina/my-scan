import React from "react";
import { useSelector } from "react-redux";
import style from "./AuthorizationSuccessful.module.scss";
import { Loader } from "./Loader/Loader";
import { CompanyInfo } from "./CompanyInfo/CompanyInfo";
import { User } from "./User/User";

const AuthorizationSuccessful = () => {
  const companyInfo = useSelector((state) => state.account.companyInfo);
  return (
    <div className={style.authsuccessfull}>
      {companyInfo ? <CompanyInfo /> : <Loader />}
      <User />
    </div>
  );
};

export { AuthorizationSuccessful };
