import React from "react";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import Header from "../../tripy-ui/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;
`;

const Main = () => {
  const navigate = useNavigate();

  const moveToQrReading = () => {
    navigate(`/qr-reader`);
  };

  return (
    <>
      <Layout>
        <Header title={"Tripy"} color={"purple"} />
        <Margin height={105} />
        <TextWrapper>
          <Typography t24 color={"purple"}>
            트리피
          </Typography>
          <Typography t24 color={"black"}>
            의 추천 여행지
          </Typography>
        </TextWrapper>
        <FooterWrapper>
          <Button onClick={() => moveToQrReading()}>QR 촬영하기</Button>
        </FooterWrapper>
      </Layout>
    </>
  );
};

export default Main;
