import React from "react";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import styled from "styled-components";
import Lottie from "lottie-react";
import lottie404 from "../../assets/images/404.json";
import { useNavigate } from "react-router-dom";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;
`;

const NotFound = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(`/`);
  };

  return (
    <>
      <Layout>
        <Margin height={106} />
        <Lottie animationData={lottie404} />
        <Typography t60>404</Typography>
        <Typography t20 color={"gray"}>
          이런! 존재하지 않는 페이지네요
        </Typography>
        <FooterWrapper>
          <Button onClick={() => onClickButton()}>첫 화면으로 돌아가기</Button>
        </FooterWrapper>
      </Layout>
    </>
  );
};

export default NotFound;
