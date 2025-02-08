import { Paper } from "@mui/material";
import WorkModal from "@/app/(main)/work/@modal/(..)work/[id]/_components/work-modal";
import Work from "@/app/(main)/work/_components/work";
import { productData } from "@/app/(main)/_data/data";

type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params: { id } }: PageProps) {
  const work = productData.find((work) => work.id === id);
  if (!work) throw new Error();
  return (
    <WorkModal>
      <Paper>
        <Work year={work.year} title={work.title} tags={work.tags} />
      </Paper>
    </WorkModal>
  );
}
