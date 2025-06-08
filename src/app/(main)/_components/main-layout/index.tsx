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
        position={"fixed"}
        color={"transparent"}
        sx={{
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Box alignItems={"flex-start"}>
            <HeaderLogo />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
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

function HeaderLink({ href, text }: { href: string; text: string }): ReactNode {
  return (
    <Box
      component={Link}
      href={href}
      sx={{
        color: "inherit",
        position: "relative",
        display: "inline-block",
        textDecoration: "none",
        overflow: "hidden",
        fontSize: "1.5rem",
        px: "10px",
        "& .text": {
          position: "relative",
          zIndex: 1,
          transition: "color 0.3s ease",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: 0,
          height: "100%",
          transition: "width 0.3s ease",
          zIndex: 0,
          backgroundColor: (theme) => (theme.palette.mode === "dark" ? "#fff" : "#000"),
        },
        "&:hover::before": {
          width: "100%",
        },
        "&:hover .text": {
          color: (theme) => (theme.palette.mode === "dark" ? "#000" : "#fff"),
        },
      }}
    >
      <Typography className="text" variant="caption" component="div">
        {text}
      </Typography>
    </Box>
  );
}
