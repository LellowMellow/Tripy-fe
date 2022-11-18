import React from "react";
import { getNftTokenContract } from "../../../web3Config";
import NftCard from "./nftCard";
import Typography from "../../../tripy-ui/Typography";

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
        <>
          <Typography>소유하고 있는 NFT가 없습니다.</Typography>
          <Typography>여행을 다니면서 NFT를 찾아보세요!</Typography>
        </>
      )}
    </>
  );
};

export default NftCards;
