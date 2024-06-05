import React from "react";
import Slider from "react-slick";
import uniqid from "uniqid";

const SliderCard = ({ slides, sliderSettings }) => {
  const settings = sliderSettings;

  const sliderList = slides.map((item) => {
    return <div key={uniqid()}>{item}</div>;
  });

  return (
    <div>
      <Slider {...settings}>{sliderList}</Slider>
    </div>
  );
};

export default SliderCard;
