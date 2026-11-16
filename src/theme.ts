"use client";
import { createTheme } from "@mui/material/styles";
import { palette, withAlpha } from "@/lib/design-tokens";

// 昼: 生成りの紙に墨。夜: 墨色の地に紙色の文字。差し色は朱のみ。
// 値は src/lib/design-tokens.ts で定義している。
const scheme = (mode: "day" | "night") => ({
  palette: {
    primary: { main: palette.foreground[mode], contrastText: palette.background[mode] },
    secondary: { main: palette.vermilion[mode], contrastText: palette.background[mode] },
    background: { default: palette.background[mode], paper: palette.card[mode] },
    text: { primary: palette.foreground[mode], secondary: withAlpha(palette.foreground[mode], 0.62) },
    divider: withAlpha(palette.foreground[mode], mode === "day" ? 0.14 : 0.12),
  },
});

const theme = createTheme({
  colorSchemes: {
    light: scheme("day"),
    dark: scheme("night"),
  },
  typography: {
    fontFamily: "var(--font-base)",
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

export default theme;
