import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import InstanceDetailModal from "@/app/(main)/instances/@modal/(.)[id]/_components/instance-detail-modal";

export type NodeModalProps = {
  params: {
    id: string;
  };
};
export default async function NodeModalPage({ params }: NodeModalProps) {
  const { id } = params;
  const instance = await prisma.instance.findUnique({
    where: {
      id,
    },
  });
  if (!instance) {
    notFound();
  }

  return <InstanceDetailModal id={instance.id} title={instance.name} content={instance.content} />;
}
