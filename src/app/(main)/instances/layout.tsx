import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export type LayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};
export default function Layout({ children, modal }: LayoutProps) {
  return (
    <Container maxWidth={"lg"}>
      <Stack alignItems={"center"}>
        <Typography variant="h2">Instances</Typography>
        {children}
        {modal}
      </Stack>
    </Container>
  );
}
