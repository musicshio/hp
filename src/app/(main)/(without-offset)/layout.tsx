"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { Box } from "@mui/system";

export default function Layout(
  { children }: { children: React.ReactNode }
) {
  return (
    <Box>
      <AuroraBackground>
        <></>
      </AuroraBackground>
      {children}
    </Box>
  );
}