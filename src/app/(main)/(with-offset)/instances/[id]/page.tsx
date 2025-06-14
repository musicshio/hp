import InstanceDetailView from "../_components/instance-detail-view";
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
  return (
    <InstanceDetailView
      title={instance.title}
      description={instance.description}
      url={"https://www.youtube.com/watch?v=7qyZWwgqGf8"}
    />
  );
}
