import styled, { withTheme } from "styled-components";

const Typography = styled.div`
  color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.headerText};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16")}px;

  line-height: 1.5;
  white-space: nowrap;
  z-index: inherit;

  ${(props) =>
    props.center &&
    `
      text-align: center;
    `}

  ${(props) =>
    props.underline &&
    `
      text-decoration: underline;
    `}

  ${(props) =>
    props.inline &&
    `
      display : inline-block;
    `}

    ${(props) =>
    props.t16 &&
    `
    font-family: 'Noto Sans KR';
        font-size: 16px;
        font-weight: 700;
        `}

    ${(props) =>
    props.t20 &&
    `
    font-family: 'Noto Sans KR';
        font-size: 20px;
        font-weight: 700;
    `}

    ${(props) =>
    props.t24 &&
    `
    font-family: 'Noto Sans KR';
        font-size: 24px;
        font-weight: 700;
    `}

    ${(props) =>
    props.t60 &&
    `
    font-family: 'Noto Sans KR';
        font-size: 60px;
        font-weight: 700;
    `}
`;

export default withTheme(Typography);
