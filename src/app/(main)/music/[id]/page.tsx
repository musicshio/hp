import { Button, Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { productData } from "@/app/(main)/_data/data";
import { Link } from "next-view-transitions";
import { ArrowBack } from "@mui/icons-material";

type PageProps = {
  params: {
    id: string;
  };
};
export default function Page({ params: { id } }: PageProps) {
  const itemData = productData.find((item) => item.id === id);

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
              href={`/music`}
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
          <Typography variant="h1">Music</Typography>
        </Stack>

        <Typography
          variant="subtitle1"
          sx={{
            viewTransitionName: `music-title-${id}`,
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
          "& iframe": {
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 4,
          },
          viewTransitionName: `music-content-${id}`,
        }}
      >
        <iframe src={`https://www.youtube.com/embed/${itemData.youtubeId}`} allowFullScreen />
      </Box>
    </Stack>
  );
}
