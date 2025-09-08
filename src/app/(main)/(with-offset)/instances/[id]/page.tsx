import InstanceDetailView from "./_components/InstanceDetailView";
import { notFound } from "next/navigation";
import { instances } from "@/app/(main)/(with-offset)/instances/data";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const instance = instances.find((instance) => instance.id === id);
  if (!instance) {
    notFound();
  }
  return <InstanceDetailView instance={instance} />;
}
