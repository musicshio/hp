"use client";
import { createTheme } from "@mui/material/styles";
import { blueGrey, grey, indigo } from "@mui/material/colors";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: indigo,
        secondary: blueGrey,
      },
    },
    dark: {
      palette: {
        primary: indigo,
        secondary: grey,
      },
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
