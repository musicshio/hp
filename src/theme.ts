"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
