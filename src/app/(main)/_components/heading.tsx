"use client";
import { Box, Typography } from "@mui/material";

export type HeadingProps = {
  text: string;
};
export default function Heading({ text }: HeadingProps) {
  return (
    <Box width={"100%"}>
      <Typography variant="h2">{text}</Typography>
    </Box>
  );
}
