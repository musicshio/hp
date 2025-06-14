import { notFound } from "next/navigation";
import prisma from "../../../../../../lib/prisma";
import InstanceDetailView from "../../_components/instance-detail-view";
import { instances } from "../../data";

type NodeModalProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function NodeModalPage({ params }: NodeModalProps) {
  const { id } = await params;
  const instance = instances.find((instance) => instance.id === id);
  if (!instance) {
    notFound();
  }

  return (
    <InstanceDetailView
      title={
        "【アカペラカバー】トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes covered by shio"
      }
      description={instance.description}
      url={"https://www.youtube.com/watch?v=7qyZWwgqGf8"}
    />
  );
}
