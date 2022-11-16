import React from "react";
import styled from "styled-components";
import {
    getNftTokenContract,
  } from "../../../web3Config";
  import NftCard from "./nftCard";

const CardWrapper = styled.div`
  width: 333px;
  height: 109px;
  margin-bottom: 17px;
  border: none;
  border-radius: 18px;
  overflow: hidden;
  background-color: #d9d9d9;
`;

const NftCards = ({account}) => {
    const [ nfts, setNfts ] = React.useState([{TokenId: "", Type: "", Price:""}]);

    React.useEffect(() => {
        if(!account)return;
       
      const getNft = async () => {
        try {
          const balanceLength = await getNftTokenContract.methods
            .balanceOf(account)
            .call();

          if (balanceLength === "0") return;

          const response = await getNftTokenContract.methods
            .getAnimalTokens(account)
            .call();

          const length = response.length;
          const tempNftArray = [];

          for (let i = length - 1; i > -1; i--) {
            tempNftArray.push({
              TokenId: response[i].animalTokenId,
              Type: response[i].animalType,
              Price: response[i].animalPrice,
            });
          }

          setNfts(tempNftArray);
          //console.log(tempNftArray);
        } catch (error) {
          console.error(error);
        }
      };
      
      getNft();
    }, [account]);

  return <>{
    nfts.length > 0 ? 
    nfts.map((nft,i)=>{
        return(<NftCard key={i} Type={nft.Type} />)
    })
    : 
    <></>
    }
    </>;
};

export default NftCards;
