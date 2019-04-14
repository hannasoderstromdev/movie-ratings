import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./themes/default";

const Theme: React.SFC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
