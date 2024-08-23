import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        "Fresh Bites redefines freshness with every dish. I couldn't believe the difference in taste until I tried their farm-to-table ingredients. It's like they've captured the essence of freshness in every bite."
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Smit Patel</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "At Fresh Bites, customer satisfaction is paramount. From the moment you place your order to the last bite, their dedication to quality and service shines through. It's no wonder they have a loyal following of satisfied customers!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Avneet Kaur</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        Fresh Bites combines convenience with quality like no other. Ordering online is a breeze, and the food arrives promptly, still retaining its freshness. It's the perfect solution for busy days without compromising on taste."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Raj Shah</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
