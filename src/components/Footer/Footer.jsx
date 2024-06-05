/* eslint-disable jsx-a11y/anchor-has-content */
import style from "./Footer.module.scss";
import logo from "../../img/img-main/logo-white.svg";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__row}>
          <img src={logo} alt="логотип"></img>
          <div className={style.footer__contact}>
            <div className={style.footer__contact_contact}>
              <p>г. Москва, Цветной б-р, 40</p>
              <p>
                <a href="tel:+7 (495) 771 21 11"></a>+7 495 771 21 11
              </p>
              <p>
                <a href="mailto:info@skan.ru"></a>info@skan.ru
              </p>
            </div>
            <p>Copyright. 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
