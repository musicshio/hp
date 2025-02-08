import { Box, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { productData } from "@/app/(main)/_data/data";
import { Link } from "next-view-transitions";

export default function Page() {
  const data = productData;
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography variant="h1">Works</Typography>
      <Typography variant="subtitle1">オリジナルが少しと、アカペラカバーがあります。</Typography>
      <Divider />
      {productData.map(({ id, title }) => {
        return (
          <Box key={id} component={Link} href={`/work/${id}`}>
            {title}
          </Box>
        );
      })}
    </Stack>
  );
}
