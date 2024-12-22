import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { FiExternalLink } from "react-icons/fi";
import { PiSoundcloudLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { Stack } from "@mui/system";

export default function Page() {
  return (
    <Stack>
      <Typography variant="h1" gutterBottom>
        Music - Composition
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="ヒトと人間" subheader="2023" />
            <CardMedia
              height="250"
              component={"iframe"}
              src={"https://www.youtube.com/embed/jE6Blb8wf5U?si=wlhpeUzNm48U2Gob"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <Link href={"https://noas-sandbox.tumblr.com/"} target="_blank">
                  Hical Records 『ノアの箱庭 -Before The End SandboX』
                  <FiExternalLink />
                </Link>
                より
                <br />
                2023 秋M3 H-14b
                <br />
                <br />
                作詞：桜井ひかる
                <br />
                作編曲：shio
                <br />
                ボーカル：shio
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="YouTube"
                target="_blank"
                href={"https://youtu.be/jE6Blb8wf5U?si=ynbH0TSUu8L-FLa1"}
              >
                <PiYoutubeLogoFill />
              </IconButton>
              <IconButton
                aria-label="SoundCloud"
                target="_blank"
                href={"https://soundcloud.com/music_shio/human"}
              >
                <PiSoundcloudLogoFill />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="ヒトと人間" subheader="2023" />
            <CardMedia
              height="250"
              component={"iframe"}
              src={"https://www.youtube.com/embed/jE6Blb8wf5U?si=wlhpeUzNm48U2Gob"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <Link href={"https://noas-sandbox.tumblr.com/"} target="_blank">
                  Hical Records 『ノアの箱庭 -Before The End SandboX』
                  <FiExternalLink />
                </Link>
                より
                <br />
                2023 秋M3 H-14b
                <br />
                <br />
                作詞：桜井ひかる
                <br />
                作編曲：shio
                <br />
                ボーカル：shio
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton
                aria-label="YouTube"
                target="_blank"
                href={"https://youtu.be/jE6Blb8wf5U?si=ynbH0TSUu8L-FLa1"}
              >
                <PiYoutubeLogoFill />
              </IconButton>
              <IconButton
                aria-label="SoundCloud"
                target="_blank"
                href={"https://soundcloud.com/music_shio/human"}
              >
                <PiSoundcloudLogoFill />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
}
