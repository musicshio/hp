import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import Heading from "@/app/(main)/_components/heading";

export type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth={"lg"}>
      <Stack alignItems={"center"} spacing={2}>
        <Heading text={"About"} />
        {children}
      </Stack>
    </Container>
  );
}
