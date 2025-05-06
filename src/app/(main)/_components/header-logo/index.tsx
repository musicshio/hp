"use client";
import { Box } from "@mui/system";
import * as React from "react";
import Logo from "@/components/logo";
import Link from "next/link";

export default function HeaderLogo() {
  return (
    <Box component={Link} href={"/"}>
      <Logo height={"30px"} width={"40px"} />
    </Box>
  );
}
