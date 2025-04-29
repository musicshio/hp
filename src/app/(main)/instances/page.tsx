import { Instance } from "@/app/generated/prisma-client";
import prisma from "@/lib/prisma";
import InstancesGraphView from "@/app/(main)/instances/_components/instances-graph-view";

export default async function Page() {
  const instances: Instance[] = await prisma.instance.findMany();

  return (
    <>
      <InstancesGraphView
        instances={instances.map((instance) => ({
          id: instance.id,
          title: instance.name,
          content: instance.content,
        }))}
      />
    </>
  );
}
