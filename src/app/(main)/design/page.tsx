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
import { Box } from "@mui/system";
import { PiYoutubeLogoFill } from "react-icons/pi";

export default function Page() {
  return (
    <>
      <Typography variant="h1" gutterBottom>
        Design
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <Card>
            <CardHeader title="考える岡山" subheader="2022" />
            <Box bgcolor={"white"}>
              <CardMedia
                height="250"
                component={"img"}
                image={"https://www.nhk.or.jp/okayama/special/kangaeru/images/kangaeru_fv_pc_2.png"}
                alt={"NHK岡山『考える岡山』"}
              />
            </Box>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                番組ロゴ / オープニング動画制作
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
            <CardHeader title="おかやまハレ舞台" subheader="2021" />
            <Link href={"https://www.nhk.or.jp/okayama/lreport/article/000/12/"}>
              <CardMedia
                height="250"
                component={"img"}
                image={
                  "https://www.nhk.jp/p/okayama-mogitate/ts/D939ZJV1QQ/blog/bl/pjRkKA6aW5/bp/pdwaBl1aQo/"
                }
                alt={"NHK岡山『おかやまハレ舞台』"}
              />
            </Link>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                番組ロゴ / オープニング動画制作
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
    </>
  );
}
