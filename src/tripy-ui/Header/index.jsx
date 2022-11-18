import styled from "styled-components";
import Typography from "../Typography";
import Flex from "../Flex";
import { useNavigate } from "react-router-dom";
import Margin from "../Margin";
import Lottie from "lottie-react";
import lottieLogo from "../../assets/images/logo.json";
import Toast from "../Toast";

const Wrapper = styled(Flex)`
  width: 390px;
  height: 95px;
  padding-top: 30px;
  position: fixed;
  top: 0;
  z-index: ${(props) => (props.zIndex ? props.zIndex : "1")};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
`;

const LogoWrapper = styled.div`
  width: 65px;
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
  overflow: hidden;
`;

const ProfileHead = styled.div`
  width: 20px;
  height: 20px;
  margin-top: 9px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: #727272;
  border: none;
`;

const ProfileBody = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 50%;
  background-color: #727272;
  border: none;
`;

const Header = (props) => {
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/main");
  };
  const onClickProfile = () => {
    navigate("/mint");
    //Toast("현재 지원하지 않는 기능입니다.");
  };
  return (
    <Wrapper zIndex={props.zIndex}>
      <Flex align={"center"}>
        <Margin width={19} />
        <LogoWrapper onClick={() => moveToMain()}>
          <Lottie animationData={lottieLogo} />
        </LogoWrapper>
        <Margin width={8} />
        <Typography t24 color={props.color}>
          {props.title}
        </Typography>
      </Flex>
      <Flex align={"center"}>
        <Profile onClick={() => onClickProfile()}>
          <ProfileHead />
          <ProfileBody />
        </Profile>
        <Margin width={24} />
      </Flex>
    </Wrapper>
  );
};

export default Header;
