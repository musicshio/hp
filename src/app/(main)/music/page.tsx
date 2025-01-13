import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Chip,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { musicData } from "@/app/(main)/music/_data/data";
import { Link } from "next-view-transitions";

export default function Page() {
  const itemData = musicData.map(({ img, id, youtubeId, title, type, year }) => ({
    img,
    id,
    externalUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
    title,
    type: type as "original" | "cover",
    year,
  }));
  return (
    <Stack width={"100%"} spacing={2}>
      <Stack>
        <Typography variant="h1">Music</Typography>
        <Typography variant="subtitle1">オリジナルが少しと、アカペラカバーがあります。</Typography>
      </Stack>
      <Divider />
      <Grid2 container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 4, md: 8 }}>
        {itemData.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </Grid2>
    </Stack>
  );
}

type ItemProps = {
  img: string;
  id: string;
  externalUrl: string;
  title: string;
  type: "original" | "cover";
  year: number;
};

function Item({ img, id, title, externalUrl, type, year }: ItemProps) {
  return (
    <Grid2 size={4}>
      <Card
        variant="outlined"
        component={Box}
        position={"relative"}
        sx={{
          borderRadius: 4,
          viewTransitionName: `music-card-${id}`,
        }}
      >
        <CardActionArea
          component={Link}
          href={`/music/${id}`}
          sx={{
            position: "relative",
          }}
        >
          <CardMedia
            component={Box}
            sx={{
              height: "300px",
              position: "relative",
              "&:hover": {
                "& img": {
                  transition: "all 0.5s",
                  transform: "scale(1.02)",
                },
              },
              viewTransitionName: `music-content-${id}`,
            }}
          >
            <Image src={img} fill alt={title} objectFit="cover" />
          </CardMedia>

          <Stack
            p={1}
            position={"absolute"}
            bottom={0}
            sx={{
              background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
            }}
            width={"100%"}
          >
            <Typography variant={"caption"} color={"gray"}>
              {year}
            </Typography>
            <Typography
              color={"white"}
              sx={{
                viewTransitionName: `music-title-${id}`,
              }}
            >
              {title}
            </Typography>
            <Box>
              <Chip label={type} variant="outlined" />
            </Box>
          </Stack>
        </CardActionArea>
        <Box position={"absolute"} top={0} right={0} p={1}>
          <Link href={externalUrl} passHref legacyBehavior>
            <Button
              component={"a"}
              variant="contained"
              sx={{
                minWidth: 0,
                p: 1,
              }}
              color={"secondary"}
              target={"_blank"}
            >
              <ArrowOutwardIcon />
            </Button>
          </Link>
        </Box>
      </Card>
    </Grid2>
  );
}
