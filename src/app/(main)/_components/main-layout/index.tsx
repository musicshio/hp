"use client";
import * as React from "react";
import { ReactNode } from "react";
import { Box, Stack, StackProps } from "@mui/system";
import { AppBar, Toolbar, Typography } from "@mui/material";
import HeaderLogo from "@/app/(main)/_components/header-logo";
import Link from "next/link";

function StyledStack({ children, ...props }: StackProps) {
  return (
    <Stack
      height="100dvh"
      width="100dvw"
      boxSizing="border-box"
      sx={{ padding: 1, overflowX: "hidden" }}
      padding={1}
      spacing={2}
      {...props}
    >
      {children}
    </Stack>
  );
}

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
          <Stack direction={"row"} spacing={4}>
            <HeaderLink href={"/instances"} text={"Instances"} />
            <HeaderLink href={"/fragments"} text={"Fragments"} />
            <HeaderLink href={"/about"} text={"About"} />
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
        textDecoration: "none",
      }}
    >
      <Typography variant="h6" component="div">
        {text}
      </Typography>
    </Box>
  );
}
