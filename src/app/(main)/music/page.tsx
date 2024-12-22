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
import Link from "next/link";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const itemData: ItemProps[] = [
  {
    id: "tokyo-shandy-randevouz",
    img: "/images/tokyo-shandy-randevouz.png",
    externalUrl: "https://youtu.be/7qyZWwgqGf8?si=kOACD8U1H8ucBX0g",
    title: "トウキョウ・シャンディ・ランデヴ feat. 花譜, ツミキ - MAISONdes",
    type: "cover",
    year: 2023,
  },
  {
    id: "gogo",
    img: "/images/gogo.jpg",
    externalUrl: "https://youtu.be/uYJMmYAD45w?si=o5Yt1K9h7JzUou0Z",
    title: "ゴーゴー幽霊船 - 米津玄師",
    type: "cover",
    year: 2021,
  },
  {
    id: "human",
    img: "/images/human.jpg",
    externalUrl: "https://youtu.be/jE6Blb8wf5U?si=wlhpeUzNm48U2Gob",
    title: "ヒトと人間",
    type: "original",
    year: 2023,
  },
];

export default function Page() {
  return (
    <Stack width={"100%"}>
      <Typography variant="h1">Music</Typography>
      <Typography variant="subtitle1"></Typography>
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
            <Typography color={"white"}>{title}</Typography>
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
