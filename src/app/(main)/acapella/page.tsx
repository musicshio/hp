import { Button, Card, CardActionArea, CardMedia, Divider, Grid2, Typography } from "@mui/material";
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
  },
  {
    id: "gogo",
    img: "/images/gogo.jpg",
    externalUrl: "https://youtu.be/uYJMmYAD45w?si=o5Yt1K9h7JzUou0Z",
    title: "ゴーゴー幽霊船 - 米津玄師",
  },
];

export default function Page() {
  return (
    <Stack width={"100%"}>
      <Typography variant="h1">A capella</Typography>
      <Typography variant="subtitle1">多重録音作品をアップしています</Typography>
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
};

function Item({ img, id, title, externalUrl }: ItemProps) {
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
          href={`/acapella/${id}`}
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
              2023
            </Typography>
            <Typography color={"white"}>{title}</Typography>
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
