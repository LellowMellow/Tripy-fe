import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Intro from "../pages/Intro";
import Nft from "../pages/Nft";
import NftDetail from "../pages/NftDetail";
import QrReading from "../pages/QrReader";
import Main from "./../pages/Main/index";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/nft/:nftid" element={<Nft />} />
      <Route path="/nft/detail/:nftid" element={<NftDetail />} />
      <Route exact path="/qr-reader" element={<QrReading />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
