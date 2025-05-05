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

  return <InstanceDetailView title={instance.name} description={instance.content} />;
}
