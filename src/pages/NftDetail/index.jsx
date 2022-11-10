import React from "react";
import Layout from "../../tripy-ui/Layout/index";
import Typography from "../../tripy-ui/Typography";
import Margin from "../../tripy-ui/Margin";
import Button from "../../tripy-ui/Button";
import styled from "styled-components";
import { useNavigate,useParams } from "react-router-dom";
import Title from "./../Nft/components/title";
import Description from "./../Nft/components/description";
const FooterWrapper = styled.div`
  position: fixed;
  bottom: 33px;

`;

const NftWrapper = styled.div`
    height: 333px;
    width: 333px;
    background-color: #D9D9D9;
    border-radius: 18px;
`;

const NftImg = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: inherit;
`

const TextWrapper = styled.div`
    height: 30px;
`;

const NftDetail = () => {
    const navigate = useNavigate();
    const {nftid} = useParams();
    const imageUrl = `${process.env.PUBLIC_URL}/nft${nftid}.png`;

    const onClickMainButton = () => {
        navigate(`/main`);
      };

return (
  <>
    <Layout>
      <Margin height={80} />
      <Margin height={38} />
      <NftWrapper>
        <NftImg src={imageUrl} />
      </NftWrapper>

      <Margin height={22} />
      <TextWrapper>
        <Typography t24><Title nftid={nftid} /></Typography>
      </TextWrapper>
      <Margin height={6} />
      <TextWrapper>
        <Typography t16><Description nftid={nftid}></Description></Typography>
      </TextWrapper>

      <FooterWrapper>
        <Button
          onClick={() => {
            onClickMainButton();
          }}
        >
          메인으로 돌아가기
        </Button>
      </FooterWrapper>
    </Layout>
  </>
);
}

export default NftDetail;