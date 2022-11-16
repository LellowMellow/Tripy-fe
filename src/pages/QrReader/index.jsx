import React from "react";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import styled from "styled-components";
import Header from "../../tripy-ui/Header";
import { useNavigate } from "react-router-dom";
import { QrReader } from "react-qr-reader";
import { BsCameraVideoOffFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Toast from "./../../tripy-ui/Toast";
import {buyNftTokenContract} from "../../web3Config";

const QrWrapper = styled.div`
  width: 333px;
  height: 333px;
  border-radius: 18px;
  overflow: hidden;
  background-color: #d9d9d9;
`;

const IconWrapper = styled.div`
  position: fixed;
  width: 333px;
  height: 333px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CameraIcon = styled(BsCameraVideoOffFill)`
  color: #727272;
  font-size: 32px;
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;
`;

const QrReading = ({account}) => {
  const navigate = useNavigate();
  let once  = true; //qr 인식을 한다면 한번만 하게 동작.

  const buyNft = async (tokenId,tokentype,tokenPrice) => {
    try {
      if (!account) return;

      const response = await buyNftTokenContract.methods
        .purchaseAnimalToken(tokenId)
        .send({ from: account, value: tokenPrice });

        navigate(`/nft/${tokentype}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickButton = () => {
    navigate(`/main`);
  };

  const qrScan = (result, error) => {
    if (once&&result){
      once = false;
      Toast("감지되었습니다.");
      const data = String(result.text).split("/");
      const tokenId = data[3];
      const tokentype = data[4];
      const tokenPrice = data[5];
      buyNft(tokenId,tokentype,tokenPrice);
    }
    else{
      //console.log(error);
    }
  }

  return (
    <>
      <motion.div
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 0, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Layout>
          <Header title={"QR 촬영하기"} color={"black"} />
          <Margin height={118} />
          <QrWrapper>
            <IconWrapper>
              <CameraIcon />
              <Margin height={15} />
              <Typography t16 color={"gray"}>
                카메라 권한을 확인해주세요
              </Typography>
            </IconWrapper>
            <QrReader
                onResult={(result, error) => qrScan(result, error)}
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
      </motion.div>
    </>
  );
};

export default QrReading;
