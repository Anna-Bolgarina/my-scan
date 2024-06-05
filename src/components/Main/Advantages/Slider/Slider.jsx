import React from "react";
import SliderCard from "../SliderCard/SliderCard";
import style from "./Slider.module.scss";
import { ReactComponent as BackArrow } from "../../../../img/img-main/back.svg";
import { ReactComponent as ForwardArrow } from "../../../../img/img-main/forward.svg";
import sliderData from "../../../../data/sliderData";

function Forward(props) {
  const { className, onClick } = props;
  return (
    <ForwardArrow
      className={`${className} ${style.arrow} ${style.arrow_forward}`}
      onClick={onClick}
    />
  );
}
function Back(props) {
  const { className, onClick } = props;
  return (
    <BackArrow
      className={`${className} ${style.arrow} ${style.arrow_back}`}
      onClick={onClick}
    />
  );
}

function FocusOnSelect() {
  const slides = sliderData.map((item) => {
    return (
      <div className={style.slider__card}>
        <img src={item.icon} alt="иконка" />
        <p className={style.slider__text}>{item.text}</p>
      </div>
    );
  });

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Forward />,
    prevArrow: <Back />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={style.slider}>
      <SliderCard slides={slides} sliderSettings={settings} />
    </div>
  );
}
export default FocusOnSelect;
