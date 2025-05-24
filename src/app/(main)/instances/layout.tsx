"use client";
import { Container } from "@mui/material";
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
        {children}
        {modal}
      </Stack>
    </Container>
  );
}
