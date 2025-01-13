import * as React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AbsoluteBackgroundImage from "@/app/(main)/_components/absolute-background-image";

export default function Page() {
  return (
    <Stack>
      <AbsoluteBackgroundImage src={"header.png"} />
      <Typography variant="h1">Introduction</Typography>
      <Typography>musicshio</Typography>
    </Stack>
  );
}
