import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import style from "./AutorizationMobile.module.scss";
import logo from "../../../img/img-main/logo-white.svg";
import burger from "../../../img/img-mobile/burger.svg";

function LoginToButton() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <Nav.Link
      className={style.authorizationMobile__linkButton}
      href="/login"
      onClick={handleClick}>
      <button className={style.authorizationMobile__button} type="button">
        Войти
      </button>
    </Nav.Link>
  );
}
function ReturnToMain() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <Nav.Link href="/" onClick={handleClick}>
      Главная
    </Nav.Link>
  );
}
function ReturnToRates() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("request");
  }
  return (
    <Nav.Link href="/request" onClick={handleClick}>
      Тарифы
    </Nav.Link>
  );
}

function AuthorizationMobile() {
  const expand = false;
  return (
    <div className={style.authorizationMobile}>
      <Navbar key={expand} expand={expand} className={`mb-3`}>
        <Container fluid>
          <Navbar.Toggle
            bg="*"
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className={`border-0 shadow-none`}>
            <img src={burger} alt="бургер-меню" />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end">
            <Offcanvas.Header
              closeButton
              className={`d-flex  ${style.authorizationMobile__header} `}>
              <img className={style.logo} src={logo} alt="логотип" />
            </Offcanvas.Header>
            <Offcanvas.Body className={style.authorizationMobile__main}>
              <Nav>
                <ReturnToMain />
                <ReturnToRates />
                <Nav.Link href="###" style={{ pointerEvents: "none" }}>
                  FAQ
                </Nav.Link>
              </Nav>
              <a className={style.authorizationMobile__link} href="n">
                Зарегистрироваться
              </a>
              <Nav>
                <LoginToButton />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
export { AuthorizationMobile };
