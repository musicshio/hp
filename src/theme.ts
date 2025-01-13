"use client";
import { createTheme } from "@mui/material/styles";

import { grey, indigo } from "@mui/material/colors";

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  palette: {
    mode: "dark",
    primary: indigo,
    secondary: grey,
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
