const colors = {
  main: "linear-gradient(180deg, #5E40D4 0%, #9B71F9 100%)",
  gray: "#727272",
  litegray: "#D9D9D9",
  black: "#1D1D1F",
  white: "#FFFFFF",
  purple: "#5E40D4",
};

const flex = {
  flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,

  flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
};

const theme = {
  colors,
  flex,
};

export default theme;
