import { Box, Skeleton, Typography } from "@mui/material";

export type InstanceDetailViewProps = {
  title?: string;
  description?: string;
  url?: string;
};

export default function InstanceDetailView({ title, description }: InstanceDetailViewProps) {
  return (
    <Box>
      <Typography variant={"h4"}>{title ?? <Skeleton />}</Typography>
      <Typography variant={"body1"}>{description ?? <Skeleton />}</Typography>
    </Box>
  );
}
