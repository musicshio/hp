"use client";
import { Box, Container } from "@mui/material";
import { Stack } from "@mui/system";
import Heading from "@/app/(main)/_components/heading";
import InstancesView from "@/app/(main)/(with-offset)/instances/_components/InstancesView";
import { instances } from "@/app/(main)/(with-offset)/instances/data";

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxWidth={"lg"}>
      <Stack alignItems={"center"}>
        <Heading text={"Instances"} />
        <Box zIndex={-1} position={"fixed"} top={0} left={0} width={"100vw"} height={"100vh"}>
          <InstancesView
            instances={instances.map((instance) => ({
              id: instance.id,
              title: instance.title,
            }))}
          />
        </Box>
        {children}
      </Stack>
    </Container>
  );
}
