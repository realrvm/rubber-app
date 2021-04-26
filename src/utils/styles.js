import { createGlobalStyle } from "styled-components";

const breakpoints = [320, 850, 1200];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const colors = {
  primary: "#F0F0F0",
  secondary: "#4F4F4F",
  accent: "#FFCC00",
  background: "#E5E5E5",
  backgroundAdv: "#DDDDDD",
  backgroundHeader: "#5F5F5F",
  text: "#333333",
  textSecondary: "#E0E0E0",
  black: "#000000",
  white: "#FFFFFF",
};

export const widths = {
  desktopPageWidth: 1200,
  tabletPageWidth: 850,
  phonePageWitdh: 320,
};

/** Global Style component **/
export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0 calc(15px - (100vw - 100%)) 0 0;
        font-weight: 400;
        font-size: 18px;
        font-family: "Roboto", sans-serif;
        background: ${colors.background};
    }
    * {
        box-sizing: border-box;
    }

    body, html {
        width: 100%;
        height: 100%;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-weight: 700;
    }
`;

/** svgs **/
