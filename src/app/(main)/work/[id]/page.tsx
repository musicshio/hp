import Work from "@/app/(main)/work/_components/work";
import { Container } from "@mui/system";
import { productData } from "@/app/(main)/_data/data";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params: { id } }: PageProps) {
  const work = productData.find((work) => work.id === id);
  if (!work) {
    notFound();
  }
  return (
    <Container>
      <Work
        year={work.year}
        title={work.title}
        tags={work.tags}
        youtubeId={work.youtubeId ?? undefined}
      />
    </Container>
  );
}
