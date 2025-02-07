import { Button, Card, CardActionArea, CardMedia, Chip, Grid2, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "next-view-transitions";
import { Product, productData, ProductType } from "@/app/(main)/_data/data";
import { ExternalProductModel } from "@/feature/product/domain/external-product.model";
import { ProductTagModel } from "@/feature/product/domain/product-tag.model";

export default function Page() {
  const itemData = productData
    .filter((item) => item.type === ProductType.EXTERNAL)
    .map(externalProductModelEntityToModel);

  return (
    <Stack width={"100%"}>
      <Typography variant="h1">Design</Typography>
      <Grid2 container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 4, md: 8 }}>
        {itemData.map((item) => (
          <Item
            key={item.title}
            img={item.thumbnailUrl}
            id={item.id}
            externalUrl={item.externalUrl}
            title={item.title}
            year={item.year}
            tags={item.tags.map((tag) => tag.label)}
          />
        ))}
      </Grid2>
    </Stack>
  );
}

function externalProductModelEntityToModel(entity: Product): ExternalProductModel {
  if (entity.type !== ProductType.EXTERNAL) {
    throw new Error("Invalid product type");
  }
  if (!entity.externalUrl) {
    throw new Error("Invalid external URL");
  }
  return ExternalProductModel.reconstruct({
    id: entity.id,
    thumbnailUrl: entity.img,
    title: entity.title,
    year: entity.year,
    externalUrl: entity.externalUrl,
    tags: entity.tags.map((tag) => ProductTagModel.reconstruct({ label: tag })),
  });
}

type ItemProps = {
  img: string;
  id: string;
  externalUrl: string;
  title: string;
  year: number;
  tags: string[];
};

function Item({ img, id, title, externalUrl, year, tags }: ItemProps) {
  return (
    <Grid2 size={4}>
      <Card
        variant="outlined"
        component={Box}
        position={"relative"}
        sx={{
          borderRadius: 4,
          viewTransitionName: `design-card-${id}`,
        }}
      >
        <CardActionArea
          component={Link}
          href={`/design/${id}`}
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
              viewTransitionName: `design-content-${id}`,
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
                viewTransitionName: `design-title-${id}`,
              }}
            >
              {title}
            </Typography>
            <Stack direction={"row"}>
              {tags.map((tag) => (
                <Chip label={tag} key={tag} variant="outlined" />
              ))}
            </Stack>
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
