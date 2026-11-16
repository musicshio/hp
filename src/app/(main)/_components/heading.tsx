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
 *
 * ページを移るときは、1 文字ずつ順に入れ替わる。
 * 文字ごとに「何文字目か」で名前をつけた View Transition にしてあり、前のページの同じ位置の文字と入れ替わる。
 * 順番にずらす時間は globals.css の ::view-transition-*(page-title-N) で決めている（N は 0 から 19 まで用意）。
 */
export default function Heading({ text }: HeadingProps) {
  return (
    <Box width={"100%"} sx={{ px: { xs: 2, sm: 3 }, pt: 5 }}>
      <Typography
        variant="h2"
        component="h1"
        aria-label={text}
        sx={{ fontFamily: "var(--font-display), var(--font-base)", fontWeight: 700 }}
      >
        {Array.from(text).map((char, index) => (
          <ViewTransition key={index} name={`page-title-${index}`} default="page-title-char">
            <span aria-hidden style={{ display: "inline-block", whiteSpace: "pre" }}>
              {char}
            </span>
          </ViewTransition>
        ))}
      </Typography>
    </Box>
  );
}
