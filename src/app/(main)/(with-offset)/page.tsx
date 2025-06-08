import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Box
      position={"fixed"}
      width={"100dvw"}
      height={"100dvh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      top={0}
      zIndex={-1}
    >
      <Stack alignItems={"center"}>
        <Typography variant={"subtitle1"}>music_shio</Typography>
        <Typography variant={"caption"}>
          文脈の波にかき消されそうな実在の温かさにスポットライトを。
        </Typography>
      </Stack>
    </Box>
  );
}
