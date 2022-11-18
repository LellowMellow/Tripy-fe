import React from "react";
import styled from "styled-components";
import { buyNftTokenContract } from "../../../web3Config";
const web3 = require("web3");

const NftInfor = ({ tokenId, Type, price, account, saleStatus }) => {
  const [sellPrice, setSellPrice] = React.useState("");
  const [myPrice, setMyPrice] = React.useState(price);

  const onChangeSellPrice = (e) => {
    setSellPrice(e.target.value);
  };

  const onClickSell = async () => {
    try {
      if (!account || !saleStatus) return;
      const response = await buyNftTokenContract.methods
        .setForSaleToken(tokenId, web3.utils.toWei(sellPrice, "ether"))
        .send({ from: account });

      if (response.status) {
        setMyPrice(web3.utils.toWei(sellPrice, "ether"));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {myPrice === "0" ? (
        <div>
          <input
            type={"number"}
            value={sellPrice}
            onChange={onChangeSellPrice}
          ></input>
          <button
            onClick={() => {
              onClickSell();
            }}
          >
            Sell
          </button>
        </div>
      ) : (
        <>
          <div>
            {"type: " + Type + " price: " + price + " tokenId: " + tokenId}
          </div>
        </>
      )}
    </>
  );
};

export default NftInfor;
