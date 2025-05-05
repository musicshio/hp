import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import Heading from "@/app/(main)/_components/heading";

export type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function Layout({ children, modal }: LayoutProps) {
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
