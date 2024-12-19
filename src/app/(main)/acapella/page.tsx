import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { Stack } from "@mui/system";

export default function Page() {
  return (
    <Stack>
      <Typography variant="h1" gutterBottom>
        A capella
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        多重録音作品をアップしています
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes"
              subheader="2023"
            />
            <CardMedia
              height="250"
              component={"iframe"}
              src={"https://www.youtube.com/embed/7qyZWwgqGf8?si=BWL9-2xAnlKboFRi"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                covered by shio
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="YouTube"
                target="_blank"
                href={"https://youtu.be/7qyZWwgqGf8?si=kOACD8U1H8ucBX0g"}
              >
                <PiYoutubeLogoFill />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="ゴーゴー幽霊船 - 米津玄師" subheader="2021" />
            <CardMedia
              height="250"
              component={"iframe"}
              src={"https://www.youtube.com/embed/uYJMmYAD45w?si=QEHEu8F7kk8OU5BU"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                covered by mai & shio
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="YouTube"
                target="_blank"
                href={"https://youtu.be/uYJMmYAD45w?si=o5Yt1K9h7JzUou0Z"}
              >
                <PiYoutubeLogoFill />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
