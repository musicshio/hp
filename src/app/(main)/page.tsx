import * as React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export default function Page() {
  return (
    <Stack>
      <Typography variant="h1" gutterBottom>
        Introduction
      </Typography>
      <Typography>musicshio</Typography>
    </Stack>
  );
}
