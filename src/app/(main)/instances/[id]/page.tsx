import InstanceDetailView from "@/app/(main)/instances/_components/instance-detail-view";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const instance = await prisma.instance.findUnique({
    where: {
      id,
    },
  });
  if (!instance) {
    notFound();
  }
  return (
    <InstanceDetailView
      title={instance.name}
      description={instance.content}
      url={"https://www.youtube.com/watch?v=7qyZWwgqGf8"}
    />
  );
}