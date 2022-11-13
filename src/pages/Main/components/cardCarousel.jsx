import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import styled from "styled-components";
import Toast from "../../../tripy-ui/Toast";

const CarouselWrapper = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Card = styled.div`
  width: 333px;
  height: 203px;
  margin-bottom: 22px;
  margin-left: 28px;
  border: none;
  border-radius: 18px;
  overflow: hidden;
  background-color: #d9d9d9;
`;

const CardCarousel = () => {
  const onClickCard = () => {
    Toast("현재 지원하지 않는 기능입니다.");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          width: "fit-content",
          marginLeft: "50px",
          display: "flex",
          alignItems: "left",
          justifyContent: "left",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        <CardWrapper onClick={() => onClickCard()}>
          <Card></Card>
        </CardWrapper>
        <CardWrapper onClick={() => onClickCard()}>
          <Card></Card>
        </CardWrapper>
        <CardWrapper onClick={() => onClickCard()}>
          <Card></Card>
        </CardWrapper>
      </Slider>
    </CarouselWrapper>
  );
};

export default CardCarousel;
