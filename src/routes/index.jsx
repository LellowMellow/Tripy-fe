import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import Nft from "../pages/Nft";
import NftDetail from "../pages/NftDetail";
import QrReading from "../pages/QrReader";
import Main from "./../pages/Main/index";
import React from "react";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => {
  const [account, setAccount] = React.useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/main" element={<Main account={account} setAccount={setAccount}/>} />
        <Route path="/nft/:nftid" element={<Nft />} />
        <Route path="/nft/detail/:nftid" element={<NftDetail />} />
        <Route exact path="/qr-reader" element={<QrReading account={account}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
