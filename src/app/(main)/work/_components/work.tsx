import { Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Box, Container } from "@mui/system";

export type WorkProps = {
  title: string;
  tags: string[];
  year: number;
  youtubeId?: string;
};
export default function Work({ year, title, tags, youtubeId }: WorkProps) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          size={{
            xs: 12,
            md: 4,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="subtitle1">{year}</Typography>
            <Typography variant="h3">{title}</Typography>
            <Stack divider={<Divider />} sx={{ color: "text.secondary" }}>
              <Stack direction={"row"}>
                <Typography component={"div"} flexGrow={1} fontWeight={"bold"}>
                  Tools
                </Typography>
                <Typography>Illustrator, After Effects</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid
          size={{
            xs: 12,
            md: 8,
          }}
        >
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
            }}
          >
            <iframe src={`https://www.youtube.com/embed/${youtubeId}`} allowFullScreen />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
