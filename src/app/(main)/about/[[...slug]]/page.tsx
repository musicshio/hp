import { NoSsr } from "@mui/material";
import VerticalSlides, { VerticalSlidesProps } from "@/app/(main)/about/_components/VerticalSlides";

type AboutProps = {
  params: Promise<{ slug?: string }>;
};
export default async function About({ params }: AboutProps) {
  const { slug } = await params;

  let initialSlide: VerticalSlidesProps["initialSlide"];

  switch (slug?.at(0)) {
    case "web":
      initialSlide = "web";
      break;
    case "music":
      initialSlide = "music";
      break;
    default:
      initialSlide = "hero";
      break;
  }

  return (
    <NoSsr>
      <VerticalSlides initialSlide={initialSlide} />
    </NoSsr>
  );
}
