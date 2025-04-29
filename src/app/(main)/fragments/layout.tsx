import { Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth={"lg"}>
      <Stack alignItems={"center"} spacing={2}>
        <Typography variant="h2">Fragments</Typography>
        {children}
      </Stack>
    </Container>
  );
}
