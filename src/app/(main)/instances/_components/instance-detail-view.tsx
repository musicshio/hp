import { Box, Skeleton, Typography } from "@mui/material";

export type InstanceDetailViewProps = {
  title?: string;
  description?: string;
};

export default function InstanceDetailView({ title, description }: InstanceDetailViewProps) {
  return (
    <Box>
      <Typography variant={"h3"}>{title ?? <Skeleton />}</Typography>
      <Typography variant={"body1"}>{description ?? <Skeleton />}</Typography>
    </Box>
  );
}
