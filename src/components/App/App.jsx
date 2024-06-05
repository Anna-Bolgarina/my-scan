import style from "./App.module.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScreenWidth } from "../../store/slices/app";
import { getCompanyInfo } from "../../store/slices/account";
import { Header } from "../Header/Header";
import MainRoutes from "../../routes/MainRoutes";
import { Footer } from "../Footer/Footer";


function App() {
  const companyQuantityInfo = useSelector((state) => state.account.companyInfo);
  const dispatch = useDispatch();
  const handleResize = () => {
    dispatch(setScreenWidth(window.innerWidth));
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    
    if (accessToken && !companyQuantityInfo) {
      dispatch(getCompanyInfo());
    }
  }, [dispatch, companyQuantityInfo]);
  return (
    <div className={style.App}>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
