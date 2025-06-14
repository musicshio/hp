import prisma from "../../../../../lib/prisma";
import InstancesGraphView from "../_components/instances-graph-view";
import { Box } from "@mui/material";
import { instances } from "@/app/(main)/(with-offset)/instances/data";

export default async function Page() {
  return (
    <Box zIndex={-1} position={"fixed"} top={0} left={0} width={"100vw"} height={"100vh"}>
      <InstancesGraphView
        instances={instances.map((instance) => ({
          id: instance.id,
          title: instance.title,
        }))}
      />
    </Box>
  );
}
