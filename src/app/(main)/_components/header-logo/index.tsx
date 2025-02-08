"use client";
import { Box } from "@mui/system";
import * as React from "react";
import Logo from "@/components/logo";
import { Link } from "next-view-transitions";

export default function HeaderLogo() {
  return (
    <Box component={Link} href={"/"}>
      <Logo height={"60px"} width={"50px"} />
    </Box>
  );
}
