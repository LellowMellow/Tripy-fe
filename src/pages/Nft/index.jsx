import React, { useCallback, useRef, useEffect } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "./components/title";
import Header from "../../tripy-ui/Header";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  particleCount: 10,
  colors: "#FFFFFF",
};

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;
`;

const NftWrapper = styled.div`
  height: 333px;
  width: 333px;
  background-color: #d9d9d9;
  border-radius: 18px;
`;

const NftImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const TextWrapper = styled.div`
  height: 30px;
`;

const Nft = () => {
  const navigate = useNavigate();
  const { nftid } = useParams();
  const imageUrl = `${process.env.PUBLIC_URL}/nft${nftid}.png`;

  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(100 * particleRatio),
        shapes: "square",
        colors: ["#5E40D4", "#9B71F9"],
      });
  }, []);

  useEffect(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  const onClickMainButton = () => {
    navigate(`/main`);
  };

  const onClickDetailButton = () => {
    navigate(`/nft/detail/${nftid}`);
  };

  return (
    <>
      <motion.div
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        exit={{ x: 0, y: 0, opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <Layout>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
          <Header title={"Tripy"} color={"purple"} />
          <Margin height={118} />
          <NftWrapper>
            <NftImg src={imageUrl} />
          </NftWrapper>
          <Margin height={22} />
          <TextWrapper>
            <Typography t24>
              <Title nftid={nftid} />
            </Typography>
          </TextWrapper>
          <Margin height={6} />
          <TextWrapper>
            <Typography t16>축하드려요! 새로운 NFT를 획득하셨어요.</Typography>
          </TextWrapper>
          <FooterWrapper>
            <Button
              onClick={() => {
                onClickDetailButton();
              }}
            >
              NFT 확인하기
            </Button>
            <Margin height={18} />
            <Button
              onClick={() => {
                onClickMainButton();
              }}
            >
              메인으로 돌아가기
            </Button>
          </FooterWrapper>
        </Layout>
      </motion.div>
    </>
  );
};

export default Nft;
