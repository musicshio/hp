import { Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { Link } from "next-view-transitions";
import { ArrowBack } from "@mui/icons-material";
import { designData } from "@/app/(main)/design/_data/data";
import Image from "next/image";

type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params: { id } }: PageProps) {
  const itemData = designData.find((item) => item.id === id);

  if (!itemData) {
    return <>not found</>;
  }

  return (
    <Stack width={"100%"} spacing={2}>
      <Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box>
            <Button
              component={Link}
              href={`/design`}
              variant="outlined"
              color={"secondary"}
              sx={{
                minWidth: 0,
                p: 1,
              }}
            >
              <ArrowBack />
            </Button>
          </Box>
          <Typography variant="h1">Design</Typography>
        </Stack>

        <Typography
          variant="subtitle1"
          sx={{
            viewTransitionName: `design-title-${id}`,
          }}
        >
          {itemData.title}
        </Typography>
      </Stack>
      <Divider />
      <Box
        sx={{
          maxWidth: "800px",
          aspectRatio: "16 / 9",
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Image fill src={itemData.img} alt={itemData.title} />
      </Box>
    </Stack>
  );
}
