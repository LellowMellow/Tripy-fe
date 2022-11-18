import * as React from "react";
import { getNftTokenContract, buyNftTokenAddress } from "../../web3Config";
import NftInfor from "./components/nftInfor";

const Mint = ({ account }) => {
  const [newDestinationTypes, setNewDestinationTypes] = React.useState(false);
  const [saleStatus, setSaleStatus] = React.useState(false);
  const [nfts, setNfts] = React.useState([]);

  const onClickMint = async () => {
    try {
      if (!account) return;
      const response = await getNftTokenContract.methods
        .mintToken()
        .send({ from: account });

      if (response.status) {
        const balanceLength = await getNftTokenContract.methods
          .balanceOf(account)
          .call();

        const tokenId = await getNftTokenContract.methods
          .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
          .call();

        const destinationTypes = await getNftTokenContract.methods
          .destinationTypes(tokenId)
          .call();

        setNewDestinationTypes(destinationTypes);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickApproveToggle = async () => {
    try {
      if (!account) return;

      const response = await getNftTokenContract.methods
        .setApprovalForAll(buyNftTokenAddress, !saleStatus)
        .send({ from: account });

      if (response.status) {
        setSaleStatus(!saleStatus);
      }
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (!account) return;

    const getIsApprovedForAll = async () => {
      try {
        const response = await getNftTokenContract.methods
          .isApprovedForAll(account, buyNftTokenAddress)
          .call();

        if (response) {
          setSaleStatus(response);
        }
      } catch (error) {
        console.error(error);
      }
    };

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

    getIsApprovedForAll();
    getNft();
  }, [account]);

  return (
    <>
      {newDestinationTypes ? (
        <span>{newDestinationTypes}</span>
      ) : (
        <span>wait...</span>
      )}
      <button
        onClick={() => {
          onClickMint();
        }}
      >
        mint
      </button>
      <div>
        <button onClick={onClickApproveToggle}>
          {"saleStatus: " + saleStatus}
          {saleStatus ? " Cancel" : " Approve"}
        </button>
        {nfts.length > 0 &&
          nfts.map((nft, i) => {
            return (
              <NftInfor
                key={i}
                tokenId={nft.TokenId}
                Type={nft.Type}
                price={nft.Price}
                account={account}
                saleStatus={saleStatus}
              />
            );
          })}
      </div>
    </>
  );
};

export default Mint;
