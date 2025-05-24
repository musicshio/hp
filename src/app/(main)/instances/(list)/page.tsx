import prisma from "@/lib/prisma";
import InstancesGraphView from "@/app/(main)/instances/_components/instances-graph-view";
import { Box } from "@mui/material";

export default async function Page() {
  const instances: { id: string; name: string }[] = await prisma.instance.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  return (
    <Box zIndex={-1} position={"fixed"} top={0} left={0} width={"100vw"} height={"100vh"}>
      <InstancesGraphView
        instances={instances.map((instance) => ({
          id: instance.id,
          title: instance.name,
        }))}
      />
    </Box>
  );
}
