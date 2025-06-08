"use client";
import * as React from "react";
import { styled } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Offset />
      {children}
    </>
  );
}
