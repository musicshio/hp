import * as React from "react";
import { Stack } from "@mui/system";
import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      height={"100dvh"}
      width={"100dvw"}
      p={1}
      boxSizing={"border-box"}
      sx={{ overflow: "hidden" }}
    >
      <Nav />
      {children}
    </Stack>
  );
}
