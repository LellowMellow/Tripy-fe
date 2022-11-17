import React from "react";
import { getNftTokenContract } from "../../../web3Config";
import NftCard from "./nftCard";

const NftCards = ({ account }) => {
  const [nfts, setNfts] = React.useState([]);

  React.useEffect(() => {
    if (!account) return;
    const getNft = async () => {
      try {
        const balanceLength = await getNftTokenContract.methods
          .balanceOf(account)
          .call();

        if (balanceLength === "0") return;

        const response = await getNftTokenContract.methods
          .getTokens(account)
          .call();

        const length = response.length;
        const tempNftArray = [];

        for (let i = length - 1; i > -1; i--) {
          tempNftArray.push({
            TokenId: response[i].tokenId,
            Type: response[i].destinationType,
            Price: response[i].price,
          });
        }

        setNfts(tempNftArray);
      } catch (error) {
        console.error(error);
      }
    };
    getNft();
  }, [account]);

  return (
    <>
      {nfts.length > 0 ? (
        nfts.map((nft, i) => {
          return <NftCard key={i} Type={nft.Type} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default NftCards;
