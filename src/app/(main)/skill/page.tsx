import { Button, Card, CardContent, Divider, Typography } from "@mui/material";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFigma, SiFlutter, SiGithub, SiTypescript, SiZenn } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { Box, Stack } from "@mui/system";
import { ReactNode } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

enum TechStackExperience {
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}

const techStackItems: TechStackItem[] = [
  {
    id: "react",
    name: "React",
    icon: <FaReact />,
    description: "",
    experience: TechStackExperience.Intermediate,
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: <TbBrandNextjs />,
    description: "",
    experience: TechStackExperience.Intermediate,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    description: "",
    experience: TechStackExperience.Advanced,
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: <IoLogoFirebase />,
    description: "",
    experience: TechStackExperience.Advanced,
  },
  {
    id: "flutter",
    name: "Flutter",
    icon: <SiFlutter />,
    description: "",
    experience: TechStackExperience.Intermediate,
  },
  {
    id: "figma",
    name: "Figma",
    icon: <SiFigma />,
    description: "",
    experience: TechStackExperience.Advanced,
  },
];

export default function Page() {
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography variant="h1">Skills</Typography>
      <Divider />
      <Typography variant="h5">Socials</Typography>
      <Stack direction={"row"} spacing={2}>
        <SocialButton name={"GitHub"} icon={<SiGithub />} href={"https://github.com/musicshio"} />
        <SocialButton name={"Zenn"} icon={<SiZenn />} href={"https://zenn.dev/music_shio"} />
      </Stack>
      {/*<Typography variant="h5">Tech Stack</Typography>*/}

      {/*<Stack direction={"row"} spacing={1}>*/}
      {/*  {techStackItems.map((item) => (*/}
      {/*    <TechStackCta key={item.id} item={item} />*/}
      {/*  ))}*/}
      {/*</Stack>*/}
    </Stack>
  );
}

type SocialButtonProps = {
  name: string;
  icon: ReactNode;
  href: string;
};

function SocialButton({ name, icon, href }: SocialButtonProps) {
  return (
    <Button
      variant={"outlined"}
      color={"secondary"}
      size={"large"}
      startIcon={icon}
      endIcon={<ArrowOutwardIcon />}
      href={href}
      target={"_blank"}
      sx={{
        textTransform: "none",
      }}
    >
      {name}
    </Button>
  );
}

interface TechStackItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  experience: TechStackExperience;
}

interface TechStackCardProps {
  item: TechStackItem;
}

const TechStackCta = ({ item: { name, icon } }: TechStackCardProps) => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ display: "flex" }}>
        <Box justifyContent={"center"}>{icon}</Box>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};
