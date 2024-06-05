import React from "react";
import { useSelector } from "react-redux";
import style from "./ResultTab.module.scss";
import "./slider.css";
import Slider from "react-slick";
import { ReactComponent as BackArrow } from "../../../../img/img-result/BackArrow.svg";
import { ReactComponent as ForwardArrow } from "../../../../img/img-result/ForwardArrow.svg";
import { Period } from "../Period/Period";

function ResultTab() {
  const summary = useSelector((state) => state.histograms.histogramData);
  let slidesToShow = summary.length > 8 ? 8 : summary.length;

  function Back(props) {
    const { className, style, onClick } = props;
    return (
      <BackArrow onClick={onClick} className={className} style={{ ...style }} />
    );
  }

  function Forward(props) {
    const { className, style, onClick } = props;
    return (
      <ForwardArrow
        onClick={onClick}
        className={className}
        style={{ ...style }}
      />
    );
  }

  const settings = {
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <Forward />,
    prevArrow: <Back />,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <Forward />,
          prevArrow: <Back />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <Forward />,
          prevArrow: <Back />,
        },
      },
    ],
  };
  return (
    <div className={style.resultTabSlider}>
      <div className={style.resultTabSlider__header}>
        <span className={style.item}>Период</span>
        <span className={style.item}>Всего</span>
        <span className={style.item}>Риски</span>
      </div>
      <div className={style.resultTabSlider__wrap}>
        <Slider {...settings}>
          {summary &&
            summary.map((period, ind) => (
              <Period
                key={ind}
                className={style.resultTabSlider__slider}
                date={period.date}
                total={period.total}
                risk={period.risk}
              />
            ))}
        </Slider>
      </div>
    </div>
  );
}

export { ResultTab };
