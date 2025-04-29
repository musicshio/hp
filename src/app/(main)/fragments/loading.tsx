import { Stack } from "@mui/system";
import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <Stack width={"100%"}>
      <Skeleton />
      <Skeleton />
    </Stack>
  );
}
