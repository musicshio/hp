import HorizontalSlides from "./HorizontalSlides";

const sections = ["about", "web", "music"];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id: idString } = await params;
  const index = sections.findIndex((section) => section === idString);

  if (index === -1) {
    return <div>Not Found</div>; // または notFound()
  }

  return <HorizontalSlides initialIndex={index} />;
}
