import React from "react";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import styled from "styled-components";
import Header from "../../tripy-ui/Header";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";

const QrWrapper = styled.div`
  width: 333px;
  height: 333px;
  border-radius: 18px;
  overflow: hidden;
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;
`;

const QrReading = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(`/main`);
  };

  return (
    <>
      <Layout>
        <Header title={"QR 촬영하기"} color={"black"} />
        <Margin height={118} />
        <QrWrapper>
          <QrReader
            constraints={{ facingMode: "" }}
            videoStyle={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </QrWrapper>
        <Margin height={25} />
        <Typography t20 color={"black"}>
          QR 코드를 촬영해주세요
        </Typography>
        <Margin height={11} />
        <Typography t16 color={"gray"}>
          원활한 인식을 위해 카메라 렌즈를 닦아주세요.
        </Typography>
        <FooterWrapper>
          <Button onClick={() => onClickButton()}>메인으로 돌아가기</Button>
        </FooterWrapper>
      </Layout>
    </>
  );
};

export default QrReading;
