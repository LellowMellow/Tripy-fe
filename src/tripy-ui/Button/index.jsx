import styled, { withTheme } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "66")}px;
  width: ${(props) => (props.width ? props.width : "333")}px;
  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "33"}px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Noto Sans KR"};
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  background: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.main};
  z-index: ${(props) => (props.zIndex ? props.zIndex : "inherit")};
  line-height: 29px;
  letter-spacing: 0.55px;
  cursor: pointer;
  vertical-align: center;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export default withTheme(Button);
