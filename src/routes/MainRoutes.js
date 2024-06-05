import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "../components/Main/Main";
import { FormAuthorization } from "../components/Main/FormAuthorization/FormAuthorization";
import { RequestSearchData } from "../components/Main/RequestSearchData/RequestSearchData";
import { QueryResult } from "../components/Main/QueryResult/QueryResult";


const MainRoutes = () => {
  let companyInfo = useSelector((state) => state.account.companyInfo);
  return companyInfo ? (
    <Routes>
      <Route path="/" element={<Main />} />
       <Route path="/request" element={<RequestSearchData />} />
      <Route path="/result" element={<QueryResult />} /> 
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<FormAuthorization />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoutes;
