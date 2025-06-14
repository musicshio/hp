import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Masonry from "@mui/lab/Masonry";
import { fragments } from "@/app/(main)/(with-offset)/fragments/data";

export default async function Page() {
  return (
    <Masonry columns={3} spacing={2}>
      {fragments.map((fragment) => (
        <FragmentCard key={fragment.id} id={fragment.id} content={fragment.description} />
      ))}
    </Masonry>
  );
}

function FragmentCard({ id, content }: { id: number; content: string }) {
  return (
    <Stack
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <Typography variant="h5">{id}</Typography>
      <Typography variant="body2">{content}</Typography>
    </Stack>
  );
}
