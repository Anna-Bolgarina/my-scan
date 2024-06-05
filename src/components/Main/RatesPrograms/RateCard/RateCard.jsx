import React from "react";
import style from "./RateCard.module.scss";
import checkMark from "../../../../img/img-main/checkmark.svg";

function RateCard({ display, content, border, text, btnBgColor, fontColor }) {
  const styles = {
    backgroundColor: btnBgColor,
    color: fontColor,
  };
  return (
    <div
      className={`${style.rate} ${style[content.bgColor]}`}
      style={{ border: border }}>
      <div className={`${style.header} ${style[content.bgColor]}`}>
        <div className={style.header__content}>
          <div className={style[content.titleColor]}>
            <h5>{content.title}</h5>
            <p className={style.description}>{content.description}</p>
          </div>
          <div className={style.header__img}>
            <img src={content.icon} alt={content.alt} />
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.card__tariff} style={{ display: display }}>
          Текущий тариф
        </div>
        <div className={style.tariff__description}>
          <div>
            <div className={style.price}>
              <span className={style.price_regular}>{content.promoPrice}</span>
              <span className={style.price_promo}>{content.regularPrice}</span>
            </div>
            <p className={style.option}>
              {content.priceOption ? content.priceOption : <br></br>}
            </p>
          </div>
          <div className={style.compound}>
            <span className={style.compound__content}>{content.compound}</span>
            <ul className={style.compound__list}>
              <li>
                <img
                  src={checkMark}
                  alt="галочка"
                  className={style.compound__img}
                />
                {content.list[0]}
              </li>
              <li>
                <img
                  src={checkMark}
                  alt="галочка"
                  className={style.compound__img}
                />
                {content.list[1]}
              </li>
              <li>
                <img
                  src={checkMark}
                  alt="галочка"
                  className={style.compound__img}
                />
                {content.list[2]}
              </li>
            </ul>
          </div>
          <button className={style.button} style={styles}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
}

export { RateCard };
