import InstanceDetailView from "@/app/(main)/instances/_components/instance-detail-view";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    id: string;
  };
};
export default async function Page({ params: { id } }: PageProps) {
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
