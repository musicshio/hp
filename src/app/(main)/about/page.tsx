import { Box } from "@mui/material";
import Hero from "@/app/(main)/about/_components/hero";
import WebEngineer from "@/app/(main)/about/_components/web-engineer/web-engineer";

export default function Page() {
  return (
    <Box>
      <Hero />
      <WebEngineer />
      {/*<Music />*/}
    </Box>
  );
}
