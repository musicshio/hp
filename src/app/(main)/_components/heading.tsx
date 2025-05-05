"use client";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Box, Typography } from "@mui/material";

export type HeadingProps = {
  text: string;
};
export default function Heading({ text }: HeadingProps) {
  return (
    <ViewTransition name={"main-heading"}>
      <Box width={"100%"}>
        <Typography variant="h2">{text}</Typography>
      </Box>
    </ViewTransition>
  );
}
