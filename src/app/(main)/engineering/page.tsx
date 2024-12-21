import { Card, CardActions, CardContent, CardHeader, Chip, Grid, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFigma, SiFlutter, SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { Box, Stack } from "@mui/system";

enum TechStackTag {
  Frontend = "Frontend",
  Backend = "Backend",
  Database = "Database",
  Mobile = "Mobile",
  DevOps = "DevOps",
  Design = "Design",
}

enum TechStackExperience {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

const techStackItems: TechStackItem[] = [
  {
    id: "react",
    name: "React",
    tags: [TechStackTag.Frontend],
    icon: <FaReact />,
    description: "",
    experience: TechStackExperience.Intermediate,
  },
  {
    id: "nextjs",
    name: "Next.js",
    tags: [TechStackTag.Frontend],
    icon: <TbBrandNextjs />,
    description: "",
    experience: TechStackExperience.Intermediate,
  },
  {
    id: "typescript",
    name: "TypeScript",
    tags: [TechStackTag.Frontend, TechStackTag.Backend],
    icon: <SiTypescript />,
    description: "",
    experience: TechStackExperience.Advanced,
  },
  {
    id: "firebase",
    name: "Firebase",
    tags: [TechStackTag.Backend, TechStackTag.Database, TechStackTag.DevOps],
    icon: <IoLogoFirebase />,
    description: "",
    experience: TechStackExperience.Advanced,
  },
  {
    id: "flutter",
    name: "Flutter",
    tags: [TechStackTag.Mobile],
    icon: <SiFlutter />,
    description: "",
    experience: TechStackExperience.Intermediate,
  },
  {
    id: "figma",
    name: "Figma",
    tags: [TechStackTag.Design],
    icon: <SiFigma />,
    description: "",
    experience: TechStackExperience.Advanced,
  },
];

export default function Page() {
  return (
    <Stack>
      <Typography variant="h1" gutterBottom>
        Engineering
      </Typography>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {techStackItems.map((item) => (
          <TechStackCard key={item.name} item={item} />
        ))}
      </Grid>
    </Stack>
  );
}

interface TechStackItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  tags: TechStackTag[];
  description: string;
  experience: TechStackExperience;
}

interface TechStackCardProps {
  item: TechStackItem;
}

const TechStackCard = ({ item }: TechStackCardProps) => {
  return (
    <Grid item xs={2}>
      <Card>
        <CardHeader
          title={item.name}
          subheader={item.tags.map((tag) => (
            <Chip label={tag} key={tag} size="small" variant="outlined" />
          ))}
        />
        <CardContent>
          <Box alignItems={"center"} sx={{ fontSize: 40 }} textAlign={"center"}>
            {item.icon}
          </Box>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {item.experience}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};
