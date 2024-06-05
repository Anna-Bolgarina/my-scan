import style from "./Header.module.scss";
import { useSelector } from 'react-redux';
import logo from "../../img/img-main/logo-green.svg";
import { Navigation } from "./Navigation/Navigation";
import { AuthorizationSuccessful } from "./AuthorizationSuccessful/AuthorizationSuccessful";
import { Authorization } from "./Authorization/Authorization";
import { AuthorizationMobile } from './AutorizationMobile/AutorizationMobile';

function Header() {
  const accountInfo = useSelector((state)=>state.account.companyInfo);
  const AuthorizationState = accountInfo ? AuthorizationSuccessful : Authorization
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__row}>
          <img className={style.header__img} src={logo} alt="логотип"></img>
          <Navigation />
          <AuthorizationState/>
          <AuthorizationMobile/>
        </div>
      </div>
    </header>
  );
}

export { Header };
