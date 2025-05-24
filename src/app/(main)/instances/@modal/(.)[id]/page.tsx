import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import InstanceDetailView from "@/app/(main)/instances/_components/instance-detail-view";

type NodeModalProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function NodeModalPage({ params }: NodeModalProps) {
  const { id } = await params;
  const instance = await prisma.instance.findUnique({
    where: {
      id,
    },
  });
  if (!instance) {
    notFound();
  }

  const i = {
    id: "hoge",
    name: "【アカペラカバー】トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes covered by shio",
    url: "https://www.youtube.com/watch?v=7qyZWwgqGf8",
  };

  return (
    <InstanceDetailView
      title={
        "【アカペラカバー】トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes covered by shio"
      }
      description={instance.content}
      url={"https://www.youtube.com/watch?v=7qyZWwgqGf8"}
    />
  );
}
