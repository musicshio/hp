import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import prisma from "@/lib/prisma";
import Masonry from "@mui/lab/Masonry";
import { Fragment } from "@/app/generated/prisma-client";

export default async function Page() {
  const fragments: Fragment[] = await prisma.fragment.findMany();

  return (
    <Masonry columns={3} spacing={2}>
      {fragments.map((fragment) => (
        <FragmentCard key={fragment.id} fragment={fragment} />
      ))}
    </Masonry>
  );
}

function FragmentCard({ fragment }: { fragment: Fragment }) {
  return (
    <Stack
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Typography variant="h5">{fragment.id}</Typography>
      <Typography variant="body2">{fragment.content}</Typography>
    </Stack>
  );
}
