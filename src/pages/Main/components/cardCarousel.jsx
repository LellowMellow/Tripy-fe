import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import styled from "styled-components";
import image1 from "../../../assets/images/main1.png";
import image2 from "../../../assets/images/main2.png";
import image3 from "../../../assets/images/main3.png";
import Typography from "../../../tripy-ui/Typography";

const CarouselWrapper = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

const Card = styled.img`
  width: 333px;
  height: 203px;
  margin-bottom: 22px;
  margin-left: 28px;
  border: none;
  border-radius: 18px;
  overflow: hidden;
  filter: brightness(60%);
  z-index: 0;
`;

const TextWrapper = styled.div`
  margin-top: 130px;
  margin-left: 55px;
  border: none;
  position: fixed;
  z-index: 10;
`;

const CardCarousel = () => {
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
        <CardWrapper>
          <TextWrapper>
            <Typography t20 color={"white"}>
              인하대학교
            </Typography>
            <Typography t16 color={"litegray"}>
              정석학술정보관
            </Typography>
          </TextWrapper>
          <Card src={image1} />
        </CardWrapper>
        <CardWrapper>
          <TextWrapper>
            <Typography t20 color={"white"}>
              인하대학교
            </Typography>
            <Typography t16 color={"litegray"}>
              5호관과 60주년
            </Typography>
          </TextWrapper>
          <Card src={image2} />
        </CardWrapper>
        <CardWrapper>
          <TextWrapper>
            <Typography t20 color={"white"}>
              인하대학교
            </Typography>
            <Typography t16 color={"litegray"}>
              인경호
            </Typography>
          </TextWrapper>
          <Card src={image3} />
        </CardWrapper>
      </Slider>
    </CarouselWrapper>
  );
};

export default CardCarousel;
