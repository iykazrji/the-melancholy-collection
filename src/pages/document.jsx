import React from "react";
import Styled, { ThemeProvider } from "styled-components/macro";

// Import Pages
import Homepage from "./homepage";

const DocumentWrapper = Styled.div`
    width: 100%;
    margin: 0;
    background-color: #222222;
    color: #FFFFFF;
    height: 100%;
    min-height: 100vh;
`;

const theme = {
  colors: {
    grey: "#363636",
    white: "#FFFFFF",
    black: "#222222"
  },
  fonts: {
    crimson: `'Crimson Pro', serif`,
    redHat: `'Red Hat Display', sans-serif`
  }
};

const Document = () => {
  return (
    <ThemeProvider theme={theme}>
      <DocumentWrapper>
        <Homepage />
      </DocumentWrapper>
    </ThemeProvider>
  );
};

export default Document;
