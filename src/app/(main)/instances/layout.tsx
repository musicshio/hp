"use client";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import Heading from "@/app/(main)/_components/heading";
import { useColorScheme } from "@mui/material/styles";

export type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function Layout({ children, modal }: LayoutProps) {
  const { mode } = useColorScheme();
  return (
    <Container maxWidth={"lg"}>
      <Stack alignItems={"center"}>
        <Heading text={"Instances"} />
        <Box
          zIndex={-1}
          position={"fixed"}
          top={0}
          left={0}
          width={"100vw"}
          height={"100vh"}
          bgcolor={mode === "dark" ? "black" : "white"}
        >
          {children}
        </Box>
        {modal}
      </Stack>
    </Container>
  );
}
