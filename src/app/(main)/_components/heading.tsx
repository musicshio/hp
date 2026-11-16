"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Box, Typography } from "@mui/material";

export type HeadingProps = {
  text: string;
};

/**
 * ページの題。どのページでも同じ位置に出す。
 * 左端はヘッダーのロゴと揃え（Toolbar と同じ余白）、上はヘッダーの下に一定の間をあける。
 * 欧文は Space Grotesk、和文が混ざる場合は全体の書体で補う。
 * ページを移るときは、同じ名前の View Transition として、その場で文字だけが入れ替わる。
 */
export default function Heading({ text }: HeadingProps) {
  return (
    <Box width={"100%"} sx={{ px: { xs: 2, sm: 3 }, pt: 5 }}>
      <ViewTransition name="page-title" default="page-title">
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontFamily: "var(--font-display), var(--font-base)", fontWeight: 700 }}
        >
          {text}
        </Typography>
      </ViewTransition>
    </Box>
  );
}
