import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./assets/theme";
import reportWebVitals from "./reportWebVitals";
import Router from "./routes";
import "./assets/fonts/font.css";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans KR';
        outline: none;
        margin: 0;
        padding: 0;
    }

    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
