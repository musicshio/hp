"use client";
import * as React from "react";
import { ReactNode } from "react";
import { Box, Stack } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HeaderLogo from "@/app/(main)/_components/header-logo";
import Link from "next/link";
import ModeToggle from "@/app/(main)/_components/mode-toggle";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AppBar
        position="static"
        color={"transparent"}
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} alignItems={"flex-start"}>
            <HeaderLogo />
          </Box>
          <Stack direction={"row"}>
            <Stack direction={"row"} spacing={1} my={"auto"} mr={2}>
              <HeaderLink href={"/instances"} text={"Instances"} />
              <HeaderLink href={"/fragments"} text={"Fragments"} />
              <HeaderLink href={"/about"} text={"About"} />
            </Stack>
            <ModeToggle />
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
}

// .text {
//   position: relative;
//   padding: 0 10px; /* 見た目調整用の余白 */
//   color: #000;
//   font-size: 60px;
//   background-color: #fff;
// }
//
// .text::before {
//   position: absolute;
//   left: 0;
//   width: 0;
//   height: 100%;
//   content: "";
//   background-color: #fff;
//   mix-blend-mode: difference; /* difference（差分） */
//   transition: 0.3s;
// }
//
// .text:hover::before {
//   width: 100%;
// }
function HeaderLink({ href, text }: { href: string; text: string }): ReactNode {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        color: "inherit",
        textDecoration: "none",
        position: "relative",
        padding: "0 10px", // 見た目調整用の余白
        fontSize: "1.5rem",
        backgroundColor: "transparent",
        "&::before": {
          position: "absolute",
          left: 0,
          width: 0,
          height: "100%",
          content: '""',
          backgroundColor: "#fff",
          mixBlendMode: "difference", // difference（差分）
          transition: "0.3s",
        },
        "&:hover::before": {
          width: "100%",
        },
      }}
    >
      <Typography variant="caption" component="div">
        {text}
      </Typography>
    </Box>
  );
}
