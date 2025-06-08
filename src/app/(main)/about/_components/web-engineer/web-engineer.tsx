import { Box, Container, Stack, Typography } from "@mui/material";
import { SiGithub, SiZenn } from "react-icons/si";
import { themes } from "prism-react-renderer";
import AnimatedCodeBlock from "./animated-code-block";
import { SocialButton } from "@/app/(main)/about/_components/social-button";
import Offset from "@/app/(main)/about/_components/Offset";

export default function WebEngineer() {
  return (
    <Box width={"100%"} overflow={"hidden"} pt={4}>
      <Offset />
      <Container>
        <Stack direction={"row"} spacing={4} alignItems={"center"} mb={2}>
          <Typography variant={"h4"}>Web Engineer</Typography>
          <Stack direction={"row"} spacing={1}>
            <SocialButton
              name={"GitHub"}
              icon={<SiGithub />}
              href={"https://github.com/musicshio"}
            />
            <SocialButton name={"Zenn"} icon={<SiZenn />} href={"https://zenn.dev/music_shio"} />
          </Stack>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
        >
          <AnimatedCodeBlock
            theme={themes.nightOwl}
            // theme={mode === "dark" ? themes.nightOwl : themes.nightOwlLight}
            code={`Hi, I'm shio.

- **Full-Stack Engineering**: Backend, frontend, and mobile app development.
- **Design**: Web, graphic, and video content.
- **Music Composition and Arrangement**
        `}
            language="markdown"
          />
          <Stack>
            <SkillItem
              title={"Programing language"}
              imgSrc="https://skillicons.dev/icons?i=ts,html,css,graphql,kotlin,dart,rust,py"
            />
            <SkillItem
              title={"Frameworks and Library"}
              imgSrc="https://skillicons.dev/icons?i=nestjs,nodejs,prisma,apollo,nextjs,vercel,react,flutter,jest,yarn"
            />
            <SkillItem
              title={"Platform and DB"}
              imgSrc="https://skillicons.dev/icons?i=aws,gcp,firebase,mysql,postgres,docker,kubernetes,linux,ubuntu"
            />
            <SkillItem
              title={"Dev tools"}
              imgSrc="https://skillicons.dev/icons?i=git,github,githubactions,webstorm,idea,clion,pycharm,androidstudio"
            />
            <SkillItem
              title={"Design"}
              imgSrc="https://skillicons.dev/icons?i=ai,ps,pr,ae,blender,figma"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

type SkillItemProps = {
  title: string;
  imgSrc: string;
};

function SkillItem({ title, imgSrc }: SkillItemProps) {
  return (
    <Box>
      <Typography variant={"h6"}>{title}</Typography>
      <img
        src={imgSrc}
        style={{
          maxWidth: "100%",
        }}
        alt={title}
      />
    </Box>
  );
}
