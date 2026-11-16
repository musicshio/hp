"use client";

import { Box, Typography } from "@mui/material";
import { Cormorant_Garamond, Shippori_Mincho } from "next/font/google";

const cormorant = Cormorant_Garamond({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

const shippori = Shippori_Mincho({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <Box position={"fixed"} top={0} left={0} width={"100dvw"} height={"100dvh"}>
      {/* 図としてのタイトル。読ませるためではなく、霧の中の密度として */}
      <Typography
        aria-hidden
        sx={[
          {
            fontFamily: cormorant.style.fontFamily,
            position: "fixed",
            left: "-0.05em",
            bottom: "-0.24em",
            fontSize: "clamp(140px, 23vw, 420px)",
            fontWeight: 300,
            lineHeight: 1,
            m: 0,
            color: "text.primary",
            opacity: 0.1,
            filter: "blur(1px)",
            mixBlendMode: "multiply",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          },
          (theme) =>
            theme.applyStyles("dark", {
              mixBlendMode: "screen",
              opacity: 0.12,
            }),
        ]}
      >
        shio
      </Typography>
      <Box
        position={"absolute"}
        left={"9vw"}
        top={"32vh"}
        display={"flex"}
        gap={{ xs: 3, md: 5 }}
        alignItems={"flex-start"}
      >
        <Typography
          component={"h1"}
          sx={{
            fontFamily: cormorant.style.fontFamily,
            fontSize: "clamp(19px, 2.4vw, 28px)",
            fontWeight: 300,
            letterSpacing: "0.45em",
            lineHeight: 1,
            m: 0,
            opacity: 0.88,
          }}
        >
          music_shio
        </Typography>
        <Typography
          sx={{
            fontFamily: shippori.style.fontFamily,
            writingMode: "vertical-rl",
            fontSize: { xs: 12, md: 13.5 },
            fontWeight: 400,
            letterSpacing: "0.3em",
            lineHeight: 2.6,
            mt: "2.6em",
            opacity: 0.62,
          }}
        >
          文脈の波にかき消されそうな実在の温かさにスポットライトを。
        </Typography>
      </Box>
    </Box>
  );
}
