import { NoSsr } from "@mui/material";
import HorizontalSlides from "@/app/(main)/about/[id]/HorizontalSlides";

export default function About() {
  return (
    <NoSsr>
      <HorizontalSlides initialIndex={0} />
    </NoSsr>
  );
}
