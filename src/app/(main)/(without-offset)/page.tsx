"use client";

import { Box, Typography } from "@mui/material";
import { Shippori_Mincho } from "next/font/google";

const shippori = Shippori_Mincho({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <Box position={"fixed"} top={0} left={0} width={"100dvw"} height={"100dvh"}>
      <Box
        position={"absolute"}
        left={"9vw"}
        top={"32vh"}
        display={"flex"}
        gap={{ xs: 3, md: 5 }}
        alignItems={"flex-start"}
      >
        {/* 題字は画面に出さない。ページの題としてだけ残す */}
        <h1 className="sr-only">music_shio</h1>
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
