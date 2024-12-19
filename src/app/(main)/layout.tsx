import * as React from "react";
import { Stack } from "@mui/system";
import Nav from "@/components/Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack direction={"row"} height={"100dvh"} p={2} spacing={2}>
      <Nav />
      {children}
    </Stack>
  );
}
