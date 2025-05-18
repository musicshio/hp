import { Box } from "@mui/material";

export type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <Box top={0} left={0}>
      {children}
    </Box>
  );
}
