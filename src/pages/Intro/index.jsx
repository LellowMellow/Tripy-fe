import React from "react";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import styled from "styled-components";
import Lottie from "lottie-react";
import lottieLanding1 from "../../assets/images/landing1.json";
import lottieLanding2 from "../../assets/images/landing2.json";
import lottieLogo from "../../assets/images/logo.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/slick.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StartPageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  z-index: ${(props) => (props.visible === false ? 100 : -10)};
  opacity: ${(props) => (props.visible === false ? 1 : 0)};
  transition: 0.75s;
`;

const CarouselWrapper = styled.div`
  width: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const TextWrapper = styled.div`
  padding-left: 29px;
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;
`;

const NotFound = () => {
  const [startLoad, setStartLoad] = useState(false);
  const [slide, setSlide] = useState(0);
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(`/main`);
  };

  useEffect(() => {
    setTimeout(function () {
      setStartLoad(true);
    }, 2000);
  }, []);

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
          position: "fixed",
          width: "390px",
          top: "94px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
    afterChange: (current) => setSlide(current),
  };

  return (
    <>
      <Layout>
        <StartPageWrapper visible={startLoad}>
          <Typography t60 color={"purple"}>
            Tripy
          </Typography>
          <Typography t16 color={"gray"}>
            당신의 여행을 보다 새롭게
          </Typography>
        </StartPageWrapper>
        <CarouselWrapper>
          <Slider {...settings}>
            <CardWrapper>
              <Margin height={106} />
              <Lottie animationData={lottieLanding1} />
              <TextWrapper>
                <Typography t24 color={"black"}>
                  보다 새로운 여행
                </Typography>
                <Margin height={13} />
                <Typography t16 color={"gray"}>
                  매번 특별한 기념품을 여행지에서 찾아보세요.
                </Typography>
                <Typography t16 color={"gray"}>
                  특별하고 다양한 NFT를 만나보아요.
                </Typography>
              </TextWrapper>
            </CardWrapper>
            <CardWrapper>
              <Margin height={106} />
              <Lottie animationData={lottieLanding2} />
              <TextWrapper>
                <Typography t24 color={"black"}>
                  QR 코드로 간단하게
                </Typography>
                <Margin height={13} />
                <Typography t16 color={"gray"}>
                  여행지마다 다양한 NFT를
                </Typography>
                <Typography t16 color={"gray"}>
                  QR 코드를 촬영해서 간단하게 수집해요.
                </Typography>
              </TextWrapper>
            </CardWrapper>
            <CardWrapper>
              <Margin height={106} />
              <Lottie animationData={lottieLogo} />
              <TextWrapper>
                <Typography t24 color={"black"}>
                  지금 바로 시작하세요
                </Typography>
                <Margin height={13} />
                <Typography t16 color={"gray"}>
                  트리피와 함께 보다 새로운 여행을
                </Typography>
                <Typography t16 color={"gray"}>
                  지금 바로 경험해보세요.
                </Typography>
              </TextWrapper>
            </CardWrapper>
          </Slider>
        </CarouselWrapper>
        <FooterWrapper>
          {slide === 2 ? (
            <Button onClick={() => onClickButton()}>서비스 시작하기</Button>
          ) : (
            <Button backgroundColor={"gray"}>서비스 시작하기</Button>
          )}
        </FooterWrapper>
      </Layout>
    </>
  );
};

export default NotFound;
