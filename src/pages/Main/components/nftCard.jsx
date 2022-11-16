import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardWrapper = styled.div`
  width: 333px;
  height: 109px;
  margin-bottom: 17px;
  border: none;
  border-radius: 18px;
  overflow: hidden;
  background-color: #d9d9d9;
  cursor:pointer;
`;

const NftImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const NftCard = ({Type}) => {
  const navigate = useNavigate();
  const imageUrl = `${process.env.PUBLIC_URL}/nft${Type}.png`;

  function moveToNftDetail() {
    navigate(`/nft/detail/${Type}`);
  }

  return (
    <CardWrapper onClick={moveToNftDetail}>
      <NftImg src={imageUrl} />
    </CardWrapper>
  );
};

export default NftCard;
